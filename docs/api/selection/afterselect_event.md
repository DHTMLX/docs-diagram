---
sidebar_label: afterSelect
title: afterSelect
description: text
---

# afterSelect

@short: fires after selecting an item

@signature: {`afterSelect: (id: Id) => void;`}

@params:
`id: string | number` - the item id

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("AfterSelect", function(id) {
	console.log(diagram.data.getItem(id).text + " was selected");
});

@descr:

**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

**Related articles**

common_guides/configuration.md#selectingshapes
