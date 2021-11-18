---
sidebar_label: afterCellsRemove
title: afterCellsRemove Event of Cell Manager
description: text
---

# afterCellsRemove

@short: fires after cells of the swimlane are removed

@signature: {`afterCellsRemove: (swimlaneId: Id) => void;`}

@params:
`swimlaneId: string |number` - the id of the item

@example:
diagram.events.on("afterCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
