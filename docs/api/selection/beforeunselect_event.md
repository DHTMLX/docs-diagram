---
sidebar_label: beforeUnSelect
title: beforeUnSelect
description: text
---

# beforeUnSelect

@short: fires on unselecting an item, but before the item is really unselected

@signature: {``}

@params:
- id	 	string,number 		the item id


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

Returning *false* from the event handler will block unselection.

@relatedapi:
	- api/selection/events/diagram_onbeforeselect_event.md
	- api/selection/events/diagram_onafterselect_event.md
	- api/selection/events/diagram_onafterunselect_event.md

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
    
@related:
	common_guides/configuration.md#selectingshapes