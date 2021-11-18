---
sidebar_label: getCellId()
title: getCellId Method of Cell Manager
description: text
---

# getCellId()

@short: returns the id of the cell of the swimlane by the index

@signature: {`getCellId(cellIndex: number, type: ICellType): Id | undefined;`}

@params:
- `cellIndex: number` - the start index of a cell in a layout
- `type: "row" | "col"` - the type of direction to count the index

@returns:
The id of the cell.

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getCellId(0, "row"); // gets the id of the cell

// -> "r01"

@descr:

The count of the index starts from 0.

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
