---
sidebar_label: 形状的基本集合
title: 形状的基本集合
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解形状的基本集合。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 形状的基本集合 {#basic-sets-of-shapes}

DHTMLX Diagram 库为您提供了一系列可用于构建图表的形状集合。每种 Diagram 模式：[默认](#shapes-in-the-default-mode)、[组织结构图](#shapes-in-the-org-chart-mode)、[思维导图](#shapes-in-the-mindmap-mode) 和 [PERT](#shapes-in-the-pert-mode)，都拥有一套*基本*形状类型集合。

:::tip
您可以将任意类型的形状添加到以任意模式初始化的图表中。在[准备要加载到图表中的数据集](guides/loading_data.md#preparing-data-to-load)时，将所需形状的名称用作形状对象中 `type` 属性的值。
:::

请参阅[形状对象的完整配置属性列表](shapes/configuration_properties.md)。

## 默认模式下的形状 {#shapes-in-the-default-mode}

在 Diagram 的 `default` 模式下，基本集合包括**流程图**形状。请查看可用的流程图形状类型：

![](/img/flowshapes_types.png)

此外还有 `"text"` 项，它表示可作为形状在图表中使用并与其他形状连接的简单文本。

![](/img/text_item.png)

**相关示例：** [Diagram 编辑器。默认模式。宽幅流程图](https://snippet.dhtmlx.com/4d4k3o8p)

:::note
您可以在 Diagram 的默认模式下对形状进行分组。[请查看相关指南](/groups/)。
:::

### 属性 {#properties}

请查看 [Diagram `default` 模式下的形状](shapes/configuration_properties.md#properties-specific-for-the-default-mode)以及[**流程图形状**和 `"text"` 项](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes)的特有配置属性。

## 组织结构图模式下的形状 {#shapes-in-the-org-chart-mode}

在 Diagram 的**组织结构图**模式下，基本集合包括两种类型的形状：`"card"` 和 `"img-card"`。

每个 `"card"` 类型的形状都包含文本和一条彩色标题线。处于同一层级的形状拥有相同颜色的标题。下面的组织结构图中展示了 `"card"` 形状的示例：

![](/img/orgchart_card_shapes.png)

**相关示例：** [Diagram。组织结构图模式。基础初始化](https://snippet.dhtmlx.com/5ign6fyy?mode=result)

`"img-card"` 类型可用于添加带图像的形状。请记得通过形状对象的 `img` 属性为卡片提供图像。下面的组织结构图使用 `"img-card"` 类型的形状构建而成：

![](/img/orgchart_imgcard_shapes.png)

**相关示例：** [Diagram 编辑器。组织结构图模式。基础初始化](https://snippet.dhtmlx.com/og4qm3ja?mode=result)

### 属性 {#properties-1}

请查看 [Diagram **组织结构图**模式下的形状](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode)、[`"card"` 形状](shapes/configuration_properties.md#properties-specific-for-card-shapes)
以及 [`"img-card"` 形状](shapes/configuration_properties.md#properties-specific-for-img-card-shapes)的特有配置属性。

## 思维导图模式下的形状 {#shapes-in-the-mindmap-mode}

在 Diagram 的 `mindmap` 模式下，`"topic"` 类型的形状是基本形状。每个形状都包含文本和一条彩色边框。轮廓的颜色取决于该形状所属的层级。下面的思维导图中给出了 `"topic"` 形状的示例：

![](/img/mindmap_basic.png)

**相关示例：** [Diagram。思维导图模式。基础初始化](https://snippet.dhtmlx.com/3igf1gd5)

### 属性 {#properties-2}

请查看 [Diagram `mindmap` 模式下的形状](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode)以及 [`"topic"` 形状](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes)的特有配置属性。

## PERT 模式下的形状 {#shapes-in-the-pert-mode}

Diagram 的 **PERT** 模式下的基本形状类型包括：

- `"task"` 类型 - 一种包含标题并渲染日期和持续时间的形状：

![](/img/pert_task_shape.png)

- `"milestone"` 类型 - 一种没有持续时间、用于表示项目关键节点的形状：

![](/img/pert_milestone_shape.png)

- `"project"` 类型 - 一种用于[对 `"task"` 和 `"milestone"` 类型的形状进行分组](/groups/#grouping-shapes-in-the-pert-mode)的容器：

![](/img/pert_project_group.png)


**相关示例：** [Diagram。PERT 图。初始化](https://snippet.dhtmlx.com/4h5fi7xd)

### 属性 {#properties-3}

请查看 [`"task"` 形状](shapes/configuration_properties.md#properties-specific-for-task-shapes)、[`"milestone"` 形状](shapes/configuration_properties.md#properties-specific-for-milestone-shapes)以及 [`"project"` 分组](groups/configuration_properties.md#properties-specific-for-project-object)的特有配置属性。

## 设置形状的类型 {#setting-the-type-of-a-shape}

要设置形状的类型，请在准备要加载到图表中的相关 JSON 结构时，使用形状对象中的 [`type`](shapes/configuration_properties.md) 属性：

~~~jsx
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 280, "y": 120, "text": "Read N", "type": "output" },
    { "id": 3, "x": 280, "y": 240, "text": "M=1\nF=2", "type": "process" },
    { "id": 4, "x": 280, "y": 360, "text": "F=F*M", "type": "process" },
    { "id": 5, "x": 280, "y": 480, "text": "Is M=N?", "type": "decision" }
];
~~~

:::note
请参阅[形状对象的完整配置属性列表](shapes/configuration_properties.md)。在为基本集合中的形状创建数据对象时，请勿添加自定义属性。如需添加自定义属性，您需要[创建自定义形状](shapes/custom_shape.md)。
:::

### 设置默认形状类型 {#setting-the-default-shape-type}

您还可以通过图表配置对象的 [`defaultShapeType`](api/diagram/defaultshapetype_property.md) 属性为所有形状设置默认类型：

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // type: "org" | type: "mindmap" | type: "pert"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

如果形状的配置对象不包含 `type` 属性，则将应用此默认值。
