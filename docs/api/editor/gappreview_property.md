---
sidebar_label: gapPreview
title: gapPreview
description: text
---

# gapPreview

@short: specifies the space between the items rendered in the left panel

@signature: {`gapPreview?: string | number;`}

@default: "6px 8px" (sets 6px gap for the top and bottom sides and 8px gap for the right and left sides)

@example:
const editor = new dhx.DiagramEditor("editor", {
    gapPreview: 10
});

@descr:

The value of the property can be redefined for a separate item via the **gap** attribute of the preview property of default settings.

~~~js
const defaults = {card: {
    preview: {
        scale: 0.72, 
        gap: 2
    }
}
 
const editor = new dhx.DiagramEditor(document.body, {
    shapeSections: {
        "org chart shapes": ["card", "img-card"],
        "flowchart shapes": [true]
    },
    scalePreview: 0.65,
    defaults: defaults         
});
~~~

{{note The property is available only in the default mode of the editor (*type:"default"*).}}

```todo
проверить пример и описание
```
