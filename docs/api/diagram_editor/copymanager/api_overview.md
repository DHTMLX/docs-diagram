---
sidebar_label: Copy manager API overview
title: Copy manager API overview 
description: You can check a Copy manager overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Copy manager API overview

A set of APIs that you can use when copying and pasting items of the Diagram Editor. Use the `model` keyword to access the Copy manager via the `editor` object:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default", // only default
});
...
editor.model.copy(); // copies selected items
~~~

## Copy manager methods overview

| Name                                 					   			 | Description                                 					  		  |
| :----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [](api/diagram_editor/copymanager/methods/copy_method.md)			 | @getshort(api/diagram_editor/copymanager/methods/copy_method.md) 	  |
| [](api/diagram_editor/copymanager/methods/copystyles_method.md)    | @getshort(api/diagram_editor/copymanager/methods/copystyles_method.md) |
| [](api/diagram_editor/copymanager/methods/paste_method.md)         | @getshort(api/diagram_editor/copymanager/methods/paste_method.md)      |
| [](api/diagram_editor/copymanager/methods/pastestyles_method.md)   | @getshort(api/diagram_editor/copymanager/methods/pastestyles_method.md)|
