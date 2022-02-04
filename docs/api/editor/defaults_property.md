---
sidebar_label: defaults
title: defaults Property of Editor
description: You can learn about the defaults property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# defaults

### Description

@short: optional, an object which sets the default configuration of a shape

### Usage

~~~js
defaults?: {
    [type: string]: object
};
~~~

### Details

The **defaults** object can contain a number of *key:value* pairs where *key* is the type of a shape and *value* is a set of [configuration settings of the shape](../../../shapes/configuration_properties/).

{{note The *type* and *id* attributes can not be defined in the default configuration of a shape.}}

### Example

~~~js
// the default configuration settings for all shapes of the "rectangle" type
const editor = new dhx.DiagramEditor("editor_container", {
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

After defining the default settings for the shape of a separate type, you can either omit these properties or redefine their values while preparing a data set for the shapes of this type.

**Related articles**:  
- [Setting the default configuration of a shape](../../../guides/diagram/configuration/#setting-the-default-configuration-of-a-shape)
- [Setting shape preview](../../../guides/diagram_editor/left_panel/#setting-shape-preview)