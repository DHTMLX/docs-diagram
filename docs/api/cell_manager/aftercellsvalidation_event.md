---
sidebar_label: afterCellsValidation
title: afterCellsValidation 
description: text
---

# afterCellsValidation

@short: fires after cells of the swimlane are validated

@signature: {`afterCellsValidation: (swimlaneId: Id, validate: boolean, action: ActionValidate) => void;`}

@params:
- `swimlaneId: string | number` - the id of the item
- `validate: boolean` - validated or not validated
- `action: "move" | "remove" | "add"` - the type of the action

@example:
diagram.events.on("afterCellsValidation", (swimlaneId, validate, action) => {
    console.log(swimlaneId, validate, action);
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_beforecellsvalidation_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0
