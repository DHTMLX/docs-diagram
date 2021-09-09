getRoot
===========

@short:
 	returns the id of the root item by the id of its child
    
    
@params:
- id		string,number		the id of the child item


@returns:
- param		string		the id of the root item


@example:
diagram.data.getRoot("id_1.1.1"); -> "id_1"

@template: api_method
@descr:

The root item is the first item of a tree structure.

@changelog:
Added in v4.0

@relatedapi:	
	api/data/methods/getroots.md