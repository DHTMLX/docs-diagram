---
sidebar_label: Configuring lines
title: Configuring Lines
description: text
---

# Configuring Lines

## Overview

The look and the way of connecting shapes is defined by the mode you initialize a diagram in: [default](#lines-in-the-default-mode), [org](#lines-in-the-org-chart-mode), or [mindmap](#lines-in-the-mindmap-mode) one.

### Lines in the default mode

In the default mode of Diagram, various shapes can be connected by ["straight" (by default) or "elbow"](../../lines/configuration_properties/) lines in the necessary sequence to make up a scheme of a particular process.

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### Lines in the org chart mode

The org chart mode of Diagram represents an organizational chart that contains a set of shapes connected by ["elbow" lines](../../lines/configuration_properties/) in a hierarchical order.

<iframe src="https://snippet.dhtmlx.com/98tzmzpg?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

It is possible to define vertical direction of connecting shapes for the parent shape via the **dir: "vertical"** configuration attribute of the shape object.

### Lines in the mindmap mode

The mindmap mode of Diagram is used to render one more kind of a hierarchical diagram. The shapes are connected by ["curved" lines](../../lines/configuration_properties/) and arranged around a central shape.

<iframe src="https://snippet.dhtmlx.com/lo1vm0e8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

The mode is useful when you need to represent a core topic or idea surrounded by the branches of the subtopics. 

The arrangement of child shapes relative to the root shape is defined automatically by the main algorithm. 
To change the default direction of the child shapes, use the [](../api/diagram/typeconfig_property.md) configuration property on initialization of the diagram.

## Setting connections between shapes

To connect shapes in Diagram, you can apply one of the following two ways:

- **using line objects**

You need to specify separate objects that will describe the logic of connecting shapes. For example: 

~~~js
const data = [
	// shapes
	{ id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager" },
    { id: "3", text: "Technical Director" },
    { id: "4", text: "Manager" },
    { id: "5", text: "Technical Director" },
    // connectors
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
	{ "id": "1-4", "from": "1", "to": "4", "type": "line" },
    { "id": "1-5", "from": "1", "to": "5", "type": "line" },
];
~~~

The **type** property specified in the line object allows you to specify individual type for a separate line.

{{note See [the full list of configuration properties of a line object](lines/configuration_properties.md).
}}

- **using the "parent attribute"**

{{note This way does not work in the default mode of Diagram/Diagram Editor.}}

You can specify the **parent** property in the configuration object of the shape and set the id of its parent shape as the value:

~~~js
const data = [
	// shapes
	{ id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
~~~

In this case, all the connectors will have the same type. 

### Setting the default line type

You can set a common type for all the connector lines of the diagram via the [](../api/diagram/defaultlinktype_property.md) property of the diagram config object:

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaultLinkType:"dash" // "dash" | "line"
});
diagram.data.parse(data);
~~~

This value is applied, if the line object doesn't contain the **type** property.