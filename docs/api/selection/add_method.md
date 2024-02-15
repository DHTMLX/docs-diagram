---
sidebar_label: add()!!
title: add Method of Selection
description: You can learn about the add method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add

### Description

@short: Adds the specified item into the selection list

### Usage

~~~js
add({
    id: number | string,
    subId?: number | string,
    join?: boolean
}): boolean;
~~~

### Parameters

- `id` - (required) the id of the item to add into the selection list
- `subId` - (optional) the id of a subheader of a text element of a line (line title only)
- `join` - (optional) the mode of adding the selected element to the selection list. In case the parameter is set to *false* or isn't passed, the items previously added into the selection list will be reset

### Returns

The method returns:

-  `true` if the element hadn't been in the list before and has been successfully added into it
- `false` if the element hasn't been added into the list by some reason, namely:
    - a user has prohibited deleting a particular element, while the mode of adding was limited to a single element (`join:false`)
    - an element had already been added to the list

### Example

~~~js {7,10-11,14}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> returns true if the item has been selected
console.log(diagram.selection.getIds()); // -> ["1"]

// adds the item with the id:"2" to the selection list
diagram.selection.add({ id: "2", join: true }); 
console.log(diagram.selection.getIds()); // -> ["1", "2"]

diagram.selection.add({ id: "3" }); //->removes the previously selected items, i.e. the one with the id:"1"
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

The example below shows how the method works in case a `subId` is passed:

~~~js {7,8}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

// selects the title of the line with the id: "1.1"
diagram.selection.add({ id: "1", subId: "1.1" }); 
console.log(diagram.selection.getIds()); // -> ["1"]
~~~

**Change log**: 

The functionality is updated in v6.0:

- The `subId` and `join` parameters are added
- The returned boolean value is added

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check/update links to snippets

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)