---
sidebar_label: groupDblClick
title: groupDblClick Event
description: You can learn about the groupDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# groupDblClick

### Description

@short: fires on double-clicking a group
@descr:
If a double-click is done over a swimlane, the event will be fired on the cell of the swimlane

### Usage

~~~js
groupDblClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of a group
- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("groupDblClick", (id, event) => {
    console.log(id, event);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
