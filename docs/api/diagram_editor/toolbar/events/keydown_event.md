---
sidebar_label: keydown!!
title: keydown Event of Toolbar
description: You can learn about the keydown event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# keydown

### Description

@short: Fires when any key is pressed and an input control of Toolbar is in focus

### Usage

~~~js
"keydown": (event: KeyboardEvent, id?: string | number) => void;
~~~

### Parameters

The callback of the **keydown** event is called with the following parameters:

- `event` - (required) a native KeyboardEvent object
- `id` - (optional) the ID of the Toolbar input control in focus

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
// subscribe on the "keydown" event
editor.toolbar.events.on("keydown", (event, id) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
