#!/bin/bash

# ==============================================================
#  Professional Python Development Environment Setup Script
#  Cross-platform (Linux/macOS) with safe defaults and idempotency
# ==============================================================

set -euo pipefail
trap "echo -e '\n[ERROR] Script interrupted'; exit 1" INT

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Logging
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Detect platform
detect_platform() {
  case "$(uname -s)" in
  Darwin*) echo "macOS" ;;
  Linux*) echo "Linux" ;;
  *) echo "UNKNOWN" ;;
  esac
}
PLATFORM=$(detect_platform)

# Pretty banner
echo -e "${GREEN}"
cat <<"EOF"
╔══════════════════════════════════════════════════════════════╗
║             Python Development Environment Setup             ║
║                  Professional Configuration                  ║
╚══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"
log_info "Detected platform: $PLATFORM"

# Update package manager
update_package_manager() {
  log_info "Updating package manager..."
  case "$PLATFORM" in
  Linux)
    if command -v apt >/dev/null; then
      sudo apt update -y
      [[ -z "${CI:-}" ]] && sudo apt upgrade -y
    elif command -v dnf >/dev/null; then
      [[ -z "${CI:-}" ]] && sudo dnf upgrade -y
    elif command -v yum >/dev/null; then
      [[ -z "${CI:-}" ]] && sudo yum update -y
    elif command -v zypper >/dev/null; then
      sudo zypper refresh
      [[ -z "${CI:-}" ]] && sudo zypper update -y
    elif command -v pacman >/dev/null; then
      sudo pacman -Sy --noconfirm
      [[ -z "${CI:-}" ]] && sudo pacman -Syu --noconfirm
    elif command -v apk >/dev/null; then
      sudo apk update
      [[ -z "${CI:-}" ]] && sudo apk upgrade
    fi
    ;;
  macOS)
    if command -v brew >/dev/null; then
      brew update
      [[ -z "${CI:-}" ]] && brew upgrade
    else
      log_warning "Homebrew not found. Install from https://brew.sh"
    fi
    ;;
  esac
}

# Install dependencies
install_system_dependencies() {
  log_info "Installing system dependencies..."
  case "$PLATFORM" in
  Linux)
    if command -v apt >/dev/null; then
      sudo apt install -y \
        make build-essential libssl-dev zlib1g-dev \
        libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
        libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev \
        libffi-dev liblzma-dev git
    elif command -v dnf >/dev/null; then
      sudo dnf install -y gcc zlib-devel bzip2 bzip2-devel \
        readline-devel sqlite sqlite-devel openssl-devel \
        tk-devel libffi-devel xz-devel git
    elif command -v yum >/dev/null; then
      sudo yum groupinstall -y "Development Tools"
      sudo yum install -y gcc zlib-devel bzip2 bzip2-devel \
        readline-devel sqlite sqlite-devel openssl-devel \
        tk-devel libffi-devel xz-devel git
    elif command -v zypper >/dev/null; then
      sudo zypper install -y gcc make zlib-devel bzip2 libbz2-devel \
        readline-devel sqlite3 sqlite3-devel libopenssl-devel \
        tk-devel libffi-devel xz xz-devel git
    elif command -v pacman >/dev/null; then
      sudo pacman -S --needed --noconfirm \
        base-devel zlib bzip2 readline sqlite openssl tk xz git
    elif command -v apk >/dev/null; then
      sudo apk add --no-cache \
        build-base zlib-dev bzip2-dev readline-dev sqlite-dev \
        openssl-dev tk-dev libffi-dev xz-dev git
    fi
    ;;
  macOS)
    if command -v brew >/dev/null; then
      brew install openssl readline sqlite3 xz zlib tcl-tk git
    fi
    ;;
  esac
}

