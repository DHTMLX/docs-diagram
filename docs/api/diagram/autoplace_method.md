---
sidebar_label: autoPlace()
title: autoPlace
description: text
---

# autoPlace()

@short: automatically arranges connected diagram shapes in the hierarchical structure

@signature: {`autoPlace(config?: IAutoPlacement): void;`}

@params:
`config: object` - optional, an object with configuration settings of the autoplacement. If not specified, the default settings will be applied.

@example:
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);

diagram.autoPlace({
	mode: "edges"
});

@relatedsample:
**Related sample**: [Diagram. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

@descr:
{{note The **autoPlace()** method works only in the default mode of the diagram and only for shapes.}}

The `config` object contains two optional properties:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default


### Modes of connecting shapes

| mode: "direct"                                                                  | mode: "edges"                                                                       |
| :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| Connectors are aligned "from center to center"; they are straight and diagonal. | Connectors are aligned "from side to side"; they are straight and 90-degree curved. |
| ![](../../assets/direct_mode.png)                                               | ![](../../assets/edges_mode.png)                                                    |

**Related articles**

common_guides/manipulating_shapes.md#arrangingshapesautomatically
 
@changelog:
added in v3.0