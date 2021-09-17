---
sidebar_label: shapeSections
title: shapeSections
description: text
---

# shapeSections

@short: specifies sections for structuring items in the left panel

@type: object
@example:
const editor = new dhx.DiagramEditor(document.body, {
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
The default sections of the left panel are: shapes, groups,swimlanes.

The **shapeSections** object should contain a set of *key:value* pairs where *key* is the name of a section and *value* is an array with the types of the items to be rendered in the section.


{{note Setting boolean *true* as a value of the array will display all available [flow-chart](diagram_guides/shapes_arrows_list.md#shapesconfiguration) shapes in the section.}}

@relatedsample: https://snippet.dhtmlx.com/2z0a18oz Diagram. Diagram Editor. Left panel customization

```todo
добавить секции по дефолту, проверить описание
п. diagram_guides__editor_mode.html#leftpanelcustomization
```

{{note The property is available only in the default mode of the editor (*type:"default"*).}}