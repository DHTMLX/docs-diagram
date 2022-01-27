---
sidebar_label: beforeExpand
title: beforeExpand Event
description: You can learn about the beforeExpand event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeExpand

### Description

@short: fires before expanding an item
@descr:


### Usage

~~~js
beforeExpand: (
    id: string | number, 
    dir?: string
) => boolean | void;
~~~

### Parameters

- `id` - (mandatory) the id of an item 
- `dir` - (optional) the side the children will be shown in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

### Returns

Return `false` to block expanding an item; otherwise, `true`

### Example

~~~js
diagram.events.on("beforeExpand", function(id, dir) {
    console.log("Expanding " + diagram.data.getItem(id).text, dir);
    return true;
});
~~~

**Change log**: The **dir** parameter has been added in v3.1

**Related article**: [Event Handling](../../../guides/event_handling/)

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)