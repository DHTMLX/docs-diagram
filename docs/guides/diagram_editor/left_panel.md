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

## Width of the panel

The default width of the left panel is 295. You can change it and set any other width via the [](../../api/editor/shapebarwidth_property.md) property, e.g.:

~~~js
const editor = new dhx.DiagramEditor(document.body, {
    shapeBarWidth: 350	
});
~~~
## Setting shape preview

It is possible to customize the appearance of custom shapes rendered in the left panel of the editor via the **preview** property of the **defaults** attribute of the [addShape()](api/diagram_addshape.md) method. 

- **preview** - (*string|object*) specifies the settings to the shape displayed in the left panel. The object can contain a set of optional properties:

	- **img** - (*string*) a path to the image or a base64 image
	- **width** - (*number|string*) - the width of the image 
	- **height** - (*number|string*) - the height of the image
	- **gap** - (*number|string*) sets the **gapPreview** property for the specified type of a shape
	- **scale** - (*number*) sets the **scalePreview** property for the specified type of a shape. It can't be applied together with the **img** property.

Let's consider three possible options of using the **preview** property:

1\. You can specify an image to be shown in the left panel for a certain type of a shape. For this purpose, you need to pass either the URL to load an image from or a base64 image as a string value to the **preview** property:

~~~js
const defaults = {
	title: "Name and First name", 
    img: "../avatar-1.jpg", 
	height: 115, width: 330,
    preview: "../shape_preview.png", /*!*/
};

editor.diagram.addShape("template", {
	template: template,
	defaults: defaults /*!*/
});	
~~~

2\. You can also specify an image and set its width and height via passing an object as a parameter of the **preview** property:

~~~js
const defaults = {
	title: "Name and First name", email: "some@mail.com",
	img: "../avatar-1.jpg", height: 115, width: 330,
	preview: { /*!*/
		img: "../shape_preview.png", /*!*/
		height: 58, width: 165, /*!*/
	}
}

editor.diagram.addShape("template", {
	template: template,
	defaults: defaults
});	
~~~

{{note You can set the precise width and height of the image, but there is no ability to set the scale of the image.}}

3\. You can redefine the scale of the specific type of the shape rendered in the left panel via the **scale** property:

~~~js
const defaults = {card: {
	preview: {
		scale: 0.72, 
	}
}

var editor = new dhx.DiagramEditor(document.body, {
	shapeSections: {
		"org chart shapes": ["card", "img-card"],
		"flowchart shapes": [true]
    },
    scalePreview: 0.65,
	defaults: defaults		
});
~~~

https://snippet.dhtmlx.com/2tzyfois?mode=wide&text=diagram
https://snippet.dhtmlx.com/d5hcx01h?mode=wide&text=diagram

While the scale of the "card"-type shapes is 0.72, the scale of the other shapes in the left panel is 0.65.

{{note **Note**, that the **preview** property will be omitted while exporting data to the JSON format. }}


### Adding identical items with different settings

The library allows you to add several identical items (i.e. shapes of the same type, groups, or swimlanes) with different settings to the left panel of the editor. You can override the attributes of any shapes including custom ones or create unique configurations for the elements of the "$group" and "$swimlane" types and place them into the related sections.

<img style="margin: 20px auto 20px auto;display: block;" src="left_section_customize.png">

To do that, you need to create an object with a set of properties and their new values for a shape/item of the specific type. You can create as many objects as you need:

~~~js
const initial = {
	type: "data", text: "Initial data",
	fill: "#478D99", stroke: "#478D99", fontColor: "#FFF", 
	lineHeight: 16, 
}

const common = {
	type: "data", text: "Common data",
	fill: "#478D99", stroke: "#478D99", fontColor: "#FFF", 
	lineHeight: 16, 
}
~~~

and then add the names of the created objects to the list of the shapes/items you want to appear in the required section of the left panel:

~~~js
const editor = new dhx.DiagramEditor("editor", {
  	controls: { autoLayout: false },
  	shapeSections: {
    	"shape": [initial, common, true] /*!*/
  	},
  	shapeBarWidth: 320,
  	lineGap: 20,
  	scalePreview: 0.80
});
~~~

**Check more samples**:

{{editor	https://snippet.dhtmlx.com/0hf8ahrb	Diagram. Virtual private cloud architecture}}

{{editor	https://snippet.dhtmlx.com/1h4j9gb3	Diagram. Game levels and locations}}