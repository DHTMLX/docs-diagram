---
sidebar_label: Toolbar API overview
title: Toolbar API overview 
description: You can check a Toolbar overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Toolbar API overview

[Toolbar](/guides/diagram_editor/toolbar/) is a part of the Diagram Editor that helps users to control the editing process. Use the `toolbar` property of the [`view`](/api/diagram_editor/editor/config/view_property/) configuration object to show, hide and configure the Toolbar. There are two ways of initialization you can choose from:

- creating the default Toolbar by using the `toolbar:true` setting:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true // displaying the default Toolbar
    }
});
~~~ 

- configuring Toolbar by specifying it as an object with [a set of properties](/category/toolbar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // configuring Toolbar via an object
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

Check the related API sections to explore the available methods, properties and events of Toolbar.

## Toolbar methods

- [List of Toolbar methods](/api/diagram_editor/toolbar/methods/overview/)

## Toolbar properties

- [List of Toolbar properties](/category/toolbar-properties/)

## Toolbar events

- [List of Toolbar events](/api/diagram_editor/toolbar/events/overview/)
