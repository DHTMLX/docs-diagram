---
sidebar_label: getCellIndex()
title: getCellIndex Method of Cell Manager
description: text
---

# getCellIndex()

@short: returns the index of the cell of the swimlane by the id

@signature: {`getCellIndex(cellId: Id, type: ICellType): number | undefined;`}

@params:
- `cellId: string | number` - the id of a cell
- `type: "row" | "col"` - the type of direction to count the index

@returns:
The index of the cell.

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getCellIndex("r01", "row"); // gets the index of the cell

// -> 0

@descr:

The count of the index starts from 0.

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
