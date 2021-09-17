---
sidebar_label: defaults
title: defaults
description: text
---

# defaults

@short: specifies default configuration settings of the items

@type: object

@example:
// the default configuration settings for all shapes of the "rectangle" type
const editor = new dhx.DiagramEditor(document.body, {
    defaults: {
        rectangle: {
            fill: "#CEEFE1",
            stroke: "#0AB169",
            strokeWidth: 2,
            width: 140,
            height: 140,
            text: "Default text"
        }
    }
});

@descr:
The **defaults** object can contain a number of *key:value* pairs where *key* is the type of an item and *value* is a set of configuration settings of the item.

{{note The *type* and *id* attributes can not be defined in the default configuration of an item.}}

After defining the default properties for the item of a separate type, you can either omit or redefine them while [preparing a data set to load](https://docs.dhtmlx.com/diagram/common_guides__loading_data.html#preparingdatatoload). 

```todo
добавить пример как это сделать
```

```todo
Добавить про preview property для кастомных фигур
```