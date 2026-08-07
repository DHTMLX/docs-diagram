---
sidebar_label: DHTMLX MCP 服务器
title: 在 AI 编程助手中使用 DHTMLX MCP 服务器
description: 通过 MCP 服务器将 AI 编程助手连接到实时的 DHTMLX Diagram 文档。涵盖形状、泳道、组织结构图、Diagram Editor 等内容。
---

# 在 AI 编程助手中使用 DHTMLX MCP 服务器 {#using-dhtmlx-mcp-server-with-ai-coding-assistants}

构建图表应用程序需要对形状、连接、布局和编辑器配置进行精确控制。当 AI 工具根据过时的训练数据生成 [DHTMLX Diagram](/) 代码时，结果往往是 API 不匹配、属性缺失，以及已不存在的配置选项。

DHTMLX 模型上下文协议（Model Context Protocol，MCP）服务器通过让 AI 工具直接访问实时的 Diagram 文档来解决这一问题。无论您使用的是[泳道](/swimlanes/)、[自定义形状](/shapes/custom_shape)、[Diagram Editor](/guides/diagram_editor/initialization)，还是库的其他任何部分，助手都会在生成响应之前检索最新的参考资料。

**MCP 端点**

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 服务器涵盖所有主要的 DHTMLX 产品，而不仅仅是 DHTMLX Diagram。无论您使用的是哪个组件，相同的端点和配置步骤均适用。
:::

## MCP 服务器对 Diagram 有哪些帮助 {#where-mcp-server-helps-with-diagram}

MCP 服务器会为完整的 DHTMLX Diagram 文档建立索引。以下是 MCP 服务器常见的实用场景：

- 查询[形状](/shapes/default_shapes)、[线条](/lines/)、[分组](/groups/)或[泳道](/swimlanes/)的最新 API。
- 根据描述生成可直接运行的 Diagram 代码。
- 浏览[编辑器](/guides/diagram_editor/initialization)的配置选项、工具栏控件和事件处理方式。
- 查看[导出](/guides/data_export)选项，了解如何生成 PDF 或 PNG 输出。
- 通过[图表配置](/guides/diagram/configuration)为默认模式的图表设置自动布局选项。
- 使用可用的[数据方法](/guides/loading_data)加载图表数据并将其重新序列化。
- 处理 [Diagram 和编辑器事件](/guides/event_handling)以响应用户交互。
- 了解 [TypeScript 支持](/guides/using_typescript)情况，以及与 React、Vue、Angular 和 Svelte 的框架集成。

## DHTMLX MCP 服务器的工作原理 {#how-dhtmlx-mcp-server-works}

该服务器将检索增强生成（Retrieval-Augmented Generation，RAG）流程与 MCP 相结合，使 AI 助手能够按需查询文档，而不必仅依赖训练数据。

例如，当您提问 *"如何配置带有自定义单元格表头的泳道图？"* 时，助手会通过 MCP 端点发送该提示。服务器会将其与泳道相关文档进行匹配，检索出相关的参考页面，并将其作为上下文返回。随后，助手会基于当前的 API（而非训练时的快照）生成代码。

## 将 AI 工具连接到 Diagram {#connecting-ai-tools-to-diagram}

AI 开发工具通常通过 CLI 命令或 JSON 配置文件来支持 MCP。无论采用哪种方式，核心步骤都是注册服务器 URL：

~~~
https://docs.dhtmlx.com/mcp
~~~

以下列出了最常用工具的设置说明。

### Claude Code 设置 {#claude-code-setup}

