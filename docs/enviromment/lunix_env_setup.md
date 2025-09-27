# 🐧 Setting Up Python Environment on Linux

Before starting with the AI Mastery roadmap, make sure you have a proper **Python environment** ready.

---

## 🔧 1. Check if Python is Installed

Run:

```bash
python3 --version
````

You should see something like:

```
Python 3.10.12
```

If not, follow the steps below.

---

## 🐧 Install Python by Distribution

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install -y python3 python3-pip python3-venv
```

### Arch Linux

```bash
sudo pacman -Syu python python-pip
```

### Fedora

```bash
sudo dnf install python3 python3-pip
```

---

## 📦 2. Create a Virtual Environment

```bash
cd ~/Git-Projects/AI-Masters-Guide
python3 -m venv .venv
```

Activate it:

```bash
source .venv/bin/activate
```

Deactivate it:

```bash
deactivate
```

---

## 📚 3. Install Dependencies

If your project has a `requirements.txt`:

```bash
pip install -r requirements.txt
```

Or install packages individually:

```bash
pip install numpy pandas matplotlib scikit-learn
```

---

## 🔄 4. Keep Environment Updated

```bash
pip install --upgrade pip setuptools wheel
pip list --outdated
```

---

✅ Your Linux Python environment is ready for AI Mastery projects!