# Install pyenv safely
install_pyenv() {
  if command -v pyenv >/dev/null; then
    log_success "pyenv already installed"
    return
  fi
  log_info "Installing pyenv..."
  git clone https://github.com/pyenv/pyenv.git "$HOME/.pyenv"

  # Detect shell rc file
  if [ -n "${ZSH_VERSION:-}" ]; then
    shell_rc="$HOME/.zshrc"
  elif [ -n "${BASH_VERSION:-}" ]; then
    shell_rc="$HOME/.bashrc"
  elif command -v fish >/dev/null; then
    shell_rc="$HOME/.config/fish/config.fish"
  else shell_rc="$HOME/.profile"; fi

  if ! grep -q 'pyenv' "$shell_rc"; then
    if [[ "$shell_rc" == *fish* ]]; then
      mkdir -p "$(dirname "$shell_rc")"
      cat <<'EOF' >>"$shell_rc"

# Pyenv configuration (fish)
set -Ux PYENV_ROOT $HOME/.pyenv
fish_add_path $PYENV_ROOT/bin
status is-interactive; and source (pyenv init -|psub)
EOF
    else
      cat <<'EOF' >>"$shell_rc"

# Pyenv configuration
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
EOF
    fi
  fi
  log_success "pyenv installed and configured for $shell_rc"
}

# Install latest stable Python
install_python_version() {
  export PYENV_ROOT="$HOME/.pyenv"
  export PATH="$PYENV_ROOT/bin:$PATH"
  eval "$(pyenv init -)"

  LATEST=$(pyenv install --list | grep -E '^\s*3\.[0-9]+\.[0-9]+$' | grep -vE 'dev|a|b|rc' | tail -1 | tr -d ' ')
  log_info "Installing Python $LATEST..."
  pyenv install -s "$LATEST"
  pyenv global "$LATEST"
  log_success "Python $LATEST set as global default"
}

# Install pipx + tools
install_python_tools() {
  log_info "Installing Python tools with pipx..."
  python -m pip install --upgrade pip setuptools wheel
  if ! command -v pipx >/dev/null; then
    python -m pip install --user pipx
    python -m pipx ensurepath
    export PATH="$HOME/.local/bin:$PATH"
  fi

  local tools=(
    black flake8 mypy isort pipenv poetry pre-commit
    jupyter ipython virtualenv pip-tools bandit safety pip-audit
  )
  for tool in "${tools[@]}"; do
    pipx install "$tool" >/dev/null 2>&1 || pipx upgrade "$tool" || true
  done
  log_success "Python tools installed"
}

# Create dev structure
create_dev_structure() {
  log_info "Creating dev directory at ~/development/python..."
  mkdir -p "$HOME/development/python"/{projects,learning,tools,scripts}
  log_success "Dev structure ready"
}

# Add aliases
create_shell_aliases() {
  if [ -n "${ZSH_VERSION:-}" ]; then
    shell_rc="$HOME/.zshrc"
  elif [ -n "${BASH_VERSION:-}" ]; then
    shell_rc="$HOME/.bashrc"
  elif command -v fish >/dev/null; then
    shell_rc="$HOME/.config/fish/config.fish"
  else shell_rc="$HOME/.profile"; fi

  if ! grep -q "py-clean" "$shell_rc"; then
    if [[ "$shell_rc" == *fish* ]]; then
      cat <<'EOF' >>"$shell_rc"

# Python Dev Aliases (fish)
alias py-clean='find . -type f -name "*.pyc" -delete; and find . -type d -name "__pycache__" -delete'
alias py-format='black .; and isort .'
alias py-lint='flake8 .'
alias py-typecheck='mypy .'
EOF
    else
      cat <<'EOF' >>"$shell_rc"

# Python Dev Aliases
alias py-clean='find . -type f -name "*.pyc" -delete && find . -type d -name "__pycache__" -delete'
alias py-format='black . && isort .'
alias py-lint='flake8 .'
alias py-typecheck='mypy .'
EOF
    fi
  fi
  log_success "Aliases added to $shell_rc"
}

# Test setup
test_setup() {
  log_info "Testing setup..."
  python --version
  pip --version
  black --version || true
  log_success "Environment test completed"
}

# Main
main() {
  update_package_manager
  install_system_dependencies
  install_pyenv
  install_python_version
  install_python_tools
  create_dev_structure
  create_shell_aliases
  test_setup
  log_success "🎉 Python development environment ready!"
  echo -e "\nNext steps:\n  1. Restart your shell\n  2. Create a project: pynew myapp\n  3. Start coding 🚀"
}

# Run with confirmation
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  if [[ -n "${CI:-}" ]]; then
    main
  else
    echo -e "${YELLOW}This will install Python dev tools and configure your system.${NC}"
    read -rp "Continue? (y/N): " reply
    [[ $reply =~ ^[Yy]$ ]] && main || log_info "Setup cancelled."
  fi
fi
