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
    subId: string | number | undefined,
    join: boolean,
    batch: (string | number)[]
}) => void;
~~~

### Parameters

The callback of the event is called with an object with the following parameters:

- `id` - the item id
- `subId` - the id of a subheader of a text element of a line
- `join` - shows the applied mode of selection
- `batch` - shows the list of items to select

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
diagram.events.on("afterSelect", function({ id, subId, join, batch }) {
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
editor.diagram.events.on("afterSelect", function({ id, subId, join, batch }) {
    console.log(id + " was selected");
});
~~~

**Change log**: 

The functionality is updated in v6.0:

- The callback function is called with an object  
- The usage of the **subId** parameter is limited to the line titles only 
- The **join** and **batch** parameters are added 

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - update link to the snippet

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)