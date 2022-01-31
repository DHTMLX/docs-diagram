---
sidebar_label: defaults
title: defaults Property
description: You can learn about the defaults property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaults

### Description

@short: optional, an object which sets the default configuration of a shape
@descr:


### Usage

~~~js
defaults?: {
    [type: string]: object
};
~~~

### Details

The **defaults** object can contain a number of *key:value* pairs where *key* is a type of a shape and *value* is an object with a set of [configuration settings of the shape](../../../shapes/configuration_properties/).

{{note There is no possibility to define *type* and *id* in the default configuration of a shape.}}

### Example

~~~js
// the default configuration for all shapes of the "rectangle" type
const diagram = new dhx.Diagram("diagram_container", {
    defaults: {
        rectangle: {
            fill: "#CEEFE1",
            stroke: "#0AB169",
            strokeWidth: 2,
            width: 140,
            height: 140,
            text: "Default text"
        }
    }
});
~~~

After specifying the default properties for the shape of the *rectangle* type, you can omit them while preparing a data set for the "rectangle"-type shapes. But, if necessary, you can redefine any of the properties while specifying them in the configuration object of the shape.

**Change log**: Added in v3.0

**Related articles**:

- [Setting the default configuration of a shape](../../../guides/diagram/configuration/#setting-the-default-configuration-of-a-shape)
- [Setting shape preview](../../../guides/diagram_editor/left_panel/#setting-shape-preview)

