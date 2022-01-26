---
sidebar_label: margin
title: margin Property
description: You can learn about the margin property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# margin

### Description

@short: optional, an object with settings of margins for positioning items in the diagram
@descr:

### Usage

~~~js
margin?: {
	itemX?: number,
	itemY?: number,
    x?: number,
	y?: number,
};
~~~

### Attributes

The **margin** property has the following attributes:

- `itemX` - (optional) horizontal space between two shapes (only for [type: "org" | "mindmap"](../../../api/diagram/type_property/))
- `itemY` - (optional) vertical space between two shapes (only for [type: "org" | "mindmap"](../../../api/diagram/type_property/))
- `x` - (optional) horizontal space between the start of a diagram and the first item
- `y` - (optional) vertical space between the start of a diagram and the first item

### Default config

~~~js
margin: {
    x: 40, y: 40,
    itemX: 40, itemY: 40
}
~~~

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", 
    margin: {
        x: 20, y: 20,
        itemX: 50, itemY: 50
    }
});
~~~

**Related sample:** [Diagram. Org chart mode. Margin between shapes](https://snippet.dhtmlx.com/bwe9vm6i)