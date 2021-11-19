---
sidebar_label: toolbar
title: toolbar Property
description: You can learn about the toolbar property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# toolbar

@short: An array of icon objects which sets a toolbar with buttons for items

@signature: {`toolbar?: IShapeToolbarConfig[];`}

@example:
const diagram = new dhx.Diagram("diagram_container", { 
	type:"org", 
	select:true,
	margin:{
    	y:65
    },
    toolbar:[{
        id: "download",
        content:"<i class='dxi dxi-download'></i>"
    },
    {
        id: "info",
        content:"<i class='dxi dxi-information-outline'></i>"
    }]
});

@descr:
**Related sample**: [Diagram. Configuration. Per-shape toolbar](https://snippet.dhtmlx.com/4if395hd)

Each icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the item. The function takes an item object and returns *true*, if the icon will be rendered for this item.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the item.

#### Related articles

[Setting toolbar for items](../../../guides/diagram/configuration/#setting-toolbar-for-items)
