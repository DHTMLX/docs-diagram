---
sidebar_label: autoPlace()!!
title: autoPlace Method
description: You can learn about the autoPlace method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoPlace()

### Description

@short: automatically arranges connected diagram shapes in the hierarchical structure
@descr:

### Usage

~~~jsx
autoPlace(config?: object) => void; // IAutoPlacement interface
~~~

### Parameters

- `config?: object` - (optional) an object with configuration settings of the autoplacement. If not specified, the default settings will be applied. Here you can specify the following parameters:
	- `mode: string` - (mandatory) the mode of connecting shapes, `"direct"` (by default) or `"edges"`
	- `graphPadding: number` - (mandatory) sets the distance between unconnected diagrams, `"200"` by default

:::note 
The `autoPlace()` method works only in the default mode of the diagram and only for shapes
:::

### Example

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
	mode: "edges"
});
~~~

**Related sample**: [Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

### Modes of connecting shapes

| mode: "direct"                                                                  | mode: "edges"                                                                       |
| :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| Connectors are aligned "from center to center"; they are straight and diagonal. | Connectors are aligned "from side to side"; they are straight and 90-degree curved. |
| ![](../../assets/direct_mode.png)                                               | ![](../../assets/edges_mode.png)                                                    |

**Change log**: Added in v3.0

**Related articles**: [Arranging shapes automatically](../../../guides/manipulating_items/#arranging-shapes-automatically)