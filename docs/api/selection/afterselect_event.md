---
sidebar_label: afterSelect
title: afterSelect
description: text
---

# afterSelect

@short: fires after selecting an item

@signature: {``}

@params:
- id	 	string,number 		the item id


@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("AfterSelect", function(id) {
	console.log(diagram.data.getItem(id).text + " was selected");
});


@descr:

@relatedapi:
	- api/selection/events/diagram_onbeforeselect_event.md
	- api/selection/events/diagram_onbeforeunselect_event.md
	- api/selection/events/diagram_onafterunselect_event.md

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

    
@related:
	common_guides/configuration.md#selectingshapes