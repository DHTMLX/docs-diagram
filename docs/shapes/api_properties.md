Shapes Configuration
=====================

Properties of a shape object (default mode)
-------------------------------------------------------

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






Properties of a shape object (org chart mode)
-------------------------------------------------------

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
- **dir** - (*string*) the direction of shapes connecting. To connect shapes vertically, set the attribute to the "vertical" value<br> {{editor	https://snippet.dhtmlx.com/98tzmzpg	Diagram. With nested vertical lists}}
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


Properties of a shape object (mindmap mode)
-------------------------------------------------------

The shapes of Mind Map are configured automatically. You can set the following attributes for a shape of a mind map:

- **id** - (*string|number*) the unique id of a shape;
- **text** - (*string|string[]*) the text to be rendered in a shape. The property can be set as an array of string values while [preparing a data set for a **custom shape** only](common_guides/configuration.md#creatingcustomshapes);
- **editable** - (*boolean*) enables/disables the ability to edit the text of the shape by double-clicking on the shape; *true* by default;
- **parent** - (*string|number*) the id of the parent shape;
- **type** - (*string*) the type of the shape ("topic", by default)
- **dx** - (*number*) the left offset of the shape;
- **dy** - (*number*) the top offset of the shape;
- **height** - (*number*) the height of a shape;
- **width** - (*number*) the width of a shape;
- **fixed** - (*boolean*) enables/disables movement and resizing of a shape, *false* by default;
- **open** - (*boolean*) defines, whether the child items of the current shape will be shown. *True* by default;
- **openDir** - (*object*) shows/hides the child items of the parent shape. The object takes two attributes:
    - **left** - (*boolean*) -  shows/hides the child items to the left of the parent shape
    - **right** - (*boolean*) - shows/hides the child items to the right of the parent shape

~~~js
var data = [
    {
        "id": "main", "text": "main",
        "openDir": {
            left: true,
            right: false,
        }
    },
    { "id": "2", "text": "2", "parent": "main" },
    { "id": "3", "text": "3", "parent": "main" }
];
~~~

- **hidden** - (*boolean*) defines, whether a shape will be hidden;
- **css** - (*string*) the name of the CSS class that should be applied to the shape;
- **fill** - (*string*) the color of the shape;
- **stroke** - (*string*) the color of the shape outline;
- **strokeWidth** - (*number*) the width of the shape outline, 1 by default;
- **strokeType** - (*string*) the type of the stroke outline, "line" (default), "dash" for a dashed line;
- **fontColor** - (*string*) the color of the text font, "#4C4C4C" by default;
- **fontStyle** - (*string*) the style of the text font, can be "normal" (default), "italic" or "oblique";
- **fontWeight** - (*string*) the text font weight, possible values are: "normal" (default), "bold", "bolder", "lighter", values "100"-"900", where "400" is the same as normal, and "600"+ is the boldest font;
- **fontSize** - (*number*) - the size of the font in pixels, 14 by default;
- **textAlign** - (*string*) - the alignment of text in a shape:"left","center"(default),"right";
- **textVerticalAlign** - (*string*) - the vertical alignment of text in a shape:"top","center"(default),"bottom";
- **lineHeight** - (*number*) the height of a line, 14 by default.

~~~js
const data = [
	// shapes
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" },
    { id: "2.1", text: "Marketer", parent: "2" },
    { id: "2.2", text: "Team Lead ", parent: "2" },
];

var diagram = new dhx.Diagram("diagram", {
	type: "mindmap",
});
diagram.data.parse(data);
~~~