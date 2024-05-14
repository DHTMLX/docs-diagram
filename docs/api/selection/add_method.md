---
sidebar_label: add()
title: add Method of Selection
description: You can learn about the add method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add()

### Description

@short: Adds the specified item into the selection list

### Usage

~~~jsx
add({
    id: string | number,
    join?: boolean,
    batch?: (string | number)[]
}): boolean;
~~~

### Parameters

The method takes as an argument an object with the following parameters:

- `id` - (required) the id of an item
- `join` - (optional) the mode of adding the selected element to the selection list. In case the parameter is set to *false* or isn't passed, the items previously added into the selection list will be reset
- `batch` - (optional) the list of items to select (if known beforehand)

### Returns

The method returns:

- `true` if the element hadn't been in the selection list and was successfully added into it
- `false` if the element wasn't added into the selection list by some reason, e.g. an element had already been added to the selection list

### Example

~~~jsx {8,11-12,15-16}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
// loading data
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> returns true if the item has been selected
console.log(diagram.selection.getIds()); // -> ["1"]

// adds the item with the id:"2" to the already selected items
diagram.selection.add({ id: "2", join: true }); 
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// removes the previously selected items and adds the item with the id:"3"
diagram.selection.add({ id: "3" }); 
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

**Change log**: Updated in v6.0

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

TODO - check links to snippets

**Related samples**:

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)
