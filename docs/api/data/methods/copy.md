copy
=========

@short:
	creates a copy of a shape at the defined position
    
@params:
- id 			string,number		the id of a shape to copy
- index			number				the index to create a copy at
* target		object				optional, the target data collection object


@example:
diagram.data.copy("4",5); // copies the shape with id=4 to the position with index 5


@template: api_method
@descr:

@relatedapi:
api/data/methods/move.md