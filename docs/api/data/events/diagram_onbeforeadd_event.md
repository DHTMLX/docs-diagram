beforeAdd
=============

@short: fires before adding a shape
	
@params:

- id		string,number		the id of a shape which will be added

@example:
diagram.events.on("BeforeAdd", function(id){
	if (some_check)
		return false;
	return true;
});


@template:	api_event
@descr:

Returning *false* from the event handler will prevent shape adding.

@relatedapi:
	- api/data/events/diagram_onafteradd_event.md

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)