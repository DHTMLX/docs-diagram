---
sidebar_label: defaultShapeType
title: defaultShapeType
description: text
---

# defaultShapeType

@short: the default type of a shape

@signature: {`defaultShapeType?: string;`}

@default: "card" (in the default and org modes of Diagram), "topic" (in the mindmap mode of Diagram)

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "img-card"
});


@descr:
**Related sample**: [Diagram. Org chart with images](https://snippet.dhtmlx.com/qnx3ekin)

This value is applied, if the shape object doesn't contain the "type" property.

**Related articles**

diagram_guides/shapes_arrows_list.md#shapestypes

orgchart_guides/orgchart_shapes_types.md

mindmap_guides/mindmap_shapes_connectors.md
