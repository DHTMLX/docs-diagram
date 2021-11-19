---
sidebar_label: margin
title: margin Property
description: You can learn about the margin property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# margin

@short: An object with settings of margins for positioning items in the diagram

@signature: {`margin?: IMarginConfig;`}

@descr:
#### Object properties:

- **itemX** - horizontal space between two shapes (only for [type: "org" | "mindmap"](../../../api/diagram/type_property/))
- **itemY** - vertical space between two shapes (only for [type: "org" | "mindmap"](../../../api/diagram/type_property/))
- **x** - horizontal space between the start of a diagram and the first item
- **y** - vertical space between the start of a diagram and the first item

@example:
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", 
    margin: {
        x: 20, y: 20,
        itemX: 50, itemY: 50
    }
});

@descr:
**Related sample:** [Diagram. Org chart mode. Margin between shapes](https://snippet.dhtmlx.com/bwe9vm6i)

The default values of margins are:

~~~js
{ x: 40, y: 40, itemX: 40, itemY: 40 }
~~~