:::info
有关将 MCP 服务器连接到 Claude Code 的完整说明，请参阅[官方文档](https://code.claude.com/docs/en/mcp)。
:::

将 DHTMLX MCP 服务器添加到 Claude Code 最快的方法是通过 CLI：

~~~bash
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

如需手动配置，请将以下条目添加到您的 `.mcp.json` 文件中：

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor 设置 {#cursor-setup}

:::info
您可以在[官方文档](https://cursor.com/en-US/docs/mcp)中找到 Cursor 的详细 MCP 设置步骤。
:::

请按照以下步骤将 DHTMLX MCP 服务器连接到 Cursor：

1. 打开设置（Mac 上按 `Cmd+Shift+J`，Windows/Linux 上按 `Ctrl+Shift+J`）
2. 进入 **Tools & MCP**
3. 点击 **Add Custom MCP**
4. 粘贴以下配置：

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
有关在 Antigravity 中集成 MCP 服务器的完整详情，请参阅[官方文档](https://antigravity.google/docs/mcp)。
:::

以下是将 DHTMLX MCP 服务器连接到 Google Antigravity 需要完成的步骤：

1. 打开命令面板
2. 输入 "mcp add"
3. 选择 "HTTP"
4. 提供以下值：
- 名称：
~~~
dhtmlx-mcp
~~~
- URL：
~~~
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
请查看[相关指南](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)，了解从 Gemini CLI 迁移到 Antigravity CLI 的相关信息。
:::

要将 DHTMLX MCP 服务器连接到 Antigravity CLI，请在以下位置之一创建 `mcp_config.json`：

- 全局：`~/.gemini/config/mcp_config.json`
- 工作区：`.agents/mcp_config.json`

添加以下配置：

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

然后在终端中运行 `agy`。

### ChatGPT 设置 {#chatgpt-setup}

:::info
有关将 MCP 服务器连接到 ChatGPT 的完整指南，请参阅[官方文档](https://developers.openai.com/api/docs/guides/tools-connectors-mcp)。
:::

请按照以下步骤将 DHTMLX MCP 服务器连接到 ChatGPT：

1. 进入 **Settings** → **Apps & Connectors**
2. 点击 **Advanced settings**
3. 启用 **Developer mode**
4. 返回 **Apps & Connectors** 界面并点击 "Create"
5. 配置连接器：
- 名称：
~~~
dhtmlx-mcp
~~~
- URL：
~~~
https://docs.dhtmlx.com/mcp
~~~
- 身份验证：`No authentication`
6. 点击 **Create**

连接完成后，ChatGPT 会在对话中回答问题时检索 Diagram 文档。

:::note
请注意，与 ChatGPT 集成 MCP 可能会导致响应速度变慢。如需更快的体验，请考虑使用本页面列出的其他工具。
:::

### 其他工具 {#other-tools}

大多数现代 AI 编程工具（包括 Windsurf、Cline、Continue.dev 等）会在其设置中以 "Model Context Protocol"、"Context Sources" 或 "Custom integrations" 等名称提供 MCP 功能。请将 `https://docs.dhtmlx.com/mcp` 添加为源 URL。

## 隐私与数据处理 {#privacy-and-data-handling}

DHTMLX MCP 服务器是一项纯云端服务，在远程运行，不会影响您的本地环境，也不会存储任何个人用户数据。查询记录可能会出于调试和服务改进的目的而被记录。

如果团队需要更严格的隐私保障，可以申请禁用查询日志记录的商业部署方案。详情请联系 `info@dhtmlx.com`。

## 使用 AI 编写 Diagram 提示词示例 {#example-prompts-for-diagram-with-ai}

连接 MCP 服务器后，请围绕具体目标来表述提示词，以便助手了解需要查阅 Diagram API 的哪个部分。以下提示词按任务类型分类，您可以根据需要复制并调整。

**创建图表**

~~~
How do I create a swimlane diagram with custom sections in DHTMLX Diagram? Use the docs.
~~~
~~~
I want to build an org chart from a JSON data set in DHTMLX Diagram. How do I configure the auto-layout?
~~~
~~~
How do I create a flowchart with decision nodes and multiple links in DHTMLX Diagram?
~~~
~~~
How do I use autoPlace() to automatically arrange shapes in DHTMLX Diagram?
~~~

**处理形状**

~~~
I want to add custom shapes with icons to DHTMLX Diagram. How do I define a shape template?
~~~
~~~
How do I restrict which shapes a user can place in the DHTMLX Diagram Editor?
~~~
~~~
How do I change the default text style and background color for all shapes in DHTMLX Diagram?
~~~

**配置编辑器**

~~~
I want to enable inline editing for shape text in DHTMLX Diagram.
~~~
~~~
How do I add a custom toolbar button to the DHTMLX Diagram Editor?
~~~

**数据与导出**

~~~
How do I export a DHTMLX Diagram to a PNG file?
~~~
~~~
What format does DHTMLX Diagram use for serialized data, and how do I reload it?
~~~

## 编写高效 Diagram 提示词的技巧 {#tips-for-effective-diagram-prompts}

- **明确 API 范围。** 区分 diagram 实例和 editor，例如 "in the DHTMLX Diagram Editor" 与 "on the diagram object" 这两种表述的区别。目标越明确，服务器检索到的文档就越贴切。
- **注明具体的形状类型。** 类似 "a swimlane shape" 或 "a custom shape with HTML content" 这样的提示词，比笼统的 "a shape" 能更快检索到正确的参考页面。
- **在提示词中加入 "Use the docs"。** 这样的措辞会向助手表明应触发 MCP 查询，而不是仅依据训练数据作答。
- **明确说明您期望的版本行为。** 如果生成的代码与文档中的内容不一致，请添加 "based on the current DHTMLX Diagram documentation" 以强制触发新的检索。
