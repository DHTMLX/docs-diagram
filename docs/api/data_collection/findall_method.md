---
sidebar_label: findAll()
title: findAll
description: text
---

# findAll()

@short: finds all the items that correspond to the specified parameters

@signature: {`findAll(rule: IFilterMode | DataCallback<T>): T[];`}

@params:
`rule: object | function` - the search criteria

@returns:
An array of matching item objects.

@example:
//searching for shapes by the attribute key
var shapes = diagram.data.findAll({ by: "text", match: "Manager" });

//searching for shapes by the function
var shapes = diagram.data.findAll(function (shapes) {
	if( shapes.text === "Manager" || shapes.text === "Marketer" ){
		return true
	}
});

@descr:

The **rule** parameter:

- if set as an `IFilterMode` object, the parameter contains the following attributes:
	- **by** - (*string,function*) the search criterion (either the key of the item attribute or a search function)
	- **match** - (*string*) the value of the item attribute
- if set as `DataCallback(item: T, index?: number, array?: T[])`, the search will be applied by the rule specified in the function.

#### Related articles

[Finding the necessary item](../../../guides/manipulating_items/#finding-the-necessary-item)
