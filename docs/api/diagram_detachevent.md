detachEvent
=============
@short:detaches a handler from an event (which was attached before by the attachEvent() method)
	

@params: 
- name		string		name of event to detach
* context  	any			context marker



@example:
diagram.attachEvent("onShapeClick", function(id) {
    alert("You've just clicked an item with id="+id);
});

diagram.detachEvent("onShapeClick");

@relatedapi:
	 api/diagram_attachevent.md
	 api/diagram_callevent.md

@template:	api_method
@descr:
By default detachEvent() removes all event handlers for the target event. You can detach particular event handlers by using the context marker.


~~~js
var marker = "any"; // you can use any string | object value

diagram.attachEvent("onShapeClick", handler1);
diagram.attachEvent("onShapeClick", handler2, marker);
//next command will delete only handler2
diagram.detachEvent("onShapeClick", marker);
~~~