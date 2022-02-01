---
sidebar_label: beforeSelect
title: beforeSelect Event of Selection
description: You can learn about the beforeSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeSelect

### Description

@short: fires on selecting an item, but before the item is really selected

@descr:

### Usage

~~~js
beforeSelect: (
    id: string | number, 
    subId?: string | number | undefined
) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the item id
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Returns

Return `false` to prevent an item from being selected; otherwise, `true`

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
diagram.events.on("BeforeSelect", function(id) {
	console.log("Selecting " + diagram.data.getItem(id).text);
	return true;
});
~~~

**Change log**: SubId parameter has been added in v4.1

**Related articles**:  
- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)