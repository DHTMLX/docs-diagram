---
sidebar_label: Custom shape
title: Custom Shape
description: text
---

# Custom Shape

If the default shapes don't meet your needs, you can create your custom shape. 

Let's imagine, you want to create a new `networkCard` shape which should render an image, text, and IP address.

<iframe src="https://snippet.dhtmlx.com/u1xqyo9w?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

To do that, you need to take the following steps:

1\. Apply the [](../api/diagram/addshape_method.md) method to add a unique name for your shape (*"networkCard"* in our case) and provide a template for it:

~~~js
diagram.addShape("networkCard", {
    template: ({ img, text, ip }) => (`
        <section class="dhx-diagram-demo_network-card">
            <img src="${img}" alt="${text}"></img>
            <span>${text}</span>
            <span>${ip}</span>
        </section>
    `),
	defaults: {
		width: 160,
		height: 160,
		img: path.network + "desktop.svg",
		text: "Network Card",
		ip: "138.68.41.78"
    }
});
~~~

The **defaults** attribute is used to define the default configuration of a "networkCard" shape. The values of the specified properties can be overridden in the configuration objects of separate shapes if needed.

2\. Use the unique name of the shape as a value of the **type** attribute inside the shape object while preparing a data set for loading into the diagram:

~~~js
const networkDiagram = [
    {
        "id": 1,
        "type": "networkCard",
        "x": 0,
        "y": 380,
        // override the default values of the text and ip attributes
        "text": "Remote expert desktop",
        "ip": "192.168.32.2"
    },
    // more options
]
~~~

## Event handlers for custom shapes

You may need to add handlers to the events occurred when the user interacts with custom shapes. It can be done by adding event handlers to HTML elements of a custom template of a shape via the **eventHandlers** attribute of the [](../api/diagram/addshape_method.md) method. 

In the example below, a context menu will be opened after the user clicks on the icon with the **toggle_container** class:

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

The **eventHandlers** object includes a set of *key:value* pairs, where:

- *key* - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
- *value* - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
	- **event** - an event object
	- **shape** - the shape object

**We recommend that you use different css classes for different custom shapes.**

