---
sidebar_label: lineConfig
title: lineConfig Property
description: You can learn about the lineConfig property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineConfig

### Description

@short: Optional. An object with default configuration for the connector lines

### Usage

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // the "curved" type is used only in the mindmap mode
};
~~~

### Parameters

The **lineConfig** object contains the following parameters:

- `lineType` - (optional) the default type of a connector line. The value is applied, if the line object doesn't contain the "type" property
- `lineGap` - (optional) sets the distance to the right-angled bend of a connector line
- `connectType` - (optional) sets the connection type of the lines: `"elbow"` | `"straight"` | `"curved"` (the "curved" type is used only in the mindmap Diagram mode). The value is applied, if the line object doesn't contain the "connectType" property

:::info
The values of the **lineType** and **connectType** settings will be applied, if the line object doesn't contain the identical ones.
:::

### Default config

~~~jsx
lineConfig: {
    lineType: "line",
    lineGap: 10
}
~~~

The `connectType` parameter has the following default values:

- "elbow" - for the default and org chart Diagram modes
- "curved" - for the mindmap Diagram mode (this type is used only in the mindmap Diagram mode)

### Example

~~~jsx {2-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineGap: 50,
        connectType: "straight"
    },
    // other config parameters
});
~~~

The result of applying the **lineGap** property is shown in the image below:

![](../../assets/linegap_config.png)

**Related sample**: [Diagram. Default mode. Activity diagram](https://snippet.dhtmlx.com/a9t2z2dt)

**Change log**:

- The `connectType` parameter is added in v6.1
- The `lineGap` parameter is added in v5.0 (check the [Migration article](diagram/migration.md/#42---50))
- Added in v4.2

**Related articles**: [Setting connections between shapes](../../../lines/#setting-connections-between-shapes)
