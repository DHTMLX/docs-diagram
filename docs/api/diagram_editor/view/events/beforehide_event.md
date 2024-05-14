---
sidebar_label: beforeHide
title: beforeHide Event of View
description: You can learn about the beforeHide event of View in the Diagram Editor documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeHide

### Description

@short: Fires before the Toolbar, Editbar or Shapebar view is hidden

### Usage

~~~jsx
"beforeHide": (view: "toolbar" | "shapebar" | "editbar") => boolean | void;
~~~

### Parameters

The callback of the **beforeHide** event is called with the following parameter:

- `view` - (required) a view that will be hidden. Refer to the [`view`](api/diagram_editor/editor/config/view_property.md) property for details.

:::info
For handling the inner events of Diagram Editor you can use the **on()** method.
:::

### Example

~~~jsx {9-12}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: true,
    },
});

// attaching a handler to the event
editor.events.on("beforeHide", function(view) {
    console.log("The " + view + " view of Diagram Editor will be hidden");
});
~~~

**Change log**: Added in v6.0
