---
sidebar_label: move()
title: move
description: text
---

# move()

@short: moves cells of the swimlane as rows or columns

@signature: {`move(cellIndex: number, dir: ActionDirection): void;`}

@params:
- `cellIndex: number` - the start index of a cell in a layout
- `dir: "up" | "down" | "left" | "right"` - the direction of the action

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.move(0, "down"); // moves cells as rows

@descr:

The count of the index starts from 0.

The **move** method is automatically validated by the system. The cell won't be moved if it is not possible according to the structure of the swimlane.

#### Related articles

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
