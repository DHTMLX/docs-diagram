updateItem
=============


@short: updates properties of the shape
	

@params:

- id		string,number		the id of the shape which needs to be updated
- text		hash				a hash of properties which need to be updated


@example:

diagram.updateItem(123, { text:"New text" });
diagram.paint();

@template:	api_method
@descr:

The command can't be used to change the *id* or *type* of the shape.

{{note The command doesn't trigger repainting, you need to add the *paint()* command to update the visual state of the widget.}}

@relatedapi:
	api/diagram_getitem.md
	api/diagram_additem.md
	api/diagram_deleteitem.md