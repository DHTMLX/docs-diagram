---
sidebar_label: afterUnSelect
title: afterUnSelect Event of Selection
description: You can learn about the afterUnSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterUnSelect

### Description

@short: Fires after unselecting an item

### Usage

~~~jsx
"afterUnSelect": ({
    id: string | number, 
    batch: (string | number)[]
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the id of the unselected item 
- `batch` - the list of unselected items

### Example

~~~jsx {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("afterUnSelect", function ({ id }) {
    console.log(id + " was unselected");
});
~~~

Here's an example of attaching an event handler to the event for the Diagram Editor:

~~~jsx {8-11}
// initializing Diagram editor
const editor = new dhx.DiagramEditor("editor_container", {  
    // config options
});
// loading data into the editor
editor.parse(data);

// attaching a handler to the event
editor.diagram.events.on("afterUnSelect", function({ id }) {
    console.log(id + " was unselected");
});
~~~

**Change log**: Updated in v6.0

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check link to the snippet

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
