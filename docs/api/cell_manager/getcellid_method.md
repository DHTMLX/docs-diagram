---
sidebar_label: getCellId()
title: getCellId Method of Cell Manager
description: You can learn about the getCellId method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getCellId()

### Description

@short: returns the id of the cell of the swimlane by the index

@descr:

### Usage

~~~js
getCellId(cellIndex: number, type: ICellType): Id | undefined;
~~~

### Parameters

- `cellIndex: number` - the start index of a cell in a layout
- `type: "row" | "col"` - the type of direction to count the index

### Returns

The id of the cell.

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getCellId(0, "row"); // gets the id of the cell

// -> "r01"
~~~

The count of the index starts from 0.

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
