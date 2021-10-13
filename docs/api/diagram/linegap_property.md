---
sidebar_label: lineGap
title: lineGap
description: text
---

# lineGap

@short: adds an offset for two connected shapes, and fills the gap with an additional line

@signature: {`lineGap?: number;`}

@default:10

@example:
const diagram = new dhx.Diagram("diagram_container", { 
  	lineGap:30
});

@relatedsample:
**Related sample**: [Diagram. Default mode. Activity diagram](https://snippet.dhtmlx.com/a9t2z2dt)

@descr:

{{note The property is available only in the default mode of the diagram (*type:"default"*). The property does not work if you use groups or swimlanes.}}

The result of applying the **lineGap** property is shown in the image below:

![](../../assets/linegap_config.png)
