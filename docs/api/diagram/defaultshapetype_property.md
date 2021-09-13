---
sidebar_label: defaultShapeType
title: defaultShapeType
description: text
---

# defaultShapeType

@short: the default type of a shape
	
@default:"card" (for org chart), "topic" (for mind map)
@type: string
@example:
var diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "img-card"
});


@template:	api_config
@descr:

This value is applied, if the shape config doesn't contain the "type" property.


@relatedapi:
api/diagram_defaultlinktype_config.md

@related:
diagram_guides/shapes_arrows_list.md#shapestypes
orgchart_guides/orgchart_shapes_types.md
mindmap_guides/mindmap_shapes_connectors.md

**Related sample**:
- [Diagram. Org chart with images](https://snippet.dhtmlx.com/qnx3ekin)
