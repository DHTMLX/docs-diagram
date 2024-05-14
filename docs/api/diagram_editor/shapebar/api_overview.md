---
sidebar_label: Shapebar API overview
title: Shapebar API overview 
description: You can check a Shapebar overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Shapebar API overview

[Shapebar](/guides/diagram_editor/shapebar/) is a part of the Diagram Editor that renders previews of Diagram items (shapes, groups and swimlanes). Use the `shapebar` property of the [`view`](/api/diagram_editor/editor/config/view_property/) configuration object to show, hide and configure the Shapebar. There are two ways of initialization you can choose from:

- creating the default Shapebar by using the `shapebar:true` setting:

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true // displaying the default Shapebar
    }
});
~~~ 

- configuring Shapebar by specifying it as an object with [a set of properties](/category/shapebar-properties/):

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // configuring Shapebar via an object
        shapebar: {
            css: "custom_css",
            show: true,
            width: 300,
            preview: {
               scale: 0.65,
               gap: 8
            },
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],   
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

Check the [related API section](/category/shapebar-properties/) to explore the available properties of Shapebar.

