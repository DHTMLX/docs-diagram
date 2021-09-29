---
sidebar_label: scalePreview
title: scalePreview
description: text
---

# scalePreview

@short: defines the scale of items rendered in the left panel of the editor

@signature: {`scalePreview?: string | number;`}

@default: 0.5

@example:
const editor = new dhx.DiagramEditor(document.body, {
    scalePreview: 0.6,
});

@descr:

{{note The property is available only in the default mode of the editor (*type:"default"*).}}

The value of the property can be redefined for a separate type of an item via the **scale** attribute of the **preview** property of default settings.

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

While the scale of the "card"-type shapes is 0.72, the scale of the other shapes in the left panel is 0.65.


```todo
посмотреть, что можно еще сюда добавить
```