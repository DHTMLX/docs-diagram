---
sidebar_label: beforeUnSelect
title: beforeUnSelect Event of Selection
description: You can learn about the beforeUnSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeUnSelect

### Description

@short: fires on unselecting an item, but before the item is really unselected

@descr:

### Usage

~~~js
beforeUnSelect: (
    id: string | number, 
    subId?: string | number | undefined
) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the item id
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Returns

Return `false` to prevent an item from being unselected; otherwise, `true`

### Example

~~~js {10-13}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("BeforeUnSelect", function(id) {
	console.log("Unselecting " + diagram.data.getItem(id).text);
	return true;
});
~~~

**Change log**: SubId parameter has been added in v4.1

**Related articles**:  
- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)