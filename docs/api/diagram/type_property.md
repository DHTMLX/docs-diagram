---
sidebar_label: type
title: type
description: text
---

# type

```todo

@short: defines the type of a diagram

@type: string

@values: "default", "org", "mindmap"

@default: "default"
@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type:"org"
});


@template:	api_config
@descr:
- The **type:"default"** option initializes a Diagram.
- The **type:"org"** option is used to initialize an organizational chart (an organogram). 
- The **type:"mindmap"** option is used to initialize a mind map diagram. 


@related:
	common_guides/initialization.md#initializingdiagram

@changelog: The **"mindmap"** and **"default"** values have been added in v3.1. 

```todo