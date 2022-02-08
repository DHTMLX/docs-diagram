---
sidebar_label: setSwimlane()
title: setSwimlane Method of Cell Manager
description: You can learn about the setSwimlane method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# setSwimlane()

### Description

@short: Sets active swimlane for further actions with it

### Usage

~~~js
setSwimlane(id: string | number): boolean;
~~~

### Parameters

- `id` - (mandatory) the id of the swimlane

### Returns

The method returns `true` if the swimlane is set, otherwise `false`.

### Example

~~~js
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
