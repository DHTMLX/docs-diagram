---
sidebar_label: beforeSubmenuOpen
title: beforeSubmenuOpen Event
description: You can learn about the beforeSubmenuOpen event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeSubmenuOpen

### Description

@short: Fires before the menu of the subheader is opened

### Usage

~~~jsx
beforeSubmenuOpen: (
    id: string | number, 
    event: MouseEvent, 
    subHeaderId?: string
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of a swimlane
- `event` - (required) a native HTML event object
- `subHeaderId` - (optional) the id of a subheader of a swimlane

### Returns

Return `false` to block opening the subheader; otherwise, `true`

### Example

~~~jsx {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event handling](../../../guides/event_handling/)