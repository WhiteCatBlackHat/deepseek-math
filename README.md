# deepseek-math 使用指南

## 介绍

deepseek-math 是一个基于 html 和 DeepSeek API 的数学计算工具，支持使用 $\KaTeX$ 渲染公式和使用 DeepSeek API 计算表达式、解方程。

## 环境配置

1. 安装 [Node.js](https://nodejs.org/) 和 npm（一般在安装 Node.js 时会自动安装 npm）。

2. 将该 Repository 克隆到本地：

    ```bash
    git clone https://github.com/WhiteCatBlackHat/deepseek-math
    cd deepseek-math
    ```

3. 安装依赖：

    ```bash
    npm init -y
    npm install express cors dotenv axios
    ```

4. 将项目根目录下的 `.env` 文件中 `<Your DeepSeek API Key>` 替换为您的 DeepSeek API 密钥。

## 启动项目

使用以下命令启动项目：

```bash
node server.js
```

如果端口 3001 被占用，可以修改 `.env` 文件中 `PORT` 的值。

项目启动后，您可以通过浏览器访问 `http://localhost:3001` 来使用 deepseek-math。

## 使用说明

1. 在输入框中输入数学表达式或方程。

2. 按 Enter 或点击“确定”按钮进行计算。

3. DeepSeek 完成计算后，结果将显示在下方。

## 贡献

欢迎提交 Issue，您也可以 Fork 本项目并提交 Pull Request。