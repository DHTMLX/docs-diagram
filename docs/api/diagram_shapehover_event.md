shapeHover
===============

@short:
	fires on moving the mouse pointer over a shape in the editor
    
@params:
- id	 			string,number 		the id of a shape
- e					Event				a native event object

@example:
diagram.events.on("shapeHover",function(id,e){
	console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});

@template: api_event
@descr:


@changelog:
Deprecated in v4.0

@deprecated: instead of it, you can use the [itemMouseOver](api/diagram_itemmouseover_event.md) event:

~~~js
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~
