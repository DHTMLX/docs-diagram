---
sidebar_label: beforeUnSelect
title: beforeUnSelect
description: text
---

# beforeUnSelect

@short: fires on unselecting an item, but before the item is really unselected

@signature: {`beforeUnSelect: (id: Id) => void | boolean;`}

@params:
`id: string | number` - the item id

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeUnSelect", function(id) {
	console.log("Unselecting " + diagram.data.getItem(id).text);
	return true;
});

@descr:

**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

Returning *false* from the event handler will block unselection.

**Related articles**

common_guides/configuration.md#selectingshapes
