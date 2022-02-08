---
sidebar_label: afterSubmenuOpen
title: afterSubmenuOpen Event
description: You can learn about the afterSubmenuOpen event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterSubmenuOpen

### Description

@short: Fires after the menu of the subheader is opened

### Usage

~~~js
afterSubmenuOpen: (
    id: string | number, 
    event: MouseEvent, 
    subHeaderId?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of a swimlane
- `event` - (mandatory) a native HTML event object
- `subHeaderId` - (mandatory) the id of a subheader of a swimlane

### Example

~~~js {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event Handling](../../../guides/event_handling/)