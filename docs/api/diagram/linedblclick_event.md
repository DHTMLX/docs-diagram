---
sidebar_label: lineDblClick
title: lineDblClick Event
description: You can learn about the lineDblClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineDblClick

### Description

@short: fires on double-clicking a line
@descr:

### Usage

~~~js
lineDblClick: (
    id: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

- `id` - (mandatory) the id of a connector line
- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("lineDblClick", (id, event) => {
    console.log(id, event);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related sample**: [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)

