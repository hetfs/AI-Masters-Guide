---
id: 04-windows-config
title: 🪟 Setup python on windows
sidebar_position: 6
---
# Python Development on Windows

This guide helps you set up **Python** and **Visual Studio Code (VS Code)** for development on Windows.

---

## 1️⃣ Install Python

### Option A: Using winget (Recommended)

```powershell
winget install Python.Python.3       # Latest version
winget search Python.Python          # See available versions
winget install Python.Python.3.11    # Specific version
winget upgrade Python.Python.3       # Upgrade
```

### Option B: Using the Official Installer

1. Download from 👉 [python.org](https://www.python.org/downloads/windows/)
2. Run installer:

   * ✅ Add Python to PATH
   * ✅ Install for all users (optional)
   * Use defaults unless needed otherwise

### Verify

```powershell
python --version
pip --version
```

---

## 2️⃣ Upgrade pip

```powershell
python -m pip install --upgrade pip
```

---

## 3️⃣ Create a Virtual Environment

```powershell
cd path\to\your\project
python -m venv venv
.\venv\Scripts\activate   # Activate
deactivate                # Exit
```

---

## 4️⃣ Install VS Code

### Option A: Installer (Recommended)

👉 [Download VS Code](https://code.visualstudio.com/Download)

During setup, enable:

* ✅ Add to PATH
* ✅ Register as editor
* ✅ “Open with Code” in Explorer

### Option B: Package Managers

```powershell
winget install Microsoft.VisualStudioCode
# or
choco install vscode
```

---

## 5️⃣ Install Essential Extensions

Open VS Code → `Ctrl+Shift+X` → install:

* **Python** (ms-python.python)
* **Pylance** (ms-python.vscode-pylance)
* **Jupyter** (ms-toolsai.jupyter)
* (Optional) GitLens, Docstring Generator, Material Icon Theme

---

## 6️⃣ Configure Python in VS Code

### Select Interpreter

1. `Ctrl+Shift+P` → **Python: Select Interpreter**
2. Pick:

   * System Python
   * `.\venv\Scripts\python.exe`
   * Store/custom install

### Recommended Settings (`%APPDATA%\Code\User\settings.json`)

```json
{
  "python.defaultInterpreterPath": ".\\venv\\Scripts\\python.exe",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": { "source.organizeImports": true },
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "terminal.integrated.shell.windows": "powershell.exe",
  "python.terminal.activateEnvironment": true
}
```

---

## 7️⃣ Project Setup

**Suggested Structure**

```
my-project/
├── .vscode/
│   └── settings.json
├── venv/
├── src/
│   └── main.py
├── tests/
│   └── test_main.py
├── requirements.txt
└── README.md
```

**Run & Debug**

* Right-click → *Run Python File in Terminal*
* Play button in editor
* Or: `python src/main.py`

For debugging, add `.vscode/launch.json` with a Python config.

---

## 8️⃣ Recommended Tools

* **Windows Terminal** 👉 [Microsoft Store](https://aka.ms/terminal)
* **Git** (optional, for version control)
* **pipx** (for global Python tools)

---

## 9️⃣ Troubleshooting

* **Python not found**:

  ```powershell
  where python
  winget install Python.Python.3
  ```

* **Virtual env activation fails**:

  ```powershell
  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

* **VS Code not in PATH**: Reinstall with PATH option or add manually:

  ```
  C:\Users\[Username]\AppData\Local\Programs\Microsoft VS Code\bin
  ```

---

## ✅ Quick Checklist

* [ ] Python installed
* [ ] pip upgraded
* [ ] Virtual environment created
* [ ] VS Code installed
* [ ] Python + Pylance extensions added
* [ ] Interpreter configured
* [ ] Project + debugging ready

---

🚀 You’re all set! Python + VS Code are ready for Windows development.

