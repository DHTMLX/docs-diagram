---
sidebar_label: beforeSelect
title: beforeSelect Event of Selection
description: You can learn about the beforeSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeSelect

### Description

@short: Fires on selecting an item, but before the item is really selected

### Usage

~~~jsx
"beforeSelect": ({
    id: string | number, 
    join: boolean,
    batch: (string | number)[]
}) => boolean | void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the item to select
- `join` - the applied [mode of selection](../../../api/selection/add_method/#parameters)
- `batch` - the list of items to select

### Returns

Return `false` to prevent an item from being selected; otherwise, `true`

### Example

~~~jsx {9-13}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeSelect", function({ id }) {
    console.log(id + " will be selected");
    return true;
});
~~~

Here's an example of attaching an event handler to the event for the Diagram Editor:

~~~jsx {8-12}
// initializing Diagram editor
const editor = new dhx.DiagramEditor("editor_container", {  
    // config options
});
// loading data into the editor
editor.parse(data);

// attaching a handler to the event
editor.diagram.events.on("beforeSelect", function({ id }) {
    console.log(id + " will be selected");
    return true;
});
~~~

**Change log**:

The event was updated in v6.0

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check link to the snippet

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
