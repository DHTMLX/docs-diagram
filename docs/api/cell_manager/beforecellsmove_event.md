---
sidebar_label: beforeCellsMove
title: beforeCellsMove 
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

**Related articles**

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
