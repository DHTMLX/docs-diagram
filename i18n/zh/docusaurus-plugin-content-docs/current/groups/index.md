---
sidebar_label: Group
title: Group
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Group。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# Group {#groups}

## Group 概述 {#group-overview}

group 是 Diagram 中一种独立类型的项目。您可以通过以不同方式对图形或其他 group 进行分组，绘制简单或更复杂的图表。您可以创建单级和嵌套的 group，并配置它们的外观和行为。

:::note
group 仅在 Diagram/Diagram Editor 的默认模式下可用（type: `"default"`）。
:::

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## 创建 group {#creating-groups}

要创建 group，请在准备要加载到 diagram 的相关 JSON 结构时，将 group 对象内 `type` 属性的值指定为 *"$group"*：

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "User Access"
        },
        groupChildren: ["1.1", "1.2"]
    },
    {
        type: "it",
        id: "1.1",
        x: 50,
        y: 75,
        text: "Remote Desktop"
    },
    {
        type: "it",
        id: "1.2",
        x: 200,
        y: 75,
        text: "Login Server"
    },
];

// 初始化 diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### 属性 {#properties}

请参阅 [`group` 对象的完整配置属性列表](groups/configuration_properties.md)，了解如何配置 group 的位置和外观。

## 在 PERT 模式下对图形进行分组 {#grouping-shapes-in-the-pert-mode}

要在 Diagram 的 PERT 模式下对 `"task"` 和 `"milestone"` 类型的图形进行分组，请在 diagram 的数据集中使用 `"project"` 对象。`"project"` 对象作为任务和里程碑的容器，其工作方式类似于 group。它支持创建具有多种嵌套级别的 PERT 图表，并提供可视化分组。

~~~jsx
const data = [
    {
        "id": "4.2",
        "text": "QA Testing",
        "type": "project",
        "parent": "4",
        "start_date": new Date(2026, 1, 18),
        "duration": 3,
        "progress": 0,
        "open": true
    },
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    },
    {
        "id": "4.2.2",
        "text": "Usability Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 20),
        "duration": 1
    }
];
~~~

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### 属性 {#properties-1}

请参阅 [`"project"` 对象的完整配置属性列表](groups/configuration_properties.md#properties-specific-for-project-object)，了解如何配置 project 中任务和里程碑的位置与外观。

## 配置 group 标题 {#configuring-the-group-header}

group 的标题默认是禁用的。要创建带有标题的 group，您需要在 group 的配置对象中指定 `header` 属性。

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {}
    }
];
~~~

该属性包含多个用于轻松调整 group 标题配置的属性。
例如，您可以定义标题的高度和位置，为标题指定文本，并调整其设置。

<iframe src="https://snippet.dhtmlx.com/6hunrja8?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="470"></iframe>

请查看 [group 对象的完整 API 属性列表](groups/configuration_properties.md)。

### 标题图标 {#a-header-icon}

要折叠或展开 group，请启用 [标题](groups/configuration_properties.md) 属性的 `closable` 属性。这样，标题中将添加一个允许用户展开/折叠 group 的图标。

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            closable: true
        }
    }
];
~~~

您可以通过 [group 对象](groups/configuration_properties.md) 的 `iconColor` 属性更改图标的颜色。

## 配置 group 项目的行为 {#configuring-the-behavior-of-group-items}

默认情况下，您可以将 group 的任意子项拖出该 group，并将其拖入另一个 group。
要更改 group 项目的行为方式，请使用 [group 对象](groups/configuration_properties.md) 的 `exitArea` 属性中的 `groupBehavior` 和 `padding` 属性。

:::note
`exitArea` 属性仅定义可配置 group 的第一级子项的行为。
:::

<iframe src="https://snippet.dhtmlx.com/4gxy38ek?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

`groupBehavior` 属性的 `"unbound"` 和 `"boundBorderExtension"` 值允许您定义子项是否可以被移出 group，并使 group 的边框在用户尝试将图形拖到外部时扩展。如果需要，您还可以通过 `"boundNoBorderExtension"` 值禁用将图形拖出 group 的功能。

![](/img/group_behavior.gif)

如果 `groupBehavior` 设置为 `"boundNoBorderExtension"` 或 `"boundBorderExtension"`，您可以指定在 group 内移动图形时，group 与图形边缘之间的 padding。为此，请使用 `padding` 属性：

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 830,
        height: 400,
        x: 0,
        y: 0,
        exitArea: {
            groupBehavior: "boundBorderExtension",
            padding: 10
        },
        //fixed: true,
        groupChildren: ["1.1", "1.2", "1.3"]
    },
    // ...
];
~~~
