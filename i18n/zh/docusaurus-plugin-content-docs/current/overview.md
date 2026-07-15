---
sidebar_label: Diagram 概述
title: Diagram 概述
slug: /
description: 您可以在文档中全面了解 DHTMLX JavaScript Diagram 库。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# DHTMLX Diagram 概述

DHTMLX Diagram 是一个客户端图表组件，可用于以可视化形式（如示意图、图表、组织结构图、思维导图等）展示对象、概念或生物之间的关系。借助 Diagram，您可以用简单易懂的方式呈现繁杂庞大的信息。

## 默认模式下的 Diagram {#diagram-in-the-default-mode}

借助 DHTMLX Diagram，您可以使用[预定义的形状集](shapes/default_shapes.md)和[连接线](/lines/)来创建各种图表，并尝试调整它们的外观和风格。

您可以选择所需类型的形状，通过合适的连接线将它们连接起来，构建出能够展示特定流程中一系列操作顺序的任意类型的图表，例如：

| [数据规划模型](https://snippet.dhtmlx.com/e6zm6wh1) | [垂直决策树](https://snippet.dhtmlx.com/t6t8ay80) | [宽幅流程图](https://snippet.dhtmlx.com/4d4k3o8p) |
| ---------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| ![](/img/icon_data_planning_model.png)                | ![](/img/icon_vert_decision_tree.png)               | ![](/img/icon_wide_diagram.png)                      |

| [决策树](https://snippet.dhtmlx.com/7bn52dl1) | [活动图](https://snippet.dhtmlx.com/a9t2z2dt) |
| ----------------------------------------------- | ------------------------------------------------ |
| ![](/img/icon_decision_tree.png)                 | ![](/img/icon_activity.png)                      |

### 自定义形状 {#custom-shapes}

您可以创建[自定义的形状模板](shapes/custom_shape.md)，并使用它们设计所需的任意图表。例如，您可以创建以下常见的自定义图表：

| [生命周期图](https://snippet.dhtmlx.com/y4k51owl) | [维恩图模板](https://snippet.dhtmlx.com/2tzyfois) | [UML 类图模板](https://snippet.dhtmlx.com/madymxt5) |
| ---------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| ![](/img/sticky.png)                                  | ![](/img/venn.png)                                    | ![](/img/html.png)                                      |

| [网络图模板](https://snippet.dhtmlx.com/u1xqyo9w) | [游戏关卡与场景](https://snippet.dhtmlx.com/1h4j9gb3) |
| ------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/network.png)                                   | ![](/img/game_levels.png)                                 |

### 分组 {#groups}

借助 Diagram 中分组这一元素，您可以通过以不同方式对形状进行分组，绘制出简单或复杂的示意图。您可以创建单层分组，也可以创建嵌套分组，并配置它们的外观和行为。详情请查看[分组](/groups/)一文。

| [Diagram Editor。默认模式。虚拟私有云架构](https://snippet.dhtmlx.com/0hf8ahrb) |
| -------------------------------------------------------------------------------- |
| ![](/img/virtual_cloud.png)                                                       |

### 泳道 {#swimlanes}

DHTMLX Diagram 库中的泳道功能可让您从头到尾展示任意流程（业务、生产、服务等）或其中的各个部分。详情请查看[泳道](/swimlanes/)一文。

| [Diagram。默认模式。泳道模板](https://snippet.dhtmlx.com/z6x5m3gb) |
| --------------------------------------------------------------------- |
| ![](/img/swimlane.png)                                                  |

### 线条标题 {#line-titles}

线条标题功能在 Diagram 的默认模式下默认启用。您可以通过双击连接线添加文本，也可以通过双击来编辑文本。详情请查看[线条标题](/line_titles/)一文。

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 组织结构图模式下的 Diagram {#diagram-in-the-org-chart-mode}

此外，Diagram 还提供组织结构图模式，以层级顺序展示由连接线相连的一组形状。

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?text=diagram&mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### 辅助形状和伙伴形状 {#assistant-and-partner-shapes}

任意层级的父形状都可以拥有辅助项或伙伴项。辅助形状和伙伴形状不能作为父项。您可以在[编辑器](editor_overview.md#editor-in-the-org-chart-mode)中添加辅助项和伙伴项，也可以通过准备[数据集](guides/loading_data.md#preparing-data-to-load)来添加。

在层级结构中，辅助项显示在父形状和子形状之间。

| [Diagram editor。组织结构图模式。基础初始化](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------ |
| ![](/img/orgchart_with_assistant.png)                                                 |

父形状与其伙伴项之间的连接始终为水平方向。此外，一旦为父形状添加伙伴项，该父形状与其所有子形状之间的连接也会变为水平方向，即使之前是垂直连接。

伙伴形状对于构建家谱图非常有用。

**相关示例**：[Diagram editor。组织结构图模式。家谱图](https://snippet.dhtmlx.com/5pfybpmz)

以下示例展示了父形状分别拥有一个、两个、三个和四个伙伴项时的连接效果。

| 一个伙伴项                                | 两个伙伴项                                 |
| -------------------------------------------- | --------------------------------------------- |
| ![](/img/orgchart_with_one_partner.png)      | ![](/img/orgchart_with_two_partners.png)      |

| 三个伙伴项                                | 四个伙伴项                                |
| -------------------------------------------- | ---------------------------------------------- |
| ![](/img/orgchart_with_three_partners.png)   | ![](/img/orgchart_with_four_partners.png)      |

### 自定义形状 {#custom-shapes-1}

以下示例展示了如何添加自定义形状，以创建展示医疗机构层级组织结构的图表：

| [Diagram Editor。组织结构图模式。医疗机构层级图模板](https://snippet.dhtmlx.com/8fubjmlz) |
| --------------------------------------------------------------------------------------------- |
| ![](/img/medical_hierarchy_overview.png)                                                        |

## 思维导图模式下的 Diagram {#diagram-in-the-mindmap-mode}

思维导图模式用于展示一个核心主题或想法，并通过分支呈现其子主题。

| [Diagram。思维导图模式。情绪思维导图](https://snippet.dhtmlx.com/twd25ww1) |
| ------------------------------------------------------------------------------ |
| ![](/img/mindmap_emotions.png)                                                  |

各个形状通过曲线连接，并围绕图表的中心形状排列。

### 自定义形状 {#custom-shapes-2}

以下示例展示了如何在图表的思维导图模式中添加自定义模板，以创建网站地图：

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## PERT 模式下的 Diagram {#diagram-in-the-pert-mode}

[PERT 模式](api/diagram/type_property.md)用于可视化任务和项目的顺序及其相互之间的联系，同时也有助于识别关键路径并进行项目规划。

PERT 模式下的 Diagram [使用 DHTMLX Gantt 的数据结构](guides/loading_data.md#data-structure-of-diagram-in-the-pert-mode)，该结构可实现[组件之间的轻松交互](#integrating-pert-diagram-and-dhtmlx-gantt)。加载 Gantt 数据集后，PERT 模式下的 Diagram 会根据任务和项目之间的连接自动排列它们。

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### PERT Diagram 与 DHTMLX Gantt 的集成 {#integrating-pert-diagram-and-dhtmlx-gantt}

以下示例展示了如何将 PERT 模式下的 Diagram 与 Gantt 图表进行集成：

<iframe src="https://snippet.dhtmlx.com/gcnx4a9h?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 形状搜索 {#shape-search}

DHTMLX Diagram 为您提供了一套 API，可用于让使用 Diagram 的过程更加便捷。
例如，您可以实现形状搜索功能，帮助简化处理大型图表时的工作。

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Diagram 缩放 {#diagram-scale}

您可以为图表应用缩放模板，通过放大或缩小来改变其外观。您还可以让用户获取所选形状的详细信息。

<iframe src="https://snippet.dhtmlx.com/09o8t3o2?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 下一步 {#whats-next}

现在，您可以了解如何在应用程序中使用 DHTMLX Diagram Editor。请阅读 [Diagram Editor 概述](editor_overview.md)，以详细了解此工具。
