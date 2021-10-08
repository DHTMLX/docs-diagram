---
sidebar_label: getSubHeaderCellId()
title: getSubHeaderCellId
description: text
---

# getSubHeaderCellId()

@short: returns the id of the cell of the swimlane by the subheader id

@signature: {`getSubHeaderCellId(subheaderId: string): Id;`}

@params:
- `subheaderId: string` - the id of the subheader of a swimlane

@returns:
The id of the cell.

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getSubHeaderCellId("sub01"); // gets the id of the cell

// -> "r01"

@descr:

The count of the index starts from 0.

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
