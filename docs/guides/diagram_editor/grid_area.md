---
sidebar_label: Grid area
title: Grid Area
description: text
---

# Grid Area

- the **_grid area_** for editing the diagram. It is an area intended for editing shapes and connections between them. It allows setting exact position for the shapes;
- the **_grid area_** for editing the diagram. It is an area intended for editing the org chart and its shapes. It allows setting exact position for the shapes;
- the **_grid area_** for editing the diagram. It is an area intended for editing the mind map and its shapes. It allows setting exact position for the shapes;

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



Modes of Editing (Org chart mode)
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



Modes of Editing (mindmap mode)
-------------

###Editing via the interface elements

You can drag shapes to place them on the desired positions relative to the root shape, or drag the root shape to move the whole diagram. If you drag the parent shape, the shape will be moved with all its child shapes.

In the editing mode each selected shape gets resizing handles. You can pull the handles of an editable shape to change its sizes.

When you click any shape, it becomes editable and gets a personal toolbar with editing options.

<img src="editing_mindmap_shape.png">

The toolbar allows:

- adding a new child for the selected shape
- deleting the selected shape (except for the root one)

There is also the ability to configure the toolbar according to your needs. Read the details [below](#configuringtoolbarforshapes).

###Editing via the sidebar options

The sidebar of the editor allows adjusting the attributes of the shape:

<table>
<tr><td><img  src="mindmap_sidebar_settings.png"></td>
<td><ul>
	<li>modify the step of moving a shape;</li><br>
    <li>set the left and top offsets to define the position <br>of a shape;</li><br>
    <li>set the width and height of a shape;</li><br>
	<li>modify the color of a shape via the related colorpicker;</li><br>
	<li>change the outline of a shape: set its color, type and width;</li><br>
	<li>edit the text of a shape;</li><br> 
    <li>adjust the text settings:<ul> 
    	<li>font size, weight, style and color;</li> 
        <li>line spacing;</li>
        <li>horizontal and vertical text alignment.</li></ul>
    </li>	
</ul></td></tr>
</table>

The image above presents a sidebar for editing mindmap shapes. The sidebars for editing [flow-chart shapes](diagram_guides/editor_mode.md#editingshapes) and [org-chart](orgchart_guides/editor_mode.md#modesofediting) ones look a little different.

You can also create a sidebar with the necessary set of options for editing a custom shape; see details [here](mindmap_guides/editor_mode.md#rightpanelcustomization).







Multiselection
--------------------------------

It is possible to select several shapes and connectors via hovering them over with the left mouse button pressed. You can also select necessary shapes using keyboard shortcuts - Shift+Left Click.

<img src="select_multiple_shapes.png">

You can operate all the selected shapes at once, namely:

- to drag the shapes;
- to create a copy of the shapes;
- to paste the shapes;
- to delete this shapes. 


Manipulating multiple shapes - org chart
--------------------------------

It is possible to select several shapes via hovering them over with the left mouse button pressed. You can also select necessary shapes using keyboard shortcuts - Shift+Left Click.

<img src="orgchart_multiple_shapes.png">

You can operate all the selected shapes at once, namely:

- to drag the shapes;
- to delete this shapes.


Manipulating multiple shapes - mindmap
--------------------------------

It is possible to select several shapes via hovering them over with the left mouse button pressed. You can also select necessary shapes using keyboard shortcuts - Shift+Left Click.

<img src="select_mindmaps.png">

You can operate all the selected shapes at once, namely:

- to drag the shapes;
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



Using hotkeys (org chart)
---------------

There is a set of hotkeys you can use while creating an org chart in the editor:

- **Shift+Left Click** - to select several shapes
- **Ctrl+A** or **Cmd+A** (for MAC) - to select all shapes and connectors
- **Ctrl+Z** - to revert the latest action
- **Del** - to delete a shape/shapes
- **Arrows** - to move a shape left/right/up/down

Using hotkeys (mindmap)
---------------

There is a set of hotkeys you can use while creating a mind map in the editor:

- **Shift+Left Click** - to select several shapes
- **Ctrl+A** or **Cmd+A** (for MAC) - to select all shapes and connectors
- **Ctrl+Z** - to revert the latest action
- **Del** - to delete a shape/shapes
- **Arrows** - to move a shape left/right/up/down