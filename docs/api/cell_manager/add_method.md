---
sidebar_label: add()
title: add Method of Cell Manager
description: You can learn about the add method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add()

@short: adds cells as rows or columns to a swimlane

@signature: {`add(cellIndex: number, dir: ActionDirection): void;`}

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

diagram.cellManager.add(0, "down"); // adds cells as rows

@descr:

The count of the index starts from 0.

The **add** method is automatically validated by the system. The cell won't be added if it is not possible according to the structure of the swimlane.


@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)