selectItem
=============

@short:
	selects the specified shape

@params:
- id		string,number		the shape id



@example:
// diagram must be created with the "select:true" option
var diagram = new dhx.Diagram("diagram_container", { type: "org", select: true });
diagram.parse(data);

diagram.selectItem("2");
diagram.paint();


@template:	api_method
@descr:

{{note The command doesn't trigger repainting, you need to add *paint()* command to update the visual state of the widget.}}

@relatedapi:
	api/diagram_unselectitem.md
	api/diagram_getselectedid.md
@relatedsample:
	diagram/01_organogram/05_selection.html
