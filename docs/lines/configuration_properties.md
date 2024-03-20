---
sidebar_label: Line properties !!
title: Line Properties
description: You can learn about the Line properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Line properties

:::note 
While specifying color values of the item, use the HEX format.
:::

## Common properties

### Usage

~~~js
const data = [
    // line object
    {
        type: "line" | "dash", 
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

- `type` - (required) the type of the connector line: "*line*" or "*dash*"
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
        points?: [
            { x: number, y: number, custom?: boolean },
            // more point's objects
        ]
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
- `points` - (optional) sets an array with point's objects for a line. Each object contains the following properties:
    - `x` - (required) the x coordinate of the point
    - `y` - (required) the y coordinate of the point
    - `custom` - (optional) defines whether the point is fixed. If *true*, the position of the point can be changed only after interaction with it

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
        "from": 1,
        "to": 2,
        "fromSide": "bottom",
        "toSide": "top",
        "forwardArrow": "filled"
    },
];
~~~

**Related articles:** [Configuring lines](../../lines/)