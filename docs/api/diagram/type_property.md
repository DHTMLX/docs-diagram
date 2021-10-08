---
sidebar_label: type
title: type
description: text
---

# type

@short: defines the mode of Diagram initialization 

@signature: {`type?: DiagramType;`}

@values: "default", "org", "mindmap"

@default: "default"

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type:"org"
});


@descr:
DHTMLX Diagram can be initialized in one of three modes:

- Use **type:"default"** to initialize a Diagram in the default mode.
- Use **type:"org"** to initialize a Diagram in the org mode. 
- Use **type:"mindmap"** to initialize a Diagram in the mindmap mode. 


#### Related articles
[Overview](../../../)