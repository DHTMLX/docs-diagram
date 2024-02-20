---
sidebar_label: getItem()!!
title: getItem Method of Selection
description: You can learn about the getItem method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getItem()

### Description

@short: Returns the object of a selected item by id or the object of the last selected item when called without arguments

### Usage

~~~js
getItem({ 
    id: string | number 
}): object;
~~~

### Parameters

The method takes an object argument with the following parameter:

- `id` - (optional) - the id of the item in question

### Returns

The method returns the object of the specified item, if it is in the selection list, or the object of the last selected item

### Example

~~~js {9-11,13-15,17-19} 
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
// loading data
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// getting the last selected item
const item = diagram.selection.getItem(); 
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// getting the selected item by id
const item = diagram.selection.getItem({ id: "1" }); 
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// trying to get an item which is not in the selection list
const item = diagram.selection.getItem({ id: "4" }); 
// -> returns undefined, since there is no item with the specified id in the selection list
~~~

**Change log**: 

The functionality is updated in v6.0:

- The method takes an object as an argument
- The `id` parameter is added

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - update links to snippets

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)