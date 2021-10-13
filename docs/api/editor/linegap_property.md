---
sidebar_label: lineGap
title: lineGap
description: text
---

# lineGap

@short: adds an offset for two connected shapes, and fills the gap with an additional line

@signature: {`lineGap?: number;`}

@default: 10

@example:
const editor = new dhx.DiagramEditor("editor_container", {
    lineGap: 5
});

@descr:

{{note The property is available only in the default mode of the editor (*type:"default"*). The property does not work if you use groups or swimlanes.}}

The result of applying the **lineGap** property is shown in the image below:

![](../../assets/linegap_config.png)
