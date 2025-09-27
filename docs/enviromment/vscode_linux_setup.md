# 🐧 Setting Up VS Code for Python Development on Linux

VS Code is a powerful, lightweight IDE that's perfect for Python development on Linux. Here's a complete setup guide.

---

## 🔧 1. Install VS Code on Linux

### **Method 1: Snap (Recommended for Beginners)**
```bash
sudo snap install code --classic
```

### **Method 2: Official Microsoft Repository**
**Ubuntu/Debian:**
```bash
# Install dependencies
sudo apt update
sudo apt install wget gpg

# Add Microsoft GPG key and repository
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'

# Install VS Code
sudo apt update
sudo apt install code
```

**Fedora/RHEL:**
```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo dnf check-update
sudo dnf install code
```

**Arch Linux/Manjaro:**
```bash
sudo pacman -Syu code
```

### **Method 3: Flatpak**
```bash
flatpak install flathub com.visualstudio.code
```

---

## 📦 2. Install Essential Python Extensions

Open VS Code and install these extensions (`Ctrl+Shift+X`):

**Core Python Extensions:**
- **Python** (ms-python.python) - Main Python support
- **Pylance** (ms-python.vscode-pylance) - Smart IntelliSense
- **Jupyter** (ms-toolsai.jupyter) - Notebook support

**Productivity Extensions:**
- **Python Docstring Generator** - Auto docstrings
- **Auto Rename Tag** - HTML/XML tag pairing
- **Bracket Pair Colorizer** - Color-coded brackets

---

## 🐍 3. Install Python on Linux

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

**Fedora/RHEL:**
```bash
sudo dnf install python3 python3-pip
```

**Arch Linux:**
```bash
sudo pacman -Syu python python-pip
```

**Verify Installation:**
```bash
python3 --version
pip3 --version
```

---

## ⚙️ 4. Configure Python Environment

### **Create a Virtual Environment**
```bash
# Navigate to your project
cd ~/projects/my-python-app

# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate
```

### **Select Python Interpreter in VS Code**
1. Press `Ctrl+Shift+P`
2. Type: `Python: Select Interpreter`
3. Choose: `./venv/bin/python3`

---

## 🔥 5. Essential VS Code Settings for Linux

Create or edit `~/.config/Code/User/settings.json`:

```json
{
  "python.defaultInterpreterPath": "./venv/bin/python3",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "files.autoSave": "afterDelay",
  "terminal.integrated.shell.linux": "/bin/bash"
}
```

---

## 🚀 6. Create Your First Python Project

### **Project Structure**
```
my-project/
├── venv/
├── .vscode/
│   └── settings.json
├── src/
│   └── main.py
├── requirements.txt
└── README.md
```

### **Sample Python File** (`src/main.py`)
```python
def main():
    print("Hello from VS Code on Linux!")
    
    # Example with type hints
    numbers: list[int] = [1, 2, 3, 4, 5]
    total: int = sum(numbers)
    
    print(f"Sum of numbers: {total}")

if __name__ == "__main__":
    main()
```

### **Run Your Code**
- **Method 1**: Right-click → "Run Python File in Terminal"
- **Method 2**: Press `F5` to debug
- **Method 3**: Open terminal (`Ctrl+``) and run:
  ```bash
  source venv/bin/activate
  python src/main.py
  ```

---

## 🐛 7. Debugging Setup

### **Basic Debug Configuration**
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "justMyCode": true
    }
  ]
}
```

### **Debugging Features**
- Set breakpoints by clicking left gutter
- Use debug toolbar to step through code
- Watch variables in real-time
- Debug console for interactive debugging

---

## ⚡ 8. Terminal Integration

### **VS Code Integrated Terminal**
- Open with `` Ctrl+` ``
- Supports multiple terminals (`Ctrl+Shift+``)
- Integrated with your virtual environment

### **Common Terminal Commands**
```bash
# Activate virtual environment
source venv/bin/activate

# Install packages
pip install requests pandas numpy

# Generate requirements
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

---

## 🛠️ 9. Linux-Specific Tips

### **Keyboard Shortcuts**
```bash
Ctrl+`          # Toggle terminal
Ctrl+Shift+P    # Command palette
Ctrl+Shift+E    # Explorer
F5              # Start debugging
Ctrl+F5         # Run without debugging
```

### **File Permissions**
If you have permission issues:
```bash
# Make Python files executable
chmod +x script.py

# Fix VS Code installation issues
sudo chown -R $(whoami) ~/.config/Code
```

### **Update VS Code**
**Snap:**
```bash
sudo snap refresh code
```

**APT:**
```bash
sudo apt update && sudo apt upgrade code
```

---

## 🧪 10. Testing Your Setup

Create a test file `test_setup.py`:
```python
import sys
import pip

print(f"Python version: {sys.version}")
print(f"Python executable: {sys.executable}")
print(f"Virtual environment: {hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)}")

# Test imports
try:
    import requests
    print("✓ requests installed")
except ImportError:
    print("✗ requests not installed")
```

---

## 🔍 Troubleshooting Common Linux Issues

**VS Code won't start:**
```bash
# Reset settings
code --disable-extensions
```

**Python interpreter not found:**
```bash
# Find Python path
which python3
```

**Permission denied errors:**
```bash
# Fix virtual environment permissions
chmod -R 755 venv
```

---

✅ **You're all set!** VS Code is now perfectly configured for Python development on your Linux system with debugging, virtual environments, and all essential tools.
