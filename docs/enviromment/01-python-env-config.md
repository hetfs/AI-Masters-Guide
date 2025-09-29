---
id: 01-python-env-config
title: 🐍 Python Dev Setup
sidebar_position: 4
---

# 🐍 Python Development Environment

A solid Python environment is the foundation for writing, testing, and maintaining code effectively. It combines tools, configurations, and workflows that ensure consistency, productivity, and smooth collaboration.

---

## 🎯 Why Environment Setup Matters

A properly configured environment gives you:

* **🛡️ Project Isolation** → No dependency conflicts between projects  
* **🔁 Reproducibility** → Same behavior across machines and deployments  
* **⚡ Productivity** → Tools catch errors early and automate routine tasks  
* **👥 Collaboration** → Standardized workflows across your team  

---

## 🏗️ Core Components

### Python Interpreter 🖥️

The Python interpreter executes your code. Different implementations exist for different needs:

| Implementation | Description | Best For |
| -------------- | ----------- | -------- |
| **[CPython](https://github.com/python/cpython)** | Official reference in C | General purpose, most common |
| **[PyPy](https://www.pypy.org/)** | JIT-compiled | Performance-critical apps |
| **[Jython](https://www.jython.org/)** | Runs on JVM | Java integration |
| **[IronPython](https://ironpython.net/)** | Runs on .NET | .NET ecosystem |
| **[MicroPython](https://micropython.org/)** | Lightweight subset | IoT & microcontrollers |

**Features:**
* Interactive REPL for quick experiments
* Script mode to run `.py` files
* Automatic `.pyc` bytecode compilation
* Dynamic typing + garbage collection
* Rich [standard library](https://docs.python.org/3/library/)

**Installation Sources:**
* [python.org](https://www.python.org/downloads/) (recommended)
* Windows: `winget install python`
* macOS: `brew install python` via [Homebrew](https://brew.sh/)
* Linux: Package manager (`apt`, `yum`, `pacman`, etc.)

**Version Management with pyenv:**
```bash
curl https://pyenv.run | bash   # Install pyenv
pyenv install 3.11.5            # Install version
pyenv global 3.11.5             # Default
pyenv local 3.10.12             # Project-specific
````

**Verify Setup:**

```bash
python --version
python3 --version
python -c "import sys; print(sys.version)"
```

> 💡 **Tip**: Start with **CPython** from python.org for best compatibility. Explore PyPy for speed or MicroPython for embedded systems.

---

## 📦 Package Management

* **pip** → [Standard installer](https://pip.pypa.io/en/stable/)
* **pipx** → [Isolated apps](https://pipx.pypa.io/stable/)
* **conda** → [Popular in data science](https://docs.conda.io/en/latest/)

---

## 🌱 Virtual Environments

Create isolated environments per project:

```bash
# Create
python -m venv venv

# Activate (Linux/macOS)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# Deactivate
deactivate
```

📖 [Virtual Environments Guide](https://docs.python.org/3/tutorial/venv.html)

---

## 🛠️ Editors & IDEs

* **[VS Code](https://code.visualstudio.com/docs/languages/python)** → Lightweight & extensible
* **[PyCharm](https://www.jetbrains.com/pycharm/)** → Full-featured IDE
* **[JupyterLab](https://jupyter.org/)** → Interactive data science workflows

---

## 🧹 Code Quality Tools

* **Formatting**: [Black](https://black.readthedocs.io/), [autopep8](https://pypi.org/project/autopep8/)
* **Linting**: [Flake8](https://flake8.pycqa.org/), [Pylint](https://pylint.pycqa.org/)
* **Type Checking**: [mypy](http://mypy-lang.org/)

---

## 🐳 Optional: Containerized Environments

* **[Docker](https://www.docker.com/resources/what-container/)** → Portable & consistent apps
* **[Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)** → Reproducible VS Code setups

---

## 🔄 Standard Workflow

1. Install Python from [python.org](https://www.python.org/downloads/)
2. Create virtual environment (`python -m venv venv`)
3. Activate environment
4. Install dependencies (`pip install -r requirements.txt`)
5. Configure editor (VS Code / PyCharm)
6. Develop & test code
7. Use GitHub/GitLab for version control

---

## ⚙️ Configuring Your Shell

Add to `.bashrc` or `.zshrc`:

```bash
export PATH="$HOME/.local/bin:$PATH"
export PYTHONPATH="/path/to/custom/modules"
export PYTHONSTARTUP="$HOME/.pythonrc"
```

---

## 🐞 Troubleshooting

**Command not found:**

```bash
python3 --version
alias python=python3
```

**Permission errors:**

```bash
python -m pip install --user package_name
```

**Multiple versions:**

```bash
python3.12 --version
python3.11 --version
```

---

## ✅ Best Practices

### Interpreter

* Use latest stable release
* Prefer official python.org builds
* Test against multiple versions if needed

### Dependencies

* Track with `requirements.txt` or `pyproject.toml`
* Pin versions for consistency
* Separate dev vs prod dependencies

### Isolation

* One venv per project
* Never rely on system Python
* Use env variables for secrets/config

### Code Quality

* Automate with pre-commit + CI/CD
* Enable format-on-save in editor
* Add linters/type checkers early

### Collaboration

* Share config (`.vscode/`, `.idea/`)
* Document setup in `README.md`
* Standardize on tools as a team

---

## 🚀 Quick Start Template

```bash
# 1. Create project folder
mkdir my-project && cd my-project

# 2. Virtual environment
python -m venv venv
source venv/bin/activate  # Linux/macOS
# venv\Scripts\activate   # Windows

# 3. Install dev tools
pip install --upgrade pip
pip install black flake8 mypy

# 4. Git setup
git init
echo "venv/" > .gitignore

# 5. Project files
touch README.md requirements.txt main.py

# 6. Test
python -c "print('Setup successful!')"
```

---

> 🎯 **Success Tip**: Don’t overload with tools at the start. Begin with **CPython + venv + pip**, then add quality tools (Black, Flake8, mypy) as your project grows.

👉 [Download Python](https://www.python.org/downloads/) and start coding today!
