---
sidebar_label: gridStep
title: gridStep
description: text
---

# gridStep

@short: sets the size of a grid step that defines the step of moving a shape/group/swimlane

@default:10
@values: >=1
@type: number
@example:
var diagram = new dhx.Diagram("diagram_container", { 
  	gridStep:20
});



@template:	api_config
@descr:
We recommend that you use arrows while moving an item in the editor. This way sets exactly one grid step of moving the item, whereas using a mouse can cause shift the item to several grid steps.
