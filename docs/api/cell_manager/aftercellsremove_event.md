---
sidebar_label: afterCellsRemove
title: afterCellsRemove Event of Cell Manager
description: You can learn about the afterCellsRemove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsRemove

@short: fires after cells of the swimlane are removed

@signature: {`afterCellsRemove: (swimlaneId: Id) => void;`}

@params:
`swimlaneId: string | number` - the id of the item

@example:
diagram.events.on("afterCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/)
