---
sidebar_label: afterAdd
title: afterAdd
description: text
---

# afterAdd

@short: fires after adding a shape

@signature: {``}

@params:

- id		string,number		the id of a shape which was added

@example:
diagram.events.on("AfterAdd", function(id){
	console.log("A new item is added");
});

@descr:

Event can be used to provide default values or a default formatting for the shapes data.

@relatedapi:
	- api/data/events/diagram_onbeforeadd_event.md

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)