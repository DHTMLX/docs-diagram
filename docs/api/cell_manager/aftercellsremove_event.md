---
sidebar_label: afterCellsRemove
title: afterCellsRemove 
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

**Related articles**

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
