---
sidebar_label: afterAdd
title: afterAdd
description: text
---

# afterAdd

@short: fires after adding an item

@signature: {`afterAdd: (newItem: any) => void;`}

@params:
`newItem: object` - the object of an added item

@example:
diagram.events.on("afterAdd", function(id){
	console.log("A new item is added");
});

@descr:

Event can be used to provide default values or a default formatting for the item data.

**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
