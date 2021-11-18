---
sidebar_label: gridStep
title: gridStep Property of Editor
description: text
---

# gridStep

@short: sets the size of a grid step that defines the step of moving an item

@signature: {`gridStep?: number;`}

@default: 10

@example:
const editor = new dhx.DiagramEditor("editor_container", {
    gridStep:20
});

@descr:
{{note The value of the property can be a number which is greater than or equal to 1.}}

We recommend that you use arrows while moving an item in the editor. This way sets exactly one grid step of moving the item, whereas using a mouse can cause shift the item to several grid steps.
