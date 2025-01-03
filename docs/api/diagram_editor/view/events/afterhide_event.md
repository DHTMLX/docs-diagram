---
sidebar_label: afterHide
title: afterHide Event of View
description: You can learn about the afterHide event of View in the Diagram Editor documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterHide

### Description

@short: Fires after the Toolbar, Editbar or Shapebar view is hidden

### Usage

~~~jsx
"afterHide": (view: "toolbar" | "shapebar" | "editbar") => void;
~~~

### Parameters

The callback of the **afterHide** event is called with the following parameter:

- `view` - (required) a view that was hidden. Refer to the [`view`](api/diagram_editor/editor/config/view_property.md) property for details.

:::info
For handling the inner events of Diagram Editor you can use the **on()** method.
:::

### Example

~~~jsx {9-12}
// initializing Diagram Editor
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true
    }
});

// attaching a handler to the event
editor.view.events.on("afterHide", (view) => {
    console.log("The " + view + " view of Diagram Editor was hidden");
});
~~~

**Change log**: Added in v6.0
