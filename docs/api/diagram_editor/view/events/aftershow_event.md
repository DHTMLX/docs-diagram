---
sidebar_label: afterShow
title: afterShow Event of View
description: You can learn about the afterShow event of View in the Diagram Editor documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterShow

### Description

@short: Fires after the Toolbar, Editbar or Shapebar view is displayed

### Usage

~~~jsx
"afterShow": (view: "toolbar" | "shapebar" | "editbar") => void;
~~~

### Parameters

The callback of the **afterShow** event is called with the following parameter:

- `view` - (required) a view that was displayed. Refer to the [`view`](api/diagram_editor/editor/config/view_property.md) property for details.

:::info
For handling the inner events of Diagram Editor you can use the **on()** method.
:::

### Example

~~~jsx {9-12}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: false,
    },
});

// attaching a handler to the event
editor.events.on("afterShow", function(view) {
    console.log("The " + view + " view of Diagram Editor was displayed");
});
~~~

**Change log**: Added in v6.0
