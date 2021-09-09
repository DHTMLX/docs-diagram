eachChild
============
@short:
	iterates through the first-level children of the defined shape

@params:

- id			string,number		the id of the parent shape
- handler		function			a function that will be called for each first-level child of the defined shape


@example:
diagram.eachChild("2",function(item){
    console.log(item.config.id);
});

@template:	api_method
@descr:

