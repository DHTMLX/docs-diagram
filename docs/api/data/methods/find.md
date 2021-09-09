find
==========

@short:
finds the item that corresponds to the specified parameters

@params:
- by 				string,function			the search criterion (either the key of the item attribute or a filtering function)
- match 			string					the value of the item attribute

@returns:

- shape		object		the object of the matching item

@example:
//searching for a shape by the attribute key
var shape = diagram.data.find({by:"text",match:"Manager"});

//searching for a shape by the function
var shape = diagram.data.find(function(shape){
	if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});

@template: api_method
@descr:

@relatedapi:
api/data/methods/findall.md

@relatedsample:	https://snippet.dhtmlx.com/sete9z73	Diagram. Finding necessary shape

@related:
	common_guides/manipulating_shapes.md#findingnecessaryshape