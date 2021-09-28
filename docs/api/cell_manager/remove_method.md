---
sidebar_label: remove()
title: remove
description: text
---

# remove()

@short: removes cells of the swimlane as rows or columns

@signature: {`remove(cellIndex: number, type: ICellType, unstrict?: boolean): void;`}

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

@relatedapi:
- api/cellmanager/cellmanager_add_method.md
- api/cellmanager/cellmanager_move_method.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
