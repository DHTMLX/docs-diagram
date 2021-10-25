---
sidebar_label: Shape properties
title: Shape Properties 
description: text
---

# Shape properties

{{note While specifying color values of the item, you can use the following formats: HEX, RGBA, RGB, HSL, or HSLA.}}

## Common properties

- **type** - (*string*) the type of the shape (by default: "card" in the org chart mode, "topic" in the mindmap mode);
- **id** - (*string | number*) the unique id of a shape;
- **x** - (*number*) the x coordinate of the shape position;
- **y** - (*number*) the y coordinate of the shape position;
- **text** - (*string | string[]*) the text to be rendered in a shape. The property can be set as an array of string values while [configuring a **custom shape** only](../../shapes/custom_shape/);
- **editable** - (*boolean*) enables/disables the ability to edit the text of the shape by double-clicking on it; *true* by default. <br>*The property is not available for a custom shape.*
- **height** - (*number*) the height of a shape;
- **width** - (*number*) the width of a shape;
- **fixed** - (*boolean*) enables/disables movement and resizing of a shape, *false* by default;
- **hidden** - (*boolean*) defines, whether a shape will be hidden.

{{note The values of the **height** and **width** are calculated automatically for a "text"/"topic" shape, depending on the content of the shape.}}

## Custom properties

- **[key: string]** - (*any*) a custom property for a custom shape. For details, check the [Custom shape](../custom_shape/) article. <br>*Use unique names as names for custom properties. Overriding the internal properties of the diagram shape object is forbidden as it causes the incorrect work of the diagram and its editor.*

~~~js
const data = [
    {
        "id": "main",
        "name": "Kristin Mccoy",
        "post": "Medical director",
        "phone": "(405) 555-0128",
        "mail": "kmccoy@gmail.com",
        "photo": "../img/avatar-01.jpg"
    },
]
~~~

## Properties specific for the default mode

- **angle** - (*number*) the angle of shape rotation;
- **preview** - (*string|object*) either a path to the image/a base64 image or an object with settings [to configure the shape preview displayed in the left panel of the editor](../../guides/diagram_editor/left_panel/#setting-shape-preview). The object can contain a set of optional properties:
  - **img** - (*string*) a path to the image or a base64 image;
  - **width** - (*number | string*) the width of the image;
  - **height** - (*number | string*) the height of the image;
  - **gap** - (*number | string*) sets the value of the [](../api/editor/gappreview_property.md) property for the specified type of a shape;
  - **scale** - (*number*) sets the value of the [](../api/editor/scalepreview_property.md) property for the specified type of a shape. It can't be applied together with the **img**, **width**, **height** properties.

~~~js
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start", angle: 10 },
];
~~~

## Properties specific for the org chart mode

- **parent** - (*string | number*) the id of the parent shape;
- **dx** - (*number*) the left offset of the shape;
- **dy** - (*number*) the top offset of the shape;
- **dir** - (*string*) the direction of shapes connecting. To connect shapes vertically, set the attribute to the "vertical" value;

**Related samples**: [Diagram. Org chart mode. Nested vertical lists](https://snippet.dhtmlx.com/98tzmzpg)

- **open** - (*boolean*) defines, whether the child items of the current shape will be shown. *True* by default;
- **assistant** - (*boolean*) defines, whether the shape is an assistant item for the parent shape.

~~~js
const data = [
    {
        "id": "1",
        "text": "item: 1",
    },
    {
        "id": "2",
        "text": "item: 2",
        "parent": 1,
        "dir": "vertical"
    },
    {
        "id": "1.1",
        "text": "assistant 1.1",
        "parent": 1,
        "dir": "vertical",
        "assistant": true
    },
];
~~~

## Properties specific for the mindmap mode

- **parent** - (*string | number*) the id of the parent shape;
- **dx** - (*number*) the left offset of the shape;
- **dy** - (*number*) the top offset of the shape;
- **open** - (*boolean*) defines, whether the child items of the current shape will be shown. *True* by default;
- **openDir** - (*object*) shows/hides the child items of the root shape. The object takes two attributes:
    - **left** - (*boolean*) shows/hides the child items to the left of the root shape;
    - **right** - (*boolean*) shows/hides the child items to the right of the root shape.

~~~js
const data = [
    {
        id: "1",
        text: "main",
        openDir: {
            left: true,
            right: false
        }
    },
    {
        id: "2",
        text: "2",
        parent: "1",
    },
    {
        id: "3",
        text: "3",
        parent: "1",
    },
];
~~~

## Properties specific for "text", "topic" and flow chart shapes

- **fill** - (*string*) the color of the shape, "#DEDEDE" by default;
- **stroke** - (*string*) the color of the shape outline, "#DEDEDE" by default;
- **strokeWidth** - (*number*) the width of the shape outline, 1 by default;
- **strokeType** - (*string*) the type of the stroke outline, "line" (default), "dash" for a dashed line;
- **strokeDash** - (*string*) the pattern of dashes and spaces for a dashed outline;
- **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
- **fontStyle** - (*string*) the style of the text font, can be "normal" (default), "italic" or "oblique";
- **fontWeight** - (*string*) the text font weight, possible values are: "normal" (default), "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font;
- **fontSize** - (*number*) the size of the font in pixels, 14 by default;
- **textAlign** - (*string*) the alignment of text in a shape:"left","center"(default),"right";
- **textVerticalAlign** - (*string*) the vertical alignment of text in a shape:"top","center"(default),"bottom";
- **lineHeight** - (*number*) the height of a line, 14 by default.

~~~js
const data = [
    {
        "id": "u1585139915192",
        "type": "text",
        "x": 25,
        "y": 280,
        "text": "Investment decision",
        "width": 150,
        "height": 16,
        "lineHeight": 14,
        "fontSize": "16",
        "fontColor": "rgba(0,0,0,0.70)",
    },
];
~~~

## Properties specific for "card" shapes

- **headerColor** - (*string*) the color of the header of the shape, any CSS legal color value.

~~~js
const data = [
    {
        "id": 1,
        "type": "card",
        "text": "item: 1",
    },
    {
        "id": 2,
        "type": "card",
        "text": "item: 2",
        "parent": 1,
        "headerColor": "#5874CD"
    },
];
~~~

## Properties specific for "img-card" shapes

- **img** - (*string*) the image of a shape;
- **title** - (*string*) the title of a shape;
- **headerColor** - (*string*) the color of the header of the shape, any CSS legal color value.

~~~js
const data = [
    {
        "id": "1",
        "type": "img-card",
        "text": "Chairman & CEO",
        "title": "Henry Bennett",
        "img": "../img/avatar-01.png",
        "headerColor": ""
    },
    {
        "id": "2",
        "type": "img-card",
        "text": "QA Lead",
        "title": "Emma Lynch",
        "img": "../img/avatar-02.png",
        "parent": 1,
        "headerColor": "#5874CD" 
    },
];
~~~

## Related articles

- [Default Shapes](../../shapes/default_shapes/)
- [Custom Shape](../../shapes/custom_shape/)