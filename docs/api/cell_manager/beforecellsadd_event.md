---
sidebar_label: beforeCellsAdd
title: beforeCellsAdd Event of Cell Manager
description: You can learn about the beforeCellsAdd event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsAdd

### Description

@short: fires before new cells are added to a swimlane

### Usage

~~~js
beforeCellsAdd: (swimlaneId: string | number) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `swimlaneId` - (mandatory) the id of the item

### Returns

Return `false` to prevent adding of new cells, otherwise `true`

### Example

~~~js {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
