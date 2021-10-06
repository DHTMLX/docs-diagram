---
sidebar_label: type
title: type
description: text
---

# type

@short: specifies the mode of the diagram editor

@signature: {`type?: DiagramType;`}

@default: "default"

@values: "default", "org", "mindmap"

@example:
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
});

@descr:

DHTMLX Diagram Editor can be initialized in one of three modes:

- Use **type:"default"** to initialize the editor in the default mode.
- Use **type:"org"** to initialize the editor in the org mode.
- Use **type:"mindmap"** to initialize the editor in the mindmap mode.
