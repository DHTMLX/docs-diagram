---
sidebar_label: autoPlace()
title: autoPlace Method
description: You can learn about the autoPlace method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoPlace()

@short: automatically arranges connected diagram shapes in the hierarchical structure

@signature: {`autoPlace(config?: IAutoPlacement): void;`}

@params:
`config: object` - optional, an object with configuration settings of the autoplacement. If not specified, the default settings will be applied.

@example:
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
	mode: "edges"
});


@descr:
**Related sample**: [Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

{{note The **autoPlace()** method works only in the default mode of the diagram and only for shapes.}}

The `config` object contains two optional properties:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default


### Modes of connecting shapes

| mode: "direct"                                                                  | mode: "edges"                                                                       |
| :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| Connectors are aligned "from center to center"; they are straight and diagonal. | Connectors are aligned "from side to side"; they are straight and 90-degree curved. |
| ![](../../assets/direct_mode.png)                                               | ![](../../assets/edges_mode.png)                                                    |

 
@changelog:
added in v3.0

#### Related articles

[Arranging shapes automatically](../../../guides/manipulating_items/#arranging-shapes-automatically)