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

~~~js
lineConfig?: {
    lineType?: "dash" | "line",
    lineDirection?: "backArrow" | "forwardArrow",
    arrowsHidden?: boolean,
};
~~~

### Parameters

The **lineConfig** object contains the following parameters:

- `lineType` - (optional) the default type of the new connector lines
- `lineDirection` - (optional) the direction of the new connector lines
- `arrowsHidden` - (optional) defines whether the arrows of the new connector lines should be hidden

:::note
The **lineDirection** and **arrowsHidden** parameters work only in the default mode of the editor (*type: "default"*)
:::

### Default config

~~~js
lineConfig: {
    lineType:"line",
    lineDirection: "forwardArrow",
    arrowsHidden: false
}
~~~

### Example

~~~js {2-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
    },
    // other config parameters
});
~~~

**Change log**: Added in v4.2

**Related sample:** [Diagram editor. Setting the default type for newly added connector lines](https://snippet.dhtmlx.com/22abzn5m)