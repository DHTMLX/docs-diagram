---
sidebar_label: afterCellsMove
title: afterCellsMove Event of Cell Manager
description: You can learn about the afterCellsMove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsMove

@short: fires after cells of the swimlane are moved

@signature: {`afterCellsMove: (swimlaneId: Id) => void;`}

@params:
`swimlaneId: string | number` - the id of the item

@example:
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
