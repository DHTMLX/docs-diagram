---
sidebar_label: Default shapes
title: Default Shapes
description: text
---

# Default Shapes

## Shapes overview

The DHTMLX Diagram library provides you with a set of default types of shapes that you can use to build your diagram. The default shapes include:

- a set of the flow chart shapes:

<iframe src="https://snippet.dhtmlx.com/loz7yh2y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Tip: Use the name of the necessary shape as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

- the `"card"` type that is the default type of shapes in the "org chart" mode of Diagram:

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

- the `"img-card"` type that can be used for adding shapes with images. Don't forget to provide images for cards via the **img** attribute of the shape object.

<iframe src="https://snippet.dhtmlx.com/qnx3ekin?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

- the `"topic"` type that is the default type of shapes in the "mindmap" mode of Diagram.

<iframe src="https://snippet.dhtmlx.com/3igf1gd5?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

{{note Any of the above shapes can be added into the diagram of any mode ("default", "org", or "mindmap" one). }}

## Setting the type of a shape

To set the type of a shape, use the [type](../configuration_properties/) property inside the shape object while preparing a related JSON structure to load into the diagram:

~~~js
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start" },
    { id: 2, x: 280, y: 120, text: "Read N", type: "output" },
    { id: 3, x: 280, y: 240, text: "M=1\nF=2", type: "process" },
    { id: 4, x: 280, y: 360, text: "F=F*M", type: "process" },
    { id: 5, x: 280, y: 480, text: "Is M=N?", type: "decision" },
];
~~~

```todo перенести в data loading?
{{note To configure the shape, you should apply the properties peculiar to the type that is set for the shape. <br>See [the full list of configuration properties of a shape object](shapes/configuration_properties.md).

**Related samples**: [Diagram. Mixed](https://snippet.dhtmlx.com/15acqc24) and [Diagram. Org chart. Mixed.](https://snippet.dhtmlx.com/yd6l6grr)
}}
```

### Setting the default shape type

It is also possible to set the default type for all the shapes via the [](../api/diagram/defaultshapetype_property.md) attribute of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap" 
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

This value will be applied, if the configuration object of the shape doesn't contain the `type` property.

{{note In the org and mindmap modes of Diagram, the type of child shapes will be the same as the type of the parent shapes.
}}

Arrangement of shapes in the mindmap mode of Diagram
--------------------

In the `mindmap` mode of Diagram, the arrangement of child shapes relative to the root shape is defined automatically by the main algorithm. 
To change the default direction of the child shapes, use the [](../api/diagram/typeconfig_property.md) configuration property on initialization of the diagram.

{{note The **typeConfig** configuration property is not available in Diagram Editor.}}

The property allows you:

- [to set the direction for all child shapes at once](#setting-direction-for-all-child-shapes);
- [to specify individual direction for specific child shapes](#setting-direction-for-individual-child-shape).

### Setting direction for all child shapes

To set the child shapes to the right/left of the root shape, use the **direction** attribute of the [](../api/diagram/typeconfig_property.md) property:

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

### Setting direction for individual child shape

You can set the mandatory direction for specific child shapes via the **side** attribute of the [](../api/diagram/typeconfig_property.md) property. The attribute is an object that contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

The other child shapes that are not set in the side option will be arranged automatically according to the main algorithm.