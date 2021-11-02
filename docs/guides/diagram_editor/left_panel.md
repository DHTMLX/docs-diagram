---
sidebar_label: Left panel
title: Left Panel
description: text
---

# Left Panel 

Left panel is a part of the editor that renders previews of Diagram items. You can choose the necessary items and drag them from the left panel into the grid area.

{{note The left panel is available only in the editor initialized in the default mode (type: "default").}}

## Default sections

By default, the left panel is divided into three sections: *Shapes*, *Groups*, and *Swimlanes*. The *Shapes* section includes all default shapes as well as custom ones.
The *Groups* and *Swimlanes* sections contain basic sets of the items.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom sections

To customize the structure of the left panel, you should use the [](../../api/editor/shapesections_property.md) property of the editor object. The property allows you to specify your own sections in the necessary order and put the items into the corresponding sections.

<iframe src="https://snippet.dhtmlx.com/2z0a18oz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

The **shapeSections** property is an object with a set of *key:value* pairs where *key* is the name of a section and *value* is an array with the types of the items to be rendered in the section.

{{note Setting boolean *true* as a value of the array will display all available [flow-chart shapes](diagram_guides/shapes_arrows_list.md#shapesconfiguration) in the section.}}

## Adding identical items with different settings into the left panel

The library allows you to add several identical items (i.e. items of the same type) with different settings to the left panel of the editor.
To do that, you need to:

- create separate objects with different configurations for the items of the necessary type. You can create as many objects as you need;
- use the names of the created objects as the types of the items and add them into the sections of the left panel using the [](../../api/editor/shapesections_property.md) property.

<iframe src="https://snippet.dhtmlx.com/2z0a18oz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Setting shape preview

To customize the appearance of the shapes rendered in the left panel of the editor, you can apply the [preview](../../../shapes/configuration_properties/#properties-specific-for-the-default-mode) configuration property of a shape object.

The property can be applied in two cases:

- when setting the default configuration of a default shape via the [](../../api/editor/defaults_property.md) property of the editor object;
- when setting the default configuration of a custom shape via the **defaults** attribute of the [](../../api/diagram/addshape_method.md) method. 

Let's consider three examples of configuring a shape preview:

1\. You can specify an image to be shown in the left panel for a custom shape. For this purpose, you need to pass either an URL to load an image from or a base64 image as a string value to the **preview** property:

~~~js {3}
const defaults = {
	title: "Name and First name", img: "../avatar-1.jpg", height: 115, width: 330,
    preview: "../shape_preview.png",
};

editor.diagram.addShape("template", {
	template: template,
	defaults: defaults
});	
~~~

2\. If you need to specify an image and define its width and height, you should provide the **preview** property as an object with the **img**, **heigh**, and **width** attributes:

~~~js {4-7}
const defaults = {
	title: "Name and First name", email: "some@mail.com",
	img: "../avatar-1.jpg", height: 115, width: 330,
	preview: { 
		img: "../shape_preview.png", 
		height: 58, width: 165, 
	}
}

editor.diagram.addShape("template", {
	template: template,
	defaults: defaults
});	
~~~

{{note You can set the precise width and height of the image, but there is no ability to set the scale of the image.}}

3\. You can redefine the scale of a specific shape rendered in the left panel via the **scale** property:

~~~js {5-7}
const defaults = {
    name: "Name and First name",
    post: "Position held",
    ...
    preview: {
        scale: 0.72
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Custom shapes": ["personalCard"],
        "OrgChart shapes": ["card", "img-card"]
    },
    scalePreview: 0.65,
});

editor.diagram.addShape("personalCard", {
    template: personalCard,
    defaults,
    ...
});
~~~

**Related sample:** [Diagram editor. Default mode. Custom image shape](https://snippet.dhtmlx.com/d5hcx01h)

While the scale of the "personalCard"-type shapes is 0.72, the scale of the other shapes in the left panel is 0.65.

{{note **Note**, that the **preview** property will be omitted when exporting data to the JSON format. }}

## Width of the panel

The default width of the left panel is 295. You can change it and set any other width via the [](../../api/editor/shapebarwidth_property.md) property, e.g.:

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    shapeBarWidth: 350	
});
~~~