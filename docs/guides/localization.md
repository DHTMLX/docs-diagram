---
sidebar_label: Localization
title: Localization
description: text
---

# Localization

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


Localization (org chart mode)
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

Localization (mindmap mode)
----------------

It is possible to localize the interface of the Mind Map editor into a desired language. For this, you need to provide the corresponding locale settings via the **dhx.i18n.setLocale** method.
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
	type: "mindmap" 
    // other config options
});
~~~