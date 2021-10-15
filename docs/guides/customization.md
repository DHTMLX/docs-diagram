---
sidebar_label: Customizing items
title: Customizing Items
description: text
---

# Customizing Items

You can easily modify the appearance of diagram items by using various configuration properties inside their objects.

Besides, you can change the look and feel of the diagram according to your needs by creating custom shapes of the desired appearance.

## Styling shapes and lines via the configuration properties

### Styling shapes

A shape object provides a wide range of properties that you can use to modify the look and feel of shapes.

<iframe src="https://snippet.dhtmlx.com/a9t2z2dt?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

A good way to style all the shapes of the same type at once is to specify the styling settings for the shapes via the **defaults** property of the diagram:

~~~js
const defaults = {
  start: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  end: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16
  },
  ...
};
~~~

[See the full list of shape object properties](../../shapes/configuration_properties/).

### Styling lines

To change the look of connector lines, use the necessary configuration properties inside the line object. 

~~~js
const data = [
    {
      id: "1-2",
      from: "1",
      to: "2",
      type: "line",
      strokeType: "dash",
      stroke: "red",
    },
];
~~~

[See the full list of line object properties](../../lines/configuration_properties/).

Check the example:

<iframe src="https://snippet.dhtmlx.com/um7gy2tb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Defining the shape's template

You can create a customized diagram by adding new types of shapes into the diagram and defining templates for them. For this purpose, use the [](../api/diagram/addshape_method.md) method of the diagram object.

### Example in the default mode

<iframe src="https://snippet.dhtmlx.com/2tzyfois?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Example in the org chart mode

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Example in the mindmap mode

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Styling groups via the configuration properties

### Styling the group

To specify a custom style for a group, you can use the **style** property of the [group object](../../groups/configuration_properties/). For example:

<iframe src="https://snippet.dhtmlx.com/pdkgis8g?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Styling the group header

You can change the default style of the group header via the attributes of the **header** property of the [group object](../../groups/configuration_properties/).

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Styling swimlanes via the configuration properties

### Styling the swimlane

You can customize the **strokeWidth**, **stroke**, and **fill** settings of a swimlane via the **style** property of the [swimlane object](../../swimlanes/configuration_properties/#properties-of-a-swimlane):

~~~js
const data = [
    {
		"type": "$swimlane",
		"width": 970,
		"height": 790,
		"header": {
			"text": "Game levels and locations",
			"closable": true
		},
		"layout": [
			["1"],
			["2"],
			["3"],
			["4"],
			["5"]
		],
        "style": {
            "strokeWidth": 5,
            "stroke": "#083796",
            "fill": "#D4DAE4"
        }
	},
];
~~~

### Styling the swimlane headers/sub-headers

The **header**, **subHeaderRows**, and **subHeaderCols** properties of a [swimlane object](../../swimlanes/configuration_properties/#properties-of-a-swimlane) include sets of additional attributes for customizing the header and subheaders of the swimlane.

For example, you can change the background colors of the top subheaders of the swimlane via the **subHeaderCols** property:

~~~js
const data = [
	{
		"id": "main",
		"type": "$swimlane",
		"height": 730,
		"width": 1195,
		"header": {
			"closable": true,
			"text": "Waterfall diagram template"
		 },
		"layout": [
			[1, 2, 3, 4]
		],
		"subHeaderCols": {
			"headers": [
				{
					"text": "September",
					"fill": "rgba(243, 92, 79, 0.4)"
				},
				{
					"text": "October",
					"fill": "rgba(155, 96, 248, 0.4)"
				},
				{
					"text": "November",
					"fill": "rgba(255, 174, 18, 0.4)"
				},
				{
					"text": "December",
					"fill": "rgba(60, 201, 122, 0.4)"
				}
			]
		}
	}
];
~~~

Check the full example:

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Styling swimlane cells

If you need to customize a separate cell of the swimlane, use the **style** property of the [object of the swimlane cell](../../swimlanes/configuration_properties/#properties-of-a-swimlane-cell) (type: "$sgroup"). 

~~~js
const data = [
	{
		"id": "main",
		"type": "$swimlane",
		"height": 730,
		"width": 1195,
		"layout": [
			[1, 2, 3, 4]
		],
        ...
	},
	{
		"id": 1,
		"type": "$sgroup",
		"style": {
			"fill": "rgba(243, 92, 79, 0.05)"
		},
		"x": 0,
		"y": 80
	},
];
~~~

**Related sample**: [Diagram. Default mode. Waterfall diagram template](https://snippet.dhtmlx.com/k5vlvj8i)
