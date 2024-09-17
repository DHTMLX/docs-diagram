---
sidebar_label: Basic sets of shapes
title: Basic sets of shapes
description: You can learn about the Default Shapes in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Basic sets of shapes

The DHTMLX Diagram library provides you with sets of shapes types that you can use to build your diagram. Each mode of Diagram [default](#shapes-in-the-default-mode), [org chart](#shapes-in-the-org-chart-mode) and [mindmap](#shapes-in-the-mindmap-mode) has a *basic set* of shapes types. 

:::note
The basic type of shapes is predefined for a particular Diagram mode. However, a shape of any type can be added into the diagram of any mode.
:::

## Shapes in the default mode

In the default mode of Diagram, the basic set includes `flow chart` shapes. Use the name of the necessary shape as a value of the `type` attribute inside the shape object, while [preparing a data set for loading into the diagram](/guides/loading_data/#preparing-data-to-load).


<img
  src={require('../assets/flowshapes_types.png').default}
  className="image_to_center"
  alt="Alternative text"
/>

## Shapes in the org chart mode

In the **org chart** mode of Diagram, the basic set includes two types of shapes: `"card"` and `"img-card"`. 

- each shape with the `"card"` type has a text and a colored header line. Shapes located on the same level have headers of identical color

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

- the `"img-card"` type can be used for adding shapes with images. Don't forget to provide images for cards via the `img` attribute of the shape object

## Shapes in the mindmap mode

In the **mindmap** mode of Diagram, the `"topic"` type of shapes is the basic one. Each shape has a text and a colored border. The color of the outline depends on the level the shape belongs to.

<iframe src="https://snippet.dhtmlx.com/3igf1gd5?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Setting the type of a shape

To set the type of a shape, use the [`type`](/shapes/configuration_properties/) property inside the shape object while preparing a related JSON structure to load into the diagram:

~~~jsx
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start" },
    { id: 2, x: 280, y: 120, text: "Read N", type: "output" },
    { id: 3, x: 280, y: 240, text: "M=1\nF=2", type: "process" },
    { id: 4, x: 280, y: 360, text: "F=F*M", type: "process" },
    { id: 5, x: 280, y: 480, text: "Is M=N?", type: "decision" }
];
~~~

:::note
See [the full list of configuration properties of a shape object](/shapes/configuration_properties/). Do not add custom properties while creating data objects for shapes from basic sets. To add a custom property, you need to [create a custom shape](/shapes/custom_shape/).
:::

### Setting the default shape type

It is also possible to set the default type for all the shapes via the [`defaultShapeType`](../api/diagram/defaultshapetype_property.md) attribute of the diagram config object:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap" 
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

This value will be applied if the configuration object of a shape doesn't contain the `type` property.

