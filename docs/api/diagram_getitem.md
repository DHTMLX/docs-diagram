getItem
=============


@short: returns the object of a shape by its id
	
@params:

- id	string,number	the id of a selected shape

@returns:

- shape    object      the object of a shape

@example:

var shape = diagram.getItem(123);


@template:	api_method
@descr:

You can access the original properties of a shape by using the *config* property:

~~~js
var shape = diagram.getItem(123);
var text = shape.config.text;
~~~

@relatedapi:
	api/diagram_updateitem.md