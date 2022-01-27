---
sidebar_label: toolbar
title: toolbar Property
description: You can learn about the toolbar property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# toolbar

### Description

@short: optional, an array of icon objects which sets a toolbar with buttons for items
@descr:


### Usage

~~~js
toolbar?: [
    {
	    id: string,
        content: string,
	    check?: function,
	    css?: function
    },
    {...} // other icon objects
];
~~~

### Attributes

The **toolbar** array can include a set of icon objects. Each icon object can have the following attributes:

- `id` - (required) the id of the icon
- `content` - (required) the content of the icon. It can contain an HTML element with the name of the icon class
- `check` - (optional) checks whether the icon should be applied to the item. The function takes an item object and returns *true*, if the icon will be rendered for this item
- `css` - (optional) the function which returns the name(s) of CSS class(es) that should be applied to the item

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
	select: true,
	margin: {
    	y: 65
    },
    toolbar: [{
        id: "download",
        content: "<i class='dxi dxi-download'></i>"
    },
    {
        id: "info",
        content: "<i class='dxi dxi-information-outline'></i>"
    }]
});
~~~

**Related articles**:

- [Setting toolbar for items](../../../guides/diagram/configuration/#setting-toolbar-for-items)
- [Default icons](https://docs.dhtmlx.com/suite/helpers/icon/)

**Related sample**: [Diagram. Configuration. Per-shape toolbar](https://snippet.dhtmlx.com/4if395hd)
