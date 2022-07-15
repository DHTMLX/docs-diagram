---
sidebar_label: Localization
title: Localization
description: You can learn about the Localization in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Localization

It is possible to localize the interface of the Diagram editor into a desired language. For this, you need to provide the corresponding locale settings via the **dhx.i18n.setLocale()** method.
The method takes two parameters: the diagram container and an object that contains rules of localization for a particular country.

~~~js
//an example of English locale
const locale = {
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
	menuDelete: "Delete",
	menuAddPartner: "Add partner",
	menuAddAssistant: "Add assistant",
	menuAlignChildrenVertically: "Align children vertically",
	menuAlignChildrenHorizontally: "Align children horizontally",

    imageUpload: "Click to upload",
    emptyState: "Select a shape or a connector"
	
	 // the following locale options were added in v5.0
	alignHorizontalLeft: "Align left",
	alignHorizontalCenter: "Align horizontal centers",
	alignHorizontalRight: "Align right",
	alignHorizontalDistribute: "Distribute horizontal spacing",
	alignVerticalDistribute: "Distribute vertical spacing",
	alignVerticalTop: "Align top",
	alignVerticalMiddle: "Align vertical centers",
	alignVerticalBottom: "Align bottom",

	addShape: "Add shape",
	menu: "Menu",
	remove: "Delete",
	addLeftShape: "Add left shape",
	addRightShape: "Add right shape",

	lineTextAutoPositionEnable: "Enable text autoposition",
	lineTextAutoPositionDisable: "Disable text autoposition",
	addLineText: "Add text",
	addColumnLast: "Add column",
	addRowLast: "Add row",
	copy: "Duplicate",
	connect: "Connect",
	removePoint: "Delete point",

};

dhx.i18n.setLocale("diagram", locale);
~~~

After that, you need to initialize the editor and check how the labels' names have changed.

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
    // other config options
});
~~~

**Related sample:** [Diagram editor. Default mode. Localization](https://snippet.dhtmlx.com/sivvpbyg)

**Related sample:** [Diagram editor. Org chart mode. Localization](https://snippet.dhtmlx.com/7qt2mfu2)