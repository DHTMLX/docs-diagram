Org Chart Editor
====================
```todo
You can modify the arrangement of the Org Chart shapes and their content in the special editor mode. To initialize an org chart in this mode, use a separate instance called *DiagramEditor*.

The constructor of the editor doesn't differ much from that of the diagram. The constructor function takes as parameters either an HTML container or the document body, and a configuration object. 
It is obligatory to set the **type:"org"** config option in this object to initialize Org Chart editor:

~~~js
var editor = new dhx.DiagramEditor(document.body, { type: "org" });
~~~

The editor is populated with data that has the same structure as [the data of an Org Chart](common_guides/loading_data.md#preparingdatatoload). 
Use the api/data/methods/parse.md method to load data into the editor:

~~~js
editor.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/og4qm3ja	Diagram. Org Chart Editor. Basic editor}}


Configuration properties
--------------------

You can use the following properties specific for the Org Chart Editor in its configuration object:

- **type** - (*string*) the type of the edited diagram, "org" to render an organization chart
- **defaults** - (*object*) the default configuration of a shape. For more details about the property, see the api/diagram_defaults_config.md configuration option of Diagram
- **scale** - (*number*) defines the org chart editor scale
- **shapeType** - (*string*) the type of the shapes, "card" by default. This value is applied, if the shape config doesn't contain the "type" property
- **shapeToolbar** - (*boolean, array*) defines configuration of the toolbar with controls for editing shapes. See the details [below](#configuringtoolbarforshapes).
- api/diagram_gridstep_config.md - (*number*) sets the size of a grid cell that defines the step of moving a shape, 10 by default
- **editMode** - (*boolean*) switches the editor mode off and shows the preview mode, and vice versa
- **controls** - (*object*) shows/hides specified controls in the editor. The object can contain a set of *control_name:value* pairs where value is *true* (by default) or *false*. Here are the list of available controls:
	- **apply** - (*boolean*) enables the **Apply All** button 
	- **reset** - (*boolean*) enables the **Reset Changes** button  
	- **export** - (*boolean*) enables the **Export Data** button 
	- **import** - (*boolean*) enables the **Import Data** button 
	- **historyManager** - (*boolean*) enables the **Undo** and **Redo** buttons
	- **editManager** - (*boolean*) enables the **Edit Mode** button
	- **scale** - (*boolean*) enables the **Zoom** group of buttons
	- **gridStep** - (*boolean*) enables the **Grid Step** sidebar in the right panel of the editor

~~~js
var editor = new dhx.DiagramEditor(document.body, {
	type: "org",
	controls: { 
		import: true,
		export: true,
		gridStep: false,
		apply: false,
		reset: false
	},
});
~~~

Interface
-------------

The interface of an org chart in the editor mode consists of three parts: 

<img src="orgchart_editor.png">

- the **_toolbar with buttons_** for controlling the editing process<br><br>
<img src="toolbar_diagram_editor.png"><br><br>
The toolbar can contain the following buttons:

	- the **Reset Changes** button. This button is shown by default and can be hidden via the *reset* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ResetButton](orgchart_guides/editor_mode.md#editorapi) event and is useful if you want to reset all the applied changes to the previous state. 
	- the **Apply All** button. This button is shown by default and can be hidden via the *apply* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
The button works in tandem with the [ApplyButton](orgchart_guides/editor_mode.md#editorapi) event and is useful if you
want to apply changes made in the editor to the diagram. 
	- the **Export Data** button. This button is shown by default and can be hidden via the *export* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ExportData](orgchart_guides/editor_mode.md#editorapi) event and is useful if you want to export the data of the org chart to the JSON format. 
	- the **Import Data** button. This button is shown by default and can be hidden via the *import* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property. The button works in tandem with the [ImportData](orgchart_guides/editor_mode.md#editorapi) event and is useful if you want to import the data from a JSON file to the org chart. 
	- the **Undo** and **Redo** buttons for undoing and redoing changes. They can be hidden via the *historyManager* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
    - the **Edit Mode** button to hide and show the editor mode; can be hidden via the *editManager* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
    - the **Zoom** group of buttons to zoom a diagram in the editor in and out; can be hidden via the *scale* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.
- the **_grid area_** for editing the diagram. It is an area intended for editing the org chart and its shapes. It allows setting exact position for the shapes;
- the **_sidebar_** with a property sheet that provides fields for modifying values of the shapes' attributes
	- the **Grid Step** sidebar option provides a field for modifying the step of moving a shape. This sidebar is shown by default and can be hidden via the *gridStep* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.

Modes of Editing
-------------

###Editing via the interface elements

You can drag shapes to place them on the desired positions relative to the root shape, or drag the root shape to move the whole diagram.
In the editing mode each selected shape gets resizing handles. You can pull the handles of an editable shape to change its sizes.

When you click any shape, it becomes editable and gets a personal toolbar with editing options.

<img src="editing_shape.png">

The toolbar allows:

- adding a new child for the selected shape
- deleting the selected shape (except for the root one)
- choosing the mode of arranging children of the selected shape (vertical or horizontal)

There is also the ability to configure the toolbar according to your needs. Read the details [below](#configuringtoolbarforshapes).

###Editing via the sidebar options

The sidebar of the editor allows adjusting the attributes of the shape:

<table>
<tr><td><img src="sidebar_settings.png"></td>
<td><ul>
	<li>modify the step of moving a shape;</li><br>
	<li>modify the color of a shape header via the related colorpicker;</li><br>
    <li>set the left and top offsets to define the position of a shape;</li><br>
    <li>set the width and height of a shape;</li><br>
	<li>edit the title (for the "img-card" type);</li><br>
	<li>edit the text of a shape;</li><br> 
    <li>load an image for the card and update it (for the "img-card" type).<br>An image is loaded from the computer and saved in the base64 format right into the data.
   </li><br>	
</ul></td></tr>
</table>

The image above presents a sidebar for editing org-chart shapes. The sidebar for editing flow-chart shapes looks [a little different](diagram_guides/editor_mode.md#editingshapes).

You can also create a sidebar with the necessary set of options for editing a custom shape; see details [here](orgchart_guides/editor_mode.md#rightpanelcustomization).

Configuring Toolbar for Shapes
-----------------------

The default toolbar controls of the Org Chart shapes are: 


<table>
<tr><td><img src="orgchart_toolbar/default_orgshape_toolbar.png"></td>
<td><ul>
	<li>"add"</li>
	<li>"horizontal"</li>
    <li>"vertical"</li>
    <li>"remove"</li>	
</ul></td></tr>
</table>

**Note**, that the set of default controls displayed in the shape toolbar depends on the internal settings of the shape. For example, the toolbar of the root shape does not contain the "remove" control. 

You can configure or customize the per-shape toolbar according to your needs via using the **shapeToolbar** configuration property of the Org Chart editor. 

{{note Try out the **shapeToolbar** option directly in our <a href="https://snippet.dhtmlx.com/b2agwets" target="_blank">Snippet Tool</a>. }}

The **shapeToolbar** property can be either a boolean value or an array. The array can contain:

- **string values** with the names of the toolbar controls: "add" | "horizontal" | "vertical" | "remove";
- boolean ***true/false*** values - to enable/disable the default set of toolbar controls;
- **icon objects**. Each icon object can have the following properties:
  - **id** - (*string*) the id of the icon.
  - **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
  - **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
  - **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

### Disabling the default toolbar configuration

To disable the default configuration of the per-shape toolbar, toggle the **shapeToolbar** configuration option of the Org Chart editor to *false*:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: false,
});
~~~

or pass an empty array to **shapeToolbar**:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: [],
});
~~~

### Changing the default toolbar configuration

There is the ability to change the default configuration of the per-shape toolbar.
For example, you can show only the desired controls via setting string values with the names of the necessary controls to the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: ["add", "remove"]
});
~~~

As a result, the "add" and "remove" controls will be shown in the per-shape toolbar, whereas the "horizontal" and "vertical" controls will be hidden.

<img src="orgchart_toolbar/configure_orgshape_toolbar.png">

To change the structure of the toolbar, you need to enumerate the controls in the desired order inside the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: ["horizontal", "vertical", "add", "remove"]
});
~~~

The result will be the following:

<img src="orgchart_toolbar/org_toolbar_controls.png">

### Toolbar customization

You can add a new control into the toolbar via setting an icon object to the **shapeToolbar** array. 

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: [{ id: "download", content:"<i class='dxi dxi-download'></i>" }] /*!*/
});
~~~

An icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

{{note Note, that the use of the default names of the toolbar controls as ids of new controls is prohibited. For example, you can't create a new control with *id: "add"*.}}

Here is an example of how you can combine the desired default toolbar controls and the newly added one:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: [/*!*/
	  "add", "remove", { id: "download", content:"<i class='dxi dxi-download'></i>" }/*!*/
	] /*!*/
});
~~~

The result:

<img src="orgchart_toolbar/custom_toolbar_control.png">

But the most recommended option is to enable the default set of controls by defining *true* value in the **shapeToolbar** array and create your own control(s) by adding an icon object to the array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: [ /*!*/
		true, { id: "download", content:"<i class='dxi dxi-download'></i>" } /*!*/
	] /*!*/
});
~~~

where *true* value includes default set of controls: "add", "horizontal", "vertical", "remove".

The result:

<img src="orgchart_toolbar/fullcustom_toolbar_control.png">

You can also change the order the controls will be displayed by changing the order of the values in the array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "org",
    shapeToolbar: [ /*!*/
		{ id: "download", content:"<i class='dxi dxi-download'></i>" }, true /*!*/
	]/*!*/
});
~~~

The result:

<img src="orgchart_toolbar/fullcustom_toolbar_control1.png">

{{note The sequence the values are put in the array defines the order the controls will be displayed in the toolbar.}}

Manipulating multiple shapes
--------------------------------

It is possible to select several shapes via hovering them over with the left mouse button pressed. You can also select necessary shapes using keyboard shortcuts - Shift+Left Click.

<img src="orgchart_multiple_shapes.png">

You can operate all the selected shapes at once, namely:

- to drag the shapes;
- to delete this shapes.


Using hotkeys
---------------

There is a set of hotkeys you can use while creating an org chart in the editor:

- **Shift+Left Click** - to select several shapes
- **Ctrl+A** or **Cmd+A** (for MAC) - to select all shapes and connectors
- **Ctrl+Z** - to revert the latest action
- **Del** - to delete a shape/shapes
- **Arrows** - to move a shape left/right/up/down


Right Panel Customization
----------------------------

Right panel of Org Chart Editor possesses a set of defined sidebar options for each shape provided by dhtmlxDiagram.
These options can't be changed and completely depend on the type of the shape and on the configuration of the shape. 

But, in case you are creating your custom shape in the editor, you can define the sidebar options to be rendered in the right panel for editing the attributes of the custom shape. To do this, you need to make use of the **properties** attribute of the [addShape](api/diagram_addshape.md) method:

~~~js
editor.diagram.addShape("template", {
	template: config => (
		`<section class="template">
			<div class="template_container template_img-container">
				<img src="${config.photo}"></img>
			</div>
			<div class="template_container">
				<h3>${config.name}</h3>
				<p>${config.post}</p>
				<span>
					<img class="template_icon" src="../phone.svg"></img>
					<p>${config.phone}</p>
				</span>
				<span>
					<img class="template_icon" src="../email.svg"></img>
					<a style="color:#0288D1">${config.mail}</a>
				</span>
			</div>
			<div class="toggle_container">
				<img class="template_icon" src="../toggle.svg"></img>
			</div>
		</section>`
	),
	defaults: {
		name: "Name and First name",
		post: "Position held",	
		phone: "(405) 000-00-00",
		mail: "some@mail.com",
		photo: "../common/big_img/big-avatar-1.jpg",
		height: 115, width: 330
	},
	properties: [ /*!*/
		{ type: "grid" },/*!*/
		{ type: "position" },/*!*/
		{ type: "size" },/*!*/
		{ type: "text", label: "name", property: "name" },/*!*/
		{ type: "text", label: "post", property: "post" },/*!*/
		{ type: "text", label: "phone", property: "phone" },/*!*/
		{ type: "text", label: "email", property: "mail" },/*!*/
		{ type: "img", label: "photo", property: "photo" }/*!*/
	]/*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/8fubjmlz	Diagram. Medical hierarchy}}

The **properties** attribute contains a set of objects that defines which sidebar options will be rendered in the right panel of the editor for the shape. 

The order of the objects in the array defines the order the sidebar options will be displayed in the right panel.  

<img style="margin: 20px auto 20px auto;display: block;" src="orgchart_custom_rightpanel.png">

You need to use the <b>type</b> attribute together with the <b>property</b> one to specify the sidebar option for editing a custom property. For example:

~~~js
{ type: "text", label: "Name", property: "name" }
~~~

As a result, you can edit the custom <i>name</i> attribute of the "template" shapes via the text sidebar option with the *Name* label.

{{note For details about the types that you can use for editing a custom property, see the api/diagram_addshape.md#typesofsidebaroptions article.}}

Localization
----------------

It is possible to localize the interface of the Org Chart editor into a desired language. For this, you need to provide the corresponding locale settings via the **dhx.i18n.setLocale** method.
The method takes two parameters: the diagram container and an object that contains rules of localization for a particular country.

~~~js
//an example of English locale
var locale = {
    applyAll: "Apply all",
    exportData: "Export Data",
    importData: "Import Data",
    resetChanges: "Reset Changes",
 
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
    gridStep: "Grid step",
 
    imageUpload: "Click to upload",
    emptyState: "Select a shape or a connector"     
};
 
dhx.i18n.setLocale("diagram", locale);
~~~

After that, you need to initialize the editor and check how the labels' names have changed.

~~~js
var editor = new dhx.DiagramEditor(document.body, { 
	type: "org" 
    // other config options
});
~~~

{{editor	https://snippet.dhtmlx.com/7qt2mfu2	Diagram. Org Chart Editor. Localization}}

Editor API Methods
-----------------------

The Org Chart Editor object possesses the following methods:

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
    	"id": "1",
    	"text": "Chairman & CEO",
    	"title": "Henry Bennett",
    	"img": "../common/img/avatar-1.png"
	},
	{
    	"id": "2",
    	"text": "Manager",
    	"title": "Mildred Kim",
    	"img": "../common/img/avatar-2.png"
	},
	{
    	"id": "3",
    	"text": "Technical Director",
    	"title": "Jerry Wagner",
    	"img": "../common/img/avatar-3.png"
	},

	// connectors
	{ "id": "1-2", "from": "1", "to": "2", "type": "line" },
	{ "id": "1-3", "from": "1", "to": "3", "type": "line" }
];

var editor = new dhx.DiagramEditor("editor_container", {type: "org"}); 
editor.parse(data);
~~~ 
<br>

{{editor	https://snippet.dhtmlx.com/og4qm3ja	Diagram. Org Chart Editor. Basic editor}}
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

{{editor	https://snippet.dhtmlx.com/bng7ego7	Diagram. Org Chart Editor. Live org chart edit}}
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
{{editor	https://snippet.dhtmlx.com/bng7ego7	Diagram. Org Chart Editor. Live org chart edit}}
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
-----------------

The Org Chart Editor object possesses the following events:

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
<br><br>
{{editor	https://snippet.dhtmlx.com/bng7ego7	Diagram. Org Chart Editor. Live org chart edit}}<br>
</ul>

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
--------------------

See the full list of available properties applied to the Org Chart Editor object in the [Configuration properties](orgchart_guides/editor_mode.md#configurationproperties) section.

   
```todo