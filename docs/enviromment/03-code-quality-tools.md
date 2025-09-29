---
id: 03-code-quality-tools
title: 🧹 Code Quality Tools
sidebar_position: 6
---

# 🧹 Python Code Quality Tools

Automated tools help keep Python code clean, consistent, and error-free. They catch issues early, enforce standards, and improve maintainability.

## 🎯 Why Code Quality Matters

- **Catch Bugs Early** → Find errors before production  
- **Consistent Style** → Unified look across teams  
- **Readable Code** → Easier to maintain and onboard  
- **Faster Reviews** → Let tools handle style, focus on logic  
- **Best Practices** → Enforce Python standards automatically  

## 📊 Tools Overview

| Tool | Category | Purpose | Speed | Config | Best For |
|------|----------|---------|-------|--------|----------|
| **Black** | Formatter | Opinionated auto-formatting | ⚡ Fast | Minimal | Teams wanting consistency |
| **autopep8** | Formatter | PEP 8 compliance | ◼︎ Medium | Moderate | Gradual cleanup |
| **Flake8** | Linter | Style & error checks | ⚡ Fast | Flexible | General linting |
| **Pylint** | Linter | Deep analysis + scoring | 🐢 Slow | Extensive | Enterprise-grade analysis |
| **mypy** | Type Checker | Static typing | ◼︎ Medium | Configurable | Type-safe projects |
| **isort** | Import Tool | Organize/sort imports | ⚡ Fast | Simple | Clean imports |
| **Ruff** | All-in-One | Linting + formatting | 🚀 Very fast | Moderate | Speed-critical projects |
| **Bandit** | Security | Detect security issues | ⚡ Fast | Minimal | Security-conscious apps |


## ✨ Code Formatters

### Black: “The Uncompromising Formatter”

Opinionated and consistent. No bikeshedding.

```bash
pip install black
black .          # Format files
black --check .  # Check only
````

```python title="Before"
def my_function  ( arg1,arg2=None ) : return {'k1':arg1,'k2':arg2}
```

```python title="After"
def my_function(arg1, arg2=None):
    return {"k1": arg1, "k2": arg2}
```

### autopep8: PEP 8 Compliance

Gradually makes code PEP 8–compliant.

```bash
pip install autopep8
autopep8 --in-place --aggressive *.py
```

## 🔍 Linters

### Flake8: Style Enforcement

Combines PyFlakes (errors) + pycodestyle (PEP 8) + McCabe (complexity).

```bash
pip install flake8
flake8 . --max-complexity=10
```

**Common issues detected:**

* `E501`: Line too long
* `E302`: Missing blank lines
* `F841`: Unused variable

### Pylint: Comprehensive Analysis

Checks style, logic, and docstrings. Provides a score (0–10).

```bash
pip install pylint
pylint --output-format=colorized mymodule.py
```

## 🏷️ Type Checkers

### mypy: Static Typing

Catches type errors before runtime.

```bash
pip install mypy
mypy --strict .
```

```python
def process_items(items: list[str]) -> dict[str, int]:
    return {item: len(item) for item in items}

process_items([1, 2, 3])  # ❌ mypy: int is not str
```

## 🛠️ Specialized Tools

### isort: Import Sorting

```bash
pip install isort
isort .
```

```python title="Before"
import os
from my_module import specific_function
import sys
from third_party import something
```

```python title="After"
import os
import sys

from third_party import something
from my_module import specific_function
```

### Bandit: Security Checks

```bash
pip install bandit
bandit -r .  # Scan recursively
```

### Ruff — Ultra-Fast All-in-One

Can replace Flake8, isort, pyupgrade, pydocstyle, etc.

```bash
pip install ruff
ruff check .    # Lint
ruff format .   # Format
```

## 🎪 Integrated Workflows

### pre-commit Hooks

```yaml title=".pre-commit-config.yaml"
repos:
  - repo: https://github.com/psf/black
    rev: 23.9.1
    hooks: [{id: black}]
  - repo: https://github.com/pycqa/isort
    rev: 5.12.0
    hooks: [{id: isort}]
  - repo: https://github.com/pycqa/flake8
    rev: 6.1.0
    hooks: [{id: flake8}]
```

### VS Code Settings

```json title=".vscode/settings.json"
{
  "python.formatting.provider": "black",
  "python.linting.flake8Enabled": true,
  "python.linting.mypyEnabled": true,
  "editor.formatOnSave": true
}
```

## 📋 Recommended Setups

### Beginner-Friendly

```toml
[tool.black]
line-length = 88
[tool.isort]
profile = "black"
```

➡ Tools: **Black + Flake8 + isort**

### Data Science

```toml
[tool.black]
line-length = 88
[tool.mypy]
python_version = "3.12"
warn_unused_ignores = true
[tool.ruff]
target-version = "py312"
```

➡ Tools: **Black + mypy + Ruff**

### Enterprise

```toml
[tool.black]
line-length = 100
[tool.pylint]
max-line-length = 100
[tool.mypy]
strict = true
warn_return_any = true
[tool.bandit]
skips = ["B101"]
```

➡ Tools: **Black + Pylint + mypy + Bandit**

## 🚀 Quality Pipeline

### Local Workflow

```bash
# Format
black . && isort .
# Lint & check
flake8 . && mypy . && bandit -r .
# Or use Ruff
ruff check . && ruff format .
```

### GitHub Actions

```yaml title=".github/workflows/code-quality.yml"
name: Code Quality
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
      - run: pip install black flake8 mypy bandit
      - run: black --check .
      - run: flake8 .
      - run: mypy .
      - run: bandit -r src/
```

## 💡 Tool Selection Guide

| Scenario          | Recommended Tools     | Why                   |
| ----------------- | --------------------- | --------------------- |
| New Project       | Black + Flake8 + mypy | Solid foundation      |
| Existing Codebase | Black + Pylint        | Deep insights         |
| Mixed Team        | Black + Flake8        | Gentle learning curve |
| Speed Needed      | Ruff                  | Blazing fast          |
| Security Focus    | Black + Bandit + mypy | Safer code            |
| Data Science      | Black + mypy + isort  | Reliable pipelines    |

**Tips:**

1. Start small → Black + Flake8
2. Add mypy as team matures
3. Automate via pre-commit + CI
4. Stay consistent across repos
5. Track quality metrics

## 🔗 Official Docs

* **Black** → [black.readthedocs.io](https://black.readthedocs.io/)
* **Flake8** → [flake8.pycqa.org](https://flake8.pycqa.org/)
* **Pylint** → [pylint.pycqa.org](https://pylint.pycqa.org/)
* **mypy** → [mypy-lang.org](http://mypy-lang.org/)
* **Ruff** → [github.com/astral-sh/ruff](https://github.com/astral-sh/ruff)
* **Bandit** → [bandit.readthedocs.io](https://bandit.readthedocs.io/)
* **pre-commit** → [pre-commit.com](https://pre-commit.com/)

---

> 💡 **Remember:** The best setup is the one your team consistently uses. Start simple, grow as needed.

