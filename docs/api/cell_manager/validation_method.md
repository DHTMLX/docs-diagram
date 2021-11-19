---
sidebar_label: validation()
title: validation Method of Cell Manager
description: You can learn about the validation method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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
