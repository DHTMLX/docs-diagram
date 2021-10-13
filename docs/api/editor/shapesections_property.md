---
sidebar_label: shapeSections
title: shapeSections
description: text
---

# shapeSections

@short: specifies sections of items that will be shown in the left panel of the editor

@signature: {`shapeSections?: IShapeSections;`}

@example:
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



@descr:
**Related samples**: [Diagram editor. Default mode. Left panel customization](https://snippet.dhtmlx.com/2z0a18oz)

{{note The property is available only in the default mode of the editor (*type:"default"*).}}

The [default sections of the left panel](../../../guides/diagram_editor/left_panel/#default-sections) are: *Shapes, Groups, Swimlanes*.

You can specify your own sections of the left panel via the **shapeSections** property. The property is an object that contains a set of *key:value* pairs where *key* is the name of a section and *value* is an array with the types of the items to be rendered in the section.

{{note Setting boolean *true* as a value of the array will display all available [flow-chart](../../../shapes/default_shapes/#shapes-overview) shapes in the section.}}

#### Related articles

[Left Panel](../../../guides/diagram_editor/left_panel/)
