---
sidebar_label: Diagram Editor overview !!
title: Editor Overview 
description: You can have an overview of DHTMLX JavaScript Diagram library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# DHTMLX Diagram Editor overview

The DHTMLX Diagram component provides you with Editor that allows you to try and apply your designer skills in building neat and nice-looking diagrams.

### Editor in the default mode

The interface of the editor initialized in the default mode consists of four functional parts: 

- [toolbar](../guides/diagram_editor/toolbar/)
- [shapebar](../guides/diagram_editor/shapebar/) 
- [grid area](../guides/diagram_editor/grid_area/)
- [editbar](../guides/diagram_editor/editbar/overview/)

To build a diagram, you need either to drag the necessary items from the shapebar or create a copy of the items via the item toolbar. 

You can adjust the attributes of the items via [sidebar options of the editbar](../guides/diagram_editor/editbar/overview/). To accelerate the styling process, use `Alt (Option) + Ctrl (Cmd) + С` combination to copy styles of an item and `Alt (Option) + Ctrl (Cmd) + V` to apply these styles to the chosen items.

**TODO - update the gif**

| [Diagram Editor. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p) |
| ----------------------------------------------------------------------------------- |
| ![](assets/default_editor.gif)                                               		  |


![](assets/example.gif)                                               		  

You may customize the [shapebar](../guides/diagram_editor/shapebar/) and, if you have added a custom shape, **TODO - update the link** [configure the editbar](../guides/diagram_editor/editbar/#configuring-options-for-editing-custom-shapes) according to the attributes of your shape.

**TODO - update the snippet link** (the snippet is removed)

<iframe src="https://snippet.dhtmlx.com/2z0a18oz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Editor in the org chart mode

The interface of the editor initialized in the org chart mode consists of three functional parts: 

- [toolbar](../guides/diagram_editor/toolbar/)
- [grid area](../guides/diagram_editor/grid_area/)
- [editbar](../guides/diagram_editor/editbar/overview/)

:::note
Note, the editor in this mode does not have the shapebar
:::

To build a diagram in the org chart mode of the editor, you need to select a shape and add a new child for it. The shapes are draggable from one parent item to another. The moved item is dragged with all its child items.

You can adjust the attributes of the shapes via the available [sidebar options of the editbar](../guides/diagram_editor/editbar/overview/). To accelerate the styling process, use `Alt (Option) + Ctrl (Cmd) + С` combination to copy styles of an item and `Alt (Option) + Ctrl (Cmd) + V` to apply these styles to the chosen items.

**TODO - update the gif**

| [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](assets/orgchart_editor_draggable.gif)                                                   |

If you've added a custom shape to the editor in the org chart mode, you can **TODO - update the link** [configure the editbar](../guides/diagram_editor/editbar/#configuring-options-for-editing-custom-shapes) to be able to edit custom properties of the shape.

You can add **assistant** or **partner** items for a parent shape of any level. The assistant or partner items can't be parent items.

**TODO - update the gif**

| [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](assets/orgchart_editor_draggable_assistant.gif)                                         |

The connection between the parent shape and its partner is always horizontal. Also, the connections between the parent shape and all its children will become horizontal after you add a partner item for the parent, even if the connections were vertical before.

**TODO - update the gif**

| [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](assets/orgchart_editor_draggable_partner.gif)                                           |

### Editor in the mindmap mode

The interface of the editor initialized in the mindmap mode consists of three parts:

- [toolbar](../guides/diagram_editor/toolbar/)
- [grid area](../guides/diagram_editor/grid_area/)
- [editbar](../guides/diagram_editor/editbar/overview/)

:::note
Note, the editor in this mode does not have the shapebar
:::

To build a diagram in the mindmap mode of the editor, you need to select a shape and add a new child for it. The shapes are draggable from one parent item to another. The moved item is dragged with all its child items.

You can adjust the attributes of the shapes via the available [sidebar options of the editbar](../guides/diagram_editor/editbar/overview/). To accelerate the styling process, use `Alt (Option) + Ctrl (Cmd) + С` combination to copy styles of an item and `Alt (Option) + Ctrl (Cmd) + V` to apply these styles to the chosen items.

**TODO - update the gif**

| [Diagram editor. Mindmap mode. Emotions mind map](https://snippet.dhtmlx.com/lo1vm0e8) |
| -------------------------------------------------------------------------------------- |
| ![](assets/mindmap_editor_draggable.gif)                                               |

If you've added a custom shape to the editor in the mindmap mode, you can **TODO - update the link** [configure the editbar](../guides/diagram_editor/editbar/#configuring-options-for-editing-custom-shapes) to be able to edit custom properties of the shape.

## What's next

That's all. Now you can start working with diagrams or keep exploring the inner world of JavaScript Diagram and Diagram Editor in the [guides](../guides/overview/).
