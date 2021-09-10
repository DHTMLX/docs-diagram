---
sidebar_label: afterLoad
title: afterLoad
description: text
---

# afterLoad

@short: fires after loading data into the widget
	

@params:

- data		any		the loaded data

@example:

diagram.events.on("AfterLoad", function(data){
	console.log("End of data loading");
});


@template:	api_event
@descr:

Event is called after data loading and parsing, but before the component is repainted. 

@relatedapi:
	- api/diagram_onbeforeload_event.md

@relatedsample:
	- diagram/01_organogram/04_events.html