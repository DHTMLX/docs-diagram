---
sidebar_label: find()
title: find Method of Data Collection
description: You can learn about the find method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# find()

### Description

@short: finds the item that corresponds to the specified parameters

### Usage

~~~js
find(rule: IFilterMode | DataCallback<T>): T;
~~~

### Parameters

`rule: object | function` - the search criteria

### Returns

The first object of the item that matches the specified criteria.

### Example

~~~js
//searching for a shape by the attribute key
const shape = diagram.data.find({by:"text",match:"Manager"});

//searching for a shape by the function
const shape = diagram.data.find(function(shape){
	if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~


**Related sample**: [Diagram. Data. Finding necessary shape](https://snippet.dhtmlx.com/sete9z73)

The **rule** parameter:

- if set as an `IFilterMode` object, the parameter contains the following attributes:
	- **by** - (*string,function*) the search criterion (either the key of the item attribute or a search function)
	- **match** - (*string*) the value of the item attribute
- if set as `DataCallback(item: T, index?: number, array?: T[])`, the search will be applied by the rule specified in the function.


**Related articles**:  [Finding the necessary item](../../../guides/manipulating_items/#finding-the-necessary-item)
