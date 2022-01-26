---
sidebar_label: getSubHeaderType()
title: getSubHeaderType Method of Cell Manager
description: You can learn about the getSubHeaderType method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSubHeaderType()

### Description

@short: returns the type of direction to count the index by the subheader id of the swimlane

### Usage

~~~js
getSubHeaderType(subheaderId: string): ICellType | undefined;
~~~

### Parameters

- `subheaderId: string` - the id of the subheader of a swimlane

### Returns

The type of direction to count the index: "row" | "col" | undefined.

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getSubHeaderType("sub01"); // gets the type of direction

// -> "row"
~~~

The count of the index starts from 0.

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
