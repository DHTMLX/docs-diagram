---
sidebar_label: serialize()
title: serialize Method of Editor
description: You can learn about the serialize method of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# serialize()

### Description

@short: Serializes the data of the editor into an array of JSON objects

### Usage

~~~js
serialize(): array;
~~~

### Returns

The method returns an array of JSON objects for each item from the editor data

### Example

~~~js {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

const data = editor.serialize();
~~~

**Related samples**: [Diagram editor. Org chart mode. Live editor](https://snippet.dhtmlx.com/bng7ego7)
