Configuring Diagram
=====================

dhtmlxDiagram provides a wide range of options for configuration. You can zoom into and out from a diagram, change the type of shapes and their margins, create your own types of shapes,
apply selection, define the size of grid cells and set a toolbar with icons for the shapes.

[Check the list of possible config properties](common_guides/initialization.md#listofproperties).

Setting Type of Shape
----------------------

You can set the default type for all the shapes via the api/diagram_defaultshapetype_config.md attribute of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "rectangle"  		/*!*/
});
diagram.data.parse(data);
~~~

See the full lists of shapes types of the DHTMLX Diagram:

- [Diagram shapes](diagram_guides/shapes_arrows_list.md#shapestypes)
- [Org Chart shapes](orgchart_guides/orgchart_shapes_types.md#shapestypes)
- [Mind Map shapes](mindmap_guides/mindmap_shapes_connectors.md)

###Setting individual type for a shape

It is also possible to specify individual types for separate shapes via the related **type** attribute of the data item object.

~~~js
// data to load
var data = [
    // shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
 
    // connectors
    { "id": "1-2", "from": "1", "to": "2" },
    { "id": "2-3", "from": "2", "to": "3" }
]
 
// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

Besides, you can create your own type of a shape. For more information see the [Creating custom shapes](common_guides/configuration.md#creatingcustomshapes) article.

Setting the default configuration of a shape
-------------------------------------------------
There is a great possibility to escape operating with a big data set while preparing it for loading into the DHTMLX Diagram. You can specify the default configuration for all shapes with the necessary type and, therefore, reduce the amount of records in the data set.


For this purpose, use the api/diagram_defaults_config.md property of the diagram config object:

~~~js
var defaults = {
   // the default configuration for all shapes of the "rectangle" type
	rectangle: {
		fill: "#44B3FC",
		stroke: "#44B3FC"
	},
    // the default configuration for all shapes of the "circle" type
	circle: {
		fill: "#3DA0E3",
		stroke: "#3DA0E3"
	},
    // the default configuration for all shapes of the "endpoint" type
	endpoint: {
		fill: "#307DB0",
		stroke: "#307DB0"
	}
};

var diagram = new dhx.Diagram("diagram", {
	defaults: defaults /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/7bn52dl1	Diagram. Decision tree}}

The **defaults** object contains a number of *key:value* pairs where *key* is a type of a shape and *value* is the default config of the shape.

{{note The *type* and *id* attributes can not be defined in the default configuration of a shape.}}

See the full lists of configuration properties:

- [for a diagram shape](diagram_guides/shapes_arrows_list.md#shapeattrs)
- [for a group](diagram_guides/shapes_arrows_list.md#groupsconfiguration)
- [for a swimlane](diagram_guides/shapes_arrows_list.md#swimlaneconfiguration) and [its cells](diagram_guides/shapes_arrows_list.md#configurationofaswimlanecell)
- [for an org chart shape](orgchart_guides/orgchart_shapes_types.md#shapeattrs)
- [for a mind map shape](mindmap_guides/mindmap_shapes_connectors.md#configurationoftheshape)
 
Creating Custom Shapes
-----------------------------

The dhtmlxDiagram library provides you with a set of default types of shapes that you can use to build your diagram, org chart, or mind map.

But you can create custom shapes via the [addShape](api/diagram_addshape.md) method in order to change the look and feel of the diagram according to your needs.

<img style="margin: 20px auto 20px auto;display: block;" src="custom_network_shape.png">

{{editor	https://snippet.dhtmlx.com/u1xqyo9w	Diagram. Network diagram}}

Let's consider a simple example of adding a custom shape into your Diagram:

1) First, you need to initialize a diagram:

~~~js
// initialize Diagram
var diagram = new dhx.Diagram("diagram");
~~~ 

1) Then, using the **addShape** method you need to create a custom shape, i.e. specify the unique name for the type of this shape and define a template for your custom shape: 

~~~js
diagram.addShape("networkCard", {
    template: config => (
        `<section class='network_template'>
            <img src='${config.img}' alt='${config.text}'></img>
            <span>${config.text}</span>
            <span>${config.ip}</span>
        </section>`
    ),
	defaults: {
		width: 160,
		height: 160,
		img: "../network_image/desktop.svg",
		text: "Network Card",
		ip: "138.68.41.78"
    }
});
~~~

You can also define the default configuration for each shape with the custom type with the help of the **defaults** attribute. <br>In the code example above, we've defined the default *width, height, img, text and ip* values for all shapes of the *networkCard* type. 

{{note **Note**, that all HTML and SVG tags must be closed in the template. 

~~~js
For example, an <img src="" alt=""> tag should look like this: 
<img src="" alt=""></img>
~~~ 

}}

3) After that, set the new custom type for a shape via the **type** attribute of the configuration object of the shape while preparing a data set for loading into the diagram:

~~~js
var networkDiagram = [
    {
        "id": 1,
        "type": "networkCard", /*!*/
        "x": 0,
        "y": 0,
        "text": "Remote expert desktop",
        "ip": "192.168.32.2"
    },
    // more options
]
~~~

To override values of the *text and ip* attributes set in the default config, we've specified the same properties with the new values in the data set. 
Thus, the *"Network Card"* text value will be replaced with the *"Remote expert desktop"* one and the *"138.68.41.78"* ip value will be replaced with *"192.168.32.2"*. 

**Note**, that the *ip* property is custom. For more details, see the [Custom properties of a shape object](diagram_guides/shapes_arrows_list.md#customprop) article.

4) Finally, you need to load the prepared data set into the Diagram:

~~~js
diagram.data.parse(networkDiagram);
~~~

{{note The functionality is also available in the editor mode.}}

{{note You can find out more about the **addShape** method in the [related article](api/diagram_addshape.md).}}

Adding Event Handlers for the Custom Shape
----------------------------

Starting with v3.1, you can add custom event handlers to the custom shapes via the **eventHandlers** attribute of the [addShape()](api/diagram_addshape.md) method:

~~~js
const diagram = new dhx.Diagram("diagram", {
    type: "mindmap", // or type: "default", or type: "org"
    defaultShapeType: "flowView",
    typeConfig: {
        side: {
            right: ["suite"]
        }
    },
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
        onclick: { /*!*/
            info: function(event, item) { /*!*/
                openModalInfo(item.title, item.info); /*!*/
            } /*!*/
        } /*!*/
    }/*!*/
});

diagram.data.load("../dataset.json");
~~~

{{editor    https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes}}

The **eventHandlers** object includes a set of *key:value* pairs, where:

- *key* - the name of the event. Note, that at the beginning of the event name the **'on'** prefix is used (onclick, onmouseover).
- *value* - an object that contains a *key:value* pair, where *key* is the css class name that the handler will be applied to and *value* is a function that takes two parameters:
	- **event** - an event object
	- **shape** - the shape object

We recommend that you use different css classes for different custom shapes.

{{note The functionality is also available in the editor mode.}}

Setting Type of Connector
-------------------------

You can set a common type for all the connectors of the diagram via the api/diagram_defaultlinktype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType:"dash"        /*!*/
});
~~~

This value is applied, if the connector config doesn't contain the "type" property.

###Setting the type for a separate connector

Use the name of the necessary type as a value of the **type** attribute inside the connector object, while preparing a data set for loading into the [DHTMLX Diagram](common_guides/loading_data.md#preparingdatatoload):

~~~js
// data to load
var data = [
   // connectors
   { "id": "1-2", "from": "1", "to": "2", "type": "line", "forwardArrow": "filled" },
   { "id": "2-3", "from": "2", "to": "3", "type": "dash", "toSide": "bottom", 
   		"forwardArrow": "filled" },
   { "id": "2-4", "from": "2", "to": "4", "type": "dash", "toSide": "top", 
   		"forwardArrow": "filled" }
]

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

Positioning Diagram and Shapes
--------------------

You can specify the position of a diagram on a page and set margins for shapes inside the api/diagram_margin_config.md attribute of the diagram config object.

The margin object contains a set of properties: 

- **itemX** - horizontal space between two shapes
- **itemY** - vertical space between two shapes
- **x** - horizontal space between the start of a diagram and the first item
- **y** - vertical space between the start of a diagram and the first item

~~~js
// setting margins for an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org",
    margin:{
        x:20, 
        y:20,
        itemX:50,
        itemY:50
    }
})
~~~

{{editor	https://snippet.dhtmlx.com/bwe9vm6i	Diagram. Margin between shapes}}

Configuring Autoplacement
------------------------------

Starting from v3.0, the dhtmlxDiagram library lets you configure settings for automatically arranging connected shapes of Diagram in the hierarchical structure. You can specify the api/diagram_autoplacement_config.md property in the configuration object of Diagram and configure the mode of connecting shapes and distance between unconnected diagrams:

~~~js
var diagram = new dhx.Diagram("container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100
    }
});
~~~

The property can contain two options:

- **mode** - (*string*) optional, the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) optional, sets the distance between unconnected diagrams, "200" by default

{{note The autoplacement will be applied only after the [autoPlace()](api/diagram_autoplace.md) method is used. For more information on how to organize Diagram shapes and connectors in the symmetric order automatically, see the [related](common_guides/manipulating_shapes.md#arrangingshapesautomatically) article. The autoplacement does not work if you use groups or swimlanes.}}

You can find more details about using the **autoplacement** property in Diagram Editor in the [related](diagram_guides/editor_mode.md#configurationproperties) article.


Setting Toolbar for Shapes
--------------------------

dhtmlxDiagram allows you to specify a toolbar with icons for Diagram shapes to simplify interaction with shapes. You can enable the toolbar via the 
api/diagram_toolbar_config.md option of the diagram config object: 

~~~js
// setting toolbar for shapes of an org chart
var diagram = new dhx.Diagram("diagram_container", { type:"org", select:true,
    toolbar:[{
        id: "download",
        content:"<i class='dxi dxi-download'></i>"
    },
    {
        id: "info",
        content:"<i class='dxi dxi-information-outline'></i>"
    }]
});
~~~

The toolbar is set as an array of icons objects. Each icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

{{editor	https://snippet.dhtmlx.com/4if395hd	Diagram. Per-shape toolbar}}

Zooming Diagram
-------------

If necessary, you can scale a diagram to fit your application. It can be done with the help of the api/diagram_scale_config.md option.
By default, its value is set to 1. So, to zoom into a diagram, set the option to a value larger than 1 and to zoom out - smaller than 1, correspondingly.

For example:

~~~js
// zooming an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org", scale:0.7});
diagram.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/9h89c3gl	Diagram. Scaled Org chart}}

Selecting Shapes
-------------

It is possible to activate selection of shapes in a diagram. You need to make use of the api/diagram_select_config.md attribute of the diagram config object:

~~~js
// enabling selection in an org chart 
var diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
    select: true 		/*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection}}

You can also define the way of processing the behavior of the diagram during selecting/unselecting of shapes via the predefined set of events:

- api/selection/events/diagram_onbeforeselect_event.md
- api/selection/events/diagram_onafterselect_event.md
- api/selection/events/diagram_onafterunselect_event.md
- api/selection/events/diagram_onafterunselect_event.md





