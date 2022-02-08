---
sidebar_label: afterCellsValidation
title: afterCellsValidation Event of Cell Manager
description: You can learn about the afterCellsValidation event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsValidation

### Description

@short: Fires after cells of the swimlane are validated

### Usage

~~~js
afterCellsValidation: (
    swimlaneId: string | number, 
    validate: boolean, 
    action: "move" | "remove" | "add"
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `swimlaneId` - (mandatory) the id of the item
- `validate` - (mandatory) validated or not validated
- `action` - (mandatory) the type of the action

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterCellsValidation", (swimlaneId, validate, action) => {
    console.log(swimlaneId, validate, action);
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
