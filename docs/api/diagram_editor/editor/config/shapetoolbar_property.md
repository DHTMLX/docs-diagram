---
sidebar_label: shapeToolbar
title: shapeToolbar Property of Editor
description: You can learn about the shapeToolbar property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeToolbar

### Description

@short: Optional. Defines which controls should be shown in the personal toolbar of diagram items

### Usage

~~~js
shapeToolbar?: boolean | array;
~~~

### Parameters

As an array, the **shapeToolbar** property can include:

- a boolean *true/false* value - to show/hide the default toolbar;
- string values with the names of the toolbar controls. The sequence the values are put in the array defines the order the controls will be displayed in the toolbar. The available values are:
    - in the default mode: *"copy" | "connect" | "remove" | "addRowLast" | "addColumnLast"*;
    - in the org chart mode: *"add" | "horizontal" | "vertical" | "remove"*;
    - in the mindmap mode: *"add" | "addLeft" | "addRight" | "remove"*;
- a set of icon objects. Each icon object can have the following properties:
    - `id: string` -  (required) the id of an icon. Note, that the usage of the default names of the toolbar controls as ids of new controls is prohibited;
    - `content: string` - (required) the content of the icon. It can contain an HTML element with the name of the icon class;
    - `check: function` - (optional) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape;
    - `css: function` - (optional) the function which returns the name(s) of CSS class(es) that should be applied to the shape
    - `tooltip: string` - (optional) a tooltip which appears on hovering over the icon

{{note
The most recommended option is to enable the default set of controls by specifying *true* value in the **shapeToolbar** array and create your own control(s) by adding an icon object to the array.}}

### Example

The property can be set either as a **boolean** value:

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: false, // true by default
});
~~~

or as an **array**:

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: [
        "add", 
        "remove", 
        {id: "info", content:"<i class='dxi dxi-download'></i>", tooltip: "Download"}
    ],
});
~~~

**Change log:**

- The **tooltip** parameter of the icon object is added in v5.0

**Related articles**:  [Grid Area](../../../guides/diagram_editor/grid_area/)

**Relate sample**: [Diagram. Diagram editor. Toolbar customization](https://snippet.dhtmlx.com/b2agwets)