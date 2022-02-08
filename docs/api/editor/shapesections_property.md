---
sidebar_label: shapeSections
title: shapeSections Property of Editor
description: You can learn about the shapeSections property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeSections

:::info
The property is available only in the default mode of the editor (*type:"default"*)
:::

Using the **shapeSections** property you can specify your own sections of the left panel. The [default sections of the left panel](../../../guides/diagram_editor/left_panel/#default-sections) are: *Shapes, Groups, Swimlanes*.

### Description

@short: Optional. An object which specifies sections of items that will be shown in the left panel of the editor

### Usage

~~~js
shapeSections?: {
    [key: string]: any
}
~~~

### Parameters

The **shapeSections** object can contain a set of **key:value** pairs where **key** is the name of a section and **value** is an array with the types of the items to be rendered in the section.

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "custom shapes": ["networkCard", "medCard"],
        "sticky shapes": ["blue", "orange"],
        "org chart shapes": ["card", "img-card"],
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~


{{note Setting boolean *true* as a value of the array will display all available [flow-chart](../../../shapes/default_shapes/#shapes-overview) shapes in the section.}}



**Related articles**:  [Left Panel](../../../guides/diagram_editor/left_panel/)

**Related samples**: [Diagram editor. Default mode. Left panel customization](https://snippet.dhtmlx.com/2z0a18oz)