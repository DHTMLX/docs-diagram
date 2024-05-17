---
sidebar_label: resetSwimlane()
title: resetSwimlane Method of Cell Manager
description: You can learn about the resetSwimlane method of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# resetSwimlane()

### Description

@short: Resets active swimlane

### Usage

~~~jsx
resetSwimlane(): void;
~~~

### Example

~~~jsx
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

// your actions with swimlane

diagram.cellManager.resetSwimlane(); // resets active swimlane
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/)
