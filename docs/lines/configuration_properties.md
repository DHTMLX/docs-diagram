---
sidebar_label: Line properties
title: Line Properties
description: You can learn about the Line properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Line properties

{{note While specifying color values of the item, you can use the following formats: HEX, RGBA, RGB, HSL, or HSLA.}}

## Common properties

- **type** - *(string)* the type of the connector line: "*line*" (default) or "*dash*"
- **id** - *(string | number)*  the id of a connector
- **from** - *(string | number)* the id of the parent shape
- **to** - *(string | number)* the id of the child shape
- **connectType** - (*string*) the type of the connector line: ["straight"](../../lines/#lines-in-the-default-mode), ["elbow"](../../lines/#lines-in-the-org-chart-mode) (the default type in the default/org chart modes), ["curved"](../../lines/#lines-in-the-mindmap-mode) (the default type in the mindmap mode);
- **strokeWidth** - (*number*) the width of the line, 2 by default;
- **stroke** - (*string*) the color of the line; "#2198F3" in the default mode, and "#CCC" in the org chart/mindmap modes by default.

## Properties specific for the default mode

- **forwardArrow** - *(string)* sets a forward arrow connector and defines the type of the arrow ("filled" by default)
- **backArrow** - *(string)* sets a back arrow connector and defines the type of the arrow ("filled" by default)
- **fromSide** - *(string)* the side of the shape from which connection will start ("*top*", "*bottom*", "*left*","*right*", "*center*")
- **toSide** - *(string)* the side of the shape to which a different shape will be attached ("*top*", "*bottom*", "*left*", "*right*", "*center*")
- **cornersRadius** - *(number)* the radius of rounding corners of a connector
- **customGap** - (*number*) sets the value of the [](../api/diagram/linegap_property.md) property for the line
- **title** - *(object)* sets text items of a line. The title property presents an object with the following properties:

  - **fontSize** - *(number | string)* the size of the font in pixels, 14 by default
  - **lineHeight** - *(number | string)* the height of a line, 14 by default
  - **textAlign** - *(string)* the alignment of text: "center"(default), "left", "right"
  - **textVerticalAlign** - *(string)* the vertical alignment of text: "center"(default), "top", "bottom"
  - **fontStyle** - *(string)* the style of the text font: "normal" (default), "italic", "oblique"
  - **fontColor** - *(string)* the color of the text font, "#4C4C4C" by default
  - **fontWeight** - *(string)* the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
  - **fill** - *(string)* the background color of the text item
  - **editable** - *(boolean)* enables/disables the ability to edit the text of all text items of the line by double-clicking on it; *true* by default
  - **hidden** - *(boolean)* defines, whether the text will be hidden
  - **draggable** - *(boolean)* enables/disables the ability to drag the text
  - **autoPosition** - *(boolean)* defines the direction of the text, *true* - the direction
 of the text is the same as the line, *false* - the direction of the text is always horizontal
  - **text** - *(array)* an array of text items of a line. The text property presents an array of text items of a line, each item contains the following configuration:

    - **id** - *(string | number)* the id of the text item of a line
    - **type** - *(string)* the type of an item, set it to "$linetext"
    - **width** - *(number)* the width of the text item, calculated automatically
    - **height** - *(number)* the height of text item, calculated automatically
    - **distance** - *(number)* defines the distance between the text and the parent shape, the value from 0 to 100
    - **autoPosition** - *(boolean)* defines the direction of the text, *true* - the direction
 of the text is the same as the line, *false* - the direction of the text is always horizontal
    - **hidden** - *(boolean)* defines, whether the text will be hidden
    - **editable** - *(boolean)* enables/disables the ability to edit the text of the item by double-clicking on it; *true* by default
    - **draggable** - *(boolean)* enables/disables the ability to fix text item with set distance value
    - **fill** - *(string)* the background color of the text item
    - **text** - *(string)* the text to be rendered in the text item of a line
    - **fontSize** - *(number | string)*  the size of the font in pixels, 14 by default
    - **lineHeight** - *(number | string)* the height of a line, 14 by default
    - **fontStyle** - *(string)* the style of the text font: "normal" (default), "italic", "oblique"
    - **fontColor** - *(string)* the color of the text font, "#4C4C4C" by default
    - **fontWeight** - *(string)* the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default
    - **textAlign** - *(string)* the alignment of text: "center"(default), "left", "right"
    - **textVerticalAlign** - *(string)* the vertical alignment of text: "center"(default), "top", "bottom"

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

## Related articles

- [Configuring lines](../../lines/)