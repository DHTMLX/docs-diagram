---
sidebar_label: input!!
title: input Event of Toolbar
description: You can learn about the input event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# input

### Description

@short: Fires on entering a text into the Toolbar input field

### Usage

~~~js
"input": (id: string | number, value: string) => void;
~~~

### Parameters

The callback of the **input** event is called with the following parameter:

- `id` - (required) the ID of the input field
- `value` - (required) the entered value

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
// subscribe on the "input" event
editor.toolbar.events.on("input", (id, value) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
