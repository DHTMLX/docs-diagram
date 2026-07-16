---
sidebar_label: 线条
title: 线条
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解线条。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 线条 {#lines}

## 概述 {#overview}

连接形状的线条的外观和风格由您初始化图表时所使用的模式决定：[默认](#lines-in-the-default-mode)、[组织结构图](#lines-in-the-org-chart-mode)、[思维导图](#lines-in-the-mindmap-mode) 或 [PERT](#links-in-the-pert-mode)。

### 默认模式下的线条 {#lines-in-the-default-mode}

在 Diagram 的默认模式下，可以按照特定流程所需的顺序，使用["straight"（默认）或 "elbow"](lines/configuration_properties.md) 线条连接各个形状，从而构成该流程的示意图。

要在 Diagram/Diagram 编辑器的默认模式下为线条添加文字，请使用 [lineTitle](/line_titles/) 对象的 `text` 属性。

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### 组织结构图模式下的线条 {#lines-in-the-org-chart-mode}

Diagram 的组织结构图模式表示一个组织结构图，其中包含按层级顺序通过["elbow" 线条](lines/configuration_properties.md)连接的一组形状。

<iframe src="https://snippet.dhtmlx.com/98tzmzpg?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

您可以通过形状对象的 `dir: "vertical"` 配置属性，为父级形状定义垂直方向的连接。

### 思维导图模式下的线条 {#lines-in-the-mindmap-mode}

Diagram 的思维导图模式用于渲染另一种层级图表。各个形状通过["curved" 线条](lines/configuration_properties.md)连接，并围绕中心形状排列。

<iframe src="https://snippet.dhtmlx.com/lo1vm0e8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

当您需要表示一个由子主题分支环绕的核心主题或想法时，该模式非常适用。

子级形状相对于根形状的排列方式由主算法自动定义。
如需更改子级形状的默认方向，请在初始化图表时使用 [`typeConfig`](api/diagram/typeconfig_property.md) 配置属性。

### PERT 模式下的链接 {#links-in-the-pert-mode}

Diagram 的 PERT 模式用于渲染任务和项目的序列以及它们之间的连接。`"task"`、`"milestone"` 和 `"project"` 类型的形状通过 [`"links"` 连接符](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode)连接。

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>


## 设置形状之间的连接 {#setting-connections-between-shapes}

要在 Diagram 中连接形状，您可以使用以下两种方式之一：

- **使用线条对象**

您需要指定单独的对象来描述形状连接的逻辑。例如：

~~~jsx
const data = [
    // 形状
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager" },
    { id: "3", text: "Technical Director" },
    { id: "4", text: "Manager" },
    { id: "5", text: "Technical Director" },
    // 连接线
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
    { "id": "1-4", "from": "1", "to": "4", "type": "line" },
    { "id": "1-5", "from": "1", "to": "5", "type": "line" }
];
~~~

线条对象中的 `type` 属性可让您为每条线单独设置类型。

:::note
请参阅[线条对象的完整配置属性列表](lines/configuration_properties.md)。
:::

- **使用 `"parent"` 属性**

:::note
此方式在 Diagram/Diagram 编辑器的默认模式下不适用。
:::

您可以在形状的配置对象中指定 `parent` 属性，并将其父级形状的 id 设置为该属性的值：

~~~jsx
const data = [
    // 形状
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
~~~

在这种情况下，所有连接线都将具有相同的类型。

### 设置默认线条类型 {#setting-the-default-line-type}

您可以通过图表配置对象中 [`lineConfig`](api/diagram/lineconfig_property.md) 属性的 `lineType` 参数，为图表的所有连接线设置统一的类型：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

如果[线条对象](lines/configuration_properties.md)不包含 `type` 属性，则将应用 `lineType` 参数的值。

### 设置线条的连接类型 {#setting-the-connection-type-of-the-line}

您可以通过图表配置对象中 [`lineConfig`](api/diagram/lineconfig_property.md) 属性的 `connectType` 参数，为图表的线条指定连接类型。它提供以下类型：

- `"elbow"`（Diagram 默认模式和组织结构图模式下的默认类型）
- `"straight"`
- `"curved"`（Diagram 思维导图模式下的默认类型）。请注意，`"curved"` 类型的连接线仅在 Diagram 思维导图模式下使用

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        connectType: "straight" // 默认模式下可选 "elbow" 或 "straight"
    }
});
diagram.data.parse(data);
~~~

如果[线条对象](lines/configuration_properties.md)不包含 `connectType` 属性，则将应用 `connectType` 参数的值。
