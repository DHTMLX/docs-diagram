---
sidebar_label: magnetic
title: magnetic Property of Editor
description: You can learn about the magnetic property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# magnetic

:::info
The **magnetic** property works only in the **default mode** of the editor (`type: "default"`)
:::

### Description

@short: Optional. Defines whether snap lines should be shown when moving a shape. If so, allows configuring their appearance

:::tip
Snap lines appear when central or extreme lateral coordinates of the shape which you move coincide with central or extreme lateral coordinates of the static nearby shapes
:::

### Usage

~~~jsx
magnetic?: {
    show?: boolean,
    lineWidth?: number,
    lineColor?: string
} | boolean;
~~~

### Default config

~~~jsx
magnetic: true 
~~~

The magnetic mode is enabled with the following configuration:

~~~jsx
magnetic: {
    show: true,
    lineWidth: 2,
    lineColor: "#000"
}
~~~

### Parameters

As an object, the **magnetic** property can include the following parameters:

- `show` - (optional) enables/disables snap lines when moving a shape
- `lineWidth` - (optional) the width of snap lines (2 by default)
- `lineColor` - (optional) the color of snap lines (*"#000"* by default)

### Example

~~~jsx {3-7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    magnetic: {
        show: true,
        lineWidth: 2,
        lineColor: "#B0B8CD"
    }
});
~~~

**Change log**: The ***show*** parameter was added in v6.0
