---
sidebar_label: afterDelete
title: afterDelete
description: text
---

# afterDelete

@short: fires after deleting a shape
	
@params:

- id		string,number		id of shape which was deleted

@example:
diagram.events.on("AfterDelete", function(id){
	console.log("Shape " + id + " was deleted");
});


@template:	api_event
@descr:

@relatedapi:
	- api/diagram_onbeforedelete_event.md

@relatedsample:
	- diagram/01_organogram/04_events.html