---
sidebar_label: Line properties
title: Line Properties
description: text
---

# Line properties

{{note While specifying color values of the item, you can use the following formats: HEX, RGBA, RGB, HSL, or HSLA.}}

## Common properties

- **type** - *(string)* the type of the connector line: "*line*" (default) or "*dash*"
- **id** - *(string | number)*  the id of a connector
- **from** - *(string | number)* the id of the parent shape
- **to** - *(string | number)* the id of the child shape
- **connectType** - (*string*) the type of the connector line: ["straight"](../../lines/index/#lines-in-the-default-mode), ["elbow"](../../lines/index/#lines-in-the-org-chart-mode) (the default type in the default/org chart modes), ["curved"](../../lines/index/#lines-in-the-mindmap-mode) (the default type in the mindmap mode);
- **strokeWidth** - (*number*) the width of the line, 2 by default;
- **stroke** - (*string*) the color of the line; "#2198F3" in the default mode, and "#CCC" in the org chart/mindmap modes by default.

## Properties specific for the default mode

- **forwardArrow** - *(string)* sets a forward arrow connector and defines the type of the arrow ("filled" by default)
- **backArrow** - *(string)* sets a back arrow connector and defines the type of the arrow ("filled" by default)
- **fromSide** - *(string)* the side of the shape from which connection will start ("*top*","*bottom*","*left*","*right*","*center*")
- **toSide** - *(string)* the side of the shape to which a different shape will be attached ("*top*","*bottom*","*left*","*right*","*center*")
- **cornersRadius** - *(number)* the radius of rounding corners of a connector
- **customGap** - (*number*) sets the value of the [](../api/diagram/linegap_property.md) property for the line

## Example

~~~js
const data = [
    // configuring shapes
    { "id": 1, "x": 200, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 200, "y": 120, "text": "Call Client and \n set-up Appointment", "type": "process" },
    // configuring lines
    {
        type: "line",
        stroke: "#0AB169",
        connectType: "straight",
        from: "1",
        to: "2",
        fromSide: "bottom",
        toSide: "top",
        forwardArrow: "filled"
    }
];
~~~

## Related articles

- [Configuring lines](../../lines/index/)