---
sidebar_label: beforeCellsValidation
title: beforeCellsValidation Event of Cell Manager
description: You can learn about the beforeCellsValidation event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsValidation

### Description

@short: fires before cells of the swimlane are validated

@descr:

### Usage

~~~js
beforeCellsValidation: (
    swimlaneId: string | number, 
    action: "move" | "remove" | "add"
) => boolean | void;
~~~

### Parameters

- `swimlaneId` - (mandatory) the id of the item
- `action` - (mandatory) the type of the action

### Returns

Return `false` to prevent validation of new cells, otherwise `true`

### Example

~~~js
diagram.events.on("beforeCellsValidation", (swimlaneId, action) => {
    console.log(swimlaneId, action);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)

