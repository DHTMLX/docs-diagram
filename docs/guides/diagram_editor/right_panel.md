---
sidebar_label: Right panel
title: Right Panel
description: text
---

# Right Panel

- the right panel with a **property sheet** that provides fields for modifying values of the shapes' attributes
	- the **Grid Step** sidebar provides a field for modifying the step of moving a shape. This sidebar option is shown by default and can be hidden via the *gridStep* option of the [controls](diagram_guides/editor_mode.md#configurationproperties) config property.

- the **_sidebar_** with a property sheet that provides fields for modifying values of the shapes' attributes
	- the **Grid Step** sidebar option provides a field for modifying the step of moving a shape. This sidebar option is shown by default and can be hidden via the *gridStep* option of the [controls](orgchart_guides/editor_mode.md#configurationproperties) config property.

- the **_sidebar_** with a property sheet that provides fields for modifying values of the shapes' attributes
	- the **Grid Step** sidebar option provides a field for modifying the step of moving a shape. This sidebar is shown by default and can be hidden via the *gridStep* option of the [controls](mindmap_guides/editor_mode.md#configurationproperties) config property.


### Editing shapes via sidebar options

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


### Org chart mode

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

### Mindmap mode 

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


### Editing lines via sidebar options (default mode)

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

Right Panel Customization (org chart mode)
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


Right Panel Customization (mindmap mode)
----------------------------

Right panel of Mind Map Editor possesses a set of defined sidebar options for each shape provided by dhtmlxDiagram.
These options can't be changed and completely depend on the type of the shape and on the configuration of the shape. 

But, in case you are creating your custom shape in the editor, you can define the sidebar options to be rendered in the right panel for editing the attributes of the custom shape. To do this, you need to make use of the **properties** attribute of the [addShape](api/diagram_addshape.md) method:

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "mindmap",
    shapeType: "flowView",
    controls: { 
        gridStep: false
    }
});

function template({ title, view, cr, br, conversion, link }) {
    ...
}

editor.diagram.addShape("flowView", {
    template: template,
    defaults: {
        width: 190,
        height: 97,
        title: "New page",
        cr: 0,
        br: 0,
        conversion: 0,
        view: "../img_01.png",
        info: "Additional Information",
        link: "https://dhtmlx.com/",
    },
    properties: [
        { type: "img", label: "View",  property: "view" },
        { type: "title", },
        { type: "text", label: "CR", property: "cr" },
        { type: "text", label: "BR", property: "br" },
        { type: "text", label: "Conversion", property: "conversion" },
        { type: "text", label: "Info", property: "info" },
        { type: "text", label: "Link", property: "link" },
    ],
    eventHandlers: {
        onclick: {
            info: function(event, item) {
                openModalInfo(item.title, item.info);
            }
        }
    }
});

diagram.data.load("../dataset.json");
~~~

{{editor    https://snippet.dhtmlx.com/do1jwmw1	Diagram. Site map and user flow example with custom shapes}}

The **properties** attribute contains a set of objects that defines which sidebar options will be rendered in the right panel of the editor for the shape. 

The order of the objects in the array defines the order the sidebar options will be displayed in the right panel.  

<img style="margin: 20px auto 20px auto;display: block;" src="customshape_mindmap_editor.png">

You need to use the <b>type</b> attribute together with the <b>property</b> one to specify the sidebar option for editing a custom property. For example:

~~~js
{ type: "text", label: "Conversion", property: "conversion" }
~~~

As a result, you can edit the custom <i>conversion</i> attribute of the "flowView" shapes via the text sidebar option with the *Conversion* label.

{{note For details about the types that you can use for editing a custom property, see the api/diagram_addshape.md#typesofsidebaroptions article.}}

