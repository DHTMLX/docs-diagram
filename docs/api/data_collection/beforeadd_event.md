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

@returns:
Return `false` to prevent adding an item into a data collection; otherwise, `true`.

@example:
diagram.events.on("beforeAdd", function(id){
	if (some_check)
		return false;
	return true;
});

@relatedsample:
**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@descr:

Returning *false* from the event handler will prevent item adding.
