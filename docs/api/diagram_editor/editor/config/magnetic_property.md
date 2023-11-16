---
sidebar_label: magnetic
title: magnetic Property of Editor
description: You can learn about the magnetic property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# magnetic

:::info
The **magnetic** property works only in the default mode of the editor (type:"default")
:::

### Description

@short: Optional. Defines whether snap lines should be shown when moving a shape. If so, allows configuring their appearance


:::tip
Snap lines appear when central or extreme lateral coordinates of the shape which you move coincide with central or extreme lateral coordinates of the static nearby shapes
:::

### Usage

~~~js
magnetic?: {
   lineWidth?: number,
   lineColor?: string,
} | boolean
~~~

### Default config

~~~js
magnetic: true 
~~~

The magnetic mode is enabled with the following configuration: 

~~~js
magnetic: {
    lineWidth: 2,
    lineColor: "#000",
}
~~~

### Parameters

As an object, the **magnetic** property can include the following parameters:

- `lineWidth` - (optional) the width of the snap lines, 2 by default 
- `lineColor` - (optional) the color of the snap lines, "#000" by default

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    magnetic: {
        lineWidth: 2,
        lineColor: "#B0B8CD",
    }
});
~~~

The result is shown in the GIF image below:

IMAGE HERE

**Change log**: added in v5.0