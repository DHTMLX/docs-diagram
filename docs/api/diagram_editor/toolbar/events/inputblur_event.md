---
sidebar_label: inputBlur!!
title: inputBlur Event of Toolbar
description: You can learn about the inputBlur event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# inputBlur

### Description

@short: Fires on entering a text into the Toolbar input field

### Usage

~~~js
"inputBlur": (id: string | number) => void;
~~~

### Parameters

The callback of the **inputBlur** event is called with the following parameter:

- `id` - (required) the ID of a new control

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
// subscribe on the "inputBlur" event
editor.toolbar.events.on("inputBlur", (id) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
