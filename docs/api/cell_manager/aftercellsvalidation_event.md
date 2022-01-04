---
sidebar_label: afterCellsValidation
title: afterCellsValidation Event of Cell Manager
description: You can learn about the afterCellsValidation event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/)
