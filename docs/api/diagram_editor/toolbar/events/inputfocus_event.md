---
sidebar_label: inputFocus!!
title: inputFocus Event of Toolbar
description: You can learn about the inputFocus event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# inputFocus

### Description

@short: Fires when an input control is focused within the Toolbar

### Usage

~~~js
"inputFocus": (id: string | number) => void;
~~~

### Parameters

The callback of the **inputFocus** event is called with the following parameter:

- `id` - (required) the ID of an input control to be focused

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
// subscribe on the "inputFocus" event
editor.toolbar.events.on("inputFocus", (id) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
