---
sidebar_label: Swimlane properties
title: Swimlane and Swimlane Cell Properties
description: You can learn about the Swimlane and Swimlane cell properties in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Swimlane and Swimlane cell properties

{{note While specifying color values of the item, you can use the following formats: HEX, RGBA, RGB, HSL, or HSLA.}}

## Properties of a swimlane

A swimlane object can include the following configuration properties:

- **type** - (*string*) required, the type of an element, set it to "$swimlane";
- **id** - (*string | number*) the unique id of a swimlane;
- **width** - (*number*) required, the width of the swimlane, including its header (*position: left/right*);
- **height** - (*number*) required, the height of the swimlane, including its header (*position: top/bottom*);
- **x** - (*number*) the x coordinate of the swimlane position;
- **y** - (*number*) the y coordinate of the swimlane position;
- **layout** - (*array*) required, an array with matrix representation of the cells of the swimlane;
- **fixed** - (*boolean*) enables/disables the ability to move and resize the swimlane; *false* by default;
- **open** - (*boolean*) defines whether the swimlane is initialized in the expanded (*true*, default) or collapsed(*false*) state; works when a **header** with the **closable** attribute is initialized;
- **style** - (*object*) an object with the style settings of the swimlane. The object can contain the following attributes:
  - **strokeWidth** - (*number*) the width of the swimlane border, 1 by default;
  - **stroke** - (*string*) the color of the border of the swimlane, "#DEDEDE" by default;
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

### Example

~~~js
const data = [
    {
		"id": "main",
		"type": "$swimlane",
		"height": 730,
		"width": 1195,
		"header": {
			"closable": true,
			"text": "Waterfall diagram template"
		},
		"layout": [
			[1, 2, 3, 4]
		],
		"subHeaderCols": {
			"headers": [
				{ "text": "September", "fill": "rgba(243, 92, 79, 0.4)" },
				{ "text": "October", "fill": "rgba(155, 96, 248, 0.4)" },
				{ "text": "November", "fill": "rgba(255, 174, 18, 0.4)" },
				{ "text": "December", "fill": "rgba(60, 201, 122, 0.4)" }
			]
		}
	},
];
~~~

## Properties of a swimlane cell

The configuration properties of a swimlane cell are given below:

- **type** - (*string*) the type of a swimlane cell, set it to "$sgroup";
- **id** - (*string | number*) the unique id of a swimlane cell;
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

### Example

~~~js
const data = [
    // configuring a swimlane
    {
		"id": "main",
		"type": "$swimlane",
		"height": 730,
		"width": 1195,
		"layout": [
			[1, 2, 3, 4]
		],
    },
    // configuring a cell of the swimlane
    {
		"id": 1,
		"type": "$sgroup",
		"groupChildren": ["s1"],
		"style": {
			"fill": "rgba(243, 92, 79, 0.05)"
		},
		"x": 0,
		"y": 80
	},
    // configuring a shape to put into the cell
    {
		"id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
	},
];
~~~

## Related articles

- [Configuring swimlanes](../../swimlanes/index/)
