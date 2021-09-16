---
sidebar_label: Group overview
title: Group Overview 
description: text
---

# Group overview

A group is a separate kind of the Diagram elements. You can put several shapes or other groups into a group and move them as a unit, copy, or delete.

<img style="display:block; margin-left:auto;margin-right:auto;" src="group.png">

To add a group, specify *"$group"* as a value of the **type** attribute inside the group object while preparing a dataset for loading into the diagram or diagram editor.

~~~js
const data = [
    // configuring a group
    {
        type: "$group", id: 1,
        width: 350, height: 200,
        x: 0, y: 0,
        header: {
            text: "Group",
            editable: true,
            closable: true,
        },
        // the first-level child items of the group 
        groupChildren: ["1", "2"],
    },
    // configuring shapes to be put into the group
    {
        type: "rectangle", id: 1, x: 20, y: 75, text: "Shape 1"
    },
    {
        type: "rectangle", id: 2, x: 180, y: 75, text: "Shape 2"
    }
];

// initializing a diagram
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);
~~~

When working in the [editor mode](diagram_guides/editor_mode.md), you can use a group(s) included to the left panel of the editor by default. You can also create any number of groups with different configurations, and [add them into the left panel of the editor](diagram_guides__editor_mode.html#multiple_customized_items) for further work. 

{{editor	https://snippet.dhtmlx.com/4gxy38ek	Diagram. Groups and shapes interaction}}

{{editor	https://snippet.dhtmlx.com/6hunrja8	Diagram. Group. Header position and text settings}}

{{editor	https://snippet.dhtmlx.com/0hf8ahrb	Diagram. Virtual private cloud architecture}}

<h3 id="group_properties"><b>Properties of a group object</b></h3>

The Diagram groups are not configured automatically. A group object contains a list of configuration properties which allow you to configure the positioning and appearance of the group:

- **type** - (*string*) the type of an element, set it to "$group";
- **id** - (*string, number*) the unique id of a group;
- **x** - (*number*) the x coordinate of the group position;
- **y** - (*number*) the y coordinate of the group position;
- **width** - (*number*) the width of the group, including its header (*position: left/right*);
- **height** - (*number*) the height of the group, including its header (*position: top/bottom*);
- **groupChildren** - (*array*) an array with ids of the first-level child items of the group;
- **open** - (*boolean*) - defines whether the group is initialized in the expanded (*true*, default) or collapsed(*false*) state; works when a **header** with the **closable** attribute is initialized;
- **fixed** - (*boolean*) enables/disables the ability to move and resize the group; *false* by default;
- **style** - (*object*) an object with the style settings of the group. The object can contain the following attributes:
  - **strokeWidth** - (*number*) the width of the group border, 1 by default;
  - **stroke** - (*string*) the color of the border of the group (in the HEX, RGBA, RGB, XSL formats), "#DEDEDE" by default;
  - **fill** - (*string*) the background color of the group;
  - **overFill** - (*string*) the background color of the group when the user is holding the item and moving it into/outside the group *providing that the whole item is inside the group*;
  - **partiallyFill** - (*string*) the background color of the group when the user is holding the item and moving it into/outside the group *providing that a part of the item is out of the group and other settings are not defined via the **exitArea** attribute*;
- **exitArea** - (*object*) an object with the settings which will be applied to the item when the user is dragging it out of the group (*is applied only to the first-level children of the group*). The object can contain the following attributes:
  - **groupBehavior** - (*string*) the behavior of the child item of the group when the user is moving it out of the group: 
      - *"unbound"* (by default) - the user can move an item into or outside the group;
      - *"boundNoBorderExtension"* - the user can move an item into the group but cannot drag the item outside the group if the item has been dropped inside the group. The item won't expand the borders of the group when trying to drag the item outside the group;
      - *"boundBorderExtension"* - the user can move an item into the group but cannot drag the item outside the group if the item has been dropped inside the group. The item will expand the borders of the group when trying to drag the item outside the group; <br>
    {{editor	https://snippet.dhtmlx.com/4gxy38ek	Diagram. Groups and shapes interaction}}
  - **padding** - (*number*) defines the padding between the group and the edge of the item when moving the item inside the group; <br> 
  The attribute is available if *groupBehavior: "boundNoBorderExtension" | "boundBorderExtension"*;
- **header** - (*object*) an object with configuration attributes of the header of the group. The attributes are:
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
  - **closable** - (*boolean*) shows/hides an icon intended to expand/collapse a group; *false* by default;
  - **enable** - (*boolean*) shows/hides the header of the group; *true* by default; <br>
{{editor	https://snippet.dhtmlx.com/6hunrja8	Diagram. Group. Header position and text settings}}
- **[key: string]: any**  - your own property with your own logic to be implemented under the hood.