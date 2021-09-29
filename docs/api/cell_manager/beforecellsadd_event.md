---
sidebar_label: beforeCellsAdd
title: beforeCellsAdd 
description: text
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

**Related articles**

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
