---
sidebar_label: Swimlane overview
title: Swimlane Overview 
description: text
---

# Swimlane overview

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