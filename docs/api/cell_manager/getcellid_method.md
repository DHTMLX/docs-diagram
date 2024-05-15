---
sidebar_label: getCellId()
title: getCellId Method of Cell Manager
description: You can learn about the getCellId method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getCellId()

### Description

@short: Returns the id of the cell of the swimlane by the index

### Usage

~~~jsx
getCellId(
    cellIndex: number, 
    type: string // "row" | "col"
): string | number | undefined;
~~~

### Parameters

- `cellIndex` - (required) the start index of a cell in a layout. The count of the index starts from 0
- `type` - (required) the type of direction to count the index: "row" | "col"

### Returns

The method returns the id of the cell

### Example

~~~jsx
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the id of the cell
diagram.cellManager.getCellId(0, "row"); // -> "r01"
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/)
