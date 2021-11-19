---
sidebar_label: eachChild()
title: eachChild Method of Data Collection
description: You can learn about the eachChild method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# eachChild()

@short: iterates through the children of the specified item

@signature: {`eachChild(id: Id, callback: Callback, isTree?: boolean): void;`}

@params:
- `id: string | number` - the id of the item
- `callback: function` - the function that will be applied to each child of the item
- `isTree: boolean` - optional, defines, whether the function should iterate through all children (of any level) of the specified item. If *false*, the function will iterate only through the first-level children of the item; *true* by default.

@example:
diagram.data.eachChild("id_1", (item) => {
    console.log(item);
}, true);

@descr:

@changelog:
Added in v4.0
