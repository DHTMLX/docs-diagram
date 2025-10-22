---
sidebar_label: lineConfig
title: lineConfig Property
description: You can learn about the lineConfig property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# lineConfig

### Description

@short: Optional. An object with default configuration for the newly added connector lines 

:::info
The settings will be applied to the new connector lines which are added via the editor
:::

### Usage

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineDirection?: "backArrow" | "forwardArrow",
    arrowsHidden?: boolean,
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // the "curved" type is used only in the mindmap mode
};
~~~

### Parameters

The **lineConfig** object contains the following parameters:

- `lineType` - (optional) the default type of a connector line. The value is applied, if the line object doesn't contain the "type" property
- `lineDirection` - (optional) the direction of the new connector lines
- `arrowsHidden` - (optional) defines whether the arrows of the new connector lines should be hidden
- `lineGap` - (optional) sets the distance to the right-angled bend of a connector line
- `connectType` - (optional) sets the connection type of the lines: `"elbow"` | `"straight"` | `"curved"` (the "curved" type is used only in the mindmap Diagram mode). The value is applied, if the line object doesn't contain the "connectType" property

:::note
The **lineDirection**, **arrowsHidden**, and **lineGap** parameters work only in the default mode of the editor (*type: "default"*)
:::

### Default config

~~~jsx
lineConfig: {
    lineType:"line",
    lineDirection: "forwardArrow",
    arrowsHidden: false,
    lineGap: 10
}
~~~

The `connectType` parameter has the following default values:

- "elbow" - for the default and org chart modes
- "curved" - for the mindmap mode (this type is used only in the mindmap mode)

### Example

~~~jsx {2-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
        lineGap: 50,
        connectType: "straight"
    },
    // other config parameters
});
~~~

The result of applying the **lineGap** property is shown in the image below:

![](../../../../assets/linegap_config.png)

**Change log**:

- The `connectType` parameter is added in v6.1
- The `lineGap` parameter is added in v5.0 (check the [Migration article](diagram/migration.md/#42---50))
- Added in v4.2

**Related sample**: [Diagram editor. Setting the default line (connector) type. Try connecting shape A to shape B](https://snippet.dhtmlx.com/22abzn5m)
