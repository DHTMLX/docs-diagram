---
sidebar_label: eachParent()
title: eachParent
description: text
---

# eachParent()

@short: 
	iterates through all parents of the specified item
	
@params:
- id		string,number		the id of the item
- callback  function    the function that will be applied to each parent of the item
- self    boolean	optional, defines whether the callback function should iterate over the specified item itself; <i>false</i> by default


@example:
diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);


@template:	api_method
@descr:

@changelog:
Added in v4.0

@relatedapi:	
	api/data/methods/eachchild.md