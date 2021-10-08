---
sidebar_label: beforeSelect
title: beforeSelect
description: text
---

# beforeSelect

@short: fires on selecting an item, but before the item is really selected

@signature: {`beforeSelect: (id: Id) => void | boolean;`}

@params:
`id: string | number` - the item id

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeSelect", function(id) {
	console.log("Selecting " + diagram.data.getItem(id).text);
	return true;
});

@descr:
**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

Returning *false* from the handler will block the selection.

#### Related articles

common_guides/configuration.md#selectingshapes
