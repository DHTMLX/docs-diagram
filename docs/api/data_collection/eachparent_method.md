---
sidebar_label: eachParent()
title: eachParent Method of Data Collection
description: text
---

# eachParent()

@short: iterates through all parents of the specified item

@signature: {`eachParent(id: Id, callback: Callback, self?: boolean): void`}

@params:
- `id: string | number` - the id of the item
- `callback: function` - the function that will be applied to each parent of the item
- `self: boolean` - optional, defines whether the callback function should iterate over the specified item itself; *false* by default

@example:
diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);

@descr:

@changelog:
Added in v4.0
