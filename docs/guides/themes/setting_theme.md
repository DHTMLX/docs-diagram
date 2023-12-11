---
sidebar_label: Setting themes
title: Setting Themes
description: You can learn how to set a theme in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Setting themes

To set the necessary theme, be it a built-in Diagram theme or a custom one, use one of the ways described below:

### Changing the "data" attribute 

You can choose from the following variants:

- change the **"data-dhx-theme"** attribute for the *chosen container*:

~~~html title="index.html"
<!-- component container -->
<div data-dhx-theme="dark" style="height: 100%" id="chart"></div>
~~~

- change the **"data-dhx-theme"** attribute for the *root* element:

~~~js title="index.js"
//your code here

document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Applying the "dhx.setTheme()" method

The **dhx.setTheme()** method takes the following parameters:

- `theme: string` - (required) the name of the theme. It can be:
    - the name of the Diagram theme: *"light" | "contrast-light" | "dark" | "contrast-dark"*
    - the name of a [custom theme](guides/themes/custom_theme.md)
    - *"light"* - by default
- `container: string | HTMLElement` - (optional) the container to which the theme must be applied. It can be:
    - an HTMLElement
    - a string value with the ID of the container or the ID of a Layout cell
    - *document.documentElement* - by default

Below you'll find the examples of the **dhx.setTheme()** method usage:

- applying a theme either to the body or to the container 

~~~html 
<div id="container"></div>
<div>Other content</div>

<script>
	const editor = new dhx.DiagramEditor("container", {
	    type: "default",
	});
    dhx.setTheme("dark"); //apply the "dark" theme to the body 

    //or
    dhx.setTheme("dark", "container"); //apply the "dark" theme to the container with the "container" id
</script>
~~~

- setting a theme to the container specified via an HTMLElement

~~~html 
<div id="container-1"></div>
<div>Other content</div>

<script>
    new dhx.Diagram("container");
    
    const container = document.getElementById("container-1");
    dhx.setTheme("dark", container); //apply the "dark" theme to the container specified via an HTMLElement
</script>
~~~

- setting a theme for the Toolbar control of DiagramEditor:

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: {
            css: "toolbar",
        },
    }
});

const toolbarEl = document.querySelector(".toolbar");
dhx.setTheme("dark", toolbarEl);
~~~

**Related samples:**


