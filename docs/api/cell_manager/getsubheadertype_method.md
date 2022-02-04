---
sidebar_label: getSubHeaderType()
title: getSubHeaderType Method of Cell Manager
description: You can learn about the getSubHeaderType method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSubHeaderType()

### Description

@short: returns the type of the subheader of the swimlane by its id

### Usage

~~~js
getSubHeaderType(subheaderId: string): "row" | "col" | undefined;
~~~

### Parameters

- `subheaderId` - (required) the id of the subheader of the swimlane

### Returns

The method returns the type of the subheader of the swimlane: "row" | "col" | undefined

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the type of direction
diagram.cellManager.getSubHeaderType("sub01"); // -> "row"
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
