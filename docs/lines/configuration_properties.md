---
sidebar_label: Line properties
title: Line Properties 
description: text
---

# Line properties

## Common properties

- **id** - *(string | number)*  the id of a connector
- **from** - *(string | number)* the id of the parent shape
- **to** - *(string | number)* the id of the child shape
- **type** - *(string)* the type of the connector line: "*line*" (default) or "*dash*"
- **connectType** - (*string*) the type of the connector line: ["straight"](../../lines/index/#lines-in-the-default-mode), ["elbow"](../../lines/index/#lines-in-the-org-mode), ["curved"](../../lines/index/#lines-in-the-mindmap-mode). 

### Properties specific for the default mode

- **forwardArrow** - *(string)* sets a forward arrow connector and defines the type of the arrow ("filled" by default)
- **backArrow** - *(string)* sets a back arrow connector and defines the type of the arrow ("filled" by default)
- **fromSide** - *(string)* the side of the shape from which connection will start ("*top*","*bottom*","*left*","*right*","*center*")
- **toSide** - *(string)* the side of the shape to which a different shape will be attached ("*top*","*bottom*","*left*","*right*","*center*")
- **cornersRadius** - *(number)* the radius of rounding corners of a connector
- **strokeWidth** - (*number*) the width of the line, 2 by default;
- **stroke** - (*string*) the color of the line, "#2198F3" by default;
- **customGap** - (*number*) sets the value of the [](../api/diagram/linegap_property.md) property for the line
