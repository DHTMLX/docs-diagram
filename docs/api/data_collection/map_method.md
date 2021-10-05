---
sidebar_label: map()
title: map
description: text
---

# map()

@short: iterates through all items of the diagram

@signature: {`map(callback: DataCallback<T>): T[];`}

@params:
- `callback: function` - a function that will be called for each item of a diagram

@returns:
A new array of items where each item is the result of the callback function.

@example:
//getting ids of all items of the diagram (shapes, links, groups, swimlanes)
diagram.data.map(function(item){
    console.log(item.id);
});

@descr:
