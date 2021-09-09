callEvent
=============

@short: triggers an inner event
	
@params:
- name		string		the event's name, case-insensitive
- params	array		an array of the event-related data

@returns:
- result	boolean     <i>false</i>, if some of the event handlers return <i>false</i>. Otherwise, <i>true</i>

@example:
diagram.attachEvent("CustomEvent", function(param1, param2){
 	return true;
});

var res = diagram.callEvent("CustomEvent", [12, "abc"]);


@template:	api_method
@relatedapi:
	api/diagram_attachevent.md
	api/diagram_detachevent.md
@descr:
Normally, events are called automatically and you don't need to use this method.

