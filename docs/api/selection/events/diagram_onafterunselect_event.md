afterUnSelect
=============

@short: fires after unselecting an item

@params:
- id	 	string,number 		the item id


@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("AfterUnSelect", function (id) {
	console.log(diagram.data.getItem(id).text + " was unselected");
});


@template:	api_event
@descr:



@relatedapi:
	- api/selection/events/diagram_onbeforeselect_event.md
	- api/selection/events/diagram_onafterselect_event.md
	- api/selection/events/diagram_onbeforeunselect_event.md

**Related sample**:
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
    
    
@related:
	common_guides/configuration.md#selectingshapes