Diagram Editor
================

```todo

The dhtmlxDiagram component provides a special Editor mode that allows you to try and apply your designer skills in building neat and nice-looking diagrams. 

In order to initialize a Diagram editor, you need to use the *DiagramEditor* instance. In all other aspects the initialization stage is the same as for the Diagram component: the constructor function takes as parameters either an HTML container or the document body and a configuration object.

~~~js
var editor = new dhx.DiagramEditor(document.body, {// editor config settings});
~~~

It is possible to load an [appropriate data set](common_guides/loading_data.md#preparingdatatoload) into the editor via the api/data/methods/parse.md method.

~~~js
editor.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/xshe9ut7	Diagram. Diagram Editor. Basic editor}}

Configuration properties
--------------------

You can use the following properties specific for the Diagram Editor in its configuration object:

- **type** - (*string*) the type of the edited diagram: "default" by default, "org" to initialize an [org chart editor](orgchart_guides/editor_mode.md),  "mindmap" to initialize a [mind map editor](mindmap_guides/editor_mode.md)
- **shapeType** - (*string*) the type of the shapes, "card" by default. This value is applied, if the shape config doesn't contain the "type" property
- **defaults** - (*object*) the default configuration of a shape. For more details about the property, see the api/diagram_defaults_config.md configuration option of Diagram
- **shapeToolbar** - (*boolean, array*) defines configuration of the toolbar with controls for editing shapes. See the details [below](#configuringtoolbarforshapes).
- [**shapeSections**](diagram_guides/editor_mode.md#leftpanelcustomization) - (*object*) creates sections for structuring shapes in the left panel
- **shapeBarWidth** - (*number|string*) sets the width of the left panel of the editor, 295px by default
- **scalePreview** - (*number*) defines the scale of shapes rendered in the left panel of the editor, 0.5 by default. The property can be redefined for each type of a shape via the [scale](diagram_guides/editor_mode.md#settingpreview) attribute of the preview property of default settings
- **scale** - (*number*) defines the diagram editor scale
- **gapPreview** - (*number|string*) specifies the space on all sides of a shape rendered in the left panel, *"6px 8px"* by default (sets 6px gap for the top and bottom sides and 8px gap for the right and left sides). The property can be redefined for each type of a shape via the [gap](diagram_guides/editor_mode.md#settingpreview) attribute of the preview property of default settings
- **api/diagram_autoplacement_config.md** - (*object*) sets configuration for autoplacement
- **api/diagram_gridstep_config.md** - (*number*) sets the size of a grid step that defines the step of moving a shape, 10 by default
- **editMode** - (*boolean*) switches the editor mode off and shows the preview mode, and vice versa
- **reservedWidth** - (*number*) defines the left offset for the diagram
- **lineGap** - (*number*) adds an offset for two connected shapes, and fills the gap with an additional line, 10 by default
- **controls** - (*object*) shows/hides specified controls in the editor. The object can contain a set of *control_name:value* pairs where value is *true* (by default) or *false*. Here are the list of available controls:
	- **apply** - (*boolean*) enables the **Apply All** button 
	- **reset** - (*boolean*) enables the **Reset Changes** button  
	- **export** - (*boolean*) enables the **Export Data** button 
	- **import** - (*boolean*) enables the **Import Data** button 
	- **autoLayout** - (*boolean*) enables the **Auto Layout** button 
	- **historyManager** - (*boolean*) enables the **Undo** and **Redo** buttons
	- **editManager** - (*boolean*) enables the **Edit Mode** button
	- **scale** - (*boolean*) enables the **Zoom** group of buttons
	- **gridStep** - (*boolean*) enables the **Grid Step** sidebar in the right panel of the editor

~~~js
var editor = new dhx.DiagramEditor(document.body, {
	controls: { 
		import: true,
		export: true,
		gridStep: false,
		autoLayout: false,
		apply: false,
		reset: false
	},
});
~~~

Interface
-----------

There are four functional parts in the interface of the Diagram editor. They are presented in the image below:

<img src="diagram_editor_new2.png">

- the **_toolbar with buttons_** for controlling the editing process<br><br>
<img src="toolbar_diagrameditor.png"><br><br>
The toolbar can contain the following buttons:
	- the **Reset Changes** button. This button is shown by default and can be hidden via the *reset* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ResetButton](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to reset all the applied changes to the previous state.
	- the **Apply All** button. This button is shown by default and can be hidden via the *apply* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
The button works in tandem with the [ApplyButton](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to apply changes made in the editor to the diagram;
	- the **Import Data** button. This button is shown by default and can be hidden via the *import* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ImportData](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to import the data from a JSON file to the diagram.
	- the **Export Data** button. This button is shown by default and can be hidden via the *export* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ExportData](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to export the data of the diagram to the JSON format.
	- the **Auto Layout** button. This button is shown by default and can be hidden via the *autoLayout* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property. This button works in tandem with the [AutoLayout](diagram_guides/editor_mode.md#editorapi) event and is useful if you want to arrange diagram shapes and connectors in the hierarchical structure automatically. It does not work if you use groups or swimlanes.
	- the **Undo** and **Redo** buttons for undoing and redoing changes. They can be hidden via the *historyManager* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
    - the **Edit Mode** button to hide and show the editor mode. The button can be hidden via the *editManager* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
    - the **Zoom** group of buttons to zoom a diagram in the editor in and out; can be hidden via the *scale* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
- the **_grid area_** for editing the diagram. It is an area intended for editing shapes and connections between them. It allows setting exact position for the shapes;
- the left panel with a full **list of shapes**; 
- the right panel with a **property sheet** that provides fields for modifying values of the shapes' attributes
	- the **Grid Step** sidebar provides a field for modifying the step of moving a shape. This sidebar is shown by default and can be hidden via the *gridStep* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.
	


Editing shapes
----------------

###Editing via interface elements

You can drag shapes from the left panel into the grid area to place them on the desired positions and connect them.
In the editing mode each selected shape gets resizing handles. You can pull the handles of an editable shape to change its sizes. It is also possible to rotate a shape by clicking a special icon next to it. 

When you click any shape, it becomes editable and gets a personal toolbar with editing options.

<img src="interface_elements.png">

The toolbar allows:

- creating a copy of the shape;
- activating the mode for setting connections to a different shape;
- deleting the selected shape.

There is also the ability to configure the toolbar according to your needs. Read the details [below](#configuringtoolbarforshapes).

###Editing via sidebar options

You can select a shape and use the sidebar to edit its attributes:

<table>
<tr><td><img src="sidebar_options.png"></td>
<td><ul>
	<li>modify the step of moving a shape;</li><br>
	<li>set the position of a shape via x and y coordinates;</li><br>
	<li>define the width and height of a shape and set the angle of rotation;</li><br>
	<li>modify the color of a shape via the related colorpicker;</li><br>
	<li>edit the text of a shape;</li><br> 
    <li>change the outline of a shape: set its color, type and width;</li><br>
    <li>adjust the text settings:<ul> 
    	<li>font size, weight, style and color;</li> 
        <li>line spacing;</li>
        <li>horizontal and vertical text alignment.</li></ul>
    </li>
</ul></td></tr>
</table>


The image above presents a sidebar for editing flow-chart shapes. The sidebar for editing org-chart shapes looks [a little different](orgchart_guides/editor_mode.md#modesofediting).

You can also create a sidebar with the necessary set of options for editing a custom shape; see details [here](diagram_guides/editor_mode.md#rightpanelcustomization).

Editing connectors
----------------------

###Editing via interface elements

When the connection mode is enabled for a shape, you can set links to other shapes, adjust their position and form, as well as delete unnecessary links.

<img src="connector.png">


###Editing via sidebar options

You can select the necessary connector and update its attributes via the sidebar:<br><br>

<table>
<tr><td><img src="connector_sidebar.png"></td>
<td><ul>
	<li>modify the color of a connector line;</li>
    <li>define the width and type of a connector line;</li>
    <li>choose the type of the connector's start and end points;</li>
    <li>select the type of a connector line;</li>
    <li>set the radius for rounded corners of a connector.</li>
</ul></td></tr>
</table>

Editing groups
-----------------

### Editing via interface elements

You can drag groups from the left panel into the grid area to place them on the desired positions.
In the editing mode each selected group gets resizing handles. You can pull the handles of an editable group to change its sizes. 

When you click any group, it becomes editable and gets a personal toolbar with editing options.

<img src="group_toolbar.png">

The default toolbar controls are: "copy", "remove".

To configure the toolbar, use the **shapeToolbar** configuration property of the Diagram editor in the similar way as it's shown [here](diagram_guides/editor_mode.md#configuringtoolbarforshapes). 

###Editing via sidebar options

You can select the necessary group and update its attributes via the sidebar options in the right panel of the editor.

Editing swimlanes
-----------------

### Editing via interface elements

You can drag swimlanes from the left panel into the grid area to place them on the desired positions.
In the editing mode each selected swimlane gets resizing handles. You can pull the handles of an editable swimlane to change its sizes. 

When you click any swimlane, it becomes editable and gets a personal toolbar with editing options.

<img src="swimlane_toolbar.png">

The default toolbar controls are: "addRowLast", "addColumnLast", "copy", "remove".
To configure the toolbar, use the **shapeToolbar** configuration property of the Diagram editor in the similar way as it's shown [here](diagram_guides/editor_mode.md#configuringtoolbarforshapes). 

Besides, there is the ability to add, move, or remove columns or rows of the swimlane via the options of the context menu. 

<img src="swimlane_contextmenu.png">

The context menu will appear after the user clicks on the icon of a subheader.

###Editing via sidebar options

You can select any swimlane and update its attributes via the sidebar options in the right panel of the editor.

Configuring Toolbar for Shapes
-----------------------

The default toolbar controls of the Diagram shapes are: 

<table>
<tr><td><img src="diagram_toolbar/default_diagram_toolbar.png"></td>
<td><ul>
	<li>"copy"</li>
	<li>"connect"</li>
    <li>"remove"</li>	
</ul></td></tr>
</table> 

You can configure or customize the per-shape toolbar according to your needs via using the **shapeToolbar** configuration property of the Diagram editor. 

{{note Try out the **shapeToolbar** option directly in our <a href="https://snippet.dhtmlx.com/b2agwets" target="_blank">Snippet Tool</a>. The example is shown for the org-chart editor, but you can change the `type: "org"` option to `type: "default"` to initialize a diagram editor. }}

The **shapeToolbar** property can be either a boolean value or an array. The array can contain:

- **string values** with the names of the toolbar controls: "copy" | "connect" | "remove";
- boolean ***true/false*** values - to enable/disable the default set of toolbar controls;
- **icon objects**. Each icon object can have the following properties:
  - **id** - (*string*) the id of the icon.
  - **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
  - **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
  - **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

### Disabling the default toolbar configuration

To disable the default configuration of the per-shape toolbar, toggle the **shapeToolbar** configuration option of the Diagram editor to *false*:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: false,
});
~~~

or pass an empty array to **shapeToolbar**:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: [],
});
~~~

### Changing the default toolbar configuration

There is the ability to change the default configuration of the per-shape toolbar.
For example, you can show only the desired controls via setting string values with the names of the necessary controls to the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: ["connect", "remove"]
});
~~~

As a result, the "connect" and "remove" controls will be shown in the per-shape toolbar, whereas the "copy" control will be hidden.

<img src="diagram_toolbar/configure_diagram_toolbar.png">

To change the structure of the toolbar, you need to enumerate the controls in the desired order inside the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: ["remove", "connect", "copy"]
});
~~~

The result will be the following:

<img src="diagram_toolbar/diagram_toolbar_controls.png">

### Toolbar customization

You can add a new control into the toolbar via setting an icon object to the **shapeToolbar** array. 

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: [{ id: "download", content:"<i class='dxi dxi-download'></i>" }] /*!*/
});
~~~

An icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

{{note Note, that the use of the default names of the toolbar controls as ids of new controls is prohibited. For example, you can't create a new control with *id: "connect"*.}}

Here is an example of how you can combine the desired default toolbar controls and the newly added one:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: [/*!*/
	  "copy", "connect", { id: "download", content:"<i class='dxi dxi-download'></i>" }/*!*/
	] /*!*/
});
~~~

The result:

<img src="diagram_toolbar/custom_toolbar_control.png">

But the most recommended option is to enable the default set of controls by defining *true* value in the **shapeToolbar** array and create your own control(s) by adding an icon object to the array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: [ /*!*/
		true, { id: "download", content:"<i class='dxi dxi-download'></i>" } /*!*/
	] /*!*/
});
~~~

where *true* value includes default set of controls: "copy","connect","remove".

The result:

<img src="diagram_toolbar/fullcustom_toolbar_control.png">

You can also change the order the controls will be displayed by changing the order of the values in the array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: [ /*!*/
		{ id: "download", content:"<i class='dxi dxi-download'></i>" }, true /*!*/
	]/*!*/
});
~~~

The result:

<img src="diagram_toolbar/fullcustom_toolbar_control1.png">

{{note The sequence the values are put in the array defines the order the controls will be displayed in the toolbar.}} 


Multiselection
--------------------------------

It is possible to select several shapes and connectors via hovering them over with the left mouse button pressed. You can also select necessary shapes using keyboard shortcuts - Shift+Left Click.

<img src="select_multiple_shapes.png">

You can operate all the selected shapes at once, namely:

- to drag the shapes;
- to create a copy of the shapes;
- to paste the shapes;
- to delete this shapes. 


Using hotkeys
---------------

There is a set of hotkeys you can use while creating a diagram in the editor:

- **Shift+Left Click** - to select several shapes, groups, swimlanes
- **Ctrl+A** or **Cmd+A** (for MAC) - to select all shapes and connectors, groups, swimlanes
- **Ctrl+C** - to copy a shape/shapes, group(s), swimlane(s)
- **Ctrl+V** - to paste a shape/shapes, group(s), swimlane(s)
- **Ctrl+Z** - to revert the latest action
- **Del** - to delete a shape/shapes, group(s), swimlane(s)
- **Arrows** - to move a shape/shapes, group(s), or swimlane(s) left/right/up/down


Right Panel Customization
----------------------------

Right panel of Diagram Editor possesses a set of defined sidebar options for each shape provided by dhtmlxDiagram.
These options can't be changed and completely depend on the type of the shape and on the configuration of the shape. 

The same way of rendering sidebar options is applied to a custom shape of the standard configuration. The set of options for editing attributes of the shape depends only on the data set of the shape.

But, in case you are creating more complex custom shape with some custom properties, you can define the sidebar options to be rendered in the right panel for editing the attributes of the custom shape. To do this, you need to make use of the **properties** attribute of the [addShape](api/diagram_addshape.md) method:

~~~js
editor.diagram.addShape("networkCard", {
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
		img: "../common/desktop.svg",
		text: "Remote expert desktop",
		ip: "192.168.32.2"
	},
	properties: [ /*!*/
    	{ type: "arrange"},/*!*/
		{ type: "img", label: "photo" },/*!*/
		{ type: "text" },/*!*/
		{ type: "text", label: "IP", property: "ip" }/*!*/
	]
});
~~~

{{editor	https://snippet.dhtmlx.com/u1xqyo9w	Diagram. Network diagram}}

The **properties** attribute contains a set of objects that defines which sidebar options will be rendered in the right panel of the editor for the shape. 

The order of the objects in the array defines the order the sidebar options will be displayed in the right panel.  

<img style="margin: 20px auto 20px auto;display: block;" src="right_panel.png">

You need to use the <b>type</b> attribute together with the <b>property</b> one to specify the sidebar option for editing a custom property. For example:

~~~js
{ type: "text", label: "IP", property: "ip" }
~~~

As a result, you can edit the custom <i>ip</i> attribute of the "networkCard" shapes via the text sidebar option with the *IP* label.

{{note For details about the types that you can use for editing a custom property, see the api/diagram_addshape.md#typesofsidebaroptions article.}}

Left Panel Customization
------------------------

###Creating Item Sections

<img style="margin: 20px auto 20px auto;display: block;" src="shape_sections.png">

By default, the left panel of the Diagram Editor includes all available shapes, groups, swimlanes provided by dhtmlxDiagram and organized into appropriate sections. Besides, all different custom shapes added via the api/diagram_addshape.md method  will appear in the left panel of the editor automatically.

To make working with the editor more convenient, you can structure shapes in the left panel by creating a set of sections and placing any desired shapes of dhtmlxDiagram or [custom shapes](common_guides/configuration.md#creatingcustomshapes) in these sections using the **shapeSections** property of the configuration object of Diagram Editor.

~~~js
var editor = new dhx.DiagramEditor(document.body, {
	shapeSections: {
		"custom shapes": ["networkCard", "medCard"],
		"sticky shapes": ["blue", "orange"],
		"org chart shapes": ["card", "img-card"],
		"flowchart shapes": [true],
		"text": ["text"],
        "mind map shape": ["topic"]
	},
});
~~~

{{editor	https://snippet.dhtmlx.com/2z0a18oz	Diagram. Diagram Editor. Left panel customization}}

The **shapeSections** object should contain a set of *key:value* pairs where *key* is the name of a section and *value* is an array with the types of the shapes to be rendered in the section.

{{note Setting boolean *true* as a value of the array will display all available [flow-chart shapes](diagram_guides/shapes_arrows_list.md#shapesconfiguration) in the section.}}

<h3 id="settingpreview">Setting shape preview</h3>

It is possible to customize the appearance of custom shapes rendered in the left panel of the editor via the **preview** property of the **defaults** attribute of the [addShape()](api/diagram_addshape.md) method. 

- **preview** - (*string|object*) specifies the settings to the shape displayed in the left panel. The object can contain a set of optional properties:

	- **img** - (*string*) a path to the image or a base64 image
	- **width** - (*number|string*) - the width of the image 
	- **height** - (*number|string*) - the height of the image
	- **gap** - (*number|string*) sets the **gapPreview** property for the specified type of a shape
	- **scale** - (*number*) sets the **scalePreview** property for the specified type of a shape. It can't be applied together with the **img** property.

Let's consider three possible options of using the **preview** property:

1\. You can specify an image to be shown in the left panel for a certain type of a shape. For this purpose, you need to pass either the URL to load an image from or a base64 image as a string value to the **preview** property:

~~~js
var defaults = {
	title: "Name and First name", 
    img: "../avatar-1.jpg", 
	height: 115, width: 330,
    preview: "../shape_preview.png", /*!*/
};

editor.diagram.addShape("template", {
	template: template,
	defaults: defaults /*!*/
});	
~~~

2\. You can also specify an image and set its width and height via passing an object as a parameter of the **preview** property:

~~~js
var defaults = {
	title: "Name and First name", email: "some@mail.com",
	img: "../avatar-1.jpg", height: 115, width: 330,
	preview: { /*!*/
		img: "../shape_preview.png", /*!*/
		height: 58, width: 165, /*!*/
		gap: 2 
	}
}

editor.diagram.addShape("template", {
	template: template,
	defaults: defaults /*!*/
});	
~~~

{{note You can set the precise width and height of the image, but there is no ability to set the scale of the image.}}

3\. You can redefine the scale of the specific type of the shape rendered in the left panel via the **scale** property:

~~~js
var defaults = {card: {
	preview: {
		scale: 0.72, /*!*/
        gap: 2
	}
}

var editor = new dhx.DiagramEditor(document.body, {
	shapeSections: {
		"org chart shapes": ["card", "img-card"],
		"flowchart shapes": [true]
    },
    scalePreview: 0.65,
	defaults: defaults	 /*!*/		
});
~~~

While the scale of the "card"-type shapes is 0.72, the scale of the other shapes in the left panel is 0.65.

{{note **Note**, that the **preview** property will be omitted while exporting data to the JSON format. }}


<h3 id="multiple_customized_items">Adding identical items with different settings</h3>

The library allows you to add several identical items (i.e. shapes of the same type, groups, or swimlanes) with different settings to the left panel of the editor. You can override the attributes of any shapes including custom ones or create unique configurations for the elements of the "$group" and "$swimlane" types and place them into the related sections.

<img style="margin: 20px auto 20px auto;display: block;" src="left_section_customize.png">

To do that, you need to create an object with a set of properties and their new values for a shape/item of the specific type. You can create as many objects as you need:

~~~js
const initial = {
	type: "data", text: "Initial data",
	fill: "#478D99", stroke: "#478D99", fontColor: "#FFF", 
	lineHeight: 16, 
}

const common = {
	type: "data", text: "Common data",
	fill: "#478D99", stroke: "#478D99", fontColor: "#FFF", 
	lineHeight: 16, 
}
~~~

and then add the names of the created objects to the list of the shapes/items you want to appear in the required section of the left panel:

~~~js
const editor = new dhx.DiagramEditor("editor", {
  	controls: { autoLayout: false },
  	shapeSections: {
    	"shape": [initial, common, true] /*!*/
  	},
  	shapeBarWidth: 320,
  	lineGap: 20,
  	scalePreview: 0.80
});
~~~

**Check more samples**:

{{editor	https://snippet.dhtmlx.com/0hf8ahrb	Diagram. Virtual private cloud architecture}}

{{editor	https://snippet.dhtmlx.com/1h4j9gb3	Diagram. Game levels and locations}}

Localization
----------------

It is possible to localize the interface of the Diagram editor into a desired language. For this, you need to provide the corresponding locale settings via the **dhx.i18n.setLocale()** method.
The method takes two parameters: the diagram container and an object that contains rules of localization for a particular country.

~~~js
//an example of English locale
var locale = {
	applyAll: "Apply all",
    exportData: "Export Data",
    importData: "Import Data",
    resetChanges: "Reset Changes",
    autoLayout: "Auto Layout",

	shapeSections: "Shapes",
	groupSections: "Groups",
	swimlaneSections: "Swimlanes",

	gridStep: "Grid step",
	arrange: "Arrange",
    position: "Position",
    size: "Size",
    color: "Color",
    title: "Title",
    text: "Text",
    image: "Image",
    fill: "Fill",
    textProps: "Text",
    stroke: "Stroke",

    headerText: "Header text",
	headerFill: "Header fill",
	headerStyle: "Header style",
	headerPosition: "Header position",
	headerEnable: "Header",
	subHeaderRowsEnable: "Subheader rows",
	subHeaderColsEnable: "Subheader cols",

	positionOptions: {
		top: "top",
		bottom: "bottom",
		left: "left",
		right: "right",
	},
	switchOptions: {
		on: "on",
		off: "off",
	},

	menuDeleteRow: "Delete row",
	menuDeleteCol: "Delete column",
	menuMoveColumnRight: "Move column right",
	menuMoveColumnLeft: "Move column left",
	menuMoveRowUp: "Move row up",
	menuMoveRowDown: "Move row down",
	menuAddRowUp: "Add row up",
	menuAddRowDown: "Add row down",
	menuAddColumnRight: "Add column right",
	menuAddColumnLeft: "Add column left",

    imageUpload: "Click to upload",
    emptyState: "Select a shape or a connector"		
};

dhx.i18n.setLocale("diagram", locale);
~~~

After that, you need to initialize the editor and check how the labels' names have changed.

~~~js
var editor = new dhx.DiagramEditor(document.body, {//config options});
~~~

{{editor	https://snippet.dhtmlx.com/sivvpbyg	Diagram. Diagram Editor. Localization}}

Editor API Methods
-----------------------

The Diagram Editor object possesses the following methods:

<ul id="parse">
<li>
	<b>parse(data)</b> - loads data into the editor from a local data source<br>
The method takes as a parameter the data that should be parsed into the editor.
</li></ul>
<ul>
~~~js
var data = [
	// shapes
	{
		"id": "a",
		"x": 50,
		"y": 53,
		"type": "triangle",
		"text": "Shape 1",
		"height": 50,
		"width": 50
	},
	{
		"id": "b",
		"x": 367,
		"y": 158,
		"type": "rectangle",
		"text": "Shape 2"
	},
    
    // connector
	{
		"id": "ab",
		"from":"a",
		"to":"b",
		"type": "line"
	},
]

var editor = new dhx.FreeEditor("editor_container"); 
editor.parse(data);
~~~ 
<br>

{{editor	https://snippet.dhtmlx.com/xshe9ut7	Diagram. Diagram Editor. Basic editor}}
<br><br>
You can load data in any supported data format. See the details in the api/data/methods/parse.md article.
<br><br>
</ul>

<ul id="serialize">
<li><b>serialize()</b> - serializes the data of the editor into an array of JSON objects</li>
</ul>
<ul>
~~~js
var data = editor.serialize();
~~~
<br>
The method returns an array of JSON objects for each shape and link from the editor data.<br><br>
</ul>

<ul id="import">
  <li><b>import(diagram)</b> - imports data from an existing diagram into the editor<br>
The method takes the diagram object as a parameter.<br>
</li></ul>
<ul>
~~~js
editor.import(diagram);
~~~
<br>
</ul>

<ul id="paint">
	<li><b>paint()</b> - repaints the editor</li></ul>
<ul>
~~~js
editor.paint();
~~~
</ul>

Editor API Events
-------------------

The Diagram Editor object possesses the following events:

<ul id="beforeshapeiconclick">
<li><b>BeforeShapeIconClick(iconId, shape)</b> - fires before clicking a control in the per-shape toolbar 
<ul>
          	<li><b><i>iconId</i></b> - (<i>string</i>) the type or id of the toolbar control</li>
          	<li><b><i>shape</i></b> - (<i>object</i>) an object with the shape configuration</li>
        </ul>
</li></ul>

<ul>
~~~js
editor.events.on("beforeShapeIconClick", function(iconId, shape) {
    console.log("You will click the", iconId, "toolbar control", shape);
    return true;
});
~~~
<br>
The event is blockable. Return <i>false</i> to prevent the toolbar control from being clicked.
<br><br>
added in v3.1.<br>
</ul>

<ul id="aftershapeiconclick">
<li><b>AfterShapeIconClick(iconId, shape)</b> - fires after clicking a control in the per-shape toolbar 
<ul>
          	<li><b><i>iconId</i></b> - (<i>string</i>) the type or id of the toolbar control</li>
          	<li><b><i>shape</i></b> - (<i>object</i>) an object with the shape configuration</li>
        </ul>
</li></ul>

<ul>
~~~js
editor.events.on("afterShapeIconClick", function(iconId, shape) {
    console.log("You've clicked the", iconId, "toolbar control", shape);
    return true;
});
~~~
<br>
added in v3.1
</ul>

<ul id="applybutton">
	<li><b>ApplyButton()</b> - fires after the <b>Apply All</b> button has been clicked 
	</li></ul>
<ul>
~~~js
editor.events.on("applyButton", function(){
	console.log("The changes are applied");
});
~~~
<br></ul>

<ul id="exportdata">
<li><b>ExportData()</b> - fires after the <b>Export Data</b> button has been clicked
</li></ul>
<ul>
~~~js
editor.events.on("exportData", function() {
    console.log("The data are exported to the JSON format");
});
~~~
<br></ul>

<ul id="importdata">
	<li>
		<b>ImportData(data)</b> - fires after the <b>Import Data</b> button has been clicked<br>
		The event takes the imported data as a parameter.
	</li>
</ul>
<ul>
~~~js
editor.events.on("importData", function(data) {
    console.log("The data are imported from the JSON file");
});
~~~
<br></ul>


<ul id="autolayout">
	<li>
		<b>AutoLayout()</b> - fires after the <b>Auto Layout</b> button has been clicked
	</li>
</ul>
<ul>
~~~js
editor.events.on("autoLayout", function() {
    console.log("The shapes are arranged automatically");
});
~~~
<br></ul>

<ul id="changegridstep">
	<li>
		<b>ChangeGridStep(step)</b> - fires after the value of the <a href="api/diagram_gridstep_config.md">grid step</a> has been changed
	<br>
	The event takes the current value of the grid step as a parameter.
	</li>
</ul>
<ul>
~~~js
editor.events.on("changeGridStep", function(step) {
    console.log("The grid step is changed to:", step);
});
~~~
<br></ul>


<ul id="resetbutton">
	<li><b>ResetButton()</b> - fires after the <b>Reset Changes</b> button has been clicked
	</li>
</ul> 
<ul>
~~~js
editor.events.on("resetButton",function(){
	console.log("The changes are reset");
});
~~~
<br></ul>

<ul id="shapemove">
	<li>
		<b><del>ShapeMove()</del></b> - fires after a shape has been moved<br>
		<p style="color:red;">The event is deprecated since v3.1.</p>  
	</li>
</ul>
<ul>
~~~js
editor.events.on("shapeMove",function() {
    console.log("The shape is moved");
});
~~~
<br>
Instead of it, you can use the <a href="#beforeshapemove">BeforeShapeMove</a> and <a href="#aftershapemove">AfterShapeMove</a> events.
</ul>

<ul id="beforeshapemove">
<li><b>beforeShapeMove(events, id, coordinates)</b> - fires before a shape is moved
	<ul>
    	<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
		<li><b><i>id</i></b> - (<i>string/number</i>) the id of a shape</li>
		<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the shape position before movement</li>
    </ul>
</li></ul>
<ul>
~~~js
editor.events.on("beforeShapeMove", (event, id, coordinates) => {
    console.log(`
		Shape ${id} is position:
			x: ${coordinates.x}
			y: ${coordinates.y}
	`);
    return true;
});
~~~
<br>
The event is blockable. Return <i>false</i> to prevent the shape from being moved.
<br><br>
added in v3.1
<br>
parameters <b>id</b> and <b>coordinates</b> are added in v4.0
</ul>

<ul id="aftershapemove">
	<li><b>afterShapeMove(events, id, coordinates)</b> - fires when a shape is moving
		<ul>
    		<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
			<li><b><i>id</i></b> - (<i>string/number</i>) the id of a shape</li>
			<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the shape position before movement</li>
    	</ul>
	</li>
</ul>
<ul>
~~~js
editor.events.on("afterShapeMove", (event, id, coordinates) => {
    console.log(`
		Shape ${id} is position:
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
});
~~~
<br>
added in v3.1
<br>
parameters <b>id</b> and <b>coordinates</b> are added in v4.0
</ul>

