---
sidebar_label: beforeCellsValidation
title: beforeCellsValidation Event of Cell Manager
description: You can learn about the beforeCellsValidation event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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

@changelog:
Added in v4.0

@descr:
#### Related articles

[Configuring Swimlanes](../../../swimlanes/index/)

