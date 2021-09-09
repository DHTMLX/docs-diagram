eachItem
=============
@short:
	iterates through all items of the diagram

@params:
- handler		function			a function that will be called for each shape of a diagram


@example:
diagram.eachItem(function(item){
    console.log(item.config.id);
});

@template:	api_method
@descr:

