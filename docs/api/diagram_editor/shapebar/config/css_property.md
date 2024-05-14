---
sidebar_label: css!!
title: css Property of Shapebar
description: You can learn about the css property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# css

### Description

@short: Optional. Allows applying custom CSS classes to adjust the shapebar appearance

### Usage

~~~jsx
css?: string;
~~~

### Example

~~~html {8}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            // shapebar: true, // displays default Shapebar
            // or configure Shapebar via object
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

**Related articles:**

- [Shapebar and shapes appearance](guides/diagram_editor/shapebar.md/#shapebar-and-shapes-appearance)

- [Configuring the look of shapes in Shapebar](guides/themes/base_themes_configuration.md/#configuring-the-look-of-shapes-in-shapebar)

**Change log**: The property was added in v6.0
