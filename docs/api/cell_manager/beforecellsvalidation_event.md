---
sidebar_label: beforeCellsValidation
title: beforeCellsValidation 
description: text
---

# beforeCellsValidation
 
@short: fires before cells of the swimlane are validated

@signature: {`beforeCellsValidation: (swimlaneId: Id, action: ActionValidate) => boolean | void;`}

@params:
- `swimlaneId: string | number` - the id of the item
- `action: "move" | "remove" | "add"` - the type of the action

@returns:
`False` to prevent validation of new cells, otherwise `true`.

@example:
diagram.events.on("beforeCellsValidation", (swimlaneId, action) => {
    console.log(swimlaneId, action);
    return true;
});

@descr:

**Related articles**

diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

