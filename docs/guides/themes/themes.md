---
sidebar_label: Built-in themes
title: Built-in Themes
description: You can learn about the built-in themes in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Built-in themes

DHTMLX Diagram library provides 4 predefined themes:

- [light theme](#light-theme-default) (**"light"**) - used by default
- [dark theme](#dark-theme) (**"dark"**)
- [light high contrast theme](#light-high-contrast-theme) (**"contrast-light"**)
- [dark high contrast theme](#dark-high-contrast-theme) (**"contrast-dark"**)

The Diagram themes are developed in accordance with international standards. The high contrast themes will be helpful for users who have vision impairment. For more detail, read the [Accessibility support](https://docs.dhtmlx.com/suite/common_features/accessibility_support/) article.

You can try all themes in the example below:

TODO

[iframe]

## Light theme (default)

TODO

[default light theme image]

The default **"light"** theme is configured on the base of the CSS variables which are listed below:

~~~css
:root, [data-dhx-theme] {
	/* base colors */
	--dhx-color-white: #fff;
	--dhx-color-gray-100: #e6e6e6;
	--dhx-color-gray-200: #ccc;
	--dhx-color-gray-300: #b3b3b3;
	--dhx-color-gray-400: #999;
	--dhx-color-gray-500: #808080;
	--dhx-color-gray-600: #666;
	--dhx-color-gray-700: #4d4d4d;
	--dhx-color-gray-800: #333;
	--dhx-color-gray-900: #1a1a1a;
	--dhx-color-black: #000;
	/* end base colors */

	/* font */
	--dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

	--dhx-font-weight-regular: 400; 
	--dhx-font-weight-medium: 500; 
	--dhx-font-weight-bold: 700;

	--dhx-font-size-small: 12px;
	--dhx-font-size-normal: 14px;
	--dhx-font-size-large: 16px;

	--dhx-line-height-small: 16px;
	--dhx-line-height-normal: 20px;
	--dhx-line-height-large: 24px;

	--dhx-font-color-primary: rgba(0, 0, 0, .7);
	--dhx-font-color-secondary: rgba(0, 0, 0, .5);
	--dhx-font-color-additional: rgba(0, 0, 0, .3);
	--dhx-font-color-disabled: rgba(0, 0, 0, .3);

	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-color-white);
	/* end font */

	/* icon */
	--dhx-icon-size-small: 16px;
	--dhx-icon-size-normal: 20px;
	--dhx-icon-size-large: 24px;
	/* end icon */

	/* border */
	--dhx-border-width: 1px;
	--dhx-border-radius: 2px;
	--dhx-border-color: rgba(0, 0, 0, .1);
	--dhx-border-color-focused: rgba(0, 0, 0, .3);
	--dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
	/* end border */

	/* border shadow */
	--dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
	--dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
	--dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

	--dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
	/* end border shadow */

	/* transitions */
	--dhx-transition-time: 0.2s;
	--dhx-transition-in: ease-in;
	--dhx-transition-out: ease-out;
	/* end transitions */

	/* z-index */
	--dhx-z-index-up: 1;
	--dhx-z-index-force-up: 10;
	--dhx-z-index-overlay: 999;
	--dhx-z-index-overlay-total: 10000000;
	/* end z-index */

	/* only service color schema */
	--dhx-l-contrast-offset: 0%; /* lightness contrast theme offset */
	--dhx-l-h-offset: 10%; /* lightness hover offset */
	--dhx-s-d-offset: 30%; /* saturation disable offset */
	--dhx-l-d: 70%; /* lightness disable value */
	--dhx-a-l-h: .15; /* alpha light hover value */
	--dhx-a-l-a: .3; /* alpha light active value */
	/* only service */

	/* color scheme */
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
	/* end color scheme */

	/* theme colors */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
	--dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
	--dhx-background-overlay-light: rgba(255, 255, 255, .5);

	--dhx-tooltip-background-dark: var(--dhx-color-gray-800);
	--dhx-tooltip-background-light: var(--dhx-color-white);

	--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

	--dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
	--dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-primary-active: var(--dhx-color-primary);
	--dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
	--dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-secondary-active: var(--dhx-color-secondary);
	--dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
	--dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-danger-active: var(--dhx-color-danger);
	--dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

	--dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
	--dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
	--dhx-color-success-active: var(--dhx-color-success);
	--dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
	--dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
	--dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
	/* end theme colors */

	/* DHTMLX Toolbar service variables*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* end DHTMLX Toolbar service variables */

	/* DHTMLX Grid service variables*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* end DHTMLX Grid service variables*/

	/* DHTMLX Calendar service variables*/
	--dhx-s-calendar-muffled: .6;
	/* end DHTMLX Calendar service variables*/

	/* DHTMLX Slider service variables*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* end DHTMLX Slider service variables*/

	/* DHTMLX Diagram variables*/
	--dhx-selected-border: 1px solid var(--dhx-color-primary);
	--dhx-selected-border-dashed: 1px dashed var(--dhx-color-primary);

	--dhx-shapebar-item-font-color: #4C4C4C;
	--dhx-shapebar-item-background: #EEF1F6;
	--dhx-shapebar-item-border-color: #B8C6D6;
	/* end DHTMLX Diagram variables*/
}
~~~

## Light high contrast theme

TODO

[light high contrast theme image]

The **"contrast-light"** theme is configured both on the base of the [root CSS variables](#light-theme-default) and the variables which are listed below:

~~~css
[data-dhx-theme='contrast-light'] {
	/* font */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-secondary: rgba(0, 0, 0, .66);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	/* end font */

	/* border */
	--dhx-border-color: rgba(0, 0, 0, .4);
	/* end border */

	/* color scheme */
	--dhx-l-contrast-offset: 14%;
	/* end color scheme */

	/* DHTMLX Toolbar service variables*/
	--dhx-s-toolbar-background: var(--dhx-background-primary);
	--dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
	--dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
	/* end DHTMLX Toolbar service variables */

	/* DHTMLX Grid service variables*/
	--dhx-s-grid-header-background: var(--dhx-background-secondary);
	--dhx-s-grid-selection-background: var(--dhx-color-gray-700);
	/* end DHTMLX Grid service variables*/
	
	/* DHTMLX Calendar service variables*/
	--dhx-s-calendar-muffled: .8;
	/* end DHTMLX Calendar service variables*/

	/* DHTMLX Slider service variables*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* end DHTMLX Slider service variables*/
}
~~~

## Dark theme

TODO

[dark theme image]

The **"dark"** theme is configured both on the base of the [root CSS variables](#light-theme-default) and the variables which are listed below:

~~~css
[data-dhx-theme='dark'] {
	/* font */
	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, .7);
	--dhx-font-color-additional: rgba(255, 255, 255, .5);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-white);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* end font */

	/* border */
	--dhx-border-color: rgba(255, 255, 255, 0.3);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.5);
	/* end border */

	/* color scheme */
	--dhx-l-secondary: 60%; /* lightness contrast theme offset */

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* end color scheme */

	/* theme colors */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* end theme colors */

	/* DHTMLX Toolbar service variables*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* end DHTMLX Toolbar service variables */

	/* DHTMLX Grid service variables*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* end DHTMLX Grid service variables*/
	
	/* DHTMLX Calendar service variables*/
	--dhx-s-calendar-muffled: .6;
	/* end DHTMLX Calendar service variables*/

	/* DHTMLX Slider service variables*/
	--dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
	/* end DHTMLX Slider service variables*/

	/* DHTMLX Diagram variables*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* end DHTMLX Diagram variables*/
}
~~~

## Dark high contrast theme

TODO

[dark high contrast theme image]

The **"contrast-dark"** theme is configured both on the base of the [root CSS variables](#light-theme-default) and the variables which are listed below:

~~~css
[data-dhx-theme='contrast-dark'] {
	/* font */
	--dhx-font-size-normal: 16px;
	--dhx-font-size-small: var(--dhx-font-size-normal);

	--dhx-font-color-primary: var(--dhx-color-white);
	--dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
	--dhx-font-color-additional: var(--dhx-font-color-secondary);
	--dhx-font-color-disabled: rgba(255, 255, 255, .5);
	--dhx-font-color-contrast: var(--dhx-color-black);
	--dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
	/* end font */

	/* border */
	--dhx-border-color: rgba(255, 255, 255, 0.5);
	--dhx-border-color-focused: rgba(255, 255, 255, 0.7);
	/* end border */

	/* color scheme */
	--dhx-l-contrast-offset: -12%; /* lightness contrast theme offset */

	--dhx-l-secondary: 60%;

	--dhx-h-background: 226;
	--dhx-s-background: 12%;
	--dhx-l-background: 20%;
	/* end color scheme */

	/* theme colors */
	--dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
	--dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
	--dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
	/* end theme colors */

	/* DHTMLX Toolbar service variables*/
	--dhx-s-toolbar-background: var(--dhx-color-black);
	--dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
	--dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
	/* end DHTMLX Toolbar service variables */

	/* DHTMLX Grid service variables*/
	--dhx-s-grid-header-background: #212329;
	--dhx-s-grid-selection-background: var(--dhx-color-gray-100);
	/* end DHTMLX Grid service variables*/

	/* DHTMLX Calendar service variables*/
	--dhx-s-calendar-muffled: .8;
	/* end DHTMLX Calendar service variables*/

	/* DHTMLX Slider service variables*/
	--dhx-s-tick-font-size: var(--dhx-font-size-small);
	/* end DHTMLX Slider service variables*/

	/* DHTMLX Diagram variables*/
	--dhx-shapebar-item-font-color: var(--dhx-font-color-primary);
	--dhx-shapebar-item-background: #212329;
	--dhx-shapebar-item-border-color: #6c6e74;
	/* end DHTMLX Diagram variables*/
}
~~~

## Setting themes

To set the necessary theme, be it a [built-in Diagram theme](diagram/guides/themes.md) or a [custom one](diagram/guides/themes/custom_theme.md), use one of the ways described below:

### Using the ***data-dhx-theme*** attribute

You can choose from the following variants:

- set the ***data-dhx-theme*** attribute for the *chosen container*:

~~~html title="index.html"
<!-- component container -->
<div data-dhx-theme="dark" style="height: 100%" id="diagram"></div>
~~~

- set the ***data-dhx-theme*** attribute for an *HTML element*, e.g. for *documentElement*:

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Using the ***dhx.setTheme()*** method

The ***dhx.setTheme()*** method takes the following parameters:

- `theme: string` - (required) the name of the theme. It can be:
    - the name of the Diagram theme: *"light" | "contrast-light" | "dark" | "contrast-dark"*
    - the name of a [custom theme](guides/themes/custom_theme.md)
    - *"light"* - by default
- `container: string | HTMLElement` - (optional) the container to which the theme must be applied. It can be:
    - an HTMLElement
    - a string value with the ID of the container or the ID of a Layout cell
    - *document.documentElement* - by default

Below you'll find the examples of the ***dhx.setTheme()*** method usage:

- applying a theme either to the body or to the container 

~~~html {8-11}
<div id="editor_container"></div>
<div>Other content</div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default"
    });
    dhx.setTheme("dark"); //applies the "dark" theme to the body 
    //or
    //applies the "dark" theme to the container with the "editor_container" id
    dhx.setTheme("dark", "editor_container"); 
</script>
~~~

- setting a theme for any HTML element, e.g. for the Toolbar control

~~~jsx {10-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar"
        }
    }
});

const toolbarEl = document.querySelector(".toolbar");
dhx.setTheme("dark", toolbarEl);
~~~

**Related samples:**

TODO
