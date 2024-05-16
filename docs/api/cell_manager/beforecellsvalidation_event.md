---
sidebar_label: beforeCellsValidation
title: beforeCellsValidation Event of Cell Manager
description: You can learn about the beforeCellsValidation event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsValidation

### Description

@short: Fires before cells of the swimlane are validated

### Usage

~~~jsx
beforeCellsValidation: (
    swimlaneId: string | number, 
    action: "move" | "remove" | "add"
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `swimlaneId` - (required) the id of the item
- `action` - (required) the type of the action

### Returns

Return `false` to prevent validation of new cells, otherwise `true`

### Example

~~~jsx {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeCellsValidation", (swimlaneId, action) => {
    console.log(swimlaneId, action);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/)
