---
sidebar_label: 配置
title: Diagram 配置
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Diagram 配置相关内容。浏览开发者指南和 API 参考、试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# Diagram 配置 {#diagram-configuration}

DHTMLX Diagram 提供了丰富的配置选项。您可以更改图表的缩放比例、设置形状和线条的默认类型、设置形状之间的间距、启用选择功能，并为形状设置带图标的工具栏。

### 设置 Diagram 模式 {#setting-the-diagram-mode}

您可以从以下 Diagram 模式中进行选择：`"default"`、`"org"`、`"mindmap"`、`"pert"`。有关它们的详细说明，请参阅 [Diagram 概述](/)一文。您可以通过 [type](api/diagram/type_property.md) 配置选项指定所需的类型，如下所示：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // `type: "org"` | `type: "mindmap"` | `type: "pert"`
});
diagram.data.parse(data);
~~~

### 设置默认形状类型 {#setting-the-default-shape-type}

您可以通过图表配置对象的 [`defaultShapeType`](api/diagram/defaultshapetype_property.md) 属性为所有形状设置默认类型：

~~~jsx {3}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

如果形状的配置对象不包含 `type` 属性，则将应用此值。

形状的默认类型如下：

- `"rectangle"` - 用于默认模式下的图表
- `"card"` - 用于默认模式或组织结构图模式下的图表
- `"topic"` - 用于思维导图模式下的图表
- `"task"` - 用于 PERT 模式下的图表

## 设置默认线条类型 {#setting-the-default-line-type}

您可以通过图表配置对象的 [`lineConfig`](api/diagram/lineconfig_property.md) 属性的 `lineType` 参数，为图表的所有连接线设置统一的类型：

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

如果线条对象不包含 `type` 属性，则将应用此值。

## 设置形状的默认配置 {#setting-the-default-configuration-of-a-shape}

在准备将数据加载到图表中时，您可以避免处理庞大的数据集。您可以为所需类型的所有形状和线条指定默认配置，从而减少代码中的记录数量。

为此，请使用图表配置对象的 [`defaults`](api/diagram/defaults_property.md) 属性：

<iframe src="https://snippet.dhtmlx.com/7bn52dl1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

`defaults` 对象包含若干 `key:value` 键值对，其中 *key* 表示形状或线条的类型，*value* 表示相应形状或线条的默认配置。

:::note
不能在形状/线条的默认配置中定义 `type` 和 `id` 属性
:::

查看[形状](shapes/configuration_properties.md)和[线条](lines/configuration_properties.md)的完整配置属性列表。

## 在 Diagram 的思维导图模式下排列形状 {#arranging-shapes-in-the-mindmap-mode-of-diagram}

在 Diagram 的思维导图模式下，子形状相对于根形状的排列由主算法自动定义。
要更改子形状的默认方向，请在初始化图表时使用 [`typeConfig`](api/diagram/typeconfig_property.md) 配置属性。

:::note
`typeConfig` 配置属性在 Diagram Editor 中不可用
:::

该属性允许您：

- [一次性为所有子形状设置方向](#setting-direction-for-all-child-shapes)
- [为特定子形状指定单独的方向](#setting-direction-for-individual-child-shape)

### 为所有子形状设置方向 {#setting-direction-for-all-child-shapes}

要将子形状设置在根形状的右侧/左侧，请使用 [`typeConfig`](api/diagram/typeconfig_property.md) 属性的 `direction` 特性：

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 为单个子形状设置方向 {#setting-direction-for-individual-child-shape}

您可以通过 [`typeConfig`](api/diagram/typeconfig_property.md) 属性的 `side` 特性为特定子形状设置强制方向。该特性是一个对象，包含一组 `key:value` 键值对，其中 *key* 表示形状的方向（left、right），*value* 表示包含形状 id 的数组。

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

未在 side 选项中设置的其他子形状将根据主算法自动排列。

## 在 Diagram 的 PERT 模式下设置日期格式 {#setting-date-format-in-the-pert-mode-of-diagram}

在 Diagram 的 PERT 模式下，您可以为 `task` 类型的形状指定所需的日期渲染格式。为此，请使用 [`typeConfig`](api/diagram/typeconfig_property.md) 属性的 `dateFormat` 特性：

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

## 定位 Diagram 和形状 {#positioning-diagram-and-shapes}

您可以在图表配置对象的 [`margin`](api/diagram/margin_property.md) 属性中指定图表在页面上的位置，并设置形状的边距：

<iframe src="https://snippet.dhtmlx.com/bwe9vm6i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 配置形状的自动布局 {#configuring-autoplacement-for-shapes}

DHTMLX Diagram 库允许您配置设置，以自动按层级结构排列 Diagram 中已连接的形状。您可以在 Diagram 的配置对象中指定 [`autoplacement`](api/diagram/autoplacement_property.md) 属性，并配置形状的连接模式以及未连接图表之间的间距：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100,
        placeMode: "radial",
        itemPadding: 10,
        levelPadding: 10
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

该属性可以包含以下选项：

- `mode` - （*string*）可选，形状的连接模式，`"direct"`（默认）或 `"edges"`
- `graphPadding` - （*number*）可选，设置未连接图表之间的间距，默认为 *200*
- `placeMode` - （*string*）可选，设置形状的布局模式，`"orthogonal"`（默认）或 `"radial"`
- `itemPadding` - （*number*）可选，项目之间的最小间距（最小值为 *1*），默认为 *20*
- `levelPadding` - （*number*）可选，层级之间的最小间距（最小值为 *1*），默认为 *20*

:::note
自动布局仅在应用 [`autoPlace()`](api/diagram/autoplace_method.md) 方法后才会生效。它仅在图表的默认模式下对形状有效。如果使用组或泳道，则自动布局不起作用。
:::

![径向自动布局与间距选项](/img/radial_autoplacement.png)

**相关示例：** [Diagram。默认模式。带间距选项的径向自动布局](https://snippet.dhtmlx.com/huut0l1s)

## 调整 Diagram 的缩放比例 {#adjusting-the-diagram-scale}

如有需要，您可以缩放图表以适应您的应用程序。这可以借助 [`scale`](api/diagram/scale_property.md) 选项来实现。
默认情况下，其值设置为 1。因此，要放大图表，请将该选项设置为大于 1 的值；要缩小图表，则相应地设置为小于 1 的值。

<iframe src="https://snippet.dhtmlx.com/9h89c3gl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 为形状设置工具栏 {#setting-toolbar-for-shapes}

DHTMLX Diagram 允许您为 Diagram 形状指定带图标的工具栏，以简化与它们的交互。您可以通过图表配置对象的 [`toolbar`](api/diagram/toolbar_property.md) 选项启用形状工具栏：

<iframe src="https://snippet.dhtmlx.com/4if395hd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 启用项目选择 {#enabling-items-selection}

您可以通过图表配置对象的 [`select`](api/diagram/select_property.md) 属性激活图表中项目的选择功能。在图表中启用选择功能后，您可以使用 Selection 对象 API 来[处理项目选择](guides/manipulating_items.md#selecting-items)。

:::note
选择对象的[预定义事件集](/api/selection/#events)可以帮助您定义在选择/取消选择项目期间处理图表行为的方式
:::

<iframe src="https://snippet.dhtmlx.com/jyoxn5h7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
