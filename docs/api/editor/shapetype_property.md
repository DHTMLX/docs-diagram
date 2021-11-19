---
sidebar_label: shapeType
title: shapeType Property of Editor
description: You can learn about the shapeType property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
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
