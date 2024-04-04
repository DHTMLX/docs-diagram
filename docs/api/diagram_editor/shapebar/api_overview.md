---
sidebar_label: Shapebar API overview
title: Shapebar API overview 
description: You can check a Shapebar overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Shapebar API overview

The Shapebar part of the Diagram Editor is initialized as a property of the `view` object. There are two ways of initialization you can choose from:

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
            show: false // true by default
        }
    }
});
~~~

Check the related API section to explore the available properties of Shapebar.

## Shapebar properties

- [List of Shapebar properties](/category/shapebar-properties/)
