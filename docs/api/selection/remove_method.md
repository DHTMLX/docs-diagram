---
sidebar_label: remove()
title: remove Method of Selection
description: You can learn about the remove method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# remove()

### Description

@short: Removes the specified item or all the items from the selection list when called without arguments

### Usage

~~~jsx
remove({
    id: string | number
}): boolean;

//or

remove(): boolean;
~~~

### Parameters

The method may take as an argument an object with the following parameter:

- `id` - (required) the id of the item that should be removed from the selection list

### Returns

The method returns `true` if unselection of an item or the list cleanup has been successful

### Example

~~~jsx {9}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
// loading data
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> returns true if the item has been unselected
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

When called without arguments, the method clears the selection list:

~~~jsx {9-10}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
// loading data
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// removes all the items from the selection list
diagram.selection.remove(); 
console.log(diagram.selection.getIds()); // -> []
~~~

**Change log**: Updated in v6.0

**Related articles**:

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check links to snippets

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)
