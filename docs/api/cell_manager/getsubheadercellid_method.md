---
sidebar_label: getSubHeaderCellId()
title: getSubHeaderCellId Method of Cell Manager
description: You can learn about the getSubHeaderCellId method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSubHeaderCellId()

### Description

@short: returns the id of the cell of the swimlane by the subheader id

@descr:

### Usage

~~~js
getSubHeaderCellId(subheaderId: string): string | number;
~~~

### Parameters

- `subheaderId` - (required) the id of the subheader of a swimlane

### Returns

The id of the cell

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the id of the cell
diagram.cellManager.getSubHeaderCellId("sub01"); // -> "r01"
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
