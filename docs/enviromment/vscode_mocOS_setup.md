# 🍎 Setting Up VS Code for Python Development on macOS

VS Code is a powerful, lightweight IDE that's perfect for Python development on macOS. Here's a complete setup guide tailored for Apple's ecosystem.

---

## 🔧 1. Install VS Code on macOS

### **Method 1: Homebrew (Recommended)**
```bash
# Install Homebrew if you haven't already
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install VS Code
brew install --cask visual-studio-code
```

### **Method 2: Direct Download**
1. Visit [code.visualstudio.com/download](https://code.visualstudio.com/download)
2. Download the **macOS .zip file**
3. Extract and drag **Visual Studio Code** to your Applications folder

### **Method 3: App Store**
- Search "Visual Studio Code" in the Mac App Store
- Install directly (may be slightly behind latest version)

---

## 📦 2. Install Essential Python Extensions

Open VS Code (`Cmd+Space` and type "Visual Studio Code") and install these extensions (`Cmd+Shift+X`):

**Core Python Extensions:**
- **Python** (ms-python.python) - Main Python support
- **Pylance** (ms-python.vscode-pylance) - Smart IntelliSense
- **Jupyter** (ms-toolsai.jupyter) - Notebook support

**macOS-Specific Enhancements:**
- **vscode-pets** - Fun pets in your editor
- **GitLens** - Enhanced Git integration
- **Material Icon Theme** - Better file icons

---

## 🐍 3. Install Python on macOS

### **Method 1: Homebrew (Recommended)**
```bash
# Install the latest Python
brew install python

# Verify installation
python3 --version
pip3 --version
```

### **Method 2: Official Python Installer**
1. Download from [python.org/downloads/macos](https://www.python.org/downloads/macos/)
2. Run the `.pkg` installer
3. **Important**: Check "Add Python to PATH" during installation

### **Method 3: pyenv (Advanced Users)**
```bash
# Install pyenv
brew install pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc

# Install Python version
pyenv install 3.11.0
pyenv global 3.11.0
```

---

## ⚙️ 4. Configure Python Environment

### **Create a Virtual Environment**
```bash
# Navigate to your project
cd ~/Developer/my-python-project

# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate
```

### **Select Python Interpreter in VS Code**
1. Press `Cmd+Shift+P`
2. Type: `Python: Select Interpreter`
3. Choose: `./venv/bin/python3`

---

## 🔥 5. Essential VS Code Settings for macOS

Open settings with `Cmd+,` or create `~/Library/Application Support/Code/User/settings.json`:

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
  "terminal.integrated.shell.osx": "/bin/zsh",
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.iconTheme": "material-icon-theme"
}
```

---

## 🚀 6. Create Your First Python Project

### **Project Structure**
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

### **Sample Python File** (`src/main.py`)
```python
import platform

def main():
    print(f"Hello from VS Code on {platform.system()}!")
    print(f"Running on macOS {platform.mac_ver()[0]}")
    
    # macOS-specific example
    numbers: list[int] = [1, 2, 3, 4, 5]
    total: int = sum(numbers)
    
    print(f"Sum of numbers: {total}")
    
    # Demonstrate list comprehension
    squares = [x**2 for x in numbers]
    print(f"Squares: {squares}")

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

### **Debug Configuration**
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
      "env": {"PYTHONPATH": "${workspaceFolder}/src"}
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
- Open with `` Ctrl+` `` (backtick)
- Uses your default shell (zsh on modern macOS)
- Integrated with your virtual environment

### **Essential Terminal Commands**
```bash
# Activate virtual environment
source venv/bin/activate

# Install packages
pip install requests pandas numpy matplotlib

# Generate requirements
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

---

## 🛠️ 9. macOS-Specific Tips

### **Keyboard Shortcuts**
```bash
Cmd+Shift+P    # Command palette
Cmd+Shift+E    # Explorer
Ctrl+`         # Toggle terminal
F5             # Start debugging
Ctrl+F5        # Run without debugging
Cmd+B          # Toggle sidebar
```

### **Shell Integration**
Add to your `~/.zshrc` for better VS Code integration:
```bash
# Add VS Code to PATH
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

# Alias for quick opening
alias code='open -a "Visual Studio Code"'
```

### **Open Files/Folders from Terminal**
```bash
# Open current directory in VS Code
code .

# Open specific file
code main.py

# Open multiple files
code file1.py file2.py
```

---

## 🎯 10. Python Development Workflow

### **1. Start New Project**
```bash
mkdir my-project && cd my-project
python3 -m venv venv
source venv/bin/activate
code .
```

### **2. Install Dependencies**
```bash
pip install pandas numpy jupyter
pip freeze > requirements.txt
```

### **3. Develop with Hotkeys**
- `Cmd+S` - Save file
- `Shift+Cmd+P` - Command palette
- `F12` - Go to definition
- `Shift+Cmd+F` - Find in files

### **4. Testing**
```bash
# Run tests
python -m pytest tests/

# Run with coverage
python -m pytest --cov=src tests/
```

---

## 🔍 11. Troubleshooting Common macOS Issues

**VS Code not opening:**
```bash
# Reset VS Code
rm -rf ~/Library/Application\ Support/Code
```

**Python not found:**
```bash
# Check Python installations
which python3
ls /usr/local/bin/python*

# Reinstall via Homebrew
brew reinstall python
```

**Permission issues:**
```bash
# Fix pip permissions
python3 -m pip install --upgrade pip --user
```

**Virtual environment issues:**
```bash
# Recreate virtual environment
deactivate
rm -rf venv
python3 -m venv venv
source venv/bin/activate
```

---

## 🧪 12. Testing Your Setup

Create `test_macos_setup.py`:
```python
import sys
import platform

def test_environment():
    print(f"✅ Python {sys.version}")
    print(f"✅ macOS {platform.mac_ver()[0]}")
    print(f"✅ Virtual Environment: {hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)}")
    print(f"✅ Architecture: {platform.machine()}")
    
    # Test common data science libraries
    try:
        import numpy
        print("✅ NumPy installed")
    except ImportError:
        print("❌ NumPy missing")
    
    try:
        import pandas
        print("✅ Pandas installed")
    except ImportError:
        print("❌ Pandas missing")

if __name__ == "__main__":
    test_environment()
```

---

## 📱 13. Additional macOS Tools

### **iTerm2 Integration**
1. Install [iTerm2](https://iterm2.com/)
2. Set as default terminal in VS Code:
   ```json
   {
     "terminal.integrated.defaultProfile.osx": "zsh",
     "terminal.integrated.profiles.osx": {
       "zsh": {
         "path": "/bin/zsh",
         "args": ["-l"]
       }
     }
   }
   ```

### **Git Configuration**
```bash
# Set up Git (if not done)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

✅ **You're all set!** VS Code is now perfectly configured for Python development on your macOS system with debugging, virtual environments, and all essential tools tailored for the Apple ecosystem.
