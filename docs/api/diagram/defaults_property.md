---
sidebar_label: defaults
title: defaults Property
description: You can learn about the defaults property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaults

### Description

@short: Optional. An object which sets the default configuration of a shape or line

### Usage

~~~js
defaults?: {
    [type: string]: object
};
~~~

### Parameters

The **defaults** property is an object which includes a set of *key:value* pairs where *key* is a type of a shape or line and *value* is an object with a set of configuration settings of the [shape](../../../shapes/configuration_properties/) or [line](../../../lines/configuration_properties/) correspondingly.

{{note There is no possibility to define *type* and *id* in the default configuration of a shape/line}}

### Example

~~~js {24}
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

const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaults: defaults
});
~~~

:::note 
After defining the default settings for the shapes/lines of separate types, you can either omit these properties or redefine their values while [preparing a data set](../../../guides/loading_data/#preparing-data-to-load) for the shapes/lines of these types.
:::

**Change log**:
- The ability to set the default configuration for lines is added in v4.2
- The property is added in v3.0

**Related articles**:

- [Setting the default configuration of a shape](../../../guides/diagram/configuration/#setting-the-default-configuration-of-a-shape)
- [Setting shape preview](../../../guides/diagram_editor/left_panel/#setting-shape-preview)

