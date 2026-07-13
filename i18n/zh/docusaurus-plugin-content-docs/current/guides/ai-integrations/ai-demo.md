---
sidebar_label: AI 集成演示
title: 构建 AI 驱动的 Diagram
description: 分步指南：运行 DHTMLX Diagram AI 演示。使用 OpenAI API 通过文本生成组织结构图，并提供实时预览和 JSON 编辑器。
---

# 构建 AI 驱动的 Diagram {#building-ai-powered-diagram}

DHTMLX Diagram 可以与 AI 集成，用于创建 AI 驱动的图表应用程序。我们准备了一个示例，展示如何将 DHTMLX Diagram 与 AI 结合使用，根据自然语言提供的请求构建一个用于创建组织结构图的应用程序。

该[演示应用](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)包含以下功能：文本转图表转换、AI 驱动的 JSON 生成、生成图表的即时实时预览，以及用于查看和调整生成的 JSON 数据的内置代码编辑器，从而实时更新图表预览。有关更多信息，请参阅相应的 [GitHub 仓库](https://github.com/DHTMLX/diagram-org-chart-builder-ai-demo)。

## 项目设置 {#project-setup}

要下载项目，请使用以下命令克隆仓库：

~~~jsx
git clone diagram-org-chart-builder-ai-demo
~~~

然后通过以下命令进入项目仓库：

~~~jsx
cd diagram-org-chart-builder-ai-demo
~~~

### 安装依赖 {#installing-dependencies}

要安装依赖并运行应用程序，您需要一个包管理器。本指南使用 [npm](https://www.npmjs.com/) —— 通过调用以下命令安装演示应用：

~~~jsx
npm install
~~~

### 调整环境变量 {#adjusting-environment-variables}

接下来，您需要配置环境变量。为此，请通过复制 `env.sample` 文件的内容，在 **diagram-org-chart-builder-ai-demo** 目录下创建一个名为 `.env` 的新文件。
新创建的 `.env` 文件将存储您的密钥和配置。请填写下方所需的值：

~~~jsx title="diagram-org-chart-builder-ai-demo/.env"
# --- OpenAI API 配置 ---
OPENAI_API_KEY=sk-YourSecretApiKeyGoesHere
OPENAI_BASE_URL=https://api.openai.com/v1

# --- 安全配置 ---
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://127.0.0.1:3001,http://localhost:5500,http://127.0.0.1:5500

# --- 服务器配置（可选） ---
PORT=3001
~~~

:::info
请勿上传您的 `.env` 文件，因为其中包含敏感信息！
:::

请查看下方 `.env` 文件变量的说明：

- `OPENAI_API_KEY`：（必填）您用于 AI 服务的密钥。
- `OPENAI_BASE_URL`：AI 服务的 API 端点。可以更改为使用代理或与 OpenAI API 兼容的其他提供商。
- `CORS_ALLOWED_ORIGINS`：一项至关重要的安全设置。这是一个以逗号分隔的网址列表，列出了允许连接到您后端服务器的地址。在生产环境中，您**必须**将其更改为您公开前端的网址（例如 `https://myapp.com`）。
- `PORT`：（可选）服务器运行的端口号。如果未设置，则默认为 3001。

### 运行应用程序 {#running-the-application}

要启动应用程序，请在应用目录中使用以下命令：

~~~jsx
npm start // 这是必需的启动命令
~~~

您应该会在终端中看到以下输出：

~~~jsx
Server started on port 3001.
~~~

然后打开网页浏览器并访问：`http://localhost:3001`，即可看到应用程序已准备好生成图表。

## 演示应用的工作原理 {#how-the-demo-app-works}

以下是将文本请求转换为图表的基本步骤：

- 首先，用户输入一段简明的图表文本描述，例如："一个包含一位高层管理者和五个部门的图表，每个部门下设两名员工"。
- 然后将提示词发送到后端，AI 服务根据请求生成结构化的 JSON 配置。
- 之后，前端获取结果数据，并立即渲染出一个交互式的 DHTMLX 图表。
- 接下来，相应的 JSON 代码会显示在图表下方的代码编辑器中。用户可以微调代码，并实时编辑生成的图表。
- 最后，用户可以将生成的数据保存为 JSON 文件，或将图表导出为 PDF 或 PNG 文件。
