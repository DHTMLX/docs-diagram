---
sidebar_label: margin
title: margin
description: text
---

# margin

@short: margins for positioning items in the diagram

@signature: {`margin?: IMarginConfig;`}

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

{{note The property works only in the org mode of Diagram.}}

The `margin` object can contain the following properties:

- **itemX** - horizontal space between two shapes
- **itemY** - vertical space between two shapes
- **x** - horizontal space between the start of a diagram and the first item
- **y** - vertical space between the start of a diagram and the first item

The default values of margins are:

~~~js
{ x: 40, y: 40, itemX: 40, itemY: 40 }
~~~

