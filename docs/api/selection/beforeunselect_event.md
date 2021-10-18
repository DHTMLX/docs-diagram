---
sidebar_label: beforeUnSelect
title: beforeUnSelect
description: text
---

# beforeUnSelect

@short: fires on unselecting an item, but before the item is really unselected

@signature: {`beforeUnSelect: (id: Id, subId?: Id | undefined) => void | boolean;`}

@params:
- `id: string | number` - the item id
- `subId: string | number | undefined` - optional, the id of a subheader of a swimlane or a text element of a line

@example:
const diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeUnSelect", function(id) {
	console.log("Unselecting " + diagram.data.getItem(id).text);
	return true;
});

@descr:

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

Returning *false* from the event handler will block unselection.

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
