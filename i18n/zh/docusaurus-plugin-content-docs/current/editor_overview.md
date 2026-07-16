---
sidebar_label: Diagram Editor 概述
title: 编辑器概述
description: 您可以在文档中全面了解 DHTMLX JavaScript Diagram 库。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DHTMLX Diagram Editor 概述

DHTMLX Diagram 组件为您提供了一个编辑器，让您可以运用自己的设计技巧，构建出整洁美观的图表。

### 默认模式下的编辑器 {#editor-in-the-default-mode}

在默认模式下初始化的编辑器界面由四个功能部分组成：

- [工具栏](guides/diagram_editor/toolbar.md)
- [形状栏](guides/diagram_editor/shapebar.md)
- [网格区域](guides/diagram_editor/grid_area.md)
- [编辑栏](guides/diagram_editor/editbar.md)

要构建图表，您需要从形状栏中拖动所需的项目，或通过形状工具栏创建项目的副本。

您可以通过[编辑栏的侧边栏选项](guides/diagram_editor/editbar.md)调整项目的属性。为加快样式设置过程，可以使用 `Alt (Option) + Ctrl (Cmd) + С` 组合键复制某一项目的样式，然后使用 `Alt (Option) + Ctrl (Cmd) + V` 将这些样式应用到所选项目。

![](/img/default_editor.png)

**相关示例：** [Diagram Editor。默认模式。宽幅流程图](https://snippet.dhtmlx.com/4d4k3o8p?text=diagram&mode=wide)

您可以自定义[形状栏](guides/diagram_editor/shapebar.md)，如果添加了自定义形状，还可以根据该形状的属性[配置编辑栏](api/diagram_editor/editbar/config/properties_property.md)。

### 组织结构图模式下的编辑器 {#editor-in-the-org-chart-mode}

在组织结构图模式下初始化的编辑器界面由三个功能部分组成：

- [工具栏](guides/diagram_editor/toolbar.md)
- [网格区域](guides/diagram_editor/grid_area.md)
- [编辑栏](guides/diagram_editor/editbar.md)

:::note
该模式下的编辑器没有形状栏
:::

要在编辑器的组织结构图模式下构建图表，您需要选择一个形状并为其添加一个新的子项。您可以将形状从一个父项拖动到另一个父项。被拖动的项目会连同其所有子项一起被拖动。

您可以通过可用的[编辑栏侧边栏选项](guides/diagram_editor/editbar.md)调整形状的属性。为加快样式设置过程，可以使用 `Alt (Option) + Ctrl (Cmd) + С` 组合键复制某一项目的样式，然后使用 `Alt (Option) + Ctrl (Cmd) + V` 将这些样式应用到所选项目。

![](/img/orgchart_editor_draggable.png)

**相关示例：** [Diagram Editor。组织结构图模式。基础初始化](https://snippet.dhtmlx.com/og4qm3ja?text=diagram&mode=wide)

如果您在组织结构图模式下的编辑器中添加了自定义形状，可以[配置编辑栏](api/diagram_editor/editbar/config/properties_property.md)，以便编辑该形状的自定义属性。

您可以为任意层级的父形状添加 `assistant` 或 `partner` 项。`assistant` 项和 `partner` 项不能作为父项。

<img
  src={useBaseUrl('/img/orgchart_editor_assistant.png')}
  alt="Org chart editor assistant" width='600'
/>

父形状与其伙伴之间的连接始终为水平方向。此外，一旦为父形状添加伙伴项，该父形状与其所有子形状之间的连接也会变为水平方向，即使之前是垂直连接。

### 思维导图模式下的编辑器 {#editor-in-the-mindmap-mode}

在思维导图模式下初始化的编辑器界面由三个部分组成：

- [工具栏](guides/diagram_editor/toolbar.md)
- [网格区域](guides/diagram_editor/grid_area.md)
- [编辑栏](guides/diagram_editor/editbar.md)

:::note
该模式下的编辑器没有形状栏
:::

要在编辑器的思维导图模式下构建图表，您需要选择一个形状并为其添加一个新的子项。您可以将形状从一个父项拖动到另一个父项。被拖动的项目会连同其所有子项一起被拖动。

您可以通过可用的[编辑栏侧边栏选项](guides/diagram_editor/editbar.md)调整形状的属性。为加快样式设置过程，可以使用 `Alt (Option) + Ctrl (Cmd) + С` 组合键复制某一项目的样式，然后使用 `Alt (Option) + Ctrl (Cmd) + V` 将这些样式应用到所选项目。

 ![](/img/mindmap_editor_draggable.png)

 **相关示例：** [Diagram Editor。思维导图模式。情绪思维导图](https://snippet.dhtmlx.com/lo1vm0e8?text=diagram&mode=wide)

如果您在思维导图模式下的编辑器中添加了自定义形状，可以[配置编辑栏](api/diagram_editor/editbar/config/properties_property.md)，以便编辑该形状的自定义属性。

## 下一步 {#whats-next}

至此，您已经了解了全部内容。现在您可以开始使用图表，或继续在[指南](guides/overview.md)中深入探索 JavaScript Diagram 和 Diagram Editor 的世界。
