---
sidebar_label: beforeCellsAdd
title: beforeCellsAdd Event of Cell Manager
description: You can learn about the beforeCellsAdd event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsAdd

@short: fires before new cells are added to a swimlane

@signature: {`beforeCellsAdd: (swimlaneId: Id) => boolean | void;`}

@params:
`swimlaneId: string | number` - the id of the item

@returns:
`False` to prevent adding of new cells, otherwise `true`.

@example:
diagram.events.on("beforeCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/)
