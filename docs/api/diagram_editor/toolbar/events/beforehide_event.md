---
sidebar_label: beforeHide!!
title: beforeHide Event of Toolbar
description: You can learn about the beforeHide event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeHide

### Description

@short: Fires before hiding a sub-item of Toolbar

### Usage

~~~js
"beforeHide": (id: string | number, events: Event) => void | boolean;
~~~

### Parameters

The callback of the **beforeHide** event is called with the following parameters:

- `id` - (required) the ID of a Toolbar sub-item
- `events` - (required) a native event object

:::info
For handling the inner events of Diagram Editor you can use the **on()** method.
:::

### Returns

Return `false` to prevent an item of Toolbar from being hidden; otherwise, `true`

### Example

~~~js {7-10}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// subscribe on the "beforeHide" event
editor.toolbar.events.on("beforeHide", (id, events) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
