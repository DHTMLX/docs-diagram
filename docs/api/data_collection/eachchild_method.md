---
sidebar_label: eachChild()
title: eachChild Method of Data Collection
description: text
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
