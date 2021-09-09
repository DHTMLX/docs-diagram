detach
============

@short:detaches a handler from an event (which was attached before by the on() method)
	
@params: 
- name			string			the name of event to detach
* context  		any				a context marker


@example:
diagram.events.on("ShapeClick", function(id) {
    alert("You've just clicked an item with id="+id);
});

diagram.events.detach("ShapeClick");

@relatedapi:
	api/events/fire.md
	api/events/on.md
	 

@template:	api_method
@descr:
By default **detach()** removes all event handlers from the target event. You can detach particular event handlers by using the context marker.


~~~js
var marker = "any"; // you can use any string|object value

diagram.events.on("ShapeClick", handler1);
diagram.events.on("ShapeClick", handler2, marker);
// the next command will delete only handler2
diagram.events.detach("ShapeClick", marker);
~~~