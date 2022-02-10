---
sidebar_label: lineConfig
title: lineConfig Property
description: You can learn about the lineConfig property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineConfig

### Description

@short: Optional. An object with default configuration for the connector lines

The settings will be applied, if the line object doesn't contain the identical ones

### Usage

~~~js
lineConfig?: {
  lineType?: "dash" | "line",
};
~~~

### Parameters

The **lineConfig** object contains the following parameter:

- `lineType` - (optional) the default type of a connector line. The value is applied, if the line object doesn't contain the "type" property

### Default config

~~~js
lineConfig: {
  lineType: "line",
}
~~~

### Example

~~~js {2-4}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
    },
    // other config parameters
});
~~~

**Change log**: Added in v4.2

**Related articles**: [Setting connections between shapes](../../../lines/#setting-connections-between-shapes)
