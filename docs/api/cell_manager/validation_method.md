---
sidebar_label: validation()
title: validation Method of Cell Manager
description: You can learn about the validation method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# validation()

### Description

@short: validates cells of the swimlane by the direction and action type

@descr:

### Usage

~~~js
validation(cellIndex: number, dir: ActionDirection, action: ActionValidate): boolean;
~~~

### Parameters

- `cellIndex: number` - the start index of a cell in a layout
- `dir: "up" | "down" | "left" | "right"` - the direction of the action
- `action: "move" | "remove" | "add"` - the type of the action

### Returns

`True` if the cell is validated, otherwise `false`.

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main");

// validates if the cell with index 0 can be moved down
diagram.cellManager.validation(0, "down", "move") ;

// -> true
~~~

The count of the index starts from 0.

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
