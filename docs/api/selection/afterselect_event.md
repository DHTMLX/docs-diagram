---
sidebar_label: afterSelect
title: afterSelect Event of Selection
description: teYou can learn about the afterSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.xt
---

# afterSelect

### Description

@short: fires after selecting an item

@descr:

### Usage

~~~js
afterSelect: (
    id: string | number, 
    subId?: string | number | undefined
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the item id
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Example

~~~js {10-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("AfterSelect", function(id) {
	console.log(diagram.data.getItem(id).text + " was selected");
});
~~~

**Change log**: SubId parameter has been added in v4.1

**Related articles**:  
- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)