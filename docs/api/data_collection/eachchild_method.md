---
sidebar_label: eachChild()
title: eachChild
description: text
---

# eachChild()

@short: iterates through the children of the specified item

@params:
- id    string, number  the id of the item
- callback  function    the function that will be applied to each child of the item
- isTree    boolean     optional, defines, whether the function should iterate through all children (of any level) of the specified item. If <i>false</i>, the function will iterate only through the first-level children of the item; <i>true</i> by default.

@example:
diagram.data.eachChild("id_1", (item) => {
    console.log(item);
}, true);

@template: api_method
@descr:

@relatedapi:	
	api/data/methods/eachparent.md

@changelog:
Added in v4.0
