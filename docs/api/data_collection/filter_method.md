---
sidebar_label: filter()
title: filter
description: text
---

# filter()

@short: filters item in the diagram by the specified key 

@params:
- criteria			object,function				the filtering criteria (either the key of the item attribute or a filtering function)
* mode 				boolean						optional, <i>true</i> to define that each next filtering will be applied to the already filtered data, not to the initial data

@example:
// filtering by the key of the shape attribute
diagram.data.filter({by:"text",match:"Manager"});

// filtering by a function
diagram.data.filter(function(shape){
	if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});

@template: api_method
@descr:
The **criteria** parameter set as object has the following attributes:

- **by** - (*string*) the key of the item attribute
- **match** - (*string*) the value of the item attribute

The method will render only the items that meet the filtering criteria. To revert the diagram to the initial state, call the **filter()** method without parameters.

~~~js
diagram.data.filter();
~~~

@relatedsample:	https://snippet.dhtmlx.com/tm43bsgn	Diagram. Filtering shapes

@related:
	common_guides/manipulating_shapes.md#filteringshapes