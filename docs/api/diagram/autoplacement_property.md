---
sidebar_label: autoplacement
title: autoplacement Property
description: You can learn about the autoplacement property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoplacement

@short: an object with configuration settings for auto-placement of shapes

@signature: {`autoplacement?: IAutoPlacement;`}

@descr:
#### Object properties:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default

{{note The **autoplacement** property works only in the default mode of the diagram and only for shapes.}}

@example:
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
		mode: "edges",
		graphPadding: 100
	}
});

diagram.parse(autoData);


@descr:
**Related samples**:
- [Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)


### Modes of connecting shapes

| mode: "direct"                                                                  | mode: "edges"                                                                       |
| :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| Connectors are aligned "from center to center"; they are straight and diagonal. | Connectors are aligned "from side to side"; they are straight and 90-degree curved. |
| ![](../../assets/direct_mode.png)                                               | ![](../../assets/edges_mode.png)                                                    |

@changelog: 
added in v3.0

@descr:
#### Related articles:

- [Configuring autoplacement for shapes](../../../guides/diagram/configuration/#configuring-autoplacement-for-shapes)
- [Arranging shapes automatically](../../../guides/manipulating_items/#arranging-shapes-automatically)

