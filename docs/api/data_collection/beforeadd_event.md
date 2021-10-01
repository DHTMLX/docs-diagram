---
sidebar_label: beforeAdd
title: beforeAdd
description: text
---

# beforeAdd

@short: fires before adding an item

@signature: {`beforeAdd: (newItem: any) => boolean | void;`}

@params:

- `newItem: object` - the object of an added item

@example:
diagram.events.on("BeforeAdd", function(id){
	if (some_check)
		return false;
	return true;
});

@descr:

Returning *false* from the event handler will prevent item adding.


**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)