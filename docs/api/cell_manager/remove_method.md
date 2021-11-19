---
sidebar_label: remove()
title: remove Method of Cell Manager
description: You can learn about the remove method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

@short: removes cells of the swimlane as rows or columns

@signature: {`remove(cellIndex: number, type: ICellType): void;`}

@params:
- `cellIndex: number` - the start index of a cell in a layout
- `type: "row" | "col"` - the type of direction to count the index

@example:

// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.remove(0, "row"); // removes cells as rows

@descr:

The count of the index starts from 0.

The **remove** method is automatically validated by the system. The cell won't be removed if it is not possible according to the structure of the swimlane.

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
