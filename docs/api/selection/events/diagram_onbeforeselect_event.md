beforeSelect
=============

@short: fires on selecting an item, but before the item is really selected

@params:
- id	 	string,number 		the item id


@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeSelect", function(id) {
	console.log("Selecting " + diagram.data.getItem(id).text);
	return true;
});


@template:	api_event
@descr:

Returning *false* from the handler will block the selection.

@relatedapi:
	- api/selection/events/diagram_onafterselect_event.md
	- api/selection/events/diagram_onbeforeunselect_event.md
	- api/selection/events/diagram_onafterunselect_event.md

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
    
    
@related:
	common_guides/configuration.md#selectingshapes