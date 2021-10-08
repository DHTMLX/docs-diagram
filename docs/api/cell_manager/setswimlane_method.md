---
sidebar_label: setSwimlane()
title: setSwimlane
description: text
---

# setSwimlane()

@short: sets active swimlane for further actions with it

@signature: {`setSwimlane(id: Id): boolean;`}

@params:
- `id: string | number` - the id of the swimlane

@returns:
`True` if the swimlane is set, otherwise `false`.

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
