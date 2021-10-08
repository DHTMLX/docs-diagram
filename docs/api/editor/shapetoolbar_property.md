---
sidebar_label: shapeToolbar
title: shapeToolbar
description: text
---

# shapeToolbar

@short: defines which controls should be shown in the personal toolbar of diagram items

@signature: {`shapeToolbar: boolean | DefaultShapeToolbar;`}

@example:
const editor = new dhx.DiagramEditor(document.body, {
    type: "org",
    shapeToolbar: ["add", "remove", {id: "info", content:"<i class='dxi dxi-download'></i>"}],
});

@descr:

**Relate sample**: [Diagram. Diagram editor. Toolbar customization](https://snippet.dhtmlx.com/b2agwets)

The `shapeToolbar` property can be either a **boolean** value or an **array**. The **array** can include:

- a boolean *true/false* value - to show/hide the default toolbar;
- string values with the names of the toolbar controls. The sequence the values are put in the array defines the order the controls will be displayed in the toolbar. The available values are:
    - in the default mode: *"copy" | "connect" | "remove" | "addRowLast" | "addColumnLast"*;
    - in the org mode: *"add" | "horizontal" | "vertical" | "remove"*;
    - in the mindmap mode: *"add" | "addLeft" | "addRight" | "remove"*;
- a set of icon objects. Each icon object can have the following properties:
    - `id: string` -  the id of an icon. Note, that the usage of the default names of the toolbar controls as ids of new controls is prohibited;
    - `content: string` - the content of the icon. It can contain an HTML element with the name of the icon class;
    - `check: function` - checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape;
    - `css: function` - the function which returns the name(s) of CSS class(es) that should be applied to the shape.

The most recommended option is to enable the default set of controls by specifying *true* value in the **shapeToolbar** array and create your own control(s) by adding an icon object to the array. 

#### Related articles

[Grid Area](../../../guides/diagram_editor/grid_area/)