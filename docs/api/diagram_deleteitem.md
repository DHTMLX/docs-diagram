deleteItem
=============

@short:
	deletes all shapes from the diagram

@params:
- id		string,number		id of the shape

@example:
diagram.deleteItem(123);
diagram.paint();

@template:	api_method
@descr:

In case of an organogram, deleting a shape will remove the link to this shape and all child shapes as well. 

{{note The command doesn't trigger repainting, you need to add the *paint()* command to update the visual state of the widget.}}


@relatedapi:
	api/diagram_additem.md
	api/diagram_deleteitem.md
@related:
	guides/manipulating_shapes.md
@relatedsample:
diagram/01_organogram/07_add_delete.html