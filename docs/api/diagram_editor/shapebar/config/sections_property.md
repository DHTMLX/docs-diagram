---
sidebar_label: sections!!
title: sections Property of Shapebar
description: You can learn about the sections property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# sections

TODO (update link)<br>
The [default sections of the shapebar](../../../guides/diagram_editor/left_panel/#default-sections) are: *Shapes*, *Groups*, *Swimlanes*.

Using the **sections** property you can change the structure of the shapebar and display the necessary items.

### Description

@short: Optional. An object which specifies sections of items that will be shown in the shapebar of the editor

### Usage

~~~js
sections?: {
    [name: string]: (obj | string)[]
}
~~~

### Parameters

The **sections** object can contain a set of *key:value* pairs where:
- **key** - the name of a section specified by a user
- **value** - an array which can include:
  - an object with one *key:value* pair for rendering a <span id="basic">basic set of shapes</span>. The list of available pairs is given below:
    - `{flowShapes: true}` - (optional) displays all available types of the [Flow-chart](../../../shapes/default_shapes/#shapes-overview) shapes - TODO (update link) 
    - `{org: true}` - (optional) displays Org shapes: the "card" and "img-card" shape types
    - `{group: true}` - (optional) displays a basic set of Groups
    - `{swimlane: true}` - (optional) displays a basic set of Swimlanes
  - a string value with a specific type of the item to be rendered in the section (for example, "text", "topic", etc.)
  - an object with several *key:value* pairs for [redefining the default properties of any shape](#customization) 

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],   
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    },
});
~~~

### Details

Depending on chosen elements, the configuration of shapes of a particular section can be the following:

1. Rendering of basic sections

You can render [a basic set of shapes](#basic) using the `sections` configuration object. For example:

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }],
                "Base org cards": [{ org: true }],
                "Base groups": [{ group: true }],
                "Base swimlane": [{ swimlane: true }]
            }
        }
    }
});
~~~

2. Specifying items with the help of string literals

You can render Shapebar items by specifying the types of shapes with the help of string literals. Check the example below:

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom section": ["custom_shape"],
                "Other shapes": ["text", "topic", "circle"]
            }
        }
    }
});
~~~

3. <p id="customization">Redefining basic configurations</p>

Another option is to redefine basic properties of any shape and render it with the necessary parameters. The example below shows rendering of a shape of the `circle` type with various text and color settings:

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Circles": [
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange",
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue",
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green",
                    }
                ],
            }
        }
    }
});
~~~

You can reconfigure any type of shapes in such a way. 

4. Combining different types of items in a section

If your project presupposes usage of various types of elements, you can create sections with mixed types of shapes in the Shapebar. Check the following example:

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }, "text", "topic"],
                "Circles": [
                     "circle",
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange",
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue",
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green",
                    }
                ],
            }
        }
    }
});
~~~

TODO (update the links to the article and snippets)

**Related article**:  [Left Panel](../../../guides/diagram_editor/left_panel/)

**Related samples**:
- [Diagram editor. Default mode. Setting the section order in the left panel](https://snippet.dhtmlx.com/7747cx7b)
- [Diagram editor. Default mode. Left panel customization](https://snippet.dhtmlx.com/2z0a18oz)

**Change log**: Added in v6.0