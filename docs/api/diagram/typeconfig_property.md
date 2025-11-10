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

@short: Optional. An object which provides configuration settings for Diagram in the mindmap and PERT modes

For Diagram in the mindmap mode, the `typeConfig` property defines the direction of the shapes. If the property isn't applied, the child shapes will be arranged automatically according to the main algorithm.

For Diagram in the PERT mode, the `typeConfig` property allows setting the format of rendering dates in the task shapes.

### Usage

- for the mindmap mode

~~~jsx
typeConfig?: {
    direction?: "left" | "right";
}

//or
typeConfig?: {
    side?: {
        left?: string[],
        right?: string[]
    }
}
~~~

- for the PERT mode

~~~jsx
typeConfig?: {
    dateFormat?: string; // %d-%m-%Y by default
} 
~~~

### Parameters

The `typeConfig` object can include one of the following parameters:

- for the mindmap mode:
    - `direction` - (optional) sets the direction of the graph:
      - *"left"* - puts child shapes of the graph to the left of the root shape
      - *"right"* - puts child shapes of the graph to the right of the root shape
    - `side` - (optional) an object which sets the mandatory direction for the specified child shapes. The object contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes
- for the PERT mode:
    - `dateFormat` - (optional) sets the format of rendering dates in the shapes of the **task** type. Affects rendering of dates in the user interface 

:::tip
You can use either the `direction` attribute or the `side` one for the diagram in the mindmap mode. Don't use both of them at the same time!
:::

### Example

- for the mindmap mode:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", { 
    type: "mindmap",
    typeConfig: {
        direction: "right"
    }
});
~~~

or

~~~jsx {3-8}
const diagram = new dhx.Diagram("diagram_container", { 
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"]
        }
    }
});
~~~

Note that the other child shapes that are not set in the `side` option will be arranged automatically according to the main algorithm.

- for the PERT mode:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

**Change log**: 

- The `dateFormat` property for the PERT mode was added in v6.1
- Added in v3.1.

**Related articles**: [Arrangement of shapes in the mindmap mode of Diagram](../../../guides/diagram/configuration/#arranging-shapes-in-the-mindmap-mode-of-diagram)

**Related samples**:

- [Diagram. Mindmap mode. Direction ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)
- [Diagram. Mindmap mode. Custom sides](https://snippet.dhtmlx.com/atto9ckg)
