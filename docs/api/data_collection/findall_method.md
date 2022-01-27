---
sidebar_label: findAll()
title: findAll Method of Data Collection
description: You can learn about the findAll method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# findAll()

### Description

@short: finds all the items that correspond to the specified parameters

@descr:

### Usage

~~~js
findAll(rule: IFilterMode | DataCallback<T>): T[];
~~~

### Parameters

`rule: object | function` - the search criteria

### Returns

An array of matching item objects.

### Example

~~~js
//searching for shapes by the attribute key
const shapes = diagram.data.findAll({ by: "text", match: "Manager" });

//searching for shapes by the function
const shapes = diagram.data.findAll(function (shapes) {
	if( shapes.text === "Manager" || shapes.text === "Marketer" ){
		return true
	}
});
~~~

The **rule** parameter:

- if set as an `IFilterMode` object, the parameter contains the following attributes:
	- **by** - (*string,function*) the search criterion (either the key of the item attribute or a search function)
	- **match** - (*string*) the value of the item attribute
- if set as `DataCallback(item: T, index?: number, array?: T[])`, the search will be applied by the rule specified in the function.

**Related articles**:  [Finding the necessary item](../../../guides/manipulating_items/#finding-the-necessary-item)
