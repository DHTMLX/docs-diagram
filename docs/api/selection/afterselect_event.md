---
sidebar_label: afterSelect!!
title: afterSelect Event of Selection
description: You can learn about the afterSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.xt
---

# afterSelect

### Description

@short: Fires after selecting an item

### Usage

~~~js
"afterSelect": ({
    id: string | number, 
    join: boolean,
    batch: (string | number)[]
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the selected item
- `join` - the applied [mode of selection](../../../api/selection/add_method/#parameters)
- `batch` - the list of selected items

### Example

~~~js {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {  
    select: true,
    // other config options
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterSelect", function({ id }) {
    console.log(id + " was selected");
});
~~~

Here's an example of attaching an event handler to the event for the Diagram Editor:

~~~js {8-11}
// initializing Diagram editor
const editor = new dhx.DiagramEditor("editor_container", {  
    // config options
});
// loading data into the editor
editor.parse(data);

// attaching a handler to the event
editor.diagram.events.on("afterSelect", function({ id }) {
    console.log(id + " was selected");
});
~~~

**Change log**: 

The event was updated in v6.0

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check the link to the snippet

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)