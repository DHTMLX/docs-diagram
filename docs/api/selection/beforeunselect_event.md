---
sidebar_label: beforeUnSelect
title: beforeUnSelect Event of Selection
description: You can learn about the beforeUnSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeUnSelect

### Description

@short: fires on unselecting an item, but before the item is really unselected

### Usage

~~~js
beforeUnSelect: (id: Id, subId?: Id | undefined) => void | boolean;
~~~

### Parameters

- `id: string | number` - the item id
- `subId: string | number | undefined` - optional, the id of a subheader of a swimlane or a text element of a line

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeUnSelect", function(id) {
	console.log("Unselecting " + diagram.data.getItem(id).text);
	return true;
});
~~~

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

Returning *false* from the event handler will block unselection.

**Change log**: SubId parameter has been added in v4.1.

**Related articles**:  - [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
