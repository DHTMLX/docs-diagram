---
sidebar_label: beforeDelete
title: beforeDelete
description: text
---

# beforeDelete

@short: fires before deleting a shape
	
@params:

- id		string,number		the id of a shape which will be deleted

@example:
diagram.events.on("BeforeDelete", function(id){
	if (this.getItem(id).config.frozen)
		return false;
	return true;
});


@template:	api_event
@descr:

Returning *false* from the event handler will prevent shape deleting.

@relatedapi:
	- api/diagram_onafterdelete_event.md

@relatedsample:
	- diagram/01_organogram/04_events.html