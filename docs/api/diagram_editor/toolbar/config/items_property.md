---
sidebar_label: items!!
title: items Property of Toolbar
description: You can learn about the items property of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# items

### Description

@short: Optional. An array with controls displayed on Toolbar of Diagram Editor

### Usage

~~~js
items?: (object | string)[];
~~~

### Configuring Items via Strings

The `items` property allows you to specify [**Service elements**](guides/diagram_editor/toolbar.md/#service-elements) as an array of strings:

~~~js
items: [ "file", "edit", "view", "arrange", "spacer", "scale" ];
~~~

The full list of service element you can see [here](guides/diagram_editor/toolbar.md/#service-elements).

### Configuring Items via Objects

The `items` property allows you to specify [**Service elements**](guides/diagram_editor/toolbar.md/#service-elements) and [**Base elements**](guides/diagram_editor/toolbar.md/#base-elements) as an array of objects:

~~~js
items: [ 
    {
        type: string,
        id?: string,
        value?: string,
        hotkey?: string,
        icon?: string,
        hidden?: boolean,
        disabled?: boolean,
        css?: string | string[],
        items?: (string | object)[],
        checkIcon?: (editor: object) => string,
        handler?: (editor: object, event: Event) => void
    }, {...} 
];
~~~

#### Parameters

For all [**service elements**](guides/diagram_editor/toolbar.md/#service-elements), excluding `separator` / `spacer` / `scale`, you can specify an object with the following parameters:

- `type` - (required) - the type of a service element. The full list of service element types you can see [here](#service-elements)
- `id` - (optional) - the ID of a service element. By default, the ID of a service element includes **$** and the **type** of the service element: **$file**
- `value` - (optional) - the label of a service element
- `hotkey` - (optional) - the hot key combination label of a service element
- `icon` - (optional) - the css class of a service element icon
- `hidden` - (optional) - hides a service element
- `disabled` - (optional) - disables a service element
- `css` - (optional) - applies a custom css class to a service element
- `items` - (optional) - defines the structure of the child elements
- `checkIcon` - (optional) - the handler that returns the icon css class. It is called with the following argument:
    - `editor` - the Diagram Editor object
- `handler` - (optional) - the handler that runs when the ***click*** or ***inputChange*** events occurs. It is called with the following arguments:
    - `editor` - the Diagram Editor object
    - `event` - a [native event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

### Example 1

The example below shows how to configure Toolbar items via strings:

~~~js {8-12}
// Configuring items via strings
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                "file", 
                "spacer", 
                "scale"
            ]
        }
    }
});
~~~

### Example 2

The example below shows how to configure Toolbar items via objects:

~~~js {7-38}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // custom logic here
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

**Change log**: Added in v6.0

**Related articles:**  [Toolbar configuration](guides/diagram_editor/toolbar.md)
