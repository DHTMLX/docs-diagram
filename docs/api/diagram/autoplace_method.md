---
sidebar_label: autoPlace()
title: autoPlace Method
description: You can learn about the autoPlace method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoPlace()

:::info
The **autoPlace()** method works only in the default mode of the diagram and only for shapes
:::

### Description

@short: Automatically arranges connected diagram shapes in the hierarchical structure

### Usage

~~~jsx
autoPlace(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with configuration settings of the autoplacement. If not specified, the default settings will be applied. Here you can specify the following parameters:
	- `mode` - (optional) the mode of connecting shapes, "direct" (by default) or "edges"
	- `graphPadding` - (optional) sets the distance between unconnected diagrams, 200 by default

### Example

~~~jsx {4-6}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
	mode: "edges"
});
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

**Related articles**: [Arranging shapes automatically](../../../guides/manipulating_items/#arranging-shapes-automatically)

**Related sample**: [Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)