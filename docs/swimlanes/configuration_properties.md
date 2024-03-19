---
sidebar_label: Swimlane properties !!
title: Swimlane and Swimlane Cell Properties
description: You can learn about the Swimlane and Swimlane cell properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Swimlane and swimlane cell properties

{{note While specifying color values of the item, use the HEX format.}}

## Properties of a swimlane

### Usage

~~~js
const data = [
    // swimlane object
    {
        type: "$swimlane",
        id?: string | number,
        width: number,
        height: number,
        x?: number,
        y?: number,
        layout: array,
        fixed?: boolean,
        open?: boolean, // true by default
        style?: {
            strokeWidth?: number, // 1 by default
            stroke?: string,
            fill?: string
        },
        header?: {
            height?: number, // 40 by default
            fill?: string,
            text?: string,
            fontSize?: number, // 14 by default
            lineHeight?: number, // 14 by default
            textAlign?: "left" | "center" | "right", // "center" by default
            textVerticalAlign?: "top" | "center" | "bottom", // "center" by default
            fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
            fontColor?: string, // "#4C4C4C" by default
            fontWeight?: string, // "500" by default
            iconColor?: string, // "#808080" by default
            position?: "top" | "bottom" | "left" | "right",
            editable?: boolean, // true by default
            closable?: boolean, // false by default
            enable?: boolean // true by default
        },
        subHeaderRows?: {
            height?: number | string, // 40 by default
            position?: "left" | "right",
            enable?: boolean, // true by default
            fill?: string,
            fontSize?: number, // 14 by default
            lineHeight?: number, // 14 by default
            textAlign?: "left" | "center" | "right", // "center" by default
            textVerticalAlign?: "top" | "center" | "bottom", // "center" by default
            fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
            fontColor?: string, // "#4C4C4C" by default
            fontWeight?: string, // "500" by default
            iconColor?: string, // "#808080" by default
            editable?: boolean, // true by default
            headers?: [
                // header object
                {
                    id?: string,
                    text: string,
                    fill?: string,
                    fontSize?: number, // 14 by default
                    lineHeight?: number, // 14 by default
                    textAlign?: "left" | "center" | "right", // "center" by default
                    textVerticalAlign?: "top" | "center" | "bottom", // "center" by default
                    fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
                    fontColor?: string, // "#4C4C4C" by default
                    fontWeight?: string, // "500" by default
                    iconColor?: string, // "#808080" by default
                    editable?: boolean // true by default
                },
                // more header objects
            ]
        },
        subHeaderCols?: {
            position?: "top" | "bottom",
            ... // the other attributes are the same as the attributes of subHeaderRows
        },
        [key: string]?: any
    }
    // more swimlane objects
];
~~~

### Description

Each swimlane object can include the following configuration properties:

- `type` - (required) the type of an element, set it to "$swimlane"
- `id` - (optional) the unique id of a swimlane
- `width` - (required) the width of the swimlane, including its header (*position: left/right*)
- `height` - (required) the height of the swimlane, including its header (*position: top/bottom*)
- `x` - (optional) the x coordinate of the swimlane position
- `y` - (optional) the y coordinate of the swimlane position
- `layout` - (required) an array with matrix representation of the cells of the swimlane
- `fixed` - (optional) enables/disables the ability to move and resize the swimlane; *false* by default
- `open` - (optional) defines whether the swimlane is initialized in the expanded (*true*, default) or collapsed (*false*) state
:::tip
The **open** property works when a **header** is initialized with the **closable** attribute
:::
- `style` - (optional) an object with the style settings of the swimlane. The object can contain the following attributes:
    - `strokeWidth` - (optional) the width of the swimlane border, 1 by default
    - `stroke` - (optional) the color of the border of the swimlane, "#DEDEDE" by default
    - `fill` - (optional) the background color for all cells of the swimlane
- `header` - (optional) an object with configuration attributes of the header of the swimlane. The attributes are:
    - `height` - (optional) the height of the header, 40 by default
    - `fill` - (optional) the background color of the header
    - `text` - (optional) the text to be rendered in the header
    - `fontSize` - (optional) the size of the font in pixels, 14 by default
    - `lineHeight` - (optional) the height of a line, 14 by default
    - `textAlign` - (optional) the alignment of text in the header: "left", "center"(default), "right"
    - `textVerticalAlign` - (optional) the vertical alignment of text in the header: "top", "center"(default), "bottom"
    - `fontStyle` - (optional) the style of the text font: "normal" (default), "italic", "oblique"
    - `fontColor` - (optional) the color of the text font, "#4C4C4C" by default
    - `fontWeight` - (optional) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
    - `iconColor` - (optional) the color of the icon of the header, "#808080" by default
    - `position` - (optional) the positioning of the group header: "top" (default) | "bottom" | "left" | "right"
    - `editable` - (optional) enables/disables the ability to edit the text of the header by double-clicking on it; *true* by default
    - `closable` - (optional) shows/hides an icon intended to expand/collapse a swimlane; *false* by default
    - `enable` - (optional) shows/hides the header of the group; *true* by default
