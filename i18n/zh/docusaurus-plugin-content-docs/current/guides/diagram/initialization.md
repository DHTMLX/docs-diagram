---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解如何开始使用 Diagram。浏览开发者指南和 API 参考、试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# Diagram 初始化 {#diagram-initialization}

在本文中，我们将讨论将 DHTMLX Diagram 添加到页面的各个阶段。此过程包括以下几个简单步骤：

- [下载 DHTMLX Diagram 软件包](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml)并将其解压到项目文件夹中
- [在页面中引入 DHTMLX Diagram 源文件](#including-required-code-files)
- [使用对象构造函数初始化 Diagram](#initializing-diagram)
- [将数据加载到 Diagram 中](#loading-data-into-diagram)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="codebase/diagram.js"></script>
    <link rel="stylesheet" href="codebase/diagram.css">
</head>

<body>
    <div id="diagram_container"></div>
    <script>
        // 准备图表数据
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // 更多对象
        ];

        // 创建 DHTMLX Diagram
        const diagram = new dhx.Diagram("diagram_container", {
            // 配置选项
        });

        // 将数据加载到图表中
        diagram.data.parse(data);
    </script>
</body>
</html>
~~~

## 引入所需的代码文件 {#including-required-code-files}

要创建 Diagram，您需要在页面中引入 2 个源文件：

- **diagram.js**
- **diagram.css**

请确保为这些文件设置正确的相对路径：

~~~html
<script type="text/javascript" src="../codebase/diagram.js"></script>
<link rel="stylesheet" href="../codebase/diagram.css">
~~~

DHTMLX Diagram 软件包的结构如下：

- **sources** - 库的源代码文件。这些文件未经压缩，易于阅读。该软件包主要用于组件的调试

:::note
请注意，Diagram 库的**试用版**不包含 sources 文件夹。
:::

- **samples** - 代码示例
- **codebase** - 库的打包代码文件。这些文件体积更小，适用于生产环境
:::info
在您的应用程序中，需要使用 **codebase** 文件夹中的文件
:::

## 初始化 Diagram {#initializing-diagram}

您可以在容器、文档主体或布局单元格中初始化 Diagram。

### 在容器中初始化 {#initialization-in-a-container}

要在容器中初始化图表，请使用 `dhx.Diagram` 构造函数，并向构造函数传递以下两个参数：

- 用于放置 Diagram 的容器，我们将其 id 设为 `"diagram_container"`：

~~~html title="index.html"
<div id="diagram_container"></div>
~~~

- 一个包含[配置属性](#configuration-properties)的对象。如果没有向构造函数传递此参数，则将应用默认设置

~~~jsx title="index.js"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 在文档主体中初始化 {#initialization-in-the-document-body}

您可以跳过为 Diagram 设置容器的步骤，直接将其添加到文档主体中：

~~~jsx
const diagram = new dhx.Diagram(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 在布局单元格中初始化 {#initialization-in-a-layout-cell}

您也可以在[布局单元格](https://docs.dhtmlx.com/suite/layout/)中初始化图表。在这种情况下，请使用 *null* 代替容器：

~~~jsx
const diagram = new dhx.Diagram(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram"
        }
    ]
});

layout.getCell("diagram").attach(diagram);
~~~

### 配置属性 {#configuration-properties}

要更改[图表的配置](guides/diagram/configuration.md)，您可以在作为构造函数第二个参数传递的 config 对象中指定所需的属性。

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.7,
    // 其他配置选项
});
~~~

请参阅 [Diagram 的完整配置属性列表](api/diagram/api_overview.md#diagram-properties)。

**相关示例：** [Diagram Editor。默认模式。宽幅流程图](https://snippet.dhtmlx.com/4d4k3o8p)

此外，您也可以通过图表的 `config` 对象访问某个选项并设置/修改其值。请不要忘记调用 [`paint()`](api/diagram/paint_method.md) 方法，以使用新配置重新渲染图表：

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.config.scale = 0.7;
diagram.paint();
~~~

## 将数据加载到 Diagram 中 {#loading-data-into-diagram}

有关将数据加载到 DHTMLX Diagram 中的详细信息，请参阅[加载和存储数据](guides/loading_data.md)一文。
