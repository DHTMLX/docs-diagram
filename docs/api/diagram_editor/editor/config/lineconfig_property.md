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
    lineGap?: number
};
~~~

### Parameters

The **lineConfig** object contains the following parameters:

- `lineType` - (optional) the default type of the new connector lines
- `lineDirection` - (optional) the direction of the new connector lines
- `arrowsHidden` - (optional) defines whether the arrows of the new connector lines should be hidden
- `lineGap` - (optional) sets the distance to the right-angled bend of a connector line

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

### Example

~~~jsx {2-7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
        lineGap: 50
    },
    // other config parameters
});
~~~

The result of applying the **lineGap** property is shown in the image below:

IMAGE HERE

**Change log**:

- The **lineGap** parameter is added in v5.0 (check the Migration article)
- Added in v4.2

**Related sample:** [Diagram editor. Setting the default type for newly added connector lines](https://snippet.dhtmlx.com/22abzn5m)
