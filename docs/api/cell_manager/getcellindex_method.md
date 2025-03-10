---
sidebar_label: getCellIndex()
title: getCellIndex Method of Cell Manager
description: You can learn about the getCellIndex method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getCellIndex()

### Description

@short: Returns the index of the cell of the swimlane by the id

### Usage

~~~jsx
getCellIndex(
    cellId: string | number, 
    type: string // "row" | "col"
): number | undefined;
~~~

### Parameters

- `cellId` - (required) the id of a cell
- `type` - (required) the type of direction to count the index: "row" | "col"

### Returns

The method returns the index of the cell. The count of the index starts from 0

### Example

~~~jsx
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the index of the cell
diagram.cellManager.getCellIndex("r01", "row"); // -> 0
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/)
