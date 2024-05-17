---
sidebar_label: LineTitles 
title: LineTitles
description: You can learn about Lines in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# LineTitles

## Overview

Line titles set texts for lines that connect shapes. You can add a text for a line both in the diagram and in the editor by double-clicking on a line or use a toolbar of a line in the editor (click a line to activate). Use double-clicking also for editing line titles both in the diagram and in the editor.

Another way to add a text to a line and manipulate it is to prepare a [data set](guides/loading_data.md/#preparing-data-to-load).

:::note
LineTitles are available only in the default mode of Diagram/Diagram Editor (type: "default").
:::

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Creating line titles

To create a line title, you need to specify `type: "lineTitle"` inside the line title object while preparing a data set to load into the diagram:

~~~jsx {5-6}
const data = [
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    // configuring a line title
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];

// initializing a diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### Properties of a line title object

Check [the full list of configuration properties of a line title object](/line_titles/configuration_properties/) to adjust the look and feel as well as configure the positioning of line titles.

## Working with line titles

You can manipulate line titles via the [DataCollection API](../api/data_collection/).

:::note
The examples below are suitable both for Diagram and Diagram Editor.
:::

### Adding a line title

You can add a line title via the [`add`](../api/data_collection/add_method/) method of DataCollection:

~~~jsx {5-10}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.add({
    type: "lineTitle",
    parent: "line_1",
    text: "Some text",
    fill: "#BCE4CE"
});
~~~

Provide an object with the configuration of a new line title as a parameter of the method.

:::note
See [the full list of configuration properties of a line title object](/line_titles/configuration_properties/).
:::

### Blocking line titles adding

If you need to prevent adding of line titles, you can make use of the [`beforeAdd`](../api/data_collection/beforeadd_event/) event of DataCollection:

~~~jsx {5}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);
editor.diagram.data.events.on("beforeAdd", (item) => item.type !== "lineTitle");
~~~

### Iterating over line titles

It is possible to iterate over line titles as child items of lines with the help of the [`eachChild()`](../api/data_collection/eachchild_method/) method of DataCollection:

~~~jsx {7-9,11-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse([
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Text 1", distance: 50 },
    { type: "lineTitle", id: "title_2", parent: "line_1", text: "Text 2", distance: 70 }
]);
editor.diagram.data.eachChild("line_1", (child) => {
    console.log(child.id); // => "title_1", "title_2"
});
~~~

You need to pass the id of the line the titles of which should be iterated over as a first parameter. In the above example the callback function will be applied to each child of the specified line and return their ids.
