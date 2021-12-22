---
sidebar_label: addShape()!!
title: addShape Method
description: You can learn about the addShape method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# addShape()

### Description

@short: creates a custom shape and sets sidebar options for its editing in the right panel of the editor
@descr:

### Usage

~~~jsx 
addShape(
    type: string, 
    parameters: object // ICustomShapeParam interface
) => void;
~~~

### Parameters

- `type: string` - (mandatory) the unique name for the type of a custom shape. The name must differ from the names of default shapes
- `parameters: object` - (mandatory) an object with the additional parameters of the `addShape()` function. Here you can specify the following parameters:
    - `template: function` - (mandatory) the function that returns either an HTML or SVG template. The function takes the config of a shape as a parameter. Check [the available formats of the template](#formats-of-the-shape-template)
    - [`defaults?: object`](../../../shapes/custom_shape/) - (optional) the default configuration for a created shape. See [the full list of the configuration properties of a shape](../../../shapes/configuration_properties/)
    - [`eventHandlers?:object`](../../../shapes/custom_shape/#event-handlers-for-custom-shapes) - (optional) adds custom event handlers to HTML elements of the template of a shape. The `eventHandlers` object includes a set of `key:value` pairs, where:
        - `key: string` - (mandatory) the name of the event. Note, that at the beginning of the event name the 'on' prefix is used (onclick, onmouseover)
        - `value: object` - (mandatory) an object that contains a `key:value` pair, where 
          - `key` is the CSS class name that the handler will be applied to
          
            :::tip
            **Note**, we recommend that you use different CSS classes for different custom shapes when initializing custom event handlers
            :::
          - `value` is a function that takes two parameters:
            - `event: object` - (mandatory) an event object
            - `shape: object` - (mandatory) the shape object
    - [`properties?: array`](../../../guides/diagram_editor/right_panel/#configuring-options-for-editing-custom-shapes) - (optional) an array of objects that defines which sidebar options will be rendered in the right panel for editing a custom shape. Each object can contain a set of properties:
        - `type: string` - (mandatory) the type of a sidebar option. See the list of available types [below](#types-of-sidebar-options)
        - `label?: string` - (optional) specifies the label for the sidebar option
        - `property?: string` - (optional) a custom property of the shape

:::note
Note, that the `properties` attribute is available only in the editor mode
:::

### Example

~~~jsx {6-12}
const diagram = new dhx.Diagram("diagram_container", {
	type: "default" //  or type: "org", or type: "mindmap"
});
diagram.data.parse(data);

diagram.addShape("template", {
	template: config => (
    	`<section class='template'>
         	<h3>${config.title}</h3>
         	<ul><li>${config.text.join("</li><li>")}</li></ul>
     	</section>`
	)	
});
~~~

:::note
The `addShape()` method can be used both in the diagram and in the editor. <br>Check the **related sample**: [Diagram. Mindmap mode. Site map and user flow example](https://snippet.dhtmlx.com/do1jwmw1).
::: 

### Types of sidebar options

While specifying sidebar options for editing custom shapes, you can apply the following values of the `type` property:

- [`"arrange"`](../../../guides/diagram_editor/right_panel/#arrange) - provides interface for editing the `width`, `height`, `angle`, `x`, `y` properties of a shape. The properties can't be overridden. The type is available only in the default mode of the editor
- [`"position"`](../../../guides/diagram_editor/right_panel/#position) - provides interface for editing either the `x`/`y`, or `dx`/`dy` properties of a shape. The properties can't be overridden
- [`"size"`](../../../guides/diagram_editor/right_panel/#size) - provides interface for editing the `width` and `height` properties of a shape. The properties can't be overridden
- [`"title"`](../../../guides/diagram_editor/right_panel/#title) - provides interface for editing text values of a shape. By default, this type allows editing the `title` property of a shape
- [`"text"`](../../../guides/diagram_editor/right_panel/#text) - provides interface for editing text values of a shape. By default, this type allows editing the `text` property of a shape
- [`"img"`](../../../guides/diagram_editor/right_panel/#image) - provides interface for editing an image of a shape. By default, this type allows editing the `img` property of a shape
- [`"fill"`](../../../guides/diagram_editor/right_panel/#fill) - provides interface for editing color values of a shape. By default, this type allows editing the `fill` property of a shape
- [`"textProps"`](../../../guides/diagram_editor/right_panel/#text-settings) - provides interface for editing the `textAlign`, `lineHeight`, `fontStyle`, `textVerticalAlign`, `fontSize` properties of a shape. The properties can't be overridden. You need to specify all of these properties in the data set for correct work of the `Text` sidebar option
- [`"strokeProps"`](../../../guides/diagram_editor/right_panel/#stroke) - provides interface for editing the `stroke`, `strokeType`, `strokeWidth` properties of a shape. The properties can't be overridden. You need to specify all of these properties in the data set for correct work of the `Stroke` sidebar option
- [`"grid"`](../../../guides/diagram_editor/right_panel/#grid-step) - provides interface for editing the step of moving a shape. The visibility of the option is adjusted via the `controls` property of the editor

## Formats of the shape template

The `template` function can return either an HTML or SVG template.

Creating an HTML template can be implemented either in ES5 or in ES6+ formats.

An example of creating an HTML template using ES6+:

~~~js
const template = config => (
    `<section class='template'>
        <h3>${config.title}</h3>
        <ul><li>${config.text.join("</li><li>")}</li></ul>
    </section>`
);
~~~

**Related sample:**	[Diagram. Default mode. HTML template in ES6+ format](https://snippet.dhtmlx.com/z8ikyyek)

**Related sample:**	[Diagram editor. Default mode. Custom shape template in ES6+ format](https://snippet.dhtmlx.com/9gb3l7el)

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

**Related sample:** [Diagram. Default mode. HTML template in ES5 format](https://snippet.dhtmlx.com/p2m7nqbj)

**Related sample:** [Diagram editor. Default mode. Custom shape template in ES5 format](https://snippet.dhtmlx.com/9y51k3fl)

:::note
Note, that all HTML and SVG tags must be closed in the template.

For example, an `<img src="" alt="">` tag should look like `<img src="" alt=""></img>`
:::

**Change log**:
- The `eventHandlers` attribute is added in v3.1
- The method is added in v3.0

**Related articles**: [Custom Shape](../../../shapes/custom_shape/)
