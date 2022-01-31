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
validation(
    cellIndex: number, 
    dir: string, // "up" | "down" | "left" | "right"
    action: string // "move" | "remove" | "add"
): boolean;
~~~

### Parameters

- `cellIndex` - (mandatory) the start index of a cell in a layout. The count of the index starts from 0
- `dir` - (mandatory) the direction of the action: "up" | "down" | "left" | "right"
- `action` - (mandatory) the type of the action: "move" | "remove" | "add"

### Returns

The method returns `true` if the cell is validated, otherwise `false`.

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
diagram.cellManager.validation(0, "down", "move"); // -> true
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
