---
sidebar_label: shapeType
title: shapeType Property of Editor
description: text
---

# shapeType

@short: the type of the items

@signature: {`shapeType?: string;`}

@default: "card" (in the default and org chart modes), "topic" (in the mindmap mode)

@example:
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "rectangle",
});

@descr:

This value is applied, if the shape object doesn't contain the "type" property.
