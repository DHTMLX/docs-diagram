 Org Chart Shapes
======================

The Org Chart has specific types of shapes. You will find them together with the connectors types available for the Org Chart in this article. 
The article also covers such issues as creating a new type of shapes and adding the Diagram shapes into Org Chart.

Shapes Configuration
---------------

There are two types of shapes typical of the Org Chart:

- **"card"** - the default type for an org chart

<img src="type_card.png">

- **"img-card"** - for adding shapes with images. Don't forget to provide images for cards via the **img** attribute of the shape object.

<img src="type_image.png">

<h3 id="shapeattrs">Properties of a shape object</h3>

The shapes of Org Chart are configured automatically. You can set the following options for a shape of an org chart:

- **id** - (*string|number*) the unique id of a shape;
- **text** - (*string|string[]*) the text to be rendered in a shape. The property can be set as an array of string values while [preparing a data set for a **custom shape** only](common_guides/configuration.md#creatingcustomshapes);
- **editable** - (*boolean*) enables/disables the ability to edit the text of the shape by double-clicking on the shape; *true* by default;
- **parent** - (*string|number*) the id of the parent shape;
- **type** - (*string*) the type of the shape. [See the list of shapes types for Org Chart](orgchart_guides/orgchart_shapes_types.md);
- **img** - (*string*) the image of a shape;
- **dx** - (*number*) the left offset of the shape;
- **dy** - (*number*) the top offset of the shape;
- **title** - (*string*) the title of a shape;
- **height** - (*number*) the height of a shape;
- **width** - (*number*) the width of a shape;
- **fixed** - (*boolean*) enables/disables movement and resizing of a shape, *false* by default;
- **dir** - (*string*) the direction of shapes connecting. To connect shapes vertically, set the attribute to the "vertical" value. It allows [making nested lists in an Org Chart](#usingnestedlistsinorgchart);
- **open** - (*boolean*) defines, whether the child items of the current shape will be shown. *True* by default;
- **headerColor** - (*string*) the color of the header of the shape, any CSS legal color value;
- **css** - (*string*) the name of the CSS class that should be applied to the shape.

~~~js
var data = [
	// shapes
	{
		"id": "1",
		"text": "Chairman & CEO",
		"title": "Henry Bennett",
		"img": "../common/img/avatar-1.png",
	},
	{
		"id": "2",
		"text": "QA Lead",
		"title": "Emma Lynch",
		"img": "../common/img/avatar-2.png",
		"parent": "1",
		"dir": "vertical"
	},
	{
		"id": "2.1",
		"text": "QA",
		"title": "Charles Little",
		"img": "../common/img/avatar-4.png",
		"parent": "2"
	}
]
~~~

### Custom properties of a shape object

Starting from v3.0, it is also possible to set custom options as for a custom shape of an org chart as for a custom shape of an org chart editor. 

~~~js
var customShapeData = [
    {
        "id": "1",
        "type": "template",
        "title": "Milena Hunter",
        "post": "Attending physician", /*!*/
        "phone": "(124) 622-1256", /*!*/
        "email": "mhunter@gmail.com", /*!*/
        "img": "../avatar-25.jpg",

        "height": 115, "width": 330
    }
];
~~~

The "post", "phone" and "email" properties are custom. 

{{note Overriding of the internal properties of the org chart shape is forbidden as it causes the incorrect work of the org chart and its editor.}}

{{note The [editable](orgchart_guides/orgchart_shapes_types.md#shapeattrs) property of a shape is not available for a custom shape.}}

For details about interaction between custom properties and the Org Chart Editor, see the [Configuring Right Panel](orgchart_guides/editor_mode.md) article.

###Setting the default shape type

You can set a common type for all the shapes of the Org Chart via the api/diagram_defaultshapetype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    defaultShapeType: "img-card"        /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/qnx3ekin	Diagram. Org chart with images}}

This value is applied, if the shape config doesn't contain the "type" property.

{{note The type of child shapes will be the same as the type of the parent shapes.}}

###Setting type for a separate shape

Use the name of the necessary type as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the org chart](common_guides/loading_data.md#preparingdatatoload).
In the following example all the shapes have the default "card" type, except for the item with the id "1", which has the "img-card" type:

~~~js
// data to load
var data = [
	{
		"id": "1",
		"text": "Chairman & CEO",
		"title": "Henry Bennett",
        "type":"img-card", 						 /*!*/
		"img": "../common/img/avatar-1.png"  		 /*!*/  
	},
	{
		"id": "2",
		"text": "Manager",
		"title": "Mildred Kim",
	},
	{
		"id": "3",
		"text": "Technical Director",
		"title": "Jerry Wagner",
	}
    // more shape objects
]

// initializing an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.data.parse(data);
~~~

Using nested lists in Org Chart
-----------------

There is a possibility to add nested lists into Org Chart. To form a nested list, you need to define vertical direction of connecting shapes for the 
parent shape via the attribute **dir:"vertical"**. All the children of this parent will be connected vertically, including the nested ones:

<img style="display:block; margin-left:auto;margin-right:auto;" src="nested_lists.png">

Below you will find a fragment of the code that will help you to get the idea:

~~~js
var nestedLists = [
	{ "id": 1, "text": "item: 1" },
	{ "id": 2, "text": "item: 2", "parent": 1, "dir": "vertical" },
    { "id": 3, "text": "item: 3", "parent": 14 },
    { "id": 7, "text": "item: 7", "parent": 14 },
    { "id": 14, "text": "item: 14", "parent": 2},
    { "id": 19, "text": "item: 19", "parent": 2}
];

var diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.parse(nestedLists);
~~~

{{editor	https://snippet.dhtmlx.com/98tzmzpg	Diagram. With nested vertical lists}}

Creating custom shapes
-----------------------------
For information about creating a new type of shapes for Org Chart, read common_guides/configuration.md#creatingcustomshapes.

Connections between shapes
-----------

Read the details in the [Org Chart Connectors](orgchart_guides/orgchart_connectors.md) article.

Creating mixed Org Chart 
--------------------------

It is possible to create Org Chart mixed with Diagram or Mind Map shapes. In our example, we'll consider how to add shapes of Diagram into Org Chart:

<img style="display:block; margin-left:auto;margin-right:auto;" src="orgchart_mixed1.png">

To add the Diagram shapes to Org Chart you have to follow the rules described below:

- specify the **type:"org"** property in the diagram configuration object 
- specify types for shapes of Org Chart either by setting a common type for all the shapes of the Org Chart via the [defaultShapeType](api/diagram_defaultshapetype_config.md) property of the diagram config object or by setting a type for a separate shape of Org Chart
- specify types for shapes of Diagram via the related **type** attribute in the config of the shape

~~~js
// data to load
var data = [
    // the Diagram shape
	{
		"id": "1",
		"type": "rectangle", /*!*/
		"text": "Company",
	},

    // the Org Chart shape
	{
		"id": "2",
		"type": "card",
		"text": "Support Department",

		"parent": "1"
	},
	
    // more options
];

// initializing an org chart
var diagram = new dhx.Diagram("diagram", {
    type: "org", 
    defaultShapeType: "img-card" 
});
diagram.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/yd6l6grr	Diagram. Org chart. Mixed.}}

{{note Behavior of the Diagram shapes will be the same as behavior of the Org Chart shapes.}}

It is also possible to create mixed Diagram or mixed Mind Map. See the [Creating mixed Diagram](diagram_guides/shapes_arrows_list.md#creatingmixeddiagram) and [Mixed Shapes](mindmap_guides/mindmap_shapes_connectors.md#mixedshapes) articles.