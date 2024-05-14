---
sidebar_label: Editbar API overview
title: Editbar API overview 
description: You can check a Editbar overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar API overview

[Editbar](/guides/diagram_editor/editbar/) is a part of the Diagram Editor that contains controls for managing Diagram items (shapes, lines, groups, etc). Use the `editbar` property of the [`view`](/api/diagram_editor/editor/config/view_property/) configuration object to show, hide and configure the Editbar. There are two ways of initialization you can choose from:

- creating the default Editbar by using the `editbar:true` setting:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // displaying the default Editbar
    }
});
~~~ 

- configuring Editbar by specifying it as an object with [a set of properties](/category/editbar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // configuring Editbar via an object
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

Check the [related API section](/category/editbar-properties/) to explore the available properties of Editbar.



