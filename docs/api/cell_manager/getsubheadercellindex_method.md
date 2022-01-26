---
sidebar_label: getSubHeaderCellIndex()
title: getSubHeaderCellIndex Method of Cell Manager
description: You can learn about the getSubHeaderCellIndex method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSubHeaderCellIndex()

### Description

@short: returns the index of the cell of the swimlane by the subheader id

### Usage

~~~js
getSubHeaderCellIndex(subheaderId: string): number;
~~~

### Parameters

- `subheaderId: string` - the id of the subheader of a swimlane

### Returns

The index of the cell.

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getSubHeaderCellIndex("sub01"); // gets the index of the cell

// -> 0
~~~

The count of the index starts from 0.

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
