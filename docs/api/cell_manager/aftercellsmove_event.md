---
sidebar_label: afterCellsMove
title: afterCellsMove Event of Cell Manager
description: You can learn about the afterCellsMove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsMove

### Description

@short: Fires after cells of the swimlane are moved

### Usage

~~~js
afterCellsMove: (swimlaneId: string | number) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `swimlaneId` - (required) the id of the item

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/)
