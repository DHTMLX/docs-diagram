---
sidebar_label: remove()
title: remove Method of Cell Manager
description: You can learn about the remove method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

:::info
The **remove()** method is automatically validated by the system. The cell won't be removed if it is not possible according to the structure of the swimlane.
:::

### Description

@short: removes cells of the swimlane as rows or columns

@descr:

### Usage

~~~js
remove(cellIndex: number, type: "row" | "col"): void;
~~~

### Parameters

- `cellIndex` - (required) the start index of a cell in a layout. The count of the index starts from 0
- `type` - (required) the type of direction to count the index

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.remove(0, "row"); // removes cells as rows
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
