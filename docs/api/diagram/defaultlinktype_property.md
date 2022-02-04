---
sidebar_label: defaultLinkType
title: defaultLinkType Property
description: You can learn about the defaultLinkType property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaultLinkType

### Description

@short: optional, the default type of a connector line

The value is applied, if the line object doesn't contain the "type" property

### Usage

~~~js
defaultLinkType?: "line" | "dash";
~~~

### Default config

~~~js
defaultLinkType: "line" 
~~~

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType: "dash"
});
~~~

**Related articles**: [Setting connections between shapes](../../../lines/index/#setting-connections-between-shapes)
