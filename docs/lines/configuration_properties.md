---
sidebar_label: Line properties
title: Line Properties 
description: text
---

# Line properties

## Common properties

- **type** - *(string)* the type of the connector line: "*line*" (default) or "*dash*"
- **id** - *(string | number)*  the id of a connector
- **from** - *(string | number)* the id of the parent shape
- **to** - *(string | number)* the id of the child shape
- **connectType** - (*string*) the type of the connector line: ["straight"](../../lines/index/#lines-in-the-default-mode), ["elbow"](../../lines/index/#lines-in-the-org-chart-mode), ["curved"](../../lines/index/#lines-in-the-mindmap-mode). 

### Properties specific for the default mode

- **forwardArrow** - *(string)* sets a forward arrow connector and defines the type of the arrow ("filled" by default)
- **backArrow** - *(string)* sets a back arrow connector and defines the type of the arrow ("filled" by default)
- **fromSide** - *(string)* the side of the shape from which connection will start ("*top*","*bottom*","*left*","*right*","*center*")
- **toSide** - *(string)* the side of the shape to which a different shape will be attached ("*top*","*bottom*","*left*","*right*","*center*")
- **cornersRadius** - *(number)* the radius of rounding corners of a connector
- **strokeWidth** - (*number*) the width of the line, 2 by default;
- **stroke** - (*string*) the color of the line, "#2198F3" by default;
- **customGap** - (*number*) sets the value of the [](../api/diagram/linegap_property.md) property for the line

```
TODO:
- Свойство strokeWidth относится к общим свойствам;
- Свойство stroke относится к общим свойствам, для режима org/mindmap по-умолчанию окрашен в цвет #CCC
- Необходимо описать настройки по-умолчанию для всех режимов диаграмм свойства connectType. Для default/org - elbow, mindmap - curved
```