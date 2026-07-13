---
sidebar_label: 初始化
title: Diagram Editor 初始化
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解如何开始使用 Diagram Editor。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# Diagram Editor 初始化 {#diagram-editor-initialization}

本文介绍了在页面中显示 Diagram Editor 的流程。要初始化编辑器，您需要引入编辑器专用的源文件，并使用 `DiagramEditor` 实例。除此之外，初始化阶段与 Diagram 组件的初始化过程相同：

- [下载 DHTMLX Diagram 软件包](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml)，并将其解压到项目的文件夹中
- [在页面中引入源文件](#including-required-code-files)
- [使用对象构造函数初始化 Diagram Editor](#initializing-diagram-editor)
- [将数据加载到 Diagram Editor 中](#loading-data-into-diagram-editor)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
    <link rel="stylesheet" href="../codebase/diagramWithEditor.css">
</head>

<body>
    <div id="editor_container"></div>
    <script>
        // 准备数据
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // 更多对象
        ];

        // 创建 Diagram Editor
        const editor = new dhx.DiagramEditor("editor_container", {
            // 配置选项
        });

        // 将数据加载到编辑器中
        editor.parse(data);
    </script>
</body>
</html>
~~~

## 引入所需的代码文件 {#including-required-code-files}

要创建 Diagram Editor，您需要在页面中引入 2 个源文件：

- **diagramWithEditor.js**
- **diagramWithEditor.css**

请确保为这些文件设置了正确的相对路径：

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

### 通过 npm 或 yarn 安装 Diagram Editor {#installing-diagram-editor-via-npm-or-yarn}

您可以使用 `yarn` 或 `npm` 包管理器，将 JavaScript Diagram Editor 引入到您的项目中。

#### 通过 npm 或 yarn 安装试用版 Diagram Editor {#installing-trial-diagram-editor-via-npm-or-yarn}

:::info
如果您想使用 Diagram Editor 的试用版本，请下载[**试用版 Diagram 软件包**](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml)，并按照 *README* 文件中说明的步骤操作。请注意，试用版 Diagram Editor 仅可使用 30 天。
:::

#### 通过 npm 或 yarn 安装 PRO 版 Diagram Editor {#installing-pro-diagram-editor-via-npm-or-yarn}

:::info
您可以在[客户专区](https://dhtmlx.com/clients/)中生成您的 **npm** 登录名和密码，从而直接访问 DHTMLX 的私有 **npm**。该页面还提供了详细的安装指南。请注意，只有在您的 Diagram 专有许可处于有效状态时，才能访问私有 **npm**。
:::

## 初始化 Diagram Editor {#initializing-diagram-editor}

您可以在容器中、文档主体中，或在布局单元格中初始化 Diagram Editor。

### 在容器中初始化 {#initialization-in-a-container}

要在容器中初始化 Diagram Editor，请使用 `dhx.DiagramEditor` 构造函数，并向构造函数传入以下两个参数：

- 用于放置 Diagram Editor 的容器，我们将其 id 设为 `"editor_container"`：

~~~html title="index.html"
<div id="editor_container"></div>
~~~

- 一个包含[配置属性](#configuration-properties)的对象。如果未向构造函数传入该参数，将应用默认设置

~~~jsx title="index.js"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 在文档主体中初始化 {#initialization-in-the-document-body}

您也可以跳过为 Diagram Editor 设置容器的步骤，直接将其添加到文档主体中：

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 在布局单元格中初始化 {#initialization-in-a-layout-cell}

您还可以在 [Layout 单元格](https://docs.dhtmlx.com/suite/layout/)中初始化编辑器。在这种情况下，请使用 *null* 代替容器：

~~~jsx
const editor = new dhx.DiagramEditor(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram_editor"
        }
    ]
});

layout.getCell("diagram_editor").attach(editor);
~~~

### 配置属性 {#configuration-properties}

要更改编辑器的配置，您可以在作为构造函数第二个参数传入的配置对象中指定所需的属性。

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "default" | "org" | "mindmap"
    shapeBarWidth: 320,
    lineGap: 20
});
~~~

### 属性 {#properties}

查看 [Editor 的完整配置属性列表](api/diagram_editor/editor/config/overview.md)。

## 将数据加载到 Diagram Editor 中 {#loading-data-into-diagram-editor}

您可以通过编辑器的 [parse()](api/diagram_editor/editor/methods/parse_method.md) 方法，将[适用的数据集](guides/loading_data.md#preparing-data-to-load)加载到编辑器中。

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
