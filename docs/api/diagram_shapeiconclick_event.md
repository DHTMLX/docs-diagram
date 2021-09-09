shapeIconClick
================

@short:
fires on clicking a toolbar icon

@params:
- id	 	string,number 		the id of the icon

@example:
var diagram = new dhx.Diagram("diagram_container", { 
	toolbar: [
      {
		id:"download",
		content:"<i class='zmdi zmdi-download'></i>"
	  },
	  {
		id:"info",
		content:"<i class='zmdi zmdi-info-outline'></i>"
	  }
    ]
});

diagram.events.on("shapeIconClick", function(icon){
	var id = diagram.selection.getId();
	alert(icon + " was clicked for id = " + id);
});

// For editor
editor.diagram.events.on("shapeIconClick", function(icon){
    var id = editor.diagram.selection.getId();
    alert(icon + " was clicked for id = " + id);
});

@template: api_event
@descr:

@relatedapi:
api/diagram_onshapeclick_event.md
api/diagram_onshapedblclick_event.md
api/diagram_shapemousedown_event.md
