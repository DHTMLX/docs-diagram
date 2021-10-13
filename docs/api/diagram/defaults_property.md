---
sidebar_label: defaults
title: defaults
description: text
---

# defaults

@short: the default configuration of a shape

@signature: {`defaults?: IDefaultShapeConfig;`}

@example:
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


@descr:

The **defaults** object can contain a number of *key:value* pairs where *key* is a type of a shape and *value* is the default configuration for the shape.

After specifying the properties for the shape of the *rectangle* type by default you can omit these attributes while preparing a data set for the "rectangle"-type shapes. But, if necessary, you can redefine any of the properties while specifying them in the configuration object of the shape.

{{note There is no possibility to define *type* and *id* in the default configuration of a shape.}}

@changelog: added in v3.0

@descr:
#### Related articles

- [Setting the default configuration of a shape](../../../guides/diagram/configuration/#setting-the-default-configuration-of-a-shape)
- [Setting shape preview](../../../guides/diagram_editor/left_panel/#setting-shape-preview)

