---
sidebar_label: beforeCellsRemove
title: beforeCellsRemove 
description: text
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

**Related articles**

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
