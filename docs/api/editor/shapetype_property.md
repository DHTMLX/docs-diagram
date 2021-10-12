---
sidebar_label: shapeType
title: shapeType
description: text
---

# shapeType

@short: the type of the items

@signature: {`shapeType?: string;`}

```
TODO:
- В diagram 4.1 изменен порядок создания фигур по-умолчания. Теперь для default mode фигурой по-умолчанию является rectangle
```

@default: "card" (in the default and org modes), "topic" (in the mindmap mode)

@example:
const editor = new dhx.DiagramEditor(document.body, {
    shapeType: "rectangle",
});

@descr:

This value is applied, if the shape object doesn't contain the "type" property.
