---
sidebar_label: scalePreview
title: scalePreview Property of Editor
description: You can learn about the scalePreview property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# scalePreview

### Description

@short: defines the scale of items rendered in the left panel of the editor

@descr:

### Usage

~~~js
scalePreview?: string | number;
~~~

### Default config

 0.5

@descr:

{{note The property is available only in the default mode of the editor (*type:"default"*).}}

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    scalePreview: 0.6,
});
~~~

The value of the property can be redefined for a separate type of a shape via the **scale** attribute of the [preview](../../../shapes/configuration_properties/#properties-specific-for-the-default-mode) property of the shape object:

~~~js
const defaults = {card: {
    preview: {
        scale: 0.72, 
        gap: 2
    }
}
 
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "org chart shapes": ["card", "img-card"],
        "flowchart shapes": [true]
    },
    scalePreview: 0.65,
    defaults: defaults         
});
~~~

While the scale of the "card"-type shapes is 0.72, the scale of the other shapes in the left panel is 0.65.

**Related articles**:  [Left Panel](../../../guides/diagram_editor/left_panel/)