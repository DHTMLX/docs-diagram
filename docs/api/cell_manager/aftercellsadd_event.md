---
sidebar_label: afterCellsAdd
title: afterCellsAdd Event of Cell Manager
description: You can learn about the afterCellsAdd event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsAdd

@short: fires after new cells are added to a swimlane

@signature: {`afterCellsAdd: (swimlaneId: Id) => void;`}

@params:
`swimlaneId: string | number` - the id of the item

@example:
diagram.events.on("afterCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/)
