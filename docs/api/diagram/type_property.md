---
sidebar_label: type
title: type
description: text
---

# type

@short: defines the mode of Diagram initialization 

@signature: {`type: "default" | "org" | "mindmap"`}

@default: "default"

@example:
const diagram = new dhx.Diagram("diagram_container", { 
    type:"org"
});


@descr:
DHTMLX Diagram can be initialized in one of three modes:

- Use **type:"default"** to initialize a Diagram in the default mode.
- Use **type:"org"** to initialize a Diagram in the org chart mode. 
- Use **type:"mindmap"** to initialize a Diagram in the mindmap mode. 


#### Related articles

- [Overview](../../../)
- [How to start with Diagram](../../../guides/diagram/initialization/)