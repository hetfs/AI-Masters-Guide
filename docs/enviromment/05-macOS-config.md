---
id: 05-macOS-config
title: 🍏 Setup python on macOS
sidebar_position: 8
---

#  Python Development on macOS

This guide helps you set up **Python** and **Visual Studio Code (VS Code)** for development on macOS, including virtual environments, extensions, and debugging.

---

## 🔧 1. Install Python on macOS

### 1. Install Homebrew (if not installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install Python

```bash
brew install python
```

Verify:

```bash
python3 --version
pip3 --version
```

👉 Alternative options:

* [Official Installer](https://www.python.org/downloads/macos) (`.pkg`)
* `pyenv` (for multiple Python versions, advanced users)

---

## 📦 2. Set Up a Virtual Environment

From your project folder:

```bash
python3 -m venv venv
```

Activate it:

```bash
source venv/bin/activate
```

Deactivate:

```bash
deactivate
```

---

## 📚 3. Install Dependencies

```bash
# Install from requirements.txt
pip install -r requirements.txt

# Or manually
pip install numpy pandas matplotlib scikit-learn
```

Keep things updated:

```bash
pip install --upgrade pip setuptools wheel
pip list --outdated
```

---

## 💻 4. Install VS Code on macOS

### Option 1: Homebrew (recommended)

```bash
brew install --cask visual-studio-code
```

### Option 2: Direct Download

[code.visualstudio.com/download](https://code.visualstudio.com/download) → drag to Applications.

---

## 📦 5. Install VS Code Extensions

In VS Code (`Cmd+Shift+X`):

* **Python** (ms-python.python)
* **Pylance** (ms-python.vscode-pylance)
* **Jupyter** (ms-toolsai.jupyter)
* (Optional) GitLens, Material Icon Theme

---

## ⚙️ 6. Configure Python in VS Code

### Select Interpreter

1. `Cmd+Shift+P` → `Python: Select Interpreter`
2. Choose `./venv/bin/python3`

### Suggested Settings (`settings.json`)

`~/Library/Application Support/Code/User/settings.json`:

```json
{
  "python.defaultInterpreterPath": "./venv/bin/python3",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": { "source.organizeImports": true },
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "files.autoSave": "afterDelay",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "workbench.iconTheme": "material-icon-theme"
}
```

---

## 🚀 7. Project Structure & Example

```
my-python-project/
├── venv/
├── .vscode/
│   ├── settings.json
│   └── launch.json
├── src/
│   └── main.py
├── tests/
│   └── test_main.py
├── requirements.txt
└── README.md
```

`src/main.py`:

```python
import platform

def main():
    print(f"Hello from VS Code on {platform.system()}!")
    numbers = [1, 2, 3, 4, 5]
    print(f"Sum: {sum(numbers)}")

if __name__ == "__main__":
    main()
```

Run:

```bash
source venv/bin/activate
python src/main.py
```

---

## 🐛 8. Debugging Setup

`.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal"
    }
  ]
}
```

---

## ⚡ 9. macOS Tips

### Terminal Integration

* Open terminal in VS Code with `` Ctrl+` ``
* VS Code auto-detects `zsh` (default on macOS Catalina+)

### Add VS Code to PATH

Add this to `~/.zshrc`:

```bash
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
alias code='open -a "Visual Studio Code"'
```

Then:

```bash
code .
```

---

## 🎯 10. Workflow Example

```bash
# 1. Create project
mkdir my-project && cd my-project
python3 -m venv venv
source venv/bin/activate
code .

# 2. Install dependencies
pip install pandas numpy jupyter
pip freeze > requirements.txt

# 3. Run tests
python -m pytest tests/
```

---

## 🔍 11. Troubleshooting

* **VS Code not opening**

  ```bash
  rm -rf ~/Library/Application\ Support/Code
  ```
* **Python not found** → reinstall via Homebrew
* **Virtual env issues**

  ```bash
  deactivate
  rm -rf venv
  python3 -m venv venv
  source venv/bin/activate
  ```

---

✅ You now have a **fully working Python + VS Code environment on macOS** with virtual environments, extensions, debugging, and workflow best practices.

