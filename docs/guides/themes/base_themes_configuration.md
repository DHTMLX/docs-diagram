---
sidebar_label: Configuring built-in themes
title: Configuring Built-in Themes
description: You can learn how to configure themes in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Configuring built-in themes

## Configuring all themes

You may notice that CSS variables of the [default](guides/themes.md#light-theme-default) theme include variables of the color scheme:

~~~css
--dhx-h-primary: 200;
--dhx-s-primary: 98%;
--dhx-l-primary: 40%;

--dhx-h-secondary: 0;
--dhx-s-secondary: 0%;
--dhx-l-secondary: 30%;

--dhx-h-danger: 0;
--dhx-s-danger: 100%;
--dhx-l-danger: 60%;

--dhx-h-success: 154;
--dhx-s-success: 89%;
--dhx-l-success: 37%;

--dhx-h-background: 0;
--dhx-s-background: 0%;
--dhx-l-background: 100%;
--dhx-a-background: 0.5;
~~~

:::tip
Color values are specified in the [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) format, where:

- *hue* is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue;
- *saturation* is a percentage value; 0% means completely unsaturated (gray) and 100% is completely saturated;
- *lightness* is a percentage value; 100% is white, 0% is black, and 50% is "normal".
:::

Due to the use of these CSS variables, color scheme is calculated automatically. It means, that if you change some value for the variable from the color scheme in the root, values for the *"contrast-light"*, *"dark"*, and *"contrast-dark"* themes will be recalculated automatically in real time. 

For instance, you can override the primary colors for all Diagram themes at once in the following way:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

In addition, values of variables, which are calculated on the base of the primary color, will be recalculated accordingly. For example, the value of the focused color is calculated as follows:

~~~js
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## Configuring a separate theme

If you want to override some color values for a separate [Diagram theme](diagram/guides/themes.md), you need to do this in the **'data-dhx-theme'** attribute:

~~~html 
<style>
    [data-dhx-theme='light'] {
        /* border */
        --dhx-border-color: #ced4da;
        /* end border */

        /* color scheme */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* end color scheme */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });
    
    dhx.setTheme("light");
</script>
~~~

## Configuring the look of shapes in Shapebar

You can manage the color scheme of Shapebar items by using your own CSS variables. For this, you should define a custom CSS variable and specify it as a value of the necessary property in the `defaults` configuration option. 

:::note
The value of the variable will be assigned to a Shapebar item when it is selected and won't be redefined on the change of a theme.
:::

For example:

~~~html {11-12,23-24}
<style>
    :root {
        --rectangle-fill: #428df5;
        --rectangle-font-color: #002229;
    }
    [data-dhx-theme='dark'] {
        --dhx-shapebar-item-font-color: #fff;
        --dhx-shapebar-item-background: #002229;
        --dhx-shapebar-item-border-color: #007a99;

        --rectangle-fill: #f54278;
        --rectangle-font-color: #002229;
    }
</style>

<div id="editor_container" style="height: 100%"></div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        defaults: {
            rectangle: {
                fill: "var(--rectangle-fill)",
                fontColor: "var(--rectangle-font-color)",
            }
        }
    });
    // set the dark theme
    const node = document.getElementById("editor_container").childNodes[0];
    dhx.setTheme("dark", node);
</script>
~~~

