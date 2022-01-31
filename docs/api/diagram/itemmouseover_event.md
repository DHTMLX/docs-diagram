---
sidebar_label: itemMouseOver
title: itemMouseOver Event
description: You can learn about the itemMouseOver event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# itemMouseOver

### Description

@short: fires when a pointing device is onto an item
@descr:

### Usage

~~~js
itemMouseOver: (
    id: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of an item
- `event` - (mandatory) a native HTML event object

### Example

~~~js
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

