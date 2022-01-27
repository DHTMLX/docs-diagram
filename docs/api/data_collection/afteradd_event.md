---
sidebar_label: afterAdd
title: afterAdd Event of Data Collection
description: You can learn about the afterAdd event of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterAdd

### Description

@short: fires after adding an item

@descr:

### Usage

~~~js
afterAdd: (newItem: object) => void;
~~~

### Parameters

`newItem` - (mandatory) the object of an added item

### Example

~~~js
diagram.events.on("afterAdd", function(id){
	console.log("A new item is added");
});
~~~

Event can be used to provide default values or a default formatting for the item data.

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
