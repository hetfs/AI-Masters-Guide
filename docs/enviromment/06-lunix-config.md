---
id: 06-lunix-config
title: 🐧 Setup python on Linux
sidebar_position: 9
---
#  Python Development on Linux

This guide sets up **Python** and **Visual Studio Code (VS Code)** for development on Linux, with support for both **Bash** and **Fish** shell users.

---

## 1️⃣ Install Python

Check if Python is installed:

```bash
python3 --version
```

If missing, install it per distribution:

* **Ubuntu/Debian**

  ```bash
  sudo apt update
  sudo apt install -y python3 python3-pip python3-venv
  ```

* **Fedora/RHEL**

  ```bash
  sudo dnf install python3 python3-pip
  ```

* **Arch Linux/Manjaro**

  ```bash
  sudo pacman -Syu python python-pip
  ```

Verify:

```bash
python3 --version
pip3 --version
```

---

## 2️⃣ Install VS Code

Choose one method:

* **Snap (simple)**

  ```bash
  sudo snap install code --classic
  ```

* **APT (Ubuntu/Debian official repo)**

  ```bash
  sudo apt install wget gpg
  wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
  echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list
  sudo apt update
  sudo apt install code
  ```

* **Fedora/RHEL**

  ```bash
  sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
  echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo
  sudo dnf install code
  ```

* **Arch Linux/Manjaro**

  ```bash
  sudo pacman -Syu code
  ```

* **Flatpak**

  ```bash
  flatpak install flathub com.visualstudio.code
  ```

---

## 3️⃣ Set Up a Virtual Environment

From your project folder:

* **Bash/Zsh**

  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

* **Fish**

  Fish doesn’t use `activate`, but has its own:

  ```fish
  python3 -m venv venv
  source venv/bin/activate.fish
  ```

Deactivate:

* Bash/Zsh: `deactivate`
* Fish: `deactivate` (same command, works too)

---

## 4️⃣ Install VS Code Extensions

In VS Code → **Extensions** (`Ctrl+Shift+X`):

* **Python** (ms-python.python) – main support
* **Pylance** (ms-python.vscode-pylance) – IntelliSense
* **Jupyter** (ms-toolsai.jupyter) – notebook support

(Optional productivity: GitLens, Python Docstring Generator, icon themes)

---

## 5️⃣ Configure VS Code for Python

Edit `~/.config/Code/User/settings.json`:

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

👉 If you use **Fish**, replace the last line with:

```json
"terminal.integrated.shell.linux": "/usr/bin/fish"
```

---

## 6️⃣ Suggested Project Structure

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

Sample `src/main.py`:

```python
def main():
    print("Hello from Linux + VS Code + Fish!")
    numbers = [1, 2, 3, 4, 5]
    print(f"Sum: {sum(numbers)}")

if __name__ == "__main__":
    main()
```

Run:

* **Bash/Zsh**

  ```bash
  source venv/bin/activate
  python src/main.py
  ```

* **Fish**

  ```fish
  source venv/bin/activate.fish
  python src/main.py
  ```

---

## 7️⃣ Debugging Setup

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
      "console": "integratedTerminal"
    }
  ]
}
```

---

## 8️⃣ Useful Commands

```bash
# Install dependencies
pip install -r requirements.txt

# Export dependencies
pip freeze > requirements.txt

# Upgrade tools
pip install --upgrade pip setuptools wheel
```

---

## 9️⃣ Troubleshooting

* **Python not found** → `which python3`
* **Virtual env not activating in Fish** → make sure you use `activate.fish`
* **VS Code won’t start** → `code --disable-extensions`
* **Permission errors** → `chmod -R 755 venv`
* **Update VS Code** →

  ```bash
  sudo snap refresh code
  # or
  sudo apt upgrade code
  ```

---

## ✅ Quick Checklist

* [ ] Python installed
* [ ] VS Code installed
* [ ] Virtual environment set up (Bash/Fish)
* [ ] Extensions installed
* [ ] Settings configured
* [ ] Debugging tested

---

🚀 You now have a **Python + VS Code setup on Linux** that works for **both Bash and Fish shell users**, with virtual environments, debugging, and essential tools ready!
