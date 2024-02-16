---
sidebar_label: includes()!!
title: includes Method of Selection
description: You can learn about the includes method of selection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# includes()

### Description

@short: Checks whether an element is in the selection list

### Usage

~~~js
includes({
    id: string | number,
    subId?: string | number,
    strict?: boolean,
}): boolean;
~~~

### Parameters

The method takes an object argument with the following parameters:

- `id` - (required) the id of the checked item
- `subId` - (optional) the id of a subheader (of a text element of a line only)
- `strict` - (optional) controls the "strict" mode, `true` by default

### Returns

The method returns `true` if the element is in the selected list, otherwise `false`

### Example

~~~js {8-9}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // returns true
diagram.selection.includes({ id: "4" }) // returns false
~~~

The "strict" mode checks whether an id is in the list of selected elements, taking into consideration both `id` and `subId`. If the element is in the list of selected elements, including the title of the element in question, the method will return `false` if called without specifying the `subId`.

In case the `subId` is unknown or just the very fact of the checked element being in the list is important, you can disable the "strict" mode. Check the examples below:

~~~js {8-13}
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

diagram.selection.add({ id: "1", subId: "1.1" });
// with the enabled strict mode (by default):
diagram.selection.includes({ id: "1" }) // returns false
// with the enabled strict mode and subId specified:
diagram.selection.includes({ id: "1", subId: "1.1" }) // returns true
// with the disabled strict mode (the subId isn't specified):
diagram.selection.includes({ id: "1", strict: false }) // returns true
~~~

**Change log**: Added in v6.0

**Related articles**:  

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

**Related samples**:

TODO - check/update links to snippets

- [Diagram. Selection. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)