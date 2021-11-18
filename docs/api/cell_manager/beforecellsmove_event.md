---
sidebar_label: beforeCellsMove
title: beforeCellsMove Event of Cell Manager
description: text
---

# beforeCellsMove

@short: fires before cells of the swimlane are moved

@signature: {`beforeCellsMove: (swimlaneId: Id) => boolean | void;`}

@params:
`swimlaneId: string | number` - the id of the item

@returns:
`False` to prevent moving of the cells, otherwise `true`.

@example:
diagram.events.on("beforeCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});

@descr:

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)
