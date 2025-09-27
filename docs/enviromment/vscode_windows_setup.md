# 🪟 Setting Up VS Code on Windows for Python Development

This guide shows you how to configure **Visual Studio Code (VS Code)** on **Windows** for a smooth Python development workflow.

---

## 1️⃣ Install VS Code

### **Method 1: Windows Installer (Recommended)**
1. Download VS Code from the official site:
   👉 [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

2. Run the installer and select:
   * ✅ **Add to PATH** (enables opening files/folders from command line)
   * ✅ **Register Code as an editor for supported file types**
   * ✅ **Add "Open with Code" action to Windows Explorer context menu**

### **Method 2: winget (Fast & Automated)**
```powershell
winget install Microsoft.VisualStudioCode
```

### **Method 3: Chocolatey**
```powershell
choco install vscode
```

---

## 2️⃣ Install Essential Python Extensions

Open VS Code and install these extensions (`Ctrl+Shift+X`):

**Core Python Extensions:**
- **Python** (ms-python.python) - Main Python support with IntelliSense, debugging, and Jupyter notebooks
- **Pylance** (ms-python.vscode-pylance) - Enhanced language support with type checking
- **Jupyter** (ms-toolsai.jupyter) - Notebook editing and execution

**Productivity Extensions:**
- **Python Docstring Generator** - Auto-generate docstrings
- **GitLens** - Enhanced Git integration
- **Material Icon Theme** - Better file icons

---

## 3️⃣ Configure Python Environment

### **Select Python Interpreter**
1. Open **Command Palette** (`Ctrl+Shift+P`)
2. Type: **"Python: Select Interpreter"**
3. Choose from:
   - System Python installation
   - Virtual environment (`.\venv\Scripts\python.exe`)
   - Python from Microsoft Store
   - Custom installation path

### **Windows-Specific Python Locations**
```powershell
# Common Python installation paths
C:\Users\[Username]\AppData\Local\Programs\Python\Python3*\
C:\Program Files\Python3*\
```

---

## 4️⃣ Set Up Virtual Environment in VS Code

### **Create Virtual Environment**
1. Open terminal in VS Code (`Ctrl+``)
2. Create and activate virtual environment:

```powershell
# Create virtual environment
python -m venv venv

# Activate it
.\venv\Scripts\activate

# VS Code will detect and prompt to use this interpreter
```

### **Automatic Virtual Environment Detection**
VS Code automatically detects virtual environments in your workspace and suggests using them.

---

## 5️⃣ Essential VS Code Settings for Windows

Open settings with `Ctrl+,` or create `%APPDATA%\Code\User\settings.json`:

```json
{
  "python.defaultInterpreterPath": ".\\venv\\Scripts\\python.exe",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "files.autoSave": "afterDelay",
  "terminal.integrated.shell.windows": "powershell.exe",
  "python.terminal.activateEnvironment": true
}
```

---

## 6️⃣ Project Structure & Setup

### **Recommended Project Structure**
```
my-project/
├── .vscode/
│   ├── settings.json
│   └── launch.json
├── venv/
├── src/
│   └── main.py
├── tests/
│   └── test_main.py
├── requirements.txt
└── README.md
```

### **Sample Python File** (`src/main.py`)
```python
import platform
import sys

def main():
    print(f"Hello from VS Code on {platform.system()}!")
    print(f"Python version: {sys.version}")
    
    # Windows-specific example
    if platform.system() == "Windows":
        print("Running on Windows!")
    
    numbers = [1, 2, 3, 4, 5]
    total = sum(numbers)
    print(f"Sum of numbers: {total}")

if __name__ == "__main__":
    main()
```

---

## 7️⃣ Run and Debug Python Code

### **Running Code**
- **Method 1**: Right-click → **"Run Python File in Terminal"**
- **Method 2**: Click the **play button** in the top-right corner
- **Method 3**: Use terminal: `python src/main.py`

### **Debugging Setup**
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
      "justMyCode": true,
      "args": []
    }
  ]
}
```

**Debugging Features:**
- Set breakpoints by clicking left gutter
- Step through code with debug controls (`F10`, `F11`)
- Watch variables in real-time
- Interactive debug console

---

## 8️⃣ Windows-Specific Tips & Tricks

### **Keyboard Shortcuts**
```powershell
Ctrl+Shift+P    # Command palette
Ctrl+Shift+E    # Explorer
Ctrl+`          # Toggle terminal
F5              # Start debugging
Ctrl+F5         # Run without debugging
Ctrl+Shift+`    # New terminal
```

### **PowerShell Integration**
```powershell
# Open current directory in VS Code
code .

# Open specific file
code script.py

# Open entire project
code project-folder/
```

### **Virtual Environment Management**
```powershell
# Create virtual environment
python -m venv venv

# Activate
.\venv\Scripts\activate

# Install packages
pip install requests pandas numpy

# Generate requirements
pip freeze > requirements.txt

# Deactivate
deactivate
```

---

## 9️⃣ Windows Terminal Integration

### **Use Windows Terminal (Recommended)**
1. Install Windows Terminal from Microsoft Store
2. Configure VS Code to use it:
   ```json
   {
     "terminal.integrated.defaultProfile.windows": "Windows PowerShell",
     "terminal.integrated.profiles.windows": {
       "PowerShell": {
         "source": "PowerShell",
         "icon": "terminal-powershell"
       }
     }
   }
   ```

### **Command Prompt Alternative**
```json
{
  "terminal.integrated.defaultProfile.windows": "Command Prompt"
}
```

---

## 🔟 Testing Your Windows Setup

Create `test_windows_setup.py`:
```python
import sys
import platform
import os

def test_environment():
    print("🧪 Testing VS Code Python Setup on Windows")
    print(f"✅ Python {sys.version}")
    print(f"✅ Windows {platform.version()}")
    print(f"✅ Virtual Environment: {hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix}")
    print(f"✅ Working Directory: {os.getcwd()}")
    
    # Test common packages
    try:
        import requests
        print("✅ requests installed")
    except ImportError:
        print("❌ requests missing")
    
    try:
        import pandas
        print("✅ pandas installed")
    except ImportError:
        print("❌ pandas missing")

if __name__ == "__main__":
    test_environment()
```

---

## 🛠️ Troubleshooting Common Windows Issues

**VS Code not in PATH:**
- Reinstall VS Code with "Add to PATH" option checked
- Or manually add: `C:\Users\[Username]\AppData\Local\Programs\Microsoft VS Code\bin`

**Python not found:**
```powershell
# Check Python installation
where python
python --version

# Reinstall Python via winget
winget install Python.Python.3
```

**Virtual environment activation issues:**
```powershell
# Fix execution policy if needed
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Recreate virtual environment
python -m venv venv --clear
```

**Permission errors:**
- Run VS Code as Administrator if needed
- Check file/folder permissions

---

## 📋 Quick Start Checklist

- [ ] Install VS Code
- [ ] Install Python extensions
- [ ] Set up Python interpreter
- [ ] Create virtual environment
- [ ] Configure VS Code settings
- [ ] Test debugging functionality
- [ ] Install project dependencies

---

✅ **You're All Set!** VS Code is now perfectly configured for Python development on Windows with debugging, virtual environments, and all essential tools tailored for the Windows ecosystem. 🚀
