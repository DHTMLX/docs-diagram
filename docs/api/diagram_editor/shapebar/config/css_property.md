---
sidebar_label: css
title: css Property of Shapebar
description: You can learn about the css property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# css

### Description

@short: Optional. Allows applying custom CSS classes to adjust the shapebar appearance

### Usage

~~~js
css?: string;
~~~

### Example

~~~html
<script>
const editor = new dhx.DiagramEditor("editor_container", {
   view: {
       shapebar: {
           css:"my_style",
           // other configurations
        }
    }
});
</script>

<style>
.my_style{
	background-color:#4287f5;
	font-family: cursive;
}
</style>
~~~

**Related article:** TODO

**Change log**: Added in v6.0