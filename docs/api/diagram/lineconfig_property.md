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
    lineGap?: number
};
~~~

### Parameters

The **lineConfig** object contains the following parameter:

- `lineType` - (optional) the default type of a connector line. The value is applied, if the line object doesn't contain the "type" property
- `lineGap` - (optional) sets the distance to the right-angled bend of a connector line

:::info
The value of the **lineType** setting will be applied, if the line object doesn't contain the identical one
:::

### Default config

~~~jsx
lineConfig: {
  lineType: "line",
  lineGap: 10
}
~~~

### Example

~~~jsx {2-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineGap: 50
    },
    // other config parameters
});
~~~

The result of applying the **lineGap** property is shown in the image below:

![](../../assets/linegap_config.png)

**Related sample**: [Diagram. Default mode. Activity diagram](https://snippet.dhtmlx.com/a9t2z2dt)

**Change log**: 

- The **lineGap** parameter is added in v5.0 (check the Migration article)
- Added in v4.2

**Related articles**: [Setting connections between shapes](../../../lines/#setting-connections-between-shapes)
