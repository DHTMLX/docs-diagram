---
sidebar_label: typeConfig
title: typeConfig
description: text
---

# typeConfig

@short: optional, defines the direction of the shapes in the mindmap mode of Diagram

@signature: {`typeConfig?: IMindMapConfig;`}

@example:
const diagram = new dhx.Diagram("diagram_container", { 
    type: "mindmap",
    typeConfig: {
        direction: "right",
    },
});


@descr:
**Related sample**: [Mindmap. Direction ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)

If you don't apply the config, the child shapes will be arranged automatically according to the main algorithm.

{{note The property does not work in the Editor.}}

The **typeConfig** object has two options:

- **direction** - (*string*) optional, sets the direction of the graph:
  - *"left"* - sets child shapes of the graph to the left of the root shape
  - *"right"* - sets child shapes of the graph to the right of the root shape
- **side** - (*object*) optional, sets the mandatory direction for the specified child shapes. The object contains a set of *key:value* pairs where *key* is the direction of the shapes (left, right) and *value* is an array with the ids of the shapes.

~~~js
const diagram = new dhx.Diagram("container", { 
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

{{note You can either use the **direction** option and set it to *"left"/"right"* or apply the **side** option. }}

@changelog: added in v3.1.
