---
sidebar_label: Shape properties !!
title: Shape Properties
description: You can learn about the Shape properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Shape properties

:::note 
While specifying color values of the item, use the HEX format.
:::

## Common properties

### Usage

~~~jsx
const data = [
    // shape object
    {
        type: string, 
        id?: string | number,
        x?: number, // required in the default mode of Diagram
        y?: number, // required in the default mode of Diagram
        text?: string | string[],
        editable?: boolean, // true by default
        height?: number,
        width?: number,
        fixed?: boolean, // false by default
        hidden?: boolean
    },
    // more shape objects
];
~~~

### Description

Each shape object can include the following properties:

- `type` - (required) the type of the shape (by default: "rectangle" in the default mode, "card" in the org chart mode, "topic" in the mindmap mode)
- `id` - (optional) the unique id of a shape
- `x` - (optional) the x coordinate of the shape position. The property is **required** in the default mode of Diagram
- `y` - (optional) the y coordinate of the shape position. The property is **required** in the default mode of Diagram
- `text` - (optional) the text to be rendered in a shape. The property can be set as an array of string values while [configuring a **custom shape** only](../../shapes/custom_shape/)
- `editable` - (optional) enables/disables the ability to edit the text of the shape by double-clicking on it; *true* by default. <br>*The property is not available for a custom shape.*
- `height` - (optional) the height of a shape
- `width` - (optional) the width of a shape
- `fixed` - (optional) enables/disables movement and resizing of a shape, *false* by default
- `hidden` - (optional) defines, whether a shape will be hidden

:::note 
The values of the **height** and **width** are calculated automatically for a "text"/"topic" shape, depending on the content of the shape.
:::

## Custom properties

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        [key: string]?: any, // custom property
        ... // more custom properties
    },
    // more shape objects
]
~~~

### Description

When preparing a data set for a custom shape, you can add any custom properties to the configuration object of a shape:

- `key` - (optional) a custom property for a custom shape. For details, check the [Custom shape](../custom_shape/) article. <br>*Use unique names as names for custom properties. Overriding the internal properties of the diagram shape object is forbidden as it causes the incorrect work of the diagram and its editor.*

### Example

~~~jsx
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

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        angle?: number,

        //either
        preview?: string,
        // or
        preview?: {
            img?: string,
            width?: number | string,
            height?: number | string,
            gap?: number | string,
            scale?: number
        }
    },
    // more shape objects
]
~~~

### Description

When preparing a data set for shapes to load into the diagram in the default mode, you can add the following properties to the configuration object of a shape:

- `angle` - (optional) the angle of shape rotation
- `preview` - (optional) either a path to the image/a base64 image or an object with settings [to configure the shape preview displayed in the shapebar of the editor](../../guides/diagram_editor/left_panel/#setting-shape-preview). As an object, the property can contain a set of optional properties:
  - `img` - (optional) a path to the image or a base64 image
  - `width` - (optional) the width of the image
  - `height` - (optional) the height of the image
  - `gap` - (optional) sets the value of the `gap` attribute of the [preview](../../api/diagram_editor/shapebar/config/preview_property/) property for the specified type of a shape
  - `scale` - (optional) sets the value of the `scale` attribute of the [preview](../../api/diagram_editor/shapebar/config/preview_property/) property for the specified type of a shape
   :::info
   The **scale** property can't be applied together with the **img**, **width**, **height** properties
   :::

### Example

~~~jsx
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start", angle: 10 },
];
~~~

## Properties specific for the org chart mode

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        parent?: string | number,
        dx?: number,
        dy?: number,
        dir?: string,
        open?: boolean, // true by default
        assistant?: boolean,
        partner?: boolean,
        catchItem?: boolean,
        giveItem?: boolean

    },
    // more shape objects
]
~~~

### Description

When preparing a data set for shapes to load into the diagram in the org chart mode, you can add the following properties to the configuration object of a shape:

- `parent` - (optional) the id of the parent shape
- `dx` - (optional) the left offset of the shape
- `dy` - (optional) the top offset of the shape
- `dir` - (optional) the direction of shapes connecting. To connect shapes vertically, set the attribute to the "vertical" value
- `open` - (optional) defines, whether the child items of the current shape will be shown; *true* by default
- `assistant` - (optional) defines, whether the shape is an assistant item for the parent shape
- `partner` - (optional) defines, whether the shape is a partner item for the parent shape
- `catchItem` - (optional) defines, whether the item can catch the moving item
- `giveItem` - (optional) defines, whether the item can be moved

### Example

