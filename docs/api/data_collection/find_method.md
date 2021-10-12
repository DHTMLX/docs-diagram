---
sidebar_label: find()
title: find
description: text
---

# find()

@short: finds the item that corresponds to the specified parameters

@signature: {`find(rule: IFilterMode | DataCallback<T>): T;`}

@params:
`rule: object | function` - the search criteria

@returns:
The first object of the item that matches the specified criteria.

@example:
//searching for a shape by the attribute key
var shape = diagram.data.find({by:"text",match:"Manager"});

//searching for a shape by the function
var shape = diagram.data.find(function(shape){
	if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});

@relatedsample:
**Related sample**: [Diagram. Data. Finding necessary shape](https://snippet.dhtmlx.com/sete9z73)

@descr:
The **rule** parameter:

- if set as an `IFilterMode` object, the parameter contains the following attributes:
	- **by** - (*string,function*) the search criterion (either the key of the item attribute or a search function)
	- **match** - (*string*) the value of the item attribute
- if set as `DataCallback(item: T, index?: number, array?: T[])`, the search will be applied by the rule specified in the function.


#### Related articles

[Finding the necessary item](../../../guides/manipulating_items/#finding-the-necessary-item)
