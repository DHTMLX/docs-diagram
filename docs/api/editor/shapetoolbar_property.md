---
sidebar_label: shapeToolbar
title: shapeToolbar
description: text
---

# shapeToolbar

@short: defines configuration of the toolbar with controls for editing items

@signature: {``}

@type: boolean, array

@example:
const editor = new dhx.DiagramEditor(document.body, {
    type: "default",
    shapeToolbar: ["connect", "remove"]
});

@descr:

```todo
Добавить информацию из п. https://docs.dhtmlx.com/diagram/diagram_guides__editor_mode.html#configuringtoolbarforshapes
```
```todo
Configuring Toolbar for Shapes
-----------------------

The default toolbar controls of the Diagram shapes are: 

<table>
<tr><td><img src="diagram_toolbar/default_diagram_toolbar.png"/></td>
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

<img src="diagram_toolbar/configure_diagram_toolbar.png"/>

To change the structure of the toolbar, you need to enumerate the controls in the desired order inside the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "default",
    shapeToolbar: ["remove", "connect", "copy"]
});
~~~

The result will be the following:

<img src="diagram_toolbar/diagram_toolbar_controls.png"/>

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

<img src="diagram_toolbar/fullcustom_toolbar_control.png"/>

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

<img src="diagram_toolbar/fullcustom_toolbar_control1.png"/>

{{note The sequence the values are put in the array defines the order the controls will be displayed in the toolbar.}} 


**Org chart mode**

Configuring Toolbar for Shapes (org chart mode)
-----------------------

The default toolbar controls of the Org Chart shapes are: 


<table>
<tr><td><img src="orgchart_toolbar/default_orgshape_toolbar.png"/></td>
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

<img src="orgchart_toolbar/configure_orgshape_toolbar.png"/>

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

<img src="orgchart_toolbar/custom_toolbar_control.png"/>

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

<img src="orgchart_toolbar/fullcustom_toolbar_control.png"/>

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

<img src="orgchart_toolbar/fullcustom_toolbar_control1.png"/>

{{note The sequence the values are put in the array defines the order the controls will be displayed in the toolbar.}}

Configuring Toolbar for Shapes (mindmap mode)
-----------------------

The default toolbar controls of the Mind Map shapes are: 

<table>
<tr><td><img src="mindmap_toolbar/default_mindmap_toolbar.png"/></td>
<td><ul>
	<li>"add"</li>
	<li>"addLeft"</li>
    <li>"addRight"</li>	
    <li>"remove"</li>	
</ul></td></tr>
</table> 

**Note**, that the set of default controls displayed in the shape toolbar depends on the internal settings of the shape. For example, the toolbar of the root shape does not contain the "add" and "remove" controls but includes the "addLeft" and "addRight" ones.

<img src="mindmap_toolbar/default_mindmap_toolbar1.png"/>

You can configure or customize the per-shape toolbar according to your needs via using the **shapeToolbar** configuration property of the Mind Map editor. 

{{note Try out the **shapeToolbar** option directly in our <a href="https://snippet.dhtmlx.com/b2agwets" target="_blank">Snippet Tool</a>. The example is shown for the org-chart editor, but you can change the `type: "org"` option to `type: "mindmap"` to initialize a mindmap editor. }}

The **shapeToolbar** property can be either a boolean value or an array. The array can contain:

- **string values** with the names of the toolbar controls: "add" | "addLeft" | "addRight" | "remove";
- boolean ***true/false*** values - to enable/disable the default set of toolbar controls;
- **icon objects**. Each icon object can have the following properties:
  - **id** - (*string*) the id of the icon.
  - **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
  - **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
  - **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

### Disabling the default toolbar configuration

To disable the default configuration of the per-shape toolbar, toggle the **shapeToolbar** configuration option of the Mind Map editor to *false*:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: false,
});
~~~

or pass an empty array to **shapeToolbar**:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: [],
});
~~~

### Changing the default toolbar configuration 

There is the ability to change the default configuration of the per-shape toolbar.
For example, you can show only the desired controls via setting string values with the names of the necessary controls to the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: ["remove"]
});
~~~

As a result, the "remove" control will be shown in the per-shape toolbar, whereas the others controls will be hidden.

<img src="mindmap_toolbar/configure_mindmap_toolbar.png"/>

To change the structure of the toolbar, you need to enumerate the controls in the desired order inside the **shapeToolbar** array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: ["remove", "add"]
});
~~~

The result will be the following:

<img src="mindmap_toolbar/mindmap_toolbar_controls.png">

### Toolbar customization

You can add a new control into the toolbar via setting an icon object to the **shapeToolbar** array. 

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: [{ id: "download", content:"<i class='dxi dxi-download'></i>" }] /*!*/
});
~~~

An icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class. 
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

{{note Beware, the use of the default names of the toolbar controls as ids of new controls is prohibited. For example, you can't create a new control with *id: "add"*.}}

Here is an example of how you can combine the desired default toolbar controls and the newly added one:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: [/*!*/
	  "add", { id: "download", content:"<i class='dxi dxi-download'></i>" }/*!*/
	] /*!*/
});
~~~

The result:

<img src="mindmap_toolbar/custom_toolbar_control.png">

But the most recommended option is to enable the default set of controls by defining *true* value in the **shapeToolbar** array and create your own control(s) by adding an icon object(s) to the array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: [ /*!*/
		true, { id: "download", content:"<i class='dxi dxi-download'></i>" } /*!*/
	] /*!*/
});
~~~

where *true* value includes the default set of controls: "add", "addLeft", "addRight", "remove".

The result:

<img src="mindmap_toolbar/fullcustom_toolbar_control.png">

You can also change the order the controls will be displayed in the toolbar by changing the order of the values in the array:

~~~js
const editor = new dhx.DiagramEditor("editor-container", {
    type: "mindmap",
    shapeToolbar: [ /*!*/
		{ id: "download", content:"<i class='dxi dxi-download'></i>" }, true /*!*/
	]/*!*/
});
~~~

The result:

<img src="mindmap_toolbar/fullcustom_toolbar_control1.png">

{{note The sequence the values are put in the array defines the order the controls will be displayed in the toolbar.}}


```