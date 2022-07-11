---
sidebar_label: autoplacement
title: autoplacement Property of Editor
description: You can learn about the autoplacement property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# autoplacement

:::info
The **autoplacement** property works only in the default mode of the editor (*type:"default"*) and only for shapes
:::


### Description

@short: Optional. An object with configuration settings for auto-placement of shapes

### Usage

~~~js
autoplacement?: {
	mode?: "direct" | "edges",
	graphPadding?: number,
    placeMode?: "orthogonal" | "radial"
};
~~~

### Parameters

The **autoplacement** object has the following parameters:

- `mode` - (optional) the mode of connecting shapes, "direct" (by default) or "edges"
- `graphPadding` - (optional) sets the distance between unconnected diagrams, *"200"* by default
- `placeMode` - (optional) sets the mode of placement of shapes, "orthogonal" (by default) or "radial"

### Default config

~~~js
autoplacement: {
    mode: "direct",
	graphPadding: 200,
    placeMode: "orthogonal"
}
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    autoplacement: {
        graphPadding: 100,
        mode: "edges"
    }
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

## Modes of placement of shapes

### "orthogonal" mode

Shapes are arranged along vertical and horizontal lines

- **"orthogonal"** arrangement with lines in the **"direct"** mode

![](../../assets/direct_ortogonal.png)


- **orthogonal** arrangement with lines in the **"edges"** mode

![](../../assets/edges_ortogonal.png)


### "radial" mode

Shapes are arranged on imaginary circles relative to the central shape, i.e. a shape with the most connections

- **"radial"** arrangement with lines in the **"direct"** mode

![](../../assets/direct_radial.png)

- **"radial"** arrangement with lines in the **"edges"** mode

![](../../assets/edges_radial.png)

**Change log**:  

- The **placeMode** parameter is added in v5.0
- The **autoplacement** property is added in v3.0

**Related samples**:
- [Diagram editor. Default mode. Autoplacement direct mode](https://snippet.dhtmlx.com/p1ybrkz2)
- [Diagram editor. Default mode. Autoplacement edges mode](https://snippet.dhtmlx.com/1i65txcw)