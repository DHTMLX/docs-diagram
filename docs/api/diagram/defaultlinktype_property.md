---
sidebar_label: defaultLinkType
title: defaultLinkType
description: text
---

# defaultLinkType

@short: the default type of a connector

@signature: {`defaultLinkType?: string;`}

@default:"line"

@values: "line", "dash"

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType:"dash"
});

@descr:

This value is applied, if the connector config doesn't contain the "type" property.

@relatedapi:
api/diagram_defaultshapetype_config.md

@related:
diagram_guides/shapes_arrows_list.md#connectorstypes