---
sidebar_label: defaultShapeType
title: defaultShapeType Property
description: You can learn about the defaultShapeType property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaultShapeType

### Description

@short: Optional. The default type of a shape

The value is applied, if the shape object doesn't contain the "type" property

### Usage

~~~js
defaultShapeType?: string;
~~~

### Default config

- In the **default** mode of Diagram (type: "default")

~~~js 
defaultShapeType: "rectangle"
~~~

- In the **org chart** mode of Diagram (type: "org")

~~~js
defaultShapeType: "card"
~~~

- In the **mindmap** mode of Diagram (type: "mindmap")

~~~js
defaultShapeType: "topic"
~~~

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "img-card"
});
~~~

**Related articles**: [Setting the type of a shape](../../../shapes/default_shapes/#setting-the-type-of-a-shape)

**Related sample**: [Diagram. Org chart mode. Shapes with images](https://snippet.dhtmlx.com/qnx3ekin)