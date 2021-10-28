---
sidebar_label: shapeType
title: shapeType
description: text
---

# shapeType

@short: the type of the items

@signature: {`shapeType?: string;`}

@default: "rectangle" (in the default mode), "card" (in the org chart mode), "topic" (in the mindmap mode)

@example:
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "rectangle",
});

@descr:

This value is applied, if the shape object doesn't contain the "type" property.
