---
sidebar_label: Spacer!!
title: Editbar Basic Controls - Spacer 
description: You can explore the Spacer control of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

@short: The basic control for arranging and aligning controls on the Editbar by taking some space.

## Usage

~~~jsx
{
    type: "spacer"
}
~~~

## Description

- `type` - (required) the type of a control. Set it to *"spacer"*

## Example

~~~jsx {10,12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
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