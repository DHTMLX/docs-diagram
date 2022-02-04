---
sidebar_label: import()
title: import Method of Editor
description: You can learn about the import method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# import()

### Description

@short: imports data from an existing diagram into the editor

### Usage

~~~js
import(diagram: object): void;
~~~

### Parameters

- `diagram: object` - the diagram object

### Example

~~~js
// initializing Diagram
const diagram = new dhx.Diagram("diagram", {
    type: "org"
});
// loading data into Diagram
diagram.data.parse(data);

// initializing Editor
const editor = new dhx.DiagramEditor("editor_container");

// importing data from Diagram into Editor
editor.import(diagram);
~~~

You can load data in any supported data format. See the details in the [](api/data_collection/parse_method.md) article.

**Related samples**: [Diagram editor. Org chart mode. Live editor](https://snippet.dhtmlx.com/bng7ego7)

