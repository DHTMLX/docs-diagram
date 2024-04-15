---
sidebar_label: Spacer!!
title: Editbar Basic Controls - Spacer 
description: You can explore the Spacer of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

@short: A control used for arranging and aligning controls on the Editbar by taking some space.

## Usage

~~~js
{
    type: "spacer"
}
~~~

## Description

- `type` - (required) the type of a control, set it to *"spacer"*

## Example

~~~js {10,12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                "$shape": [
                    { type: "input", key: "name", label: "Task name" },
                    { type: "input", key: "id", label: "ID", readOnly: true },
                    { type: "spacer" },
                    { type: "button", text: "Send", full: true },
                    { type: "spacer" }
                ],
            },
        }
    }
});
~~~