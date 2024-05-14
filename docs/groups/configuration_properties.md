---
sidebar_label: Group properties !!
title: Group Properties
description: You can learn about the Group properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Group properties

:::note 
While specifying color values of the item, use the HEX format.
:::

### Usage

~~~jsx
const data = [
    // group object
    {
        type: "$group",
        id?: string | number,
        x?: number,
        y?: number,
        width: number,
        height: number,
        groupChildren?: array,
        open?: boolean, // true by default
        fixed?: boolean, // false by default
        style?: {
            strokeWidth?: number, // 1 by default
            stroke?: string, // "#DEDEDE" by default
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            // "unbound" by default
            groupBehavior?: "unbound" | "boundNoBorderExtension" | "boundBorderExtension", 
            padding?: number
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
            position?: "top" | "bottom" | "left" | "right", // "top" by default
            editable?: boolean, // true by default
            closable?: boolean, // false by default
            enable?: boolean, // true by default
        },
        [key: string]?: any
    },
    // more group objects
];
~~~

### Description

A group object contains a list of configuration properties which allow you to configure the positioning and appearance of the group:

- `type` - (required) the type of an element, set it to "$group"
- `id` - (optional) the unique id of a group
- `x` - (optional) the x coordinate of the group position
- `y` - (optional) the y coordinate of the group position
- `width` - (required) the width of the group, including its header (*position: left/right*)
- `height` - (required) the height of the group, including its header (*position: top/bottom*)
- `groupChildren` - (optional) an array with ids of the first-level child items of the group
- `open` - (optional) - defines whether the group is initialized in the expanded (*true*, default) or collapsed (*false*) state
:::tip
The **open** property works when a **header** is initialized with the **closable** attribute
::: 
- `fixed` - (optional) enables/disables the ability to move and resize the group; *false* by default
- `style` - (optional) an object with the style settings of the group. The object can contain the following attributes:
    - `strokeWidth` - (optional) the width of the group border, 1 by default
    - `stroke` - (optional) the color of the border of the group, "#DEDEDE" by default
    - `fill` - (optional) the background color of the group
    - `overFill` - (optional) the background color of the group when the user is holding the item and moving it into/outside the group *providing that the whole item is inside the group*
    - `partiallyFill` - (optional) the background color of the group when the user is holding the item and moving it into/outside the group *providing that a part of the item is out of the group and other settings are not defined via the **exitArea** attribute*
- `exitArea` - (optional) an object with the settings which will be applied to the item when the user is dragging it out of the group (*is applied only to the first-level children of the group*). The object can contain the following attributes:
    - `groupBehavior` - (optional) the behavior of the child item of the group when the user is moving it out of the group: 
        - *"unbound"* (by default) - the user can move an item into or outside the group
        - *"boundNoBorderExtension"* - the user can move an item into the group but cannot drag the item outside the group if the item has been dropped inside the group. The item won't expand the borders of the group when trying to drag the item outside the group
        - *"boundBorderExtension"* - the user can move an item into the group but cannot drag the item outside the group if the item has been dropped inside the group. The item will expand the borders of the group when trying to drag the item outside the group <br>**Related sample:** [Diagram editor. Default mode. Groups and shapes interaction](https://snippet.dhtmlx.com/4gxy38ek)
    - `padding` - (optional) defines the padding between the group and the edge of the item when moving the item inside the group 
    :::tip
    The **padding** attribute is available if *groupBehavior: "boundNoBorderExtension" | "boundBorderExtension"*
    :::
- `header` - (optional) an object with configuration attributes of the header of the group. The attributes are:
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
    - `closable` - (optional) shows/hides an icon intended to expand/collapse a group; *false* by default
    - `enable` - (optional) shows/hides the header of the group; *true* by default <br>**Related sample:** [Diagram. Default mode. Group. Header position and text settings](https://snippet.dhtmlx.com/6hunrja8)
- `key` - (optional) your own property with your own logic to be implemented under the hood

### Example

~~~jsx
const data = [    
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            editable: true,
            closable: true,
            textAlign: "left", // "left", "center", "right"
            textVerticalAlign: "center", // "top", "center", "bottom"
        },
      	// the child items of the group
        groupChildren: [1.1, 1.2],
        open: false,
    },
  	// configuring shapes to put into the group
    { type: "rectangle", id: 1.1, x: 50, y: 75, text: "Shape 1.1" },
    { type: "rectangle", id: 1.2, x: 200, y: 75, text: "Shape 1.2" },
];
~~~

**Related articles:** [Configuring groups](../../groups/)