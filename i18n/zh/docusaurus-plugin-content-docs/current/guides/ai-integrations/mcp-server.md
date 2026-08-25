---
sidebar_label: DHTMLX MCP 服务器
title: 用于形状和连接器 API 的 DHTMLX Diagram MCP 服务器
description: 将 AI 助手指向该 MCP 服务器，即可获取有关形状、泳道、组织结构图和 Diagram Editor 的最新 DHTMLX Diagram 文档。
---

# DHTMLX Diagram MCP 服务器：形状、连接器和编辑器 API {#dhtmlx-diagram-mcp-server-shapes-connectors-and-editor-apis}

[DHTMLX Diagram](/) 让您真正掌控[形状几何属性](/shapes/configuration_properties)、[连接线路由](/lines/)和[布局规则](/guides/diagram/configuration)，以及编辑器配置所允许的任何其他选项。生成的代码需要体现当前的形状属性、连接线方法和布局选项，而不是仍停留在早期训练快照中的状态。

DHTMLX MCP 服务器正是为解决这一问题而生：在绘制任何形状之前，它就已将最新的 Diagram 文档呈现给助手。无论您使用的是[泳道](/swimlanes/)、[自定义形状](/shapes/custom_shape)、[Diagram Editor](/guides/diagram_editor/initialization)，还是库的其他任何部分，助手都会在生成响应之前检索最新的参考资料。

### MCP 端点 {#mcp-endpoint}

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 服务器涵盖所有主要的 DHTMLX 产品，而不仅仅是 DHTMLX Diagram。无论您使用的是哪个组件，相同的端点和配置步骤均适用。
:::

## MCP 服务器加速的 Diagram 工作 {#diagram-work-the-mcp-server-speeds-up}

DHTMLX Diagram 的文档已收录在 MCP 服务器的索引中，开发者可借此查询以下内容：

- 查询[形状](/shapes/default_shapes)、[线条](/lines/)、[分组](/groups/)或[泳道](/swimlanes/)的最新 API。
- 根据描述生成可直接运行的 Diagram 代码。
- 浏览[编辑器](/guides/diagram_editor/initialization)的配置选项、工具栏控件和事件处理方式。
- 查看[导出](/guides/data_export)选项，了解如何生成 PDF 或 PNG 输出。
- 通过[图表配置](/guides/diagram/configuration)为默认模式的图表设置自动布局选项。
- 使用可用的[数据方法](/guides/loading_data)加载图表数据并将其重新序列化。
- 处理 [Diagram 和编辑器事件](/guides/event_handling)以响应用户交互。
- 了解 [TypeScript 支持](/guides/using_typescript)情况，以及与 React、Vue、Angular 和 Svelte 的框架集成。

## Diagram MCP 服务器请求的内部机制 {#inside-a-diagram-mcp-server-request}

DHTMLX MCP 服务器基于模型上下文协议（Model Context Protocol，MCP）运行检索增强生成（Retrieval-Augmented Generation，RAG）流程，将每次查询路由到两种工作流程之一：*检索（Search）* 负责检索匹配的参考页面供助手使用，*推理（Inference）* 则直接读取这些页面并返回完整答案。一次请求中往往只有部分内容真正需要用到 Diagram 的文档，助手会先提取出这部分内容，其余部分则依靠自身能力处理。

下面以提示词 *"如何构建一个从内部 HR API 提取员工记录、并按部门自动排列的 DHTMLX Diagram 组织结构图？"* 为例，说明该流程的具体运作方式：

1. 助手先找出提示词中需要查阅文档的部分：如何为基于 JSON 数据集构建的组织结构图配置自动布局。
2. 服务器将其与图表配置文档进行匹配。
3. 由于该问题的答案需要生成代码，因此请求会被路由到 *检索（Search）*（如果是范围更窄的事实性问题，例如"哪个方法可以控制自动布局"，则会被路由到 *推理（Inference）*）。
4. *检索（Search）* 会从基于当前 Diagram 文档构建的向量索引中提取匹配的页面。
5. 这些页面会作为上下文返回给助手。
6. 助手利用该上下文配置自动布局，然后凭借自身知识编写 HR API 的数据获取逻辑，而不是去猜测 Diagram 的 API。

这样可以确保生成的 Diagram 代码始终与当前文档保持一致。

## 将 MCP 服务器接入您的 AI 工具 {#bringing-the-mcp-server-into-your-ai-tool}

下面列出的每个工具都会通过各自的方式连接到同一个 MCP 端点：有的使用 CLI 参数，有的使用 JSON 配置块。只需在每个工具中注册一次，此后您在该工具中打开的每个 Diagram 项目都会自动沿用这一连接：

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
Cursor 的[官方文档](https://cursor.com/en-US/docs/mcp)详细介绍了每一项 MCP 配置选项。
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
Antigravity 的[官方文档](https://antigravity.google/docs/mcp)全面介绍了 MCP 服务器的集成方式。
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
正在从 Gemini CLI 迁移到 Antigravity CLI？[相关指南](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)介绍了这一变更。
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
[官方文档](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)详细介绍了将 MCP 服务器连接到 ChatGPT 的每一步操作。
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

:::info
对于高强度的编码工作流程，其他支持 MCP 的工具可能效率更高。
:::

### 其他工具 {#other-tools}

大多数现代 AI 编程工具（包括 Windsurf、Cline、Continue.dev 等）会在其设置中以 "Model Context Protocol"、"Context Sources" 或 "Custom integrations" 等名称提供 MCP 功能。请将 `https://docs.dhtmlx.com/mcp` 添加为源 URL。

## MCP 服务器的隐私保护 {#the-privacy-side-of-the-mcp-server}

这一切都不会在您的本地设备上运行：DHTMLX MCP 服务器完全以远程服务的形式运行，且不会保留您个人数据的任何副本。

服务器记录查询日志，仅用于调试和改进服务。

希望完全关闭日志记录？商业部署方案可满足这一需求，请通过 `info@dhtmlx.com` 联系我们进行配置。

## 常见 Diagram 任务的提示词 {#prompts-for-common-diagram-tasks}

明确指出您需要的具体 Diagram 功能（形状、编辑器、导出等）的提示词，比笼统的提示词能检索到更相关的结果。下面的示例按功能分组。

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

## 写出 MCP 服务器能够响应的提示词 {#writing-prompts-the-mcp-server-can-act-on}

- **明确 API 范围。** 区分 diagram 实例和 editor，例如 "in the DHTMLX Diagram Editor" 与 "on the diagram object" 这两种表述的区别。目标越明确，服务器检索到的文档就越贴切。
- **注明具体的形状类型。** 类似 "a swimlane shape" 或 "a custom shape with HTML content" 这样的提示词，比笼统的 "a shape" 能更快检索到正确的参考页面。
- **在提示词中加入 "Use the docs"。** 这样的措辞会向助手表明应触发 MCP 查询，而不是仅依据训练数据作答。
- **明确说明您期望的版本行为。** 如果生成的代码与文档中的内容不一致，请添加 "based on the current DHTMLX Diagram documentation" 以强制触发新的检索。
