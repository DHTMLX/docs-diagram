---
sidebar_label: shapeSections
title: shapeSections Property of Editor
description: You can learn about the shapeSections property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeSections

:::info
The property is available only in the default mode of the editor (*type:"default"*)
:::

The [default sections of the left panel](../../../guides/diagram_editor/left_panel/#default-sections) are: Shapes, Groups, Swimlanes.

Using the **shapeSections** property you can change the structure of the left panel and display only the items which you need there. 

### Description

@short: Optional. An object which specifies sections of items that will be shown in the left panel of the editor

### Usage

~~~js
shapeSections?: {
    [key: string]: any
}
~~~

### Parameters

The **shapeSections** object can contain a set of **key:value** pairs where:
- **key** - the name of a section
- **value** - an array which can include:
  - an object with one *key:value* pair. The list of available pairs is given below:
    - `flowShapes: true` - (optional) displays all available [flow-chart](../../../shapes/default_shapes/#shapes-overview) shapes
    - `org: true` - (optional) displays "card" and "img-card" shapes
    - `group: true` - (optional) displays a basic set of groups
    - `swimlane: true` - (optional) displays a basic set of swimlanes
  - a string value with a specific type of the item to be rendered in the section (for example, "text", "topic", etc.)

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],   
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    },
});
~~~

**Related articles**:  [Left Panel](../../../guides/diagram_editor/left_panel/)

**Related samples**:
- [Diagram editor. Default mode. Setting the section order in the left panel](https://snippet.dhtmlx.com/7747cx7b)
- [Diagram editor. Default mode. Left panel customization](https://snippet.dhtmlx.com/2z0a18oz)