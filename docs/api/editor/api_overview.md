---
sidebar_label: API overview
title: API Overview 
description: text
---

# Editor API overview




In addition to the events listed above, you may also apply [events of the diagram object](api/refs/diagram_events.md) while working in the editor view. Here is an example of applying the [itemClick](api/diagram_itemclick_event.md) event of Diagram in the editor:

~~~js
editor.diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
~~~

You can find the full list of the Diagram API events [here](api/refs/diagram_events.md).