---
sidebar_label: defaultShapeType
title: defaultShapeType Property
description: You can learn about the defaultShapeType property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaultShapeType

@short: the default type of a shape

@signature: {`defaultShapeType?: string;`}

@default: "card" (in the default and org chart modes of Diagram), "topic" (in the mindmap mode of Diagram)

@example:
const diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "img-card"
});


@descr:
**Related sample**: [Diagram. Org chart mode. Shapes with images](https://snippet.dhtmlx.com/qnx3ekin)

This value is applied, if the shape object doesn't contain the "type" property.

#### Related articles

[Setting the type of a shape](../../../shapes/default_shapes/#setting-the-type-of-a-shape)
