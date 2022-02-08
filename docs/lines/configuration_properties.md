---
sidebar_label: Line properties
title: Line Properties
description: You can learn about the Line properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Line properties

{{note While specifying color values of the item, you can use the following formats: HEX, RGBA, RGB, HSL, or HSLA.}}

## Common properties

### Usage

~~~js
const data = [
    // line object
    {
        type?: "line" | "dash", // "line" by default
        id?: string | number,
        from?: string | number,
        to?: string | number,
        connectType?: "straight" | "elbow" | "curved",
        strokeWidth?: number, // 2 by default
        stroke?: string
    },
    // more line objects
];
~~~

### Description

Each line object can include the following properties:

- `type` - (optional) the type of the connector line: "*line*" (default) or "*dash*"
- `id` - (optional) the id of a connector
- `from` - (optional) the id of the parent shape
- `to` - (optional) the id of the child shape
- `connectType` - (optional) the type of the connector line: ["straight"](../../lines/#lines-in-the-default-mode), ["elbow"](../../lines/#lines-in-the-org-chart-mode) (the default type in the default/org chart modes), ["curved"](../../lines/#lines-in-the-mindmap-mode) (the default type in the mindmap mode)
- `strokeWidth` - (optional) the width of the line, 2 by default
- `stroke` - (optional) the color of the line; "#2198F3" in the default mode, and "#CCC" in the org chart/mindmap modes by default

## Properties specific for the default mode

### Usage

~~~js
const data = [
    // line object
    {
        ..., // common properties
        forwardArrow?: string, // "filled" by default
        backArrow?: string, // "filled" by default
        fromSide?: "top" | "bottom" | "left" | "right" | "center",
        toSide?: "top" | "bottom" | "left" | "right" | "center",
        cornersRadius?: number,
        customGap?: number,
        title?: {
            fontSize?: number | string, // 14 by default
            lineHeight?: number | string, // 14 by default
            textAlign?: "center" | "left" | "right", // "center" by default
            textVerticalAlign?: string,
            fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
            fontColor?: string, // "#4C4C4C" by default
            fontWeight?: string, // "500" by default
            fill?: string,
            editable?: boolean, // true by default
            hidden?: boolean,
            draggable?: boolean,
            autoPosition?: boolean,
            text?: [
                {
                    id?: string | number,
                    type?: "$linetext",
                    width?: number,
                    height?: number,
                    distance?: number,
                    autoPosition?: boolean,
                    hidden?: boolean,
                    editable?: boolean, // true by default
                    draggable?: boolean,
                    fill?: string,
                    text?: string,
                    fontSize?: number | string, // 14 by default
                    lineHeight?: number | string, // 14 by default
                    fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
                    fontColor?: string, // "#4C4C4C" by default
                    fontWeight?: string, // "500" by default
                    textAlign?: "center" | "left" | "right", // "center" by default
                    textVerticalAlign?: "center" | "top" | "bottom" // "center" by default
                },
                // more objects for text items of a line
            ]
        }
    },
    // more line objects
]
~~~

### Description

When preparing a data set for lines to load into the diagram in the default mode, you can add the following properties to the configuration object of a line:

- `forwardArrow` - (optional) sets a forward arrow connector and defines the type of the arrow ("filled" by default)
- `backArrow` - (optional) sets a back arrow connector and defines the type of the arrow ("filled" by default)
- `fromSide` - (optional) the side of the shape from which connection will start ("*top*", "*bottom*", "*left*","*right*", "*center*")
- `toSide` - (optional) the side of the shape to which a different shape will be attached ("*top*", "*bottom*", "*left*", "*right*", "*center*")
- `cornersRadius` - (optional) the radius of rounding corners of a connector
- `customGap` - (optional) sets the value of the [](../api/diagram/linegap_property.md) property for the line
- `title` - (optional) sets text items of a line. The title property presents an object with the following properties:
  - `fontSize` - (optional) the size of the font in pixels, 14 by default
  - `lineHeight` - (optional) the height of a line, 14 by default
  - `textAlign` - (optional) the alignment of text: "center"(default), "left", "right"
  - `textVerticalAlign` - (optional) the vertical alignment of text: "center"(default), "top", "bottom"
  - `fontStyle` - (optional) the style of the text font: "normal" (default), "italic", "oblique"
  - `fontColor` - (optional) the color of the text font, "#4C4C4C" by default
  - `fontWeight` - (optional) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
  - `fill` - (optional) the background color of the text item
  - `editable` - (optional) enables/disables the ability to edit the text of all text items of the line by double-clicking on it; *true* by default
  - `hidden` - (optional) defines, whether the text will be hidden
  - `draggable` - (optional) enables/disables the ability to drag the text
  - `autoPosition` - (optional) defines the direction of the text, *true* - the direction
 of the text is the same as the line, *false* - the direction of the text is always horizontal
  - `text` - (optional) an array of text items of a line. The text property presents an array of text items of a line, each item contains the following configuration:
    - `id` - (optional) the id of the text item of a line
    - `type` - (optional) the type of an item, set it to "$linetext"
    - `width` - (optional) the width of the text item, calculated automatically
    - `height` - (optional) the height of text item, calculated automatically
    - `distance` - (optional) defines the distance between the text and the parent shape, the value from 0 to 100
    - `autoPosition` - (optional) defines the direction of the text, *true* - the direction
 of the text is the same as the line, *false* - the direction of the text is always horizontal
    - `hidden` - (optional) defines, whether the text will be hidden
    - `editable` - (optional) enables/disables the ability to edit the text of the item by double-clicking on it; *true* by default
    - `draggable` - (optional) enables/disables the ability to fix text item with set distance value
    - `fill` - (optional) the background color of the text item
    - `text` - (optional) the text to be rendered in the text item of a line
    - `fontSize` - (optional) the size of the font in pixels, 14 by default
    - `lineHeight` - (optional) the height of a line, 14 by default
    - `fontStyle` - (optional) the style of the text font: "normal" (default), "italic", "oblique"
    - `fontColor` - (optional) the color of the text font, "#4C4C4C" by default
    - `fontWeight` - (optional) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
    - `textAlign` - (optional) the alignment of text: "center"(default), "left", "right"
    - `textVerticalAlign` - (optional) the vertical alignment of text: "center"(default), "top", "bottom"

## Example

~~~js
const data = [
    // configuring shapes
    { "id": 1, "x": 200, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 200, "y": 320, "text": "Call Client and \n set-up Appointment", "type": "process" },
    // configuring lines
    {
        "type": "line",
        "stroke": "#0AB169",
        "connectType": "straight",
        "from": "1",
        "to": "2",
        "fromSide": "bottom",
        "toSide": "top",
        "forwardArrow": "filled",
        "title": {
            "fontSize":14,
            "lineHeight":14,
            "text": [
                {
                    "type":"$linetext",
                    "id":"t2-3",
                    "text":"Read the instruction",
                }
            ]
        },
    },
];
~~~

**Related articles:** [Configuring lines](../../lines/)