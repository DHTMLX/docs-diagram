---
sidebar_label: groupHeaderDblClick
title: groupHeaderDblClick Event
description: You can learn about the groupHeaderDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupHeaderDblClick

### Description

@short: fires on double-clicking a header of a group
@descr:
If a double-click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane

### Usage

~~~js
groupHeaderDblClick: (
    id: string | number, 
    event: MouseEvent, 
    subHeaderId?: string
) => void;
~~~

### Parameters

- `id` - (mandatory) the id of a group
- `event` - (mandatory) a native HTML event object
- `subHeaderId` - (optional) the id of a subheader of a swimlane

### Example

~~~js
diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
~~~

**Change log**: Added in v4.0
