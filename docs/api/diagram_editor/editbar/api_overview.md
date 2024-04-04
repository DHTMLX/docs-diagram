---
sidebar_label: Editbar API overview
title: Editbar API overview 
description: You can check a Editbar overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar API overview

The Editbar part of the Diagram Editor is initialized as a property of the `view` object. There are two ways of initialization you can choose from:

- creating the default Editbar by using the `editbar:true` setting:

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // displaying the default Editbar
    }
});
~~~ 

- configuring Editbar by specifying it as an object with [a set of properties](/category/editbar-properties/):

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
    	// configuring Editbar via an object
        editbar: {
            show: false // true by default
        }
    }
});
~~~

Check the related API sections to explore the available properties of Editbar.

## Editbar properties

- [List of Editbar properties](/category/editbar-properties/)

