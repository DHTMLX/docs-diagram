---
sidebar_label: resetButton
title: resetButton Event of Editor
description: You can learn about the resetButton event of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# resetButton

### Description

@short: fires after the Reset Changes button has been clicked

@descr:

### Usage

~~~js
resetButton: () => void;
~~~

### Example

~~~js
editor.events.on("resetButton",function(){
    console.log("The changes are reset");
});
~~~
