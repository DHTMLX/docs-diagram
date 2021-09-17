---
sidebar_label: shapeType
title: shapeType
description: text
---

# shapeType

@short: the type of the items

@type: string
@default: "card" in the "default"/"org" mode; "topic" in the "mindmap" mode

@example:
const editor = new dhx.DiagramEditor(document.body, {
    shapeType: "rectangle",
});

@descr:
This value is applied, if the configuration object of an item doesn't contain the "type" property.