---
sidebar_label: getItem()
title: getItem
description: text
---

# getItem()

@short: 
	returns the object of an item by its id
	
@params:

- id		string,number		the id of a selected item

@returns:

- shape    	object      	the object of an item

@example:

var shape = diagram.data.getItem(123);


@template:	api_method
@descr:

You can access the original properties of an item like this:

~~~js
// accessing the properties of the shape
var shape = diagram.data.getItem(123);
var text = shape.text;
~~~

@relatedapi:	
	api/data/methods/getid.md
	api/data/methods/getindex.md
    api/data/methods/update.md
	
@related:
	common_guides/manipulating_shapes.md#gettingshape