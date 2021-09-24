---
sidebar_label: Toolbar
title: Toolbar
description: text
---

# Toolbar

The toolbar of the Editor helps to control the editing process and can look like:

![](../../assets/toolbar.png)

## Default toolbar

By default, the toolbar contains the following controls:

- **reset** - to reset all the applied changes to the previous state. The control works in tandem with the [](../../api/editor/resetbutton_event.md) event;
- **apply** - to apply changes made in the editor to the diagram. The control works in tandem with the [](../../api/editor/applybutton_event.md) event; 
- **historyManager** - to undo and redo changes;
- **export** - to export the data of the diagram to the JSON format. The control works in tandem with the [](../../api/editor/exportdata_event.md) event;
- **import** - to import the data from a JSON file to the diagram. The control works in tandem with the [](../../api/editor/importdata_event.md) event;
- **autoLayout** - to arrange diagram shapes and connectors in the hierarchical structure automatically. The control works in tandem with the [](../../api/editor/autolayout_event.md) event;<br>*It works only in the default mode of Diagram and does not work if you use groups or swimlanes;*
- **editManager** - to hide and show the left and right panels of the editor. The control works in tandem with the [](../../api/editor/visibility_event.md) event;
- **scale** - to zoom a diagram in the editor in and out. The control works in tandem with the [zoomIn](../../../api/editor/zoomin_event/) and [zoomOut](../../../api/editor/zoomout_event/) events.

## Custom toolbar

You can change the structure of the toolbar via the [controls](../../api/editor/controls_property.md) configuration property of the editor. 
Using the property you can define which controls to show/hide in the Editor.

<iframe src="https://snippet.dhtmlx.com/w0ktaab3?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>
