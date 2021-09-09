map
=========

@short:
iterates through all items of the diagram

@params:
- handler			function		a function that will be called for each item of a diagram

@example:
//getting ids of all elements of the diagram (shapes, links, groups, swimlanes)
diagram.data.map(function(item){
    console.log(item.id);
});


@template: api_method
@descr: