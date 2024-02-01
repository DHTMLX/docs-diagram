---
sidebar_label: click!!
title: click Event of Toolbar
description: You can learn about the click event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# click

### Description

@short: Fires after clicking an item within Toolbar

### Usage

~~~js
"click": (id: string | number, event: Event) => void;
~~~

### Parameters

The callback of the **click** event is called with the following parameter:

- `id` - (required) the ID of a Toolbar item
- `events` - (required) a native event object

:::info
For handling the inner events of Diagram Editor you can use the **on()** method.
:::

### Example

~~~js {7-10}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// subscribe on the "click" event
editor.toolbar.events.on("click", (id, events) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
