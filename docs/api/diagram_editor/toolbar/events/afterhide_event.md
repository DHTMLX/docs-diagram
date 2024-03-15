---
sidebar_label: afterHide!!
title: afterHide Event of Toolbar
description: You can learn about the afterHide event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterHide

### Description

@short: Fires after hiding a sub-item of Toolbar

### Usage

~~~js
"afterHide": (events: Event) => void;
~~~

### Parameters

The callback of the **afterHide** event is called with the following parameter:

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
// subscribe on the "afterHide" event
editor.toolbar.events.on("afterHide", (events) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
