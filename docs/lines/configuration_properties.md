---
sidebar_label: Line API properties
title: Line API Properties 
description: text
---

# Line API properties

## Common properties

- **id** - *(string | number)*  the id of a connector
- **from** - *(string | number)* the id of the parent shape
- **to** - *(string | number)* the id of the child shape
- **type** - *(string)* the type of the connector line: "*line*" (default) or "*dash*"

### Properties specific for the default mode

- **forwardArrow** - *(string)* sets a forward arrow connector and defines the type of the arrow ("filled" by default)
- **backArrow** - *(string)* sets a back arrow connector and defines the type of the arrow ("filled" by default)
- **fromSide** - *(string)* the side of the shape from which connection will start ("*top*","*bottom*","*left*","*right*","*center*")
- **toSide** - *(string)* the side of the shape to which a different shape will be attached ("*top*","*bottom*","*left*","*right*","*center*")
- **cornersRadius** - *(number)* the radius of rounding corners of a connector

strokeWidth?: number;
	strokeType?: StrokeType;
	stroke?: string;
    customGap

`todo` - check the full list of properties
