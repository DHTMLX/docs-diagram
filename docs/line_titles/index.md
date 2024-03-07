---
sidebar_label: LineTitles
title: LineTitles
description: You can learn about Lines in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# LineTitles

## Overview

{{note LineTitles are available only in the default mode of Diagram/Diagram Editor (type: "default").}}

Line titles set text for the lines that connect shapes.

## Creating line titles

To create a line title, you need to specify `type: "lineTitle"` inside the line title object while preparing a data set to load into the diagram:

~~~js
const data = [
 	{ type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    // configuring a line title
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Other text" },
];

// initializing a diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

## Working with line titles 

You can manipulate line titles via the DataCollection API.

{{note The examples below are suitable both for Diagram and Diagram Editor}}

### Adding a line title 

### Blocking a line title adding 

### Iterating over the child items 