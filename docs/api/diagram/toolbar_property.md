---
sidebar_label: toolbar
title: toolbar
description: text
---

# toolbar

@short: sets a toolbar with buttons for shapes

@signature: {`toolbar?: IShapeToolbarConfig[];`}

@example:
var diagram = new dhx.Diagram("diagram_container", { 
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

@relatedsample:
**Related sample**: [Diagram. Per-shape toolbar](https://snippet.dhtmlx.com/4if395hd)

@descr:
The toolbar is set as an array of icons objects. Each icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

**Related articles**

common_guides/configuration.md#settingtoolbarforshapes
