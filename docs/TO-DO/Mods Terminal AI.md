# 🧠 Mods Terminal AI

*Bridge Natural Language and Terminal Workflows with AI-Powered Precision*

---

## 🔍 What Is Mods?

**`mods`** is a terminal-native AI assistant from [Charm.sh](https://charm.sh/) that brings large language models (LLMs) both local and cloud-based (e.g., GPT-4, Claude 3, LLaMA 3) into your command-line workflows.

It translates natural language into practical terminal actions, including:

- 🔧 **Command Explanations**

- 🧠 **Code Generation**

- 🔄 **Data Transformation**

- 🤖 **Automation**

### 🚀 Key Features

- ✅ Local-first, privacy-friendly (via [Ollama](https://ollama.ai/))

- ✅ Seamless use of both local & remote LLMs

- ✅ Native UNIX pipe support (`|`)

- ✅ Smart file-aware processing (`-f` flag)

- ✅ Prebuilt templates + interactive prompts

- ✅ Cross-platform (Windows, macOS, Linux)

---

## 🛠️ Installation

### ✅ Universal (Go ≥ 1.20)

```bash
go install github.com/charmbracelet/mods@latest
```

### 📦 Platform Packages

| OS      | Manager  | Command                               |
| ------- | -------- | ------------------------------------- |
| Windows | Winget   | `winget install charmbracelet.mods`   |
|         | Scoop    | `scoop install mods`                  |
| macOS   | Homebrew | `brew install charmbracelet/tap/mods` |
| Linux   | AUR      | `yay -S mods`                         |

---

## ⚙️ Configuration

### 🔑 API Key Setup

Use one of the following secure methods:

#### Recommended

1. **Environment variable** – Session-based

2. **Config file** – Persistent (`~/.config/mods.toml`)

3. **Key management service** – Production systems

### 🔐 Setting Environment Variables

#### Windows

**Command Prompt**:

```cmd
setx OPENAI_API_KEY "<yourkey>"
```

**PowerShell**:

```powershell
[System.Environment]::SetEnvironmentVariable('OPENAI_API_KEY','<yourkey>','User')
```

*To verify*:

```cmd
echo %OPENAI_API_KEY%
```

You can also set it via *System Properties* > *Advanced* > *Environment Variables*.

#### macOS / Linux

**zsh**:

```bash
echo "export OPENAI_API_KEY='yourkey'" >> ~/.zshrc
source ~/.zshrc
```

**bash**:

```bash
echo "export OPENAI_API_KEY='yourkey'" >> ~/.bash_profile
source ~/.bash_profile
```

*Verification*:

```bash
echo $OPENAI_API_KEY
```

---

## ⚡ Quick Start

### 🔧 Usage Examples

```bash
# Persistent config setup
echo 'OPENAI_API_KEY = "sk-..."' >> ~/.config/mods.toml
chmod 600 ~/.config/mods.toml

# Explain a command
mods "Explain the tar command"

# Pipe example
ls -lah | mods "Sort by size"

# Python usage
import os
openai.api_key = os.environ["OPENAI_API_KEY"]
```

---

## 🔒 Production-Ready Security

### Secrets Management (KMS)

```bash
# Example: AWS
export OPENAI_API_KEY=$(aws secretsmanager get-secret-value --secret-id prod/modskey --query SecretString --output text)
```

**Supported Providers**:

| Service                                                               | Description                           |
| --------------------------------------------------------------------- | ------------------------------------- |
| [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)        | IAM-controlled secrets in AWS         |
| [HashiCorp Vault](https://www.vaultproject.io/)                       | Secure multi-platform secrets manager |
| [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/) | Centralized key and secret storage    |
| [Google Secret Manager](https://cloud.google.com/secret-manager)      | Secure and auditable secret storage   |

---

## 🧠 Core Capabilities

### 1. 🧾 Command Explanation

```bash
mods --explain "rsync -avz --delete ~/docs/ user@backup:/storage"
```

### 2. 🧑‍💻 Natural Language to Code

```bash
mods "Create Python script to convert PNG to WebP, max 800px width"
```

```python
from PIL import Image
import os

for filename in os.listdir():
    if filename.lower().endswith('.png'):
        with Image.open(filename) as img:
            img.thumbnail((800, 1000))
            img.save(f'{os.path.splitext(filename)[0]}.webp', 'WEBP')
```

### 3. 🩺 Error Diagnosis

```bash
python script.py 2>&1 | mods "Fix this Pandas error"
```

---

## 🧪 Use Cases

### 🧑‍💻 Development

```bash
mods -f app.py "Generate OpenAPI spec"
mods -f Dockerfile "Optimize for smaller image"
```

### 🖥️ System Administration

```bash
journalctl -u nginx | mods "Summarize top error messages"
mods -f /etc/ssh/sshd_config "Harden SSH settings"
```

### 📊 Data Processing

```bash
curl https://example.com/data.xml | mods "Convert to JSON"
csvtk stats data.csv | mods "Visualize trends as a table"
```

---

## 🧬 Advanced Features

### 🧠 Model Management

#### Local Model with Ollama

```bash
ollama pull llama3
mods --model ollama:llama3 "Optimize SQL query" < query.sql
```

#### Cloud Model Tuning

```bash
mods --temperature 0.7 --max-tokens 500
```

---

### 🔁 Workflow Integration

| Use Case           | Example Command                                | Output                            |
| ------------------ | ---------------------------------------------- | --------------------------------- |
| API Development    | `mods "Create FastAPI endpoint with JWT auth"` | Python                            |
| Data Visualization | `csvtk stats data.csv \                        | mods "Plot as bar chart"`         |
| Incident Response  | `kubectl get pods \                            | mods "Diagnose CrashLoopBackOff"` |

---

## 🔐 Security Best Practices

1. Use config file with correct permissions:
   
   ```bash
   chmod 600 ~/.config/mods.toml
   ```

2. Use local models for confidential data:
   
   ```bash
   mods --model ollama:mistral --local "Analyze confidential.txt"
   ```

3. Use read-only mode to prevent execution:
   
   ```bash
   mods --read-only "Explain this script"
   ```

---

## 🌐 Ecosystem & Integrations

### 🧩 Complementary Tools

| Tool                                           | Purpose             | Install                                                     |
| ---------------------------------------------- | ------------------- | ----------------------------------------------------------- |
| [Glow](https://github.com/charmbracelet/glow)  | Render Markdown     | `go install github.com/charmbracelet/glow@latest`           |
| [Gum](https://github.com/charmbracelet/gum)    | Interactive scripts | `go install github.com/charmbracelet/gum@latest`            |
| [Huh](https://github.com/charmbracelet/huh)    | Terminal forms      | `go get github.com/charmbracelet/huh@latest`                |
| [Pistol](https://github.com/doronbehar/pistol) | File previews       | `go install github.com/doronbehar/pistol/cmd/pistol@latest` |

### 🧠 Alternative Tools

| Tool                                         | Strength                  | Ideal For           |
| -------------------------------------------- | ------------------------- | ------------------- |
| [LLM](https://github.com/simonw/llm)         | SQL support               | Data pipelines      |
| [Aichat](https://github.com/sigoden/aichat)  | Lightweight & fast        | CLI power users     |
| [LocalAI](https://github.com/mudler/LocalAI) | Multi-model orchestration | Complex deployments |

---

## 📚 Learning Path

### 🟢 Beginner

- `mods "Explain grep command"`

- `mods "Write Python script to scrape a webpage"`

### 🟡 Intermediate

- `cat logs | mods "Summarize top IPs"`

- `mods -f data.csv "Generate HTML report"`

### 🔴 Advanced

- GitHub Actions automation

- Custom model fine-tuning

---

## 🧰 Troubleshooting

### Common Issues

| Problem                  | Tip                                              |
| ------------------------ | ------------------------------------------------ |
| 🔑 API key not found     | Check `~/.config/mods.toml` and file permissions |
| 🐋 Docker-related issues | Use `-f Dockerfile` with specific prompts        |
| 🌐 Connectivity issues   | Check `MODS_BASE_URL` configuration              |

### Debugging

```bash
mods --debug "Analyze system performance"
```

---

## 📎 Resources

- [GitHub - ollama/ollama](https://github.com/ollama/ollama)

- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)

- [Charm.sh](https://charm.sh/)

- [OpenAI Platform](https://platform.openai.com/api-keys)

- [GitHub - OpenAI API](https://github.com/openai/openai-cookbook?tab=readme-ov-file)

- https://platform.deepseek.com/api_keys