<ul id="shapemoveend">
	<li><b>shapeMoveEnd(events, id, coordinates)</b> - fires after a shape has been moved
		<ul>
    		<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
			<li><b><i>id</i></b> - (<i>string/number</i>) the id of a shape</li>
			<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the shape position after movement</li>
    	</ul>
	</li>
</ul>
<ul>
~~~js
editor.events.on("shapeMoveEnd", (event, id, coordinates) => {
	console.log(`
		Shape ${id} is position:
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
});
~~~
<br>
added in v4.0
</ul>

<ul id="beforegroupmove">
<li><b>beforeGroupMove(events, id, coordinates)</b> - fires before a group or swimlane is moved
	<ul>
    	<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
		<li><b><i>id</i></b> - (<i>string/number</i>) the id of a group</li>
		<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the group or swimlane position before movement</li>
    </ul>
</li></ul>
<ul>
~~~js
editor.events.on("beforeGroupMove", (event, id, coordinates) => {
    console.log(`
		Group ${id} is position:
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
    return true;
});
~~~
<br>
The event is blockable. Return <i>false</i> to prevent the group or swimlane from being moved.
<br><br>
added in v4.0
</ul>

<ul id="aftergroupmove">
	<li><b>afterGroupMove(events, id, coordinates)</b> - fires when a group or swimlane is moving
		<ul>
    		<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
			<li><b><i>id</i></b> - (<i>string/number</i>) the id of a shape</li>
			<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the group or swimlane position before movement</li>
    	</ul>
	</li>
</ul>
<ul>
~~~js
editor.events.on("afterGroupMove", (event, id, coordinates) => {
    console.log(`
		Group ${id} is position:
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
});
~~~
<br>
added in v4.0
</ul>

<ul id="groupmoveend">
	<li><b>groupMoveEnd(events, id, coordinates)</b> - fires after a group or swimlane is moved 
		<ul>
    		<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
			<li><b><i>id</i></b> - (<i>string/number</i>) the id of a shape</li>
			<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the group or swimlane position after movement</li>
    	</ul>
	</li>
</ul>
<ul>
~~~js
editor.events.on("groupMoveEnd", (event, id, coordinates) => {
    console.log(`
		Group ${id} is position: 
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
});
~~~
<br>
added in v4.0
</ul>

<ul id="beforeitemmove">
<li><b>beforeItemMove(events, id, coordinates)</b> - fires before an item is moved
	<ul>
    	<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
		<li><b><i>id</i></b> - (<i>string/number</i>) the id of an item</li>
		<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the item position before movement</li>
    </ul>
</li></ul>
<ul>
~~~js
editor.events.on("beforeItemMove", (event, id, coordinates) => {
    console.log(`
		Item ${id} is position: 
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
    return true;
});
~~~
<br>
The event is blockable. Return <i>false</i> to prevent the item from being moved.
<br>
The event doesn't work with the connector object.
<br><br>
added in v4.0
</ul>

<ul id="afteritemmove">
	<li><b>afterItemMove(events, id, coordinates)</b> - fires when an item is moving
		<ul>
    		<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
			<li><b><i>id</i></b> - (<i>string/number</i>) the id of an item</li>
			<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the item position before movement</li>
    	</ul>
	</li>
</ul>
<ul>
~~~js
editor.events.on("afterItemMove", (event, id, coordinates) => {
    console.log(`
		Item ${id} is position: 
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
});
~~~
<br>
The event doesn't work with the connector object.
<br>
added in v4.0
</ul>

<ul id="itemmoveend">
	<li><b>itemMoveEnd(events, id, coordinates)</b> - fires after an item is moved
		<ul>
    		<li><b><i>events</i></b> - (<i>Event</i>) a native event object</li>
			<li><b><i>id</i></b> - (<i>string/number</i>) the id of an item</li>
			<li><b><i>coordinates</i></b> - (<i>number</i>) the x and y coordinates of the item position after movement</li>
    	</ul>
	</li>
</ul>
<ul>
~~~js
editor.events.on("itemMoveEnd", (event, id, coordinates) => {
    console.log(`
		Item ${id} is position: 
			x: ${coordinates.x} 
			y: ${coordinates.y}
	`);
});
~~~
<br>
The event doesn't work with the connector object.
<br>
added in v4.0
</ul>

<ul id="shaperesize">
	<li>
		<b>ShapeResize()</b> - fires after a shape has been resized
	</li>
</ul>
<ul>
~~~js
editor.events.on("shapeResize", function() {
    console.log("The shape is resized");
});
~~~
<br></ul>

<ul id="visibility">
	<li>
		<b>Visibility()</b> - fires after the <b>Visibility</b> button has been clicked 
	</li>
</ul>
<ul>
~~~js
editor.events.on("visibility", function() {
    console.log("The side panels are hidden");
});
~~~
<br></ul>

<ul id="zoomin">
	<li>
		<b>ZoomIn()</b> - fires after the <b>Zoom In</b> button has been clicked
	</li>
</ul>
<ul>
~~~js
editor.events.on("zoomIn", function() {
    console.log("The diagram in the editor is zoomed in");
});
~~~
<br></ul>

<ul id="zoomout">
	<li>
		<b>ZoomOut()</b> - fires after the <b>Zoom Out</b> button has been clicked
	</li>
</ul>
<ul>
~~~js
editor.events.on("zoomOut", function() {
    console.log("The diagram in the editor is zoomed out");
});
~~~
<br></ul>

In addition to the events listed above, you may also apply [events of the diagram object](api/refs/diagram_events.md) while working in the editor view. Here is an example of applying the [itemClick](api/diagram_itemclick_event.md) event of Diagram in the editor:

~~~js
editor.diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
~~~

You can find the full list of the Diagram API events [here](api/refs/diagram_events.md).

Editor API Properties
----------------------

See the full list of available properties applied to the Diagram Editor object in the [Configuration properties](diagram_guides/editor_mode.md#configurationproperties) section.




```todo

