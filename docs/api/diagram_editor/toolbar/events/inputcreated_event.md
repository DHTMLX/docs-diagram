---
sidebar_label: inputCreated!!
title: inputCreated Event of Toolbar
description: You can learn about the inputCreated event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# inputCreated

### Description

@short: Fires on adding a new input into the Toolbar

### Usage

~~~js
"inputCreated": (id: string | number, input: HTMLInputElement) => void;
~~~

### Parameters

The callback of the **inputCreated** event is called with the following parameter:

- `id` - (required) the ID of a new input
- `input` - (required) a newly created input

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
// subscribe on the "inputCreated" event
editor.toolbar.events.on("inputCreated", (id, input) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
