clearAll
=============

@short:
	deletes all shapes from the diagram

@example:
diagram.clearAll();
diagram.paint();

@template:	api_method
@descr:


{{note The command doesn't trigger repainting, you need to add the *paint()* command to update the visual state of the widget.}}


@relatedapi:
	api/diagram_additem.md
	api/diagram_deleteitem.md
@related:
	guides/manipulating_shapes.md
    
@relatedsample:
diagram/01_organogram/07_add_delete.html