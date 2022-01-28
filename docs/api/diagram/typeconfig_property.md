---
sidebar_label: typeConfig
title: typeConfig Property
description: You can learn about the typeConfig property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# typeConfig

:::info 
The property does not work in the Editor
:::

### Description

@short: optional, an object which defines the direction of the shapes in the mindmap mode of Diagram
@descr:
If you don't apply the **typeConfig** property, the child shapes will be arranged automatically according to the main algorithm.

### Usage

~~~js
typeConfig?: {
    direction?: "left" | "right";
}

//or
typeConfig?: {
    side?: {
		left?: string[],
		right?: string[],
	}
}	
~~~

:::tip
You can use either the **direction** attribute or the **side** one. Don't use both of them at the same time!
:::

### Attributes:

The **typeConfig** property has the following attributes:

- `direction` - (optional) sets the direction of the graph:
  - *"left"* - puts child shapes of the graph to the left of the root shape
  - *"right"* - puts child shapes of the graph to the right of the root shape
- `side` - (optional) an object which sets the mandatory direction for the specified child shapes. The object contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes

### Example

~~~js {3-5}
const diagram = new dhx.Diagram("diagram_container", { 
    type: "mindmap",
    typeConfig: {
        direction: "right",
    },
});
~~~

or

~~~js {3-8}
const diagram = new dhx.Diagram("diagram_container", { 
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"],
        }
    }
});
~~~

The other child shapes that are not set in the **side** option will be arranged automatically according to the main algorithm.


**Change log**: Added in v3.1.

**Related articles**: [Arrangement of shapes in the mindmap mode of Diagram](../../../guides/diagram/configuration/#arranging-shapes-in-the-mindmap-mode-of-diagram)

**Related samples**: 

- [Diagram. Mindmap mode. Direction ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)
- [Diagram. Mindmap mode. Custom sides](https://snippet.dhtmlx.com/atto9ckg)