---
sidebar_label: afterCellsAdd
title: afterCellsAdd 
description: text
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

#### Related articles

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
