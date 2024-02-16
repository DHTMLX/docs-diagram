---
sidebar_label: remove()!!
title: remove Method of Selection
description: You can learn about the remove method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

### Description

@short: Removes an item from the selection list by id or removes all items from the selection list when called without arguments 

### Usage

~~~js
remove(object?: { id: string | number }): boolean;
~~~

### Parameters

The method may take an object argument with the following parameter:

- `id` - (optional) the id of the item that should be removed from the selection list passed inside an object

or be called with no arguments to remove all the items from the selection list 

### Returns

The method returns `true` if the item has been unselected, otherwise `false`

### Example

~~~js {8}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> returns true if the item has been unselected
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

{{note Please note that you need to call the **paint()** method to repaint the diagram after removing selection.??}} 

Here's an example of calling the method without arguments:

~~~js {8}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove(); // -> unselects all the items
console.log(diagram.selection.getIds()); // -> []
~~~

**Change log**: 

The functionality is updated in v6.0:

- The method takes an object as an argument
- The `subId` parameter is no longer used

**Related articles**: 

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check/update links to snippets

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)