---
sidebar_label: shapeIconClick
title: shapeIconClick Event
description: You can learn about the shapeIconClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeIconClick

### Description

@short: Fires on clicking an icon of the shape toolbar

### Usage

~~~jsx
"shapeIconClick": (
    id: string | number, 
    event: MouseEvent
) => void;
~~~

### Parameters

The callback of the event is called with the following parameters:

- `id` - the id of the icon
- `event` - a native HTML event object

### Example

~~~jsx {23-39}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // setting a toolbar with buttons for items
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>",
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
        }
    ]
});
// loading data
diagram.data.parse(data);

diagram.events.on("shapeIconClick", function (action) {
    const selectedId = diagram.selection.getItem().id;
    switch(action) {
        case "download":
            diagram.export.pdf();
            break;
        case "remove":
            diagram.data.remove(selectedId);
            break;
        case "add":
            diagram.data.add({
                text: "New shape",
                parent: selectedId,
            });
            break;
    }
});
~~~

**Related article**: [Event handling](../../../guides/event_handling/)

**Related sample**: [Diagram. Configuration. Shape toolbar](https://snippet.dhtmlx.com/4if395hd)