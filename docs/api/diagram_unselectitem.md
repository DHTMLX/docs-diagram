unselectItem
=============

@short:
	unselects a previously selected shape

@params:
- id		string,number		the shape id


@example:
diagram.unselectItem("2");
diagram.paint();


@template:	api_method
@descr:

{{note The command doesn't trigger repainting, you need to add *paint()* command to update the visual state of the widget.}}

@relatedapi:
	api/diagram_selectitem.md
	api/diagram_getselectedid.md
@relatedsample:
	diagram/01_organogram/05_selection.html
