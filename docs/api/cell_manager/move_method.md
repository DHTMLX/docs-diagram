---
sidebar_label: move()
title: move Method of Cell Manager
description: You can learn about the move method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# move()

### Description

@short: moves cells of the swimlane as rows or columns

### Usage

~~~js
move(cellIndex: number, dir: ActionDirection): void;
~~~

### Parameters

- `cellIndex: number` - the start index of a cell in a layout
- `dir: "up" | "down" | "left" | "right"` - the direction of the action

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.move(0, "down"); // moves cells as rows
~~~

The count of the index starts from 0.

The **move** method is automatically validated by the system. The cell won't be moved if it is not possible according to the structure of the swimlane.

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
