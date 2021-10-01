---
sidebar_label: Customization
title: Customization
description: text
---

# Customization

## Customization of the right panel of the editor

When you add a custom shape into the editor (for example, [Diagram Editor](diagram_guides/editor_mode.md)), you may want to customize the right panel of the editor in order to be able to edit the attributes of the custom shape via the sidebar options. 
In this case, you can use the **properties** attribute of the **addShape()** method:

~~~js
editor.diagram.addShape("networkCard", {
    template: config => (
        `<section class='network_template'>
            <img src='${config.img}' alt='${config.text}'></img>
            <span>${config.text}</span>
            <span>${config.ip}</span>
        </section>`
    ),
    defaults: defaults,
    properties: [ 
		// The order of the objects in the array defines the order the sidebar options 
		// will be displayed in the right panel.
        { type: "arrange"},
        { type: "img", label: "photo" },
        { type: "text" },
        { type: "text", label: "IP", property: "ip" }
    ]
});
~~~

- **properties** - (*array*) optional, an array of objects that defines which sidebar options will be rendered in the [right panel of the editor](diagram_guides/editor_mode.md#rightpanelcustomization) for the shape. Each object of a separate sidebar option can contain the following properties:
    - **type** - (*string*) mandatory, the type of a sidebar option for editing attributes of a shape. See the list of available types [below](api/diagram_addshape.md#typesofsidebaroptions).
    - **label** - (*string*) optional, specifies the label for the sidebar option in the right panel
    - **property** - (*string*) optional, a custom property of a shape

You need to use the <b>type</b> attribute together with the <b>property</b> one to specify the sidebar option for editing a custom property. For example:

~~~js
{ type: "text", label: "IP", property: "ip" }
~~~

As a result, you can edit the custom <i>ip</i> attribute of the "networkCard" shapes via the text sidebar option with the *IP* label.

```todo
To define which sidebar option should be provided for editing a custom property of a shape, you need to use the **type** attribute together with the **property** one while preparing objects for rendering sidebar objects:

~~~js
editor.diagram.addShape("template", {
    template: template,
    properties: [
        { type: "position" },
        { type: "size" },
        // the custom 
        { type: "text", label: "Name", property: "name" },
        ...
    ],
});
~~~

As you can see from the code snippet above, we've renamed the "Text" sidebar option to "Name" and specified that the option will be used for editing the custom <i>name</i> property.

The order of the objects in the array defines the order the sidebar options will be displayed in the right panel.
```