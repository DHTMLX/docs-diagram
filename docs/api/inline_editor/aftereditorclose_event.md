---
sidebar_label: afterEditorClose
title: afterEditorClose Event
description: You can learn about the afterEditorClose event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterEditorClose

### Description

@short: Fires after the inline editor of the item is closed

### Usage

~~~jsx
afterEditorClose: (
    id: string | number, 
    key: string, 
    subId?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of an item
- `key` - (required) the name of the edited property
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterEditorClose", (id, key, subId) => {
    console.log(id, key, subId);
});
~~~

**Change log**:

- The **subHeaderId** parameter has been changed to **subId** in v4.1
- Added in v4.0
