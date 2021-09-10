---
sidebar_label: findAll()
title: findAll
description: text
---

# findAll()

@short:
finds all the items that correspond to the specified parameters

@params:
- by			string,function			 the search criterion (either the key of the item attribute or a filtering function)
- match 		string					 the value of the item attribute

@returns:

- shapes		array		an array of matching item objects

@example:
//searching for shapes by the attribute key
var shapes = diagram.data.findAll({by:"text",match:"Manager"});

//searching for shapes by the function
var shapes = diagram.data.findAll(function(shapes){
	if(shapes.text==="Manager"||shapes.text==="Marketer"){return true}
});

@template: api_method
@descr:

@relatedapi:
	api/data/methods/find.md
@related:
	common_guides/manipulating_shapes.md#findingnecessaryshape