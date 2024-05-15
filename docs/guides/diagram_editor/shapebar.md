---
sidebar_label: Shapebar
title: Editor Guides - Shapebar
description: You can learn about the Shapebar of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Shapebar 

Shapebar is a part of the editor that renders previews of Diagram items. You can choose the necessary items and drag them from the shapebar into the grid area.

:::note 
The shapebar is available only in the editor initialized in the default mode (type: "default").
:::

## Default sections

By default, the shapebar is divided into three sections: *Shapes*, *Groups*, and *Swimlanes*. The *Shapes* section includes all default shapes as well as custom ones.
The *Groups* and *Swimlanes* sections contain basic sets of the items.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom sections

To customize the structure of the shapebar, you should use the [`sections`](../../../api/diagram_editor/shapebar/config/sections_property/) property. It allows you to specify your own sections in the necessary order and put the items into the corresponding sections.

The `sections` property is an object with a set of *key:value* pairs where `key` is the name of a section and `value` is an array with the list of items which should be rendered in the section.

Depending on the chosen elements, the configuration of items of a particular section can be the following:

1. Rendering of basic sections

You can render [a basic set of shapes](api/diagram_editor/shapebar/config/sections_property.md#basic) using the `sections` configuration object. For example:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }],
                "Base org cards": [{ org: true }],
                "Base groups": [{ group: true }],
                "Base swimlane": [{ swimlane: true }]
            }
        }
    }
});
~~~

2. Specifying items with the help of string literals

You can render Shapebar items by specifying the types of shapes with the help of string literals. Check the example below:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom section": ["custom_shape"],
                "Other shapes": ["text", "topic", "circle"]
            }
        }
    }
});
~~~

3. <p id="customization">Redefining basic configurations</p>

Another option is to redefine basic properties of any shape and render it with the necessary parameters. The example below shows rendering of a shape of the `circle` type with various text and color settings:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Circles": [
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

You can reconfigure any type of shapes in such a way.

4. Combining different types of items in a section

If your project presupposes usage of various elements, you can create sections with mixed types of items in the Shapebar. Check the following example:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }, "text", "topic"],
                "Circles": [
                     "circle",
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

## Adding items of the same type with different settings

The library allows you to add several identical items (i.e. items of the same type) with different settings to the shapebar of the editor.
To do that, you need to:

- create separate objects with different configurations for the items of the necessary type. You can create as many objects as you need
- use the *names* of the created objects as the *types* of the items and add them into the sections of the shapebar using the [`sections`](../../../api/diagram_editor/shapebar/config/sections_property/) property

## Setting the preview of shapes

To configure the preview of items rendered in the shapebar of the editor, make use of the [`preview`](../../../api/diagram_editor/shapebar/config/preview_property/) property. It is an object that contains two attributes:

- `scale` - (optional) defines the scale of items rendered in the shapebar of the editor, 0.5 by default
- `gap` - (optional) specifies the space between the items rendered in the shapebar, "6px 8px" by default
(sets 6px gap for the top and bottom sides and 8px gap for the right and left sides)

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### Customizing a shape preview

To customize the appearance of a particular shape, you can apply the [preview](/shapes/configuration_properties/#properties-specific-for-the-default-mode) configuration property of a shape object.

The property can be applied in two cases:

- when setting the default configuration of a default shape via the [`defaults`](/api/diagram_editor/editor/config/defaults_property/) property of the editor object
- when setting the default configuration of a custom shape via the `defaults` attribute of the [`addShape()`](/api/diagram/addshape_method/) method

Let's consider three examples of configuring a shape preview:

1\. You can specify an image to be shown in the shapebar for a custom shape. For this purpose, you need to pass either an URL to load an image from or a base64 image as a string value to the `preview` property:

~~~jsx {6}
const defaults = {
    title: "Name and First name", 
    img: "../avatar-1.jpg", 
    height: 115, 
    width: 330,
    preview: "../shape_preview.png"
};

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

2\. If you need to specify an image and define its width and height, you should provide the `preview` property as an object with the `img`, `height`, and `width` attributes:

~~~jsx {4-8}
const defaults = {
    title: "Name and First name", email: "some@mail.com",
    img: "../avatar-1.jpg", height: 115, width: 330,
    preview: { 
        img: "../shape_preview.png", 
        height: 58, 
        width: 165
    }
}

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

:::note 
You can set the precise width and height of the image, but there is no ability to set the scale of the image.
:::

3\. You can redefine the scale of a specific shape rendered in the shapebar via the `scale` property:

~~~jsx {2-4}
const defaults = {
    preview: {
        scale: 0.72
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom shapes": ["personalCard"],
                "OrgChart shapes": ["card", "img-card"]
            },
            preview: {
                scale: 0.65
            }
        }
    }
});

editor.diagram.addShape("personalCard", {
    defaults,
    // ...
});
~~~

:::note
**Note**, that the `preview` property will be omitted when exporting data to the JSON format.
:::

## Setting the width of shapebar

The default width of the shapebar is 300. You can change it and set any other width via the [`width`](/api/diagram_editor/shapebar/config/width_property/) property, e.g.:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 300 by default
        }
    }
});
~~~

## Showing/hiding the Shapebar  

Whenever you need to control the visibility of a shapebar, you can use the [`show`](/api/diagram_editor/shapebar/config/show_property/) property. It allows you to hide the shapebar with particular settings on initialization of the Diagram Editor and show it later, when needed. By default the shapebar is shown.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            show: false // true by default
        }
    }
});
~~~

## Shapebar and shapes appearance

You can provide the desired look and feel for the shapebar with the [`css`](/api/diagram_editor/shapebar/config/css_property/) property. It allows specifying custom CSS classes to stylize items presentation in the shapebar in your own way.

~~~html {6}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

You can also [adjust the appearance of shapes](guides/themes/base_themes_configuration.md/#configuring-the-look-of-shapes-in-shapebar) by redefining the default color scheme for a particular theme or use your own CSS variables to manage the color scheme of Shapebar items.
