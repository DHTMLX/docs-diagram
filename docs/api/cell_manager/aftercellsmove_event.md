---
sidebar_label: afterCellsMove
title: afterCellsMove Event of Cell Manager
description: text
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