~~~jsx
const data = [
    {
        "id": "1",
        "text": "item 1",
    },
    {
        "id": "2",
        "text": "item 2",
        "parent": "1",
        "dir": "vertical"
    },
    {
        "id": "1.1",
        "text": "assistant for 1",
        "parent": "1",
        "assistant": true
    },
    {
        "id": "1.2",
        "text": "partner for 1",
        "parent": "1",
        "partner": true
    },
];
~~~

**Related samples**: 
- [Diagram. Org chart mode. Nested vertical lists](https://snippet.dhtmlx.com/98tzmzpg)
- [Diagram editor. Org chart mode. Image card editor](https://snippet.dhtmlx.com/vghuunmd)

## Properties specific for the mindmap mode

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        parent?: string | number,
        dx?: number,
        dy?: number,
        open?: boolean, // true by default
        openDir?:{
            left?: boolean,
            right?: boolean
        },
        catchItem?: boolean,
        giveItem?: boolean
    },
    // more shape objects
]
~~~

### Description

When preparing a data set for shapes to load into the diagram in the mindmap mode, you can add the following properties to the configuration object of a shape:

- `parent` - (optional) the id of the parent shape
- `dx` - (optional) the left offset of the shape
- `dy` - (optional) the top offset of the shape
- `open` - (optional) defines, whether the child items of the current shape will be shown; *true* by default
- `openDir` - (optional) shows/hides the child items of the root shape. The object takes two attributes:
    - `left` - (optional) shows/hides the child items to the left of the root shape
    - `right` - (optional) shows/hides the child items to the right of the root shape
- `catchItem` - (optional) defines, whether the item can catch the moving item
- `giveItem` - (optional) defines, whether the item can be moved

**Related samples**: [Diagram editor. Mindmap mode. Emotions mind map](https://snippet.dhtmlx.com/lo1vm0e8)

:::info
Read the details in the [How to Create a JavaScript Mindmap Diagram with DHTMLX Library](https://dhtmlx.com/blog/create-javascript-mindmap-diagram-dhtmlx-library/) article
:::

### Example

~~~jsx
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
        giveItem: false,
    },
    {
        id: "3",
        text: "3",
        parent: "1",
        catchItem: false, 
    },
    {
        id: "4",
        text: "4",
        parent: "1",
    },
];
~~~

## Properties specific for "text", "topic" and flow chart shapes

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        fill?: string,
        stroke?: string,
        strokeWidth?: number, // 1 by default
        strokeType?: "line" | "dash", // "line" by default
        strokeDash?: string,
        fontColor?: string,
        fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
        fontWeight?: string, // "normal" by default
        fontSize?: number, // 14 by default
        textAlign?: "left" | "center" | "right", // "center" by default
        textVerticalAlign?: "top" | "center" | "bottom", // "center" by default
        lineHeight?: number // 14 by default
    },
    // more shape objects
]
~~~

### Description

When preparing a data set for "text", "topic" and flow chart shapes, you can add the following properties to the configuration object of a shape:

- `fill` - (optional) the color of the shape
- `stroke` - (optional) the color of the shape outline
- `strokeWidth` - (optional) the width of the shape outline, 1 by default
- `strokeType` - (optional) the type of the stroke outline, "line" (default), "dash" for a dashed line
- `strokeDash` - (optional) the pattern of dashes and spaces for a dashed outline
- `fontColor` - (optional) the color of the text font
- `fontStyle` - (optional) the style of the text font, can be "normal" (default), "italic" or "oblique"
- `fontWeight` - (optional) the text font weight, possible values are: "normal" (default), "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font
- `fontSize` - (optional) the size of the font in pixels, 14 by default
- `textAlign` - (optional) the alignment of text in a shape: "left", "center"(default), "right"
- `textVerticalAlign` - (optional) the vertical alignment of text in a shape:"top","center"(default),"bottom"
- `lineHeight` - (optional) the height of a line, 14 by default

### Example

~~~jsx
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

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        headerColor?: string
    },
    // more shape objects
]
~~~

### Description

When preparing a data set for "card" shapes, you can add the following properties to the configuration object of a shape:

- `headerColor` - (optional) the color of the header of the shape

### Example

~~~jsx
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

### Usage

~~~jsx
const data = [
    // shape object
    {
        ..., // common properties
        img?: string,
        title?: string,
        headerColor?: string
    },
    // more shape objects
]
~~~

### Description

When preparing a data set for "img-card" shapes, you can add the following properties to the configuration object of a shape:

- `img` - (optional) the image of a shape
- `title` - (optional) the title of a shape
- `headerColor` - (optional) the color of the header of the shape

### Example

~~~jsx {title="Example"}
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
        "parent": "1",
        "headerColor": "#5874CD" 
    },
];
~~~

**Related articles:**

- [Default Shapes](../../shapes/default_shapes/)
- [Custom Shape](../../shapes/custom_shape/)
