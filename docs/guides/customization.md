---
sidebar_label: Customizing items 
title: Customizing Items
description: You can learn about customizing items in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Customizing items

You can easily modify the appearance of diagram items by using various [configuration properties](category/items-api/) inside their objects. Besides, you can change the look and feel of the diagram according to your needs by creating custom shapes of the desired appearance.

## Styling shapes and lines via the configuration properties

### Styling shapes

A shape object provides a wide range of properties that you can use to modify the look and feel of shapes.

<iframe src="https://snippet.dhtmlx.com/a9t2z2dt?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

A good way to style all the shapes of the same type at once is to specify the styling settings for the shapes via the [`defaults`](/api/diagram/defaults_property/) property of the diagram:

~~~jsx
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
  // ...
};
~~~

[See the full list of the shape object properties](../../shapes/configuration_properties/).

### Styling lines

To change the look of connector lines, use the necessary configuration properties inside the line object. 

~~~jsx
const data = [
    {
      id: "1-2",
      from: "1",
      to: "2",
      type: "line",
      strokeType: "dash", // dash line
      stroke: "#fa55d1" // line color
    }
];
~~~

[See the full list of the line object properties](../../lines/configuration_properties/).

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

## Styling target shapes

While using the org and mindmap charts in the Diagram Editor, you can add a custom style for target items.

:::note
The stylization doesn't work with the parent item of the moved item and with the moved item with the property `giveItem: false`
:::

~~~jsx
<style>
    .dhx_diagram_item.dhx_action__target--take {
        // styles for the target item which can catch another item
    }
    .dhx_diagram_item.dhx_action__target--doesnt_take {
        // styles for the target item which can not catch another item
    }
</style>
~~~

## Styling groups via the configuration properties

### Styling the group

To specify a custom style for a group, you can use the `style` property of the [group object](../../groups/configuration_properties/). For example:

<iframe src="https://snippet.dhtmlx.com/pdkgis8g?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Styling the group header

You can change the default style of the group header via the attributes of the `header` property of the [group object](../../groups/configuration_properties/).

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Styling swimlanes via the configuration properties

### Styling the swimlane

You can customize the `strokeWidth`, `stroke`, and `fill` settings of a swimlane via the `style` property of the [swimlane object](../../swimlanes/configuration_properties/#properties-of-a-swimlane):

~~~jsx
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
    }
];
~~~

### Styling the swimlane headers/sub-headers

The `header`, `subHeaderRows`, and `subHeaderCols` properties of a [swimlane object](../../swimlanes/configuration_properties/#properties-of-a-swimlane) include sets of additional attributes for customizing the header and subheaders of the swimlane.

For example, you can change the background colors of the top subheaders of the swimlane via the `subHeaderCols` property:

~~~jsx
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
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    }
];
~~~

Check the full example:

<iframe src="https://snippet.dhtmlx.com/k5vlvj8i?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Styling swimlane cells

If you need to customize a separate cell of the swimlane, use the `style` property of the [swimlane cell object](../../swimlanes/configuration_properties/#properties-of-a-swimlane-cell) (`type:"$sgroup"`).

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ],
        // ...
    },
    {
        "id": 1,
        "type": "$sgroup",
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    }
];
~~~

**Related sample**: [Diagram. Default mode. Waterfall diagram template](https://snippet.dhtmlx.com/k5vlvj8i)
