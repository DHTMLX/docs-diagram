---
sidebar_label: addShape()
title: addShape
description: text
---

# addShape()

@short: creates a custom shape; sets sidebar options for its editing in the right panel of the editor

@signature: {`addShape(type: string, parameters: ICustomShapeParam): void;`}

@params:
- `type: string` - the unique name of a type of a shape
- `parameters: object` - an object with the additional parameters of the <i>addShape</i> function 

@example:
const diagram = new dhx.Diagram("diagram", {
	type: "default" //  or type: "org", or type: "mindmap"
});

diagram.addShape("template", {
	template: config => (
    	`<section class='template'>
         	<h3>${config.title}</h3>
         	<ul><li>${config.text.join("</li><li>")}</li></ul>
     	</section>`
	)	
});

diagram.data.parse(data);

@descr:

{{note Do not use default names of types of the dhtmlxDiagram library as names of types of your custom shapes. }}

The **parameters** attribute contains the following attributes:

- **template** - (*function*) mandatory, the function that returns either an HTML or SVG template. The function takes the config of a shape as a parameter.
- **defaults** - (object) optional, the default configuration for a created shape. See [the full list of the configuration properties of a shape](shapes/configuration_properties/);
- **properties** - (*array*) optional, an array of objects that defines which sidebar options will be rendered in the [right panel of the editor](diagram_guides/editor_mode.md#rightpanelcustomization) for the shape. Each object of a separate sidebar option can contain the following properties:
    - **type** - (*string*) mandatory, the type of a sidebar option for editing attributes of a shape. See the list of available types [below](api/diagram_addshape.md#typesofsidebaroptions).
    - **label** - (*string*) optional, specifies the label for the sidebar option in the right panel
    - **property** - (*string*) optional, a custom configuration property of a shape
**Note**, that the **properties** attribute is available only in the editor mode
- **eventHandlers** - (*object*) optional, adds custom event handlers to HTML elements of a custom template of Diagram shapes. The **eventHandlers** object includes a set of *key:value* pairs, where:
	- *key* - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
	- *value* - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
		- **event** - an event object
		- **shape** - the shape object
We recommend that you use different css classes for different custom shapes when initializing custom event handlers.


## Formats of the shape template

The **template** function can return either an HTML or SVG template.

Creating an HTML template can be implemented either in ES5 or in ES6+ formats. But **note**, that Internet Explorer does not support versions starting from ES6 (ECMAScript 2015).

An example of creating an HTML template using ES5:

~~~js
function template(config) {
    var template = "<section class='template'>"
        template += "<h3>" + config.title +"</h3>";
        template += "<ul><li>" + config.text.join("</li><li>") +"</li></ul>";
        template += "</section>";
    return template;
};
~~~

{{editor	https://snippet.dhtmlx.com/9y51k3fl	Diagram. Diagram Editor. Custom shape in editor with IE}}

An example of creating an HTML template using ES6+:

~~~js
const template = config => (
    `<section class='template'>
        <h3>${config.title}</h3>
        <ul><li>${config.text.join("</li><li>")}</li></ul>
    </section>`
);
~~~

{{editor	https://snippet.dhtmlx.com/9gb3l7el	Diagram. Diagram Editor. Custom shape in editor without IE}}

{{note **Note**, that all HTML and SVG tags must be closed in the template. 

~~~js
For example, an <img src="" alt=""> tag should look like this: 
<img src="" alt=""></img>
~~~ 

}}

## Setting the default configuration for the custom shape

You can define the default configuration for each shape with the custom type with the help of the **defaults** attribute.
For example:

~~~js
diagram.addShape("template", {
	template: template,
	defaults: { /*!*/
		width: 130, /*!*/
        height: 90 /*!*/
	}
});
~~~

As a result, the default *width: 130* and *height: 90* are specified for the shapes with *type:"template"*.

If needed, you can override these values for separate shapes when preparing a data set for loading into Diagram.

~~~js
var data = [
    {
        "id": 1,
        "type": "template", 
        "title": "Shape",
      	"text": ["draw()", "resize()", "rotate()"],
    },
	{
        "id": 2,
        "type": "template", 
        "title": "Triangle",
      	"text": ["draw()"],
		// redefine the default width and height
		"width": 120, /*!*/
		"height": 80 /*!*/
    },
    // more options
];

diagram.data.parse(data);
~~~

## Adding custom event handlers

Starting with v3.1, you can add custom event handlers to the custom shapes via the **eventHandlers** attribute of the **addShape()** method:

~~~js
const diagram = new dhx.Diagram("diagram", {
    type: "mindmap", 
    defaultShapeType: "flowView",
    typeConfig: {
        side: {
            right: ["suite"]
        }
    }
});
 
function template({ title, view, cr, br, conversion, link }) {
    ...
}

function openModalInfo(title, text) {
     ...
}

diagram.addShape("template", {
    template: template,
    defaults: {
        height: 190,
        width: 97
    },
    eventHandlers: { /*!*/
        onclick: {  /*!*/
            info: function(event, item) {  /*!*/
                openModalInfo(item.title, item.info);  /*!*/
            }  /*!*/
        }  /*!*/
    } /*!*/
});

 
diagram.data.load("../dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes}}


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

### Types of sidebar options

The available values of the **type** attribute are:

- **"arrange"** - provides interface for editing the *width*, *height*, *angle*, *x*, *y* properties of a shape. The properties can't be overridden. The type is available only in the default mode of the editor.
- **"position"** - provides interface for editing either the *x*/*y*, or *dx*/*dy* properties of a shape. The properties can't be overridden.
- **"size"** - provides interface for editing the *width* and *height* properties of a shape. The properties can't be overridden.
- **"title"** - provides interface for editing text values of a shape. By default, this type allows editing the *title* property of a shape.
- **"text"** - provides interface for editing text values of a shape. By default, this type allows editing the *text* property of a shape.
- **"img"** - provides interface for editing an image of a shape. By default, this type allows editing the *img* property of a shape. 
- **"fill"** - provides interface for editing color values of a shape. By default, this type allows editing the *fill* property of a shape.
- **"textProps"** - provides interface for editing the *textAlign*, *lineHeight*, *fontStyle*, *textVerticalAlign*, *fontSize* properties of a shape. The properties can't be overridden. You need to specify all of these properties in the data set for correct work of the **Text** sidebar option.
- **"strokeProps"** - provides interface for editing the *stroke*, *strokeType*, *strokeWidth* properties of a shape. The properties can't be overridden. You need to specify all of these properties in the data set for correct work of the **Stroke** sidebar option.
- **"grid"** - provides interface for editing the step of moving a shape. The visibility of the option is adjusted via the **controls** property of the editor.

## Configuring preview of the custom shape in the left panel of Diagram Editor

The left panel of the Diagram Editor renders the previews of all shapes provided by dhtmlxDiagram as well as previews of custom shapes added via the **addShape()** method. 

You can configure the preview of the custom shape via the **preview** property of the **defaults** attribute of the **addShape()** method. Check the details in the [related article](diagram_guides/editor_mode.md#settingpreview).





@changelog: 
- the method is added in v3.0
- the **eventHandlers** attribute is added in v3.1

@relatedsample:
https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes