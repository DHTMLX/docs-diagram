---
sidebar_label: afterCellsAdd
title: afterCellsAdd Event of Cell Manager
description: You can learn about the afterCellsAdd event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsAdd

### Description

@short: fires after new cells are added to a swimlane

### Usage

~~~js
afterCellsAdd: (swimlaneId: string | number) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `swimlaneId` - (mandatory) the id of the item

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
