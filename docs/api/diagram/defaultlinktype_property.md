---
sidebar_label: defaultLinkType
title: defaultLinkType
description: text
---

# defaultLinkType

@short: the default type of a connector line

@signature: {`defaultLinkType?: "line" | "dash";`}

@default:"line"

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType: "dash"
});

@descr:

This value is applied, if the line object doesn't contain the "type" property.

#### Related articles

[Setting connections between shapes](../../../lines/index/#setting-connections-between-shapes)
