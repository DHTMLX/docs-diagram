---
sidebar_label: autoplacement
title: autoplacement Property
description: You can learn about the autoplacement property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoplacement

:::info
The **autoplacement** property works only in the default mode of the diagram and only for shapes
:::

### Description

@short: Optional. An object with configuration settings for auto-placement of shapes

### Usage

~~~js
autoplacement?: {
	mode?: "direct" | "edges",
	graphPadding?: number
};
~~~

### Parameters

The **autoplacement** object has the following parameters:

- `mode` - (optional) the mode of connecting shapes, "direct" (by default) or "edges"
- `graphPadding` - (optional) sets the distance between unconnected diagrams, *"200"* by default

### Default config

~~~js
autoplacement: {
	mode: "direct",
	graphPadding: 200
}
~~~

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
		mode: "edges",
		graphPadding: 100
	}
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

## Modes of connecting shapes

### "direct" mode

Connector lines with no arrows are aligned "from center to center"; they are straight and diagonal.

![](../../assets/direct_mode.png) 

### "edges" mode

Connector lines are aligned "from side to side". 

:::info 
To add arrows to the lines, specify **forwardArrow: "filled"** or **backArrow: "filled"** in the configuration of a [line object](../../../lines/configuration_properties/).
:::

The connector lines in the "edges" mode can be:
  - either straight (if you set **connectType: "straight"** property of a [line object](../../../lines/configuration_properties/))

![](../../assets/edges_straight_mode.png)

  - or 90-degree curved (if you set **connectType: "elbow"** property of a [line object](../../../lines/configuration_properties/))

![](../../assets/edges_mode.png)

**Change log**: Added in v3.0

**Related articles**:

- [Configuring autoplacement for shapes](../../../guides/diagram/configuration/#configuring-autoplacement-for-shapes)
- [Arranging shapes automatically](../../../guides/manipulating_items/#arranging-shapes-automatically)

**Related sample**: [Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)
