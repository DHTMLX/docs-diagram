---
sidebar_label: beforeAdd
title: beforeAdd Event of Data Collection
description: You can learn about the beforeAdd event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeAdd

### Description

@short: fires before adding an item

@descr:

### Usage

~~~js
beforeAdd: (newItem: object) => boolean | void;
~~~

### Parameters

- `newItem` - (mandatory) the object of an added item

### Returns

Return `false` to prevent adding an item into a data collection; otherwise, `true`.

### Example

~~~js
diagram.events.on("beforeAdd", function(id){
	if (some_check)
		return false;
	return true;
});
~~~


**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

Returning *false* from the event handler will prevent item adding.
