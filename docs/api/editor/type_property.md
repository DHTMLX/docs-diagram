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

```todo
The "default" type is used to render a diagram in the default mode.
The "org" type is used to render a diagram in the org chart mode.
Thr "mindmap" type is used to render a diagram in the mind map mode.
```