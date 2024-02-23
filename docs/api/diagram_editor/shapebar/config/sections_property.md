---
sidebar_label: sections
title: sections Property of Shapebar
description: You can learn about the sections property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# sections

The [default sections of the shapebar] are: Shapes, Groups, Swimlanes.

Using the **sections** property you can change the structure of the shapebar and display only the items which you need there. 

### Description

@short: Optional. An object which specifies sections of items that will be shown in the shapebar of the editor

### Usage

~~~js
sections?: {
    [name: string]: (obj | string)[]
}
~~~

### Parameters

The **sections** object can contain a set of **key:value** pairs where:
- **name** - the name of a section / a shape 
- **value** - an array which can include:
  - an object with one *key:value* pair. The list of available pairs is given below:
    - `flowShapes: true` - (optional) displays all available [flow-chart](../../../shapes/default_shapes/#shapes-overview) shapes
    - `org: true` - (optional) displays "card" and "img-card" shapes
    - `group: true` - (optional) displays a basic set of groups
    - `swimlane: true` - (optional) displays a basic set of swimlanes
  - a string value with a specific type of the item to be rendered in the section (for example, "text", "topic", etc.)
  - an object with a number of *key:value* pairs for redefining the default properties of any shape (the name of which is specified in the key)

### Details

on the possible variants of configuration of items in a section will be here



TODO: update the links to the article and snippets

**Related article**:  [Left Panel](../../../guides/diagram_editor/left_panel/)

**Related samples**:
- [Diagram editor. Default mode. Setting the section order in the left panel](https://snippet.dhtmlx.com/7747cx7b)
- [Diagram editor. Default mode. Left panel customization](https://snippet.dhtmlx.com/2z0a18oz)

**Change log**: Added in v6.0