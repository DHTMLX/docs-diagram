---
sidebar_label: preview!!
title: preview Property of Shapebar
description: You can learn about the preview property of Shapebar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# preview

### Description

@short: Optional. An object that configures the preview of items

### Usage

~~~js
preview?:{
    scale?: number,
    gap?: string | number
}
~~~

### Parameters

- `scale` - (optional) defines the scale of items rendered in the shapebar of the editor
- `gap` - (optional) specifies the space between the items rendered in the shapebar

### Default config

~~~js
preview: {
    scale: 0.5,
    gap: "6px 8px"
    // sets 6px gap for the top and bottom sides and 8px gap for the right and left sides
}
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8,
            },
            // other configurations
        },
    }
});
~~~

### Details

The values of the **gap** and **scale** properties can be redefined for a separate shape via the **gap** and **scale** attributes of the [preview](../../../shapes/configuration_properties/#properties-specific-for-the-default-mode) property of the shape object:

~~~js
const defaults = {
    rectangle: {
        preview:{
            scale: 0.72, 
            gap: 8
        }
    }
}
 
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
           preview: {
               scale: 0.65,
               gap: 2,
            },
            // other configurations
        }
    },
    defaults: defaults         
});
~~~

**Related article:** TODO

**Change log**: Added in v6.0