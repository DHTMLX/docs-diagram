---
sidebar_label: Diagram Editor overview
title: Editor Overview 
description: You can have an overview of DHTMLX JavaScript Diagram library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# DHTMLX Diagram Editor overview

The DHTMLX Diagram component provides you with Editor that allows you to try and apply your designer skills in building neat and nice-looking diagrams.

### Editor in the default mode

The interface of the editor initialized in the default mode consists of four functional parts: toolbar, left panel, grid area, and right panel.

To build a diagram, you need either to drag the necessary items from the left panel or create a copy of the items via the per-item toolbar. You can adjust the attributes of the items via sidebar options of the right panel.

| [Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p) |
| ---------------------------------------------------------------------------- |
| ![](assets/default_editor.gif)                                               |

If you need to edit a custom shape you may customize the left panel and configure the right panel according to the attributes of your shape.

<iframe src="https://snippet.dhtmlx.com/2z0a18oz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Editor in the org chart mode

The interface of the editor initialized in the org chart mode consists of three parts: toolbar, grid area, and right panel. Note, that the editor does not have the left panel.

To build a diagram in the org chart mode of the editor, you need to select a shape and add a new child for it. You can also add assistant or partner items for a parent shape of any level. The assistant or partner items can't be parent items. The connection between parent shape and its partner is always horizontal. Also, the connections between parent shape and all its children become horizontal when you add the partner item for a parent, even if the connections were vertical before.

The shapes are draggable from one parent item to another. The moved item is dragged with all its child items.

You can adjust the attributes of the shapes via the available sidebar options of the right panel.

| [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](assets/orgchart_editor_draggable.gif)                                                   |

| [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](assets/orgchart_editor_draggable_assistant.gif)                                         |

| [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](assets/orgchart_editor_draggable_partner.gif)                                           |

In the example below, you can notice that a set of sidebar options for editing the attributes of the shape with an image differs from the sidebar options for editing a simple card.

<iframe src="https://snippet.dhtmlx.com/vghuunmd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

If you've added a custom shape to the editor in the org chart mode, you can configure the right panel to be able to edit custom properties of the shape.

### Editor in the mindmap mode

The interface of the editor initialized in the mindmap mode consists of three parts: toolbar, grid area, and right panel. Note, that the editor does not have the left panel.

To build a diagram in the mindmap mode of the editor, you need to select a shape and add a new child for it. The shapes are draggable from one parent item to another. The moved item is dragged with all its child items.

You can adjust the attributes of the shapes via the available sidebar options of the right panel.

| [Diagram editor. Mindmap mode. Emotions mind map](https://snippet.dhtmlx.com/lo1vm0e8) |
| -------------------------------------------------------------------------------------- |
| ![](assets/mindmap_editor_draggable.gif)                                               |

If you've added a custom shape to the editor in the org chart mode, you can configure the right panel to be able to edit custom properties of the shape.

## Shape search

DHTMLX Diagram provides you with a set of API that you can apply in order to make working with a Diagram more convenient.
For example, you can implement a feature of searching a shape on request that helps you to simplify work with large diagrams.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Diagram scale

You can apply the zoom template to your diagram to be able to change its appearance via zooming the diagram in or out. Besides, you can make it possible to user to get the detailed information on the selected shape.

<iframe src="https://snippet.dhtmlx.com/09o8t3o2?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## What's next

That's all. Now you can start working with charts or keep exploring the inner world of JavaScript Diagram and Diagram Editor.
