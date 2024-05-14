---
sidebar_label: defaults!!
title: defaults Property of Editor
description: You can learn about the defaults property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaults

### Description

@short: Optional. An object which sets the default configuration of a shape or a line

### Usage

~~~js
defaults?: {
    [type: string]: object
};
~~~

### Parameters

The `defaults` object can contain a set of `key:value` pairs where *key* is the type of a shape or line and *value* is a set of configuration settings of the [shape](/shapes/configuration_properties/) or [line](/lines/configuration_properties/) correspondingly.

{{note The `type` and `id` attributes can not be defined in the default configuration of a shape/line.}}

### Example

~~~jsx {24}
const defaults = {
    // the default settings for all shapes of the "rectangle" type
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // the default settings for all lines of the "line" type
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // the default settings for all lines of the "dash" type
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    defaults,
});
~~~

:::info
After defining the default settings for the shape/line of separate types, you can either omit these properties or redefine their values while [preparing a data set](/diagram/guides/loading_data/#preparing-data-to-load) for the shapes/lines of these types.
:::

**Change log:** The ability to set the default configuration for lines is added in v4.2

**Related articles**:  

- [Setting the default configuration of a shape](/guides/diagram/configuration/#setting-the-default-configuration-of-a-shape)
- [Setting the preview of shapes](/guides/diagram_editor/shapebar/#setting-the-preview-of-shapes)

**Related sample:** [Diagram Editor. Setting the default line (connector) type](https://snippet.dhtmlx.com/22abzn5m)