- `subHeaderRows` - (optional) an object with configuration settings of the left/right subheaders of the swimlane. The object have the following attributes:
    - `height` - (optional) the height of the subheaders, 40 by default
    - `position` - (optional) the positioning of the subheaders: "left" | "right"
    - `enable` - (optional) shows/hides the subheaders of the group; *true* by default
    - `fill` - (optional) the background color of the subheaders
    - `fontSize` - (optional) the size of the font in pixels, 14 by default
    - `lineHeight` - (optional) the height of a line, 14 by default
    - `textAlign` - (optional) the alignment of text in the subheaders: "left", "center"(default), "right"
    - `textVerticalAlign` - (optional) the vertical alignment of text in the subheaders: "top", "center"(default), "bottom"
    - `fontStyle` - (optional) the style of the text font: "normal" (default), "italic", "oblique"
    - `fontColor` - (optional) the color of the text font, "#4C4C4C" by default
    - `fontWeight` - (optional) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
    - `iconColor` - (optional) the color of the icon of the subheaders, "#808080" by default
    - `editable` - (optional) enables/disables the ability to edit the text of the subheaders by double-clicking; *true* by default
    - `headers` - (optional) an array of subheaders objects. Each object may contain the following properties:
        - `id` - (optional) the id of the subheader
        - `text` - (required) the text to be rendered in the subheader
        - `fill` - (optional) the background color of the subheader
        - `fontSize` - (optional) the size of the font in pixels, 14 by default
        - `lineHeight` - (optional) the height of a line, 14 by default
        - `textAlign` - (optional) the alignment of text in the subheader: "left", "center"(default), "right"
        - `textVerticalAlign` - (optional) the vertical alignment of text in the subheader: "top", "center"(default), "bottom"
        - `fontStyle` - (optional) the style of the text font: "normal" (default), "italic", "oblique"
        - `fontColor` - (optional) the color of the text font, "#4C4C4C" by default
        - `fontWeight` - (optional) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
        - `iconColor` - (optional) the color of the icon of the subheader, "#808080" by default
        - `editable` - (optional) enables/disables the ability to edit the text of the subheader by double-clicking on it; *true* by default
- `subHeaderCols` - (optional) an object with configuration settings of the top/bottom subheaders of the swimlane. The object have the following attribute:
    - `position` - (optional) the positioning of the subheaders: "top" | "bottom"
    - the other attributes of **subHeaderCols** are the same as the attributes of **subHeaderRows** (check the details above)
- `key` - (optional) your own property with your own logic to be implemented under the hood

### Example

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
                { "text": "September", "fill": "rgba(243, 92, 79, 0.4)" },
                { "text": "October", "fill": "rgba(155, 96, 248, 0.4)" },
                { "text": "November", "fill": "rgba(255, 174, 18, 0.4)" },
                { "text": "December", "fill": "rgba(60, 201, 122, 0.4)" }
            ]
        }
    },
];
~~~

## Properties of a swimlane cell

### Usage

~~~js
const data = [
    // swimlane cell object
    {
        type: "$sgroup",
        id?: string | number,
        groupChildren?: array,
        style?: {
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            groupBehavior?: "unbound" | "boundNoBorderExtension", // "unbound" by default
            padding?: number
        }
    },
    // more objects of swimlane cells
];
~~~

### Description

The configuration properties of a swimlane cell are given below:

- `type` - (required) the type of a swimlane cell, set it to "$sgroup"
- `id` - (optional) the unique id of a swimlane cell
- `groupChildren` - (optional) an array with ids of the first-level child items of a cell
- `style` - (optional) an object with the style settings of the cell. The object can contain the following properties:
    - `fill` - (optional) the background color of the cell
    - `overFill` - (optional) the background color of the cell when the user is holding the item and moving it into/outside the cell *providing that no less than 75% of the item's area is inside the cell*
    - `partiallyFill` - (optional) the background color of the cell when the user is holding the item and moving it into/outside the cell *providing that 75% of the item's area or more is out of the cell and other settings are not defined via the **exitArea** attribute*
- `exitArea` - (optional) an object with the settings which will be applied to the item when the user is dragging it out of the cell (*is applied only to the first-level children of the cell*). The object can contain the following attributes:
    - `groupBehavior` - (optional) the behavior of the child item of the cell when the user is moving it out of the cell: 
        - *"unbound"* (by default) - the user can move an item into or outside the cell
        - *"boundNoBorderExtension"* - the user can move an item into the cell but cannot drag the item outside the cell if the item has been dropped inside the cell. The item won't expand the borders of the cell when trying to drag the item outside the cell
    - `padding` - (optional) defines the padding between the cell and the edge of the item when moving the item inside the cell. <br> 
    :::tip
    The **padding** attribute is available if *groupBehavior: "boundNoBorderExtension"*
    :::

### Example

~~~js
const data = [
  // configuring a swimlane
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ],
    },
    // configuring a cell of the swimlane
    {
        "id": 1,
        "type": "$sgroup",
        "groupChildren": ["s1"],
        "style": {
            "fill": "rgba(243, 92, 79, 0.05)"
        },
        "x": 0,
        "y": 80
    },
    // configuring a shape to put into the cell
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    },
];
~~~

**Related articles:** [Configuring swimlanes](../../swimlanes/)

**Related samples**: 

- [Diagram. Default mode. Game levels and locations](https://snippet.dhtmlx.com/1h4j9gb3?tag=diagram&mode=wide)
- [Diagram. Default mode. Swimlane template](https://snippet.dhtmlx.com/z6x5m3gb?tag=diagram&mode=wide)
- [Diagram. Default mode. Waterfall diagram template](https://snippet.dhtmlx.com/k5vlvj8i?tag=diagram&mode=wide)
- [Diagram. Default mode. Eisenhower matrix example](https://snippet.dhtmlx.com/yfvccvc4?mode=wide)<br>Read the details in the [How to Build a JavaScript Eisenhower Matrix with DHTMLX](https://dhtmlx.com/blog/build-javascript-eisenhower-matrix-dhtmlx/) article