---
sidebar_label: openMenu!!
title: openMenu Event of Toolbar
description: You can learn about the openMenu event of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# openMenu

### Description

@short: Fires on expanding a menu control within Toolbar

### Usage

~~~js
"openMenu": (id: string | number) => void;
~~~

### Parameters

The callback of the **openMenu** event is called with the following parameter:

- `id` - (required) the ID of an opened menu item

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
// subscribe on the "openMenu" event
editor.toolbar.events.on("openMenu", (id) => {
    // some logic
});
~~~

**Change log**: Added in v6.0
