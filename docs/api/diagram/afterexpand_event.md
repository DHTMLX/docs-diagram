---
sidebar_label: afterExpand
title: afterExpand Event
description: You can learn about the afterExpand event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterExpand

### Description

@short: fires after an item has been expanded
@descr:


### Usage

~~~js
afterExpand: (
    id: string | number, 
    dir?: string
) => void;
~~~

### Parameters

- `id` - (mandatory) the id of an item which has been expanded
- `dir` - (optional) the side the children were shown in relation to the parent shape ("left" or "right" for *type:"topic"*, otherwise - undefined)

### Example

~~~js
diagram.events.on("afterExpand", function(id, dir) {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});
~~~

**Change log**: The **dir** parameter has been added in v3.1

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)