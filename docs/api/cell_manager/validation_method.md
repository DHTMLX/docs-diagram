---
sidebar_label: validation()
title: validation
description: text
---

# validation()

@short: validates cells of the swimlane by the direction and action type

@signature: {`validation(cellIndex: number, dir: ActionDirection, action: ActionValidate): boolean;`}

@params:
- `cellIndex: number` - the start index of a cell in a layout
- `dir: "up" | "down" | "left" | "right"` - the direction of the action
- `action: "move" | "remove" | "add"` - the type of the action

@returns:
`True` if the cell is validated, otherwise `false`.

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main");

// validates if the cell with index 0 can be moved down
diagram.cellManager.validation(0, "down", "move") ;

// -> true

@descr:

The count of the index starts from 0.

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
