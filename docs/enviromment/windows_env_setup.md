# 🪟 Setting Up Python Environment on Windows

This guide walks you through installing and configuring Python on **Windows** for development using multiple methods.

---

## 1️⃣ Install Python

### Method 1: Using winget (Recommended)
Open **Command Prompt** or **PowerShell** as Administrator:

```powershell
# Install latest Python version
winget install Python.Python.3

# Or install specific version
winget search Python.Python  # See available versions
winget install Python.Python.3.11  # Install specific version

# Upgrade if already installed
winget upgrade Python.Python.3
```

### Method 2: Using Official Installer
1. Download Python from the official website:
   👉 [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)

2. Run the installer:
   * ✅ Check **"Add Python to PATH"** before continuing
   * Choose **"Install for all users"** if you want global availability
   * Use the **default settings** unless you have specific requirements

### Verify Installation:
```powershell
python --version
python3 --version
pip --version
```

---

## 2️⃣ Upgrade pip

Upgrade pip to the latest version:

```powershell
python -m pip install --upgrade pip
```

---

## 3️⃣ Create a Virtual Environment

It's best to use a virtual environment to isolate project dependencies.

```powershell
# Navigate to your project directory
cd path\to\your\project

# Create a virtual environment
python -m venv venv

# Activate it
.\venv\Scripts\activate
```

👉 You should now see `(venv)` at the start of your terminal prompt.

Deactivate with:

```powershell
deactivate
```

---

## 4️⃣ Install Project Dependencies

Inside your virtual environment, install dependencies with:

```powershell
pip install -r requirements.txt
```

If you don't have a `requirements.txt` yet, generate one with:

```powershell
pip freeze > requirements.txt
```

---

## 5️⃣ Troubleshooting

If Python commands don't work after installation:
1. **Restart your terminal/command prompt**
2. **Check PATH configuration**:
   ```powershell
   echo $env:PATH
   ```
3. **Try the full Python path**:
   ```powershell
   C:\Users\[Username]\AppData\Local\Programs\Python\Python3*\python --version
   ```

---

## 6️⃣ Recommended Tools

* **Windows Terminal** (for a better shell experience)
  👉 [Download from Microsoft Store](https://aka.ms/terminal)

* **Visual Studio Code** (editor for Python development)
  👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)

* Install the **Python extension** for VS Code to get IntelliSense, debugging, and Jupyter Notebook support.

---

## ✅ Installation Methods Summary

| Method | Pros | Best For |
|--------|------|----------|
| **winget** | Fast, automated, Microsoft-recommended | Quick setup, power users |
| **Official Installer** | Graphical interface, more options | Beginners, specific configurations |

---

✅ That's it! You're ready to start coding Python on Windows. The **winget method** is recommended for its simplicity and security, while the **graphical installer** offers more customization options.
