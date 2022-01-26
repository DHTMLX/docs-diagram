---
sidebar_label: afterCellsValidation
title: afterCellsValidation Event of Cell Manager
description: You can learn about the afterCellsValidation event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsValidation

### Description

@short: fires after cells of the swimlane are validated

### Usage

~~~js
afterCellsValidation: (swimlaneId: Id, validate: boolean, action: ActionValidate) => void;
~~~

### Parameters

- `swimlaneId: string | number` - the id of the item
- `validate: boolean` - validated or not validated
- `action: "move" | "remove" | "add"` - the type of the action

### Example

~~~js
diagram.events.on("afterCellsValidation", (swimlaneId, validate, action) => {
    console.log(swimlaneId, validate, action);
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
