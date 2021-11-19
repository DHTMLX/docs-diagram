---
sidebar_label: getSubHeaderType()
title: getSubHeaderType Method of Cell Manager
description: You can learn about the getSubHeaderType method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getSubHeaderType()

@short: returns the type of direction to count the index by the subheader id of the swimlane

@signature: {`getSubHeaderType(subheaderId: string): ICellType | undefined;`}

@params:
- `subheaderId: string` - the id of the subheader of a swimlane

@returns:
The type of direction to count the index: "row" | "col" | undefined.

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getSubHeaderType("sub01"); // gets the type of direction

// -> "row"

@descr:

The count of the index starts from 0.

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
