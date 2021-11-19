---
sidebar_label: beforeCellsRemove
title: beforeCellsRemove Event of Cell Manager
description: You can learn about the beforeCellsRemove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsRemove

@short: fires before cells of the swimlane are removed

@signature: {`beforeCellsRemove: (swimlaneId: Id) => boolean | void;`}

@params:
`swimlaneId: string | number` - the id of the item

@returns:
`False` to prevent removing of the cells, otherwise `true`.

@example:
diagram.events.on("beforeCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
