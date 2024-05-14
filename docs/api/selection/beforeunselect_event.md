---
sidebar_label: beforeUnSelect
title: beforeUnSelect Event of Selection
description: You can learn about the beforeUnSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeUnSelect

### Description

@short: Fires on unselecting an item, but before the item is really unselected

### Usage

~~~jsx
"beforeUnSelect": ({
    id: string | number, 
    batch: (string | number)[]
}) => void | boolean;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of an item to unselect
- `batch` - the list of items to unselect

### Returns

Return `false` to prevent an item from being unselected; otherwise, `true`

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
diagram.events.on("beforeUnSelect", function({ id }) {
    console.log(id + " will be unselected");
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
editor.diagram.events.on("beforeUnSelect", function({ id }) {
    console.log(id + " will be unselected");
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