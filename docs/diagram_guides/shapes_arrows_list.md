Diagram Shapes, Groups, Swimlanes 
=====================

In this article you will find the full lists of available Diagram shapes and connectors types. Besides, you will learn how to create a new type of shapes and add the Org Chart shapes into Diagram.

Shapes configuration
----------------

All possible shapes types that you can use to build your diagram are presented below:<br><br>

<img style="display:block; margin-left:auto;margin-right:auto;" src="shapes_types.png">

{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}

<br>

Use the name of the necessary shape as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

~~~js
var data = [
	// shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
    { "id": "4", "x": 20,  "y": 430, "text": "End 1", "type": "end", "height": 50 },
    { "id": "5", "x": 280, "y": 250, "text": "Extra Step", "type": "process" },
    { "id": "6", "x": 350, "y": 60,  "text": "End 2", "type": "end", "height": 50 }
];
~~~

{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}

Besides, you can create a new type of shapes for Diagram. For more information see the common_guides/configuration.md#creatingcustomshapes article.

<h3 id="shapeattrs"><b>Properties of a shape object</b></h3>

The Diagram shapes are not configured automatically. Their positioning and appearance totally depend on the applied configuration settings. Thus, a shape object can have the following attributes:

- **id** - (*string/number*) the unique id of a shape;
- **type** - (*string*) the type of the shape. See the full list of shapes types in the related sample:<br>
{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}
- **x** - (*number*) the x coordinate of the shape position;
- **y** - (*number*) the y coordinate of the shape position;
- **angle** - (*number*) the angle of shape rotation;
- **text** - (*string*) the text to be rendered in a shape. The property can be set as an array of string values while [preparing a data set for a **custom shape** only](common_guides/configuration.md#creatingcustomshapes);
- **editable** - (*boolean*) enables/disables the ability to edit the text of the shape by double-clicking on it; *true* by default;
- **height** - (*number*) the height of a shape, 90 by default;
- **width** - (*number*) the width of a shape, 140 by default;
- **fixed** - (*boolean*) enables/disables movement and resizing of a shape, *false* by default;
- **hidden** - (*boolean*) defines, whether a shape will be hidden;
- **css** - (*string*) the name of the CSS class that should be applied to the shape;
- **fill** - (*string*) the color of the shape, "#DEDEDE" by default;
- **stroke** - (*string*) the color of the shape outline, "#DEDEDE" by default;
- **strokeWidth** - (*number*) the width of the shape outline, 1 by default;
- **strokeType** - (*string*) the type of the stroke outline, "line" (default), "dash" for a dashed line;
- **strokeDash** - (*string*) the pattern of dashes and spaces for a dashed outline;
- **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
- **fontStyle** - (*string*) the style of the text font, can be "normal" (default), "italic" or "oblique";
- **fontWeight** - (*string*) the text font weight, possible values are: "normal" (default), "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font;
- **fontSize** - (*number*) - the size of the font in pixels, 14 by default;
- **textAlign** - (*string*) - the alignment of text in a shape:"left","center"(default),"right";
- **textVerticalAlign** - (*string*) - the vertical alignment of text in a shape:"top","center"(default),"bottom";
- **lineHeight** - (*number*) the height of a line, 14 by default.


~~~js
var data = [
    // shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
	{ "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
	{ "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
	{ "id": "4", "x": 20,  "y": 430, "text": "End 1", "type": "end", "height": 50 },
	{ "id": "5", "x": 280, "y": 250, "text": "Extra Step", "type": "process" },
	{ "id": "6", "x": 350, "y": 60,  "text": "End 2", "type": "end", "height": 50 }
];
~~~

<h3 id="customprop">Custom properties of a shape object</h3>

Starting from v3.0, it is also possible to set custom options as for a custom shape of a diagram as for a custom shape of a diagram editor. 

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

{{note Overriding of the internal properties of the diagram shape is forbidden as it causes the incorrect work of the diagram and its editor.}}

{{note The [editable](diagram_guides/shapes_arrows_list.md#shapeattrs) property of a shape is not available for a custom shape.}}

For details about interaction between custom properties and the Diagram Editor, see the [Configuring Right Panel](diagram_guides/editor_mode.md) article.

###Setting the default shape type

You can set a common type for all the shapes of a diagram via the api/diagram_defaultshapetype_config.md property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
    defaultShapeType: "rectangle" /*!*/
});
~~~

This value is applied, if the shape config doesn't contain the "type" property.

### Setting type for a separate shape

Use the name of the necessary type as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

~~~js
// data to load
var data = [
	// shapes
	{ "id": "1", "x": 100, "y": 40, "text": "Start", "type": "start", "height": 50 },
	{ "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
	{ "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
    // more shape objects
    
    // connectors
    { "id": "1-2", "from": "1", "to": "2" },
	{ "id": "2-3", "from": "2", "to": "3" },
    // more connector objects
];

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

Connections between shapes
----------------------

Read the details in the [Diagram Connectors](diagram_guides__diagram_connectors.html) article.

Creating Custom Shapes 
-----------------------------

For information about creating a new type of shapes for Diagram, read common_guides/configuration.md#creatingcustomshapes.

Creating mixed Diagram
------------------------
There is a possibility to combine Diagram, Org Chart and Mind Map shapes in a single Diagram. The following example shows how to add shapes of Org Chart into Diagram:

<img style="display:block; margin-left:auto;margin-right:auto;" src="diagram_mixed.png">


In this example, you just need to specify individual types of shapes typical either of Diagram or Org chart via the related **type** attribute of the data item object.

~~~js
// data to load
var data = [
    // set options specific to the Org Chart shapes
	{ "id": "1", "x": 0, "y": 100, "text": "Chairman & CEO", 
        "type": "img-card", "img": "../common/img/avatar-1.png", /*!*/
        "title": "Henry Bennett" }, 

    // set options specific to the Diagram shapes    
	{ id: 2, x: 35, y: 140, text: "Technical Director", type: "rectangle" },
	{ id: 3, x: 35, y: 300, text: "Team Lead", type: "template" },

	{ "id": "1-2", "from": "1", "to": "2" },
	{ "id": "2-3", "from": "2", "to": "3" },
];

// initializing a diagram
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/15acqc24	Diagram. Mixed}}

{{note Behavior of the Org Chart shapes will be the same as behavior of the Diagram shapes. }}

It is also possible to create mixed Org Chart or mixed Mind Map. See the [Creating mixed Org Chart](orgchart_guides/orgchart_shapes_types.md#creatingmixedorgchart) and [Mixed Shapes](mindmap_guides/mindmap_shapes_connectors.md#mixedshapes) articles.


Groups configuration
----------------

A group is a separate kind of the Diagram elements. You can put several shapes or other groups into a group and move them as a unit, copy, or delete.

<img style="display:block; margin-left:auto;margin-right:auto;" src="group.png">

To add a group, specify *"$group"* as a value of the **type** attribute inside the group object while preparing a dataset for loading into the diagram or diagram editor.

~~~js
const data = [
    // configuring a group
    {
        type: "$group", id: 1,
        width: 350, height: 200,
        x: 0, y: 0,
        header: {
            text: "Group",
            editable: true,
            closable: true,
        },
        // the first-level child items of the group 
        groupChildren: ["1", "2"],
    },
    // configuring shapes to be put into the group
    {
        type: "rectangle", id: 1, x: 20, y: 75, text: "Shape 1"
    },
    {
        type: "rectangle", id: 2, x: 180, y: 75, text: "Shape 2"
    }
];

// initializing a diagram
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);
~~~

When working in the [editor mode](diagram_guides/editor_mode.md), you can use a group(s) included to the left panel of the editor by default. You can also create any number of groups with different configurations, and [add them into the left panel of the editor](diagram_guides__editor_mode.html#multiple_customized_items) for further work. 

{{editor	https://snippet.dhtmlx.com/4gxy38ek	Diagram. Groups and shapes interaction}}

{{editor	https://snippet.dhtmlx.com/6hunrja8	Diagram. Group. Header position and text settings}}

{{editor	https://snippet.dhtmlx.com/0hf8ahrb	Diagram. Virtual private cloud architecture}}

<h3 id="group_properties"><b>Properties of a group object</b></h3>

The Diagram groups are not configured automatically. A group object contains a list of configuration properties which allow you to configure the positioning and appearance of the group:

- **type** - (*string*) the type of an element, set it to "$group";
- **id** - (*string, number*) the unique id of a group;
- **x** - (*number*) the x coordinate of the group position;
- **y** - (*number*) the y coordinate of the group position;
- **width** - (*number*) the width of the group, including its header (*position: left/right*);
- **height** - (*number*) the height of the group, including its header (*position: top/bottom*);
- **groupChildren** - (*array*) an array with ids of the first-level child items of the group;
- **open** - (*boolean*) - defines whether the group is initialized in the expanded (*true*, default) or collapsed(*false*) state; works when a **header** with the **closable** attribute is initialized;
- **fixed** - (*boolean*) enables/disables the ability to move and resize the group; *false* by default;
- **style** - (*object*) an object with the style settings of the group. The object can contain the following attributes:
  - **strokeWidth** - (*number*) the width of the group border, 1 by default;
  - **stroke** - (*string*) the color of the border of the group (in the HEX, RGBA, RGB, XSL formats), "#DEDEDE" by default;
  - **fill** - (*string*) the background color of the group;
  - **overFill** - (*string*) the background color of the group when the user is holding the item and moving it into/outside the group *providing that the whole item is inside the group*;
  - **partiallyFill** - (*string*) the background color of the group when the user is holding the item and moving it into/outside the group *providing that a part of the item is out of the group and other settings are not defined via the **exitArea** attribute*;
- **exitArea** - (*object*) an object with the settings which will be applied to the item when the user is dragging it out of the group (*is applied only to the first-level children of the group*). The object can contain the following attributes:
  - **groupBehavior** - (*string*) the behavior of the child item of the group when the user is moving it out of the group: 
      - *"unbound"* (by default) - the user can move an item into or outside the group;
      - *"boundNoBorderExtension"* - the user can move an item into the group but cannot drag the item outside the group if the item has been dropped inside the group. The item won't expand the borders of the group when trying to drag the item outside the group;
      - *"boundBorderExtension"* - the user can move an item into the group but cannot drag the item outside the group if the item has been dropped inside the group. The item will expand the borders of the group when trying to drag the item outside the group; <br>
    {{editor	https://snippet.dhtmlx.com/4gxy38ek	Diagram. Groups and shapes interaction}}
  - **padding** - (*number*) defines the padding between the group and the edge of the item when moving the item inside the group; <br> 
  The attribute is available if *groupBehavior: "boundNoBorderExtension" | "boundBorderExtension"*;
- **header** - (*object*) an object with configuration attributes of the header of the group. The attributes are:
  - **height** - (*number*) the height of the header, 40 by default;
  - **fill** - (*string*) the background color of the header;
  - **text** - (*string*) the text to be rendered in the header;
  - **fontSize** - (*number*) the size of the font in pixels, 14 by default;
  - **lineHeight** - (*number*) the height of a line, 14 by default;
  - **textAlign** - (*string*) the alignment of text in the header: "left", "center"(default), "right";
  - **textVerticalAlign** - (*string*) the vertical alignment of text in the header: "top", "center"(default), "bottom";
  - **fontStyle** - (*string*) the style of the text font: "normal" (default), "italic", "oblique";
  - **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
  - **fontWeight** - (*string*) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default;
  - **iconColor** - (*string*) the color of the icon of the header, "#808080" by default;
  - **position** - (*string*) the positioning of the group header: "top" (default) | "bottom" | "left" | "right";
  - **editable** - (*boolean*) enables/disables the ability to edit the text of the header by double-clicking on it; *true* by default;
  - **closable** - (*boolean*) shows/hides an icon intended to expand/collapse a group; *false* by default;
  - **enable** - (*boolean*) shows/hides the header of the group; *true* by default; <br>
{{editor	https://snippet.dhtmlx.com/6hunrja8	Diagram. Group. Header position and text settings}}
- **[key: string]: any**  - your own property with your own logic to be implemented under the hood.

Swimlane configuration
------------------------

A swimlane represents a rectangular element of Diagram that consists of cells (or lanes) arranged vertically or horizontally. Each cell (*type: "$sgroup"*) can include child items such as shapes, or groups. 

<img src="swimlane.png">

{{editor	https://snippet.dhtmlx.com/z6x5m3gb	Diagram. Swimlane template}}

{{editor	https://snippet.dhtmlx.com/1h4j9gb3	Diagram. Game levels and locations}}

{{editor	https://snippet.dhtmlx.com/k5vlvj8i	Diagram. Waterfall diagram template}}

To create a swimlane, you need to specify **type: "$swimlane"**  and define the structure of the swimlane layout inside the swimlane object while preparing a dataset to load into the diagram or diagram editor. 

~~~js
const data = [
    // configuring a swimlane
    {
	    type: "$swimlane",
	    height: 500,
  	    width: 850,
        // the layout of a swimlane should contain at least one cell
	    layout: [ 
	        [1] // the cell with id:"1" and type:"$sgroup"
	    ],
    }
];

// initializing a diagram
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);
~~~

The code example above presents the simplest configuration of a swimlane with default settings (i.e. without a header and subheader).
But you can create different swimlanes with different settings depending on your needs. 

When working in the [editor mode](diagram_guides/editor_mode.md), you can use a swimlane(s) included to the left panel of the editor by default. You can also create any number of swimlanes with different configurations, and [add them into the left panel of the editor](diagram_guides__editor_mode.html#multiple_customized_items) for further work.

<h3 id="swimlane_properties"><b>Properties of a swimlane object</b></h3>

A swimlane object can include the following configuration properties:

- **type** - (*string*) required, the type of an element, set it to "$swimlane";
- **id** - (*string, number*) the unique id of a swimlane;
- **width** - (*number*) required, the width of the swimlane, including its header (*position: left/right*);
- **height** - (*number*) required, the height of the swimlane, including its header (*position: top/bottom*);
- **x** - (*number*) the x coordinate of the swimlane position;
- **y** - (*number*) the y coordinate of the swimlane position;
- **layout** - (*array*) required, an array with matrix representation of the cells of the swimlane;
- **fixed** - (*boolean*) enables/disables the ability to move and resize the swimlane; *false* by default;
- **open** - (*boolean*) defines whether the swimlane is initialized in the expanded (*true*, default) or collapsed(*false*) state; works when a **header** with the **closable** attribute is initialized;
- **style** - (*object*) an object with the style settings of the swimlane. The object can contain the following attributes:
  - **strokeWidth** - (*number*) the width of the swimlane border, 1 by default;
  - **stroke** - (*string*) the color of the border of the swimlane (in the HEX, RGBA, RGB, XSL formats), "#DEDEDE" by default;
  - **fill** - (*string*) the background color for all cells of the swimlane;
- **header** - (*object*) an object with configuration attributes of the header of the swimlane. The attributes are:
  - **height** - (*number*) the height of the header, 40 by default;
  - **fill** - (*string*) the background color of the header;
  - **text** - (*string*) the text to be rendered in the header;
  - **fontSize** - (*number*) the size of the font in pixels, 14 by default;
  - **lineHeight** - (*number*) the height of a line, 14 by default;
  - **textAlign** - (*string*) the alignment of text in the header: "left", "center"(default), "right";
  - **textVerticalAlign** - (*string*) the vertical alignment of text in the header: "top", "center"(default), "bottom";
  - **fontStyle** - (*string*) the style of the text font: "normal" (default), "italic", "oblique";
  - **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
  - **fontWeight** - (*string*) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default;
  - **iconColor** - (*string*) the color of the icon of the header, "#808080" by default;
  - **position** - (*string*) the positioning of the group header: "top" (default) | "bottom" | "left" | "right";
  - **editable** - (*boolean*) enables/disables the ability to edit the text of the header by double-clicking on it; *true* by default;
  - **closable** - (*boolean*) shows/hides an icon intended to expand/collapse a swimlane; *false* by default;
  - **enable** - (*boolean*) shows/hides the header of the group; *true* by default;
- **subHeaderRows** - (*object*) an object with configuration settings of the left/right subheaders of the swimlane. The object have the following attributes:
  - **height** - (*number, string*) the height of the subheaders, 40 by default;
  - **position** - (*string*) the positioning of the subheaders: "left" | "right";
  - **enable** - (*boolean*) shows/hides the subheaders of the group; *true* by default;
  - **fill** - (*string*) the background color of the subheaders;
  - **fontSize** - (*number*) the size of the font in pixels, 14 by default;
  - **lineHeight** - (*number*) the height of a line, 14 by default;
  - **textAlign** - (*string*) the alignment of text in the subheaders: "left", "center"(default), "right";
  - **textVerticalAlign** - (*string*) the vertical alignment of text in the subheaders: "top", "center"(default), "bottom";
  - **fontStyle** - (*string*) the style of the text font: "normal" (default), "italic", "oblique";
  - **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
  - **fontWeight** - (*string*) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default;
  - **iconColor** - (*string*) the color of the icon of the subheaders, "#808080" by default;
  - **editable** - (*boolean*) enables/disables the ability to edit the text of the subheaders by double-clicking; *true* by default;
  - **headers** - (*array*) an array of subheaders objects. Each object may contain the following properties:
      - **id** - (*string*) the id of the subheader;
      - **text** - (*string*) mandatory, the text to be rendered in the subheader;
      - **fill** - (*string*) the background color of the subheader;
      - **fontSize** - (*number*) the size of the font in pixels, 14 by default;
      - **lineHeight** - (*number*) the height of a line, 14 by default;
      - **textAlign** - (*string*) the alignment of text in the subheader: "left", "center"(default), "right";
      - **textVerticalAlign** - (*string*) the vertical alignment of text in the subheader: "top", "center"(default), "bottom";
      - **fontStyle** - (*string*) the style of the text font: "normal" (default), "italic", "oblique";
      - **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
      - **fontWeight** - (*string*) the text font weight, possible values are: "normal", "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font; "500" by default;
      - **iconColor** - (*string*) the color of the icon of the subheader, "#808080" by default;
      - **editable** - (*boolean*) enables/disables the ability to edit the text of the subheader by double-clicking on it; *true* by default;
- **subHeaderCols** - (*object*) an object with configuration settings of the top/bottom subheaders of the swimlane. The object have the following attribute:
  - **position** - (*string*) the positioning of the subheaders: "top" | "bottom";
  - the other attributes of **subHeaderCols** are the same as the attributes of **subHeaderRows** (check the details above);
- **[key: string]: any**  - your own property with your own logic to be implemented under the hood.

{{note Check the related sample: [Diagram. Configuring columns and rows in swimlanes](https://snippet.dhtmlx.com/uzx5ulal).}}

The configuration properties of a swimlane cell are given [below](diagram_guides/shapes_arrows_list.md#swimlane_cell_configuration).

<h3 id="swimlane_cell_configuration"><b>Configuring a swimlane cell</b></h3>

When you initialize the swimlane on the page, the id of a swimlane cell is generated automatically as well as its configuration. To change the default configuration of the cell, create an object of the cell which must include the **type: "$sgroup"** and **id** attributes, and specify the necessary configuration settings there:

~~~js
const data = [
    // configuring a swimlane
    {
	    type: "$swimlane",
        id: "main"
	    height: 500,
  	    width: 850,
	    layout: [ 
	        [1, 2, 3]
	    ],
    },
    // configuring a swimlane cell
    {
	    type: "$sgroup",
	    id: 3,
        style: {
            fill: "grey"
        }
    }
];
~~~

### Properties of a swimlane cell

- **type** - (*string*) the type of a swimlane cell, set it to "$sgroup";
- **id** - (*string, number*) the unique id of a swimlane cell;
- **groupChildren** - (*array*) an array with ids of the first-level child items of a cell;
- **style** - (*object*) an object with the style settings of the cell. The object can contain the following properties:
  - **fill** - (*string*) the background color of the cell;
  - **overFill** - (*string*) the background color of the cell when the user is holding the item and moving it into/outside the cell *providing that no less than 75% of the item's area is inside the cell*;
  - **partiallyFill** - (*string*) the background color of the cell when the user is holding the item and moving it into/outside the cell *providing that 75% of the item's area or more is out of the cell and other settings are not defined via the **exitArea** attribute*;
- **exitArea** - (*object*) an object with the settings which will be applied to the item when the user is dragging it out of the cell (*is applied only to the first-level children of the cell*). The object can contain the following attributes:
  - **groupBehavior** - (*string*) the behavior of the child item of the cell when the user is moving it out of the cell: 
      - *"unbound"* (by default) - the user can move an item into or outside the cell;
      - *"boundNoBorderExtension"* - the user can move an item into the cell but cannot drag the item outside the cell if the item has been dropped inside the cell. The item won't expand the borders of the cell when trying to drag the item outside the cell;
  - **padding** - (*number*) defines the padding between the cell and the edge of the item when moving the item inside the cell. <br> The attribute is available if *groupBehavior: "boundNoBorderExtension"*.

  {{note You can manipulate the Swimlane cells via the API of the [cellManager](api/cellmanager/cellmanager.md) object.}}

<h3 id="swimlane_structure"><b>Swimlane structure</b></h3> 

The structure of a swimlane can be rather different. It is defined via the **layout** configuration property of the swimlane object. The property allows you to arrange the cells of a swimlane into rows and columns.

All you need to do is specify an array with a matrix as a value of the property. The matrix can be either an array:  

~~~js
// a swimlane with 3 columns
layout: [
    [1, 2, 3]
],
~~~

or a set of arrays separated by commas:

~~~js
// a swimlane with 2 rows and 3 columns
layout: [
    [1, 2, 3],
    [4, 5, 6] 
],
~~~

where:

- each cell in the layout have a unique number;
- the number of arrays defines the number of rows (if there are several arrays, the number of cells must be equal in all the arrays);
- the number of cells in the array defines the number of columns.

When you specify a unique number for each cell, all the cells will be rendered with the borders:

<img src="swimlane_cells.png">

If needed you can group a range of cells and remove a border(s) between them. To do this, choose any cell from the range and replace unique numbers of the cell(s) from the range with the number of this cell.<br>
Here is an example of grouping first two cells placed in the first row:

~~~js
layout: [
    [1, 1, 3],
    [4, 5, 6] 
],
~~~

The result will look like this:

<img src="swimlane_merge_cell_row.png">

Here is an example of grouping the cells placed in the second column:

~~~js
layout: [
    [1, 2, 3],
    [4, 2, 6]
],
~~~

The result:

<img src="swimlane_merge_cell_col.png">

{{editor	https://snippet.dhtmlx.com/uzx5ulal	Diagram. Configuring columns and rows in swimlanes}}

<h3 id="swimlane_size"><b>Size of a swimlane and its cells</b></h3>

The size of the swimlane is defined by the **width** and **height** configuration attributes of the swimlane.

The width of a cell depends on the width of the swimlane, the number of cells in the row, and the height of the left/right swimlane header and subheader.

The height of a cell depends on the height of the swimlane, the number of cells in the column, and the height of the top/bottom swimlane header and subheader.
 