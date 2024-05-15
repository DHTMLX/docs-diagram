---
sidebar_label: Custom theme
title: Custom Theme
description: You can learn how to create a custom theme in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Custom theme

If the base Diagram themes don't fit your project, you can configure your own color theme. 
Check the **custom light** and **custom dark** themes in the snippet below:

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

To make a custom theme of your own, you need to override the values of the internal CSS variables as follows:

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* font */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* end font */

        /* border */
        --dhx-border-color: #007a99;
        /* end border */

        /* color scheme */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;

        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;

        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* end color scheme */

        /* theme colors */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* end theme colors */

        /* DHTMLX Grid service variables*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* end DHTMLX Grid service variables*/

        /* DHTMLX Toolbar service variables*/
        --dhx-s-toolbar-background: #002229;
        /* end DHTMLX Toolbar service variables */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });
    
    dhx.setTheme("custom-theme-dark");
</script>
~~~

**Related sample:** [Diagram Editor. Default mode. Basic and custom themes](https://snippet.dhtmlx.com/9twmlfus)

