---
sidebar_label: addShape() 
title: addShape Method
description: You can learn about the addShape method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# addShape() 

### Description

@short: Creates a custom shape

The `addShape()` method can be used both in the diagram and in the editor. [Check the examples below](#example)

### Usage

~~~jsx 
addShape(
    type: string, 
    parameters: object
): void;
~~~

### Parameters

- `type` - (required) the unique name for the type of a custom shape. The name must differ from the names of default shapes
- `parameters` - (required) an object with the additional parameters of the **addShape()** method. Here you can specify the following attributes:
    - `template: function` - (required) the function that takes the configuration object of the shape as a parameter and returns either an HTML or SVG template
    - [`defaults: object`](../../../shapes/custom_shape/) - (optional) the default configuration for a created shape. See [the full list of the configuration properties of a shape](../../../shapes/configuration_properties/)
    - [`eventHandlers: object`](../../../shapes/custom_shape/#event-handlers-for-custom-shapes) - (optional) adds custom event handlers to HTML elements of the template of a shape. The `eventHandlers` object includes a set of `key:value` pairs, where:
        - `key: string` - the name of the event. Note, that at the beginning of the event name the 'on' prefix is used (onclick, onmouseover)
        - `value: object` - an object that contains a **key:value** pair, where 
          - `key` is the CSS class name that the handler will be applied to
          - `value` is a function that takes two parameters:
            - `event: object` - (required) an event object
            - `shape: object` - (required) the shape object
         
        :::tip
        **Note**, we recommend that you use different CSS classes for different custom shapes when initializing custom event handlers.
        :::

### Example

~~~jsx {8-37} title="Adding a shape into the Diagram"
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", //  or type: "default", or type: "mindmap"
    defaultShapeType: "personal",
});

diagram.data.parse(data);

diagram.addShape("personal", {
    template: ({ name, photo, post }) => (`
        <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_diagram_template_a__inside">
                <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
                <div class="dhx_diagram_template_a__body">
                    <div class="dhx_diagram_template_a__title">${name}</div>
                    <div class="dhx_diagram_template_a__row">
                        <span class="dhx_diagram_template_a__text">${post}</span>
                    </div>
                </div>
                <div class="toggle--open-menu">
                    <span class="dhx_diagram_template_a__icon mdi mdi-dots-vertical"></span>
                </div>
            </div>
        </div>
    `), 
    defaults: {
        height: 115, width: 330,
        name: "Name and First name",
        post: "Resident",
        photo: "",
    },
    eventHandlers: {
        onclick: {
            "toggle--open-menu": openMenu,
        }
    }
});
~~~

**Related sample**: [Diagram with Editor. Org chart mode. Customization of cards, editbar and toolbar](https://snippet.dhtmlx.com/vcnt647v)

The example below shows how you can add a custom shape into the Diagram Editor as well as configure the [Shapebar](/guides/diagram_editor/shapebar/) and [Editbar](/guides/diagram_editor/editbar/overview/) panels of the editor. The configuration of a custom shape in the editbar of the Editor is implemented via the [`properties`](../../../api/diagram_editor/editbar/config/properties_property/) property of the Editbar panel.

~~~jsx {34-49} title="Adding a shape into the Diagram Editor"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Network shapes": [
                    { type: "network", text: "Core", img: src + "core.svg" },
                    { type: "network", text: "Server", img: src + "server.svg" },
                ],
                "Flow shapes": [{ flowShapes: true }],
            }
        },
        editbar: {
            properties: {
                network: [
                { type: "arrange" },
                    {
                        type: "fieldset",
                        label: "Network information",
                        rows: [
                            { type: "avatar", key: "img", circle: true, readOnly: true },
                            { type: "textarea", key: "text", label: "Description" },
                            { type: "input", key: "ip", label: "IP" },
                        ]
                    }
                ]
            }
        }
    }
});

editor.parse(data);

editor.diagram.addShape("network", {
    template: ({ img, text, ip }) => {
        return `
            <section class="dhx_diagram_template_d">
                <img class="dhx_diagram_template_d__image" src="${img}" alt="${text}"></img>
                <span class="dhx_diagram_template_d__title">${text}</span>
                <span class="dhx_diagram_template_d__text">${ip}</span>
            </section>
        `;
    },
    defaults: {
        width: 160, height: 160,
        preview: { scale: 0.7 },
        ip: "127.0.0.1",
    }
});
~~~

**Related sample**: [Diagram Editor. Default mode. Basic and custom themes](https://snippet.dhtmlx.com/9twmlfus)

## Formats of the shape template

The **template** function can return either an HTML or SVG template.

An example of creating an HTML template:

~~~js
const template = config => (
    `<section class='template'>
        <h3>${config.title}</h3>
        <ul><li>${config.text}</li></ul>
    </section>`
);
~~~

:::note
Note, that all HTML and SVG tags must be closed in the template.

For example, an `<img src="" alt="">` tag should look like `<img src="" alt=""></img>`.
:::

**Change log**:
- The `properties` attribute is removed in v6.0. 

**Related articles**: [Custom Shape](../../../shapes/custom_shape/)

**Related samples**: 
- [Diagram Editor. Mindmap mode. Site map and user flow](https://snippet.dhtmlx.com/do1jwmw1)
