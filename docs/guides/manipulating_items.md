---
sidebar_label: Manipulating items
title: Manipulating Items
description: You can learn about manipulating items in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Manipulating Items

You can easily manipulate Diagram items via the [Diagram Editor](../../guides/diagram_editor/initialization/). But in this article we'll explore the examples on how to manipulate the items of DHTMLX Diagram via the component's API. The article contains different sections that cover such questions as:

- [how to automatically arrange shapes in the hierarchical order](#arranging-shapes-automatically);
- how to perform a range of operations over items, in particular:
    - [add](#adding-an-item)/[update](#updating-an-item)/[delete](#deleting-an-item) items;
    - [check if an item exists](#checking-existence-of-an-item) in the diagram and [get it](#getting-an-item);
    - [select a certain item](#selecting-items);
    - [scroll to a necessary item](#showing-the-necessary-item) to make it visible on the screen, if there are many items in the diagram;
    - [expand/collapse items](#expandingcollapsing-items);
    - [find items](#finding-the-necessary-item) that meet some criteria;
    - [filter diagram](#filtering-items) to render particular items;
- [how to manage the drag-n-drop of child items of a group](#drag-n-drop-of-group-items);
- [how to operate the swimlane and its cells](#working-with-swimlane-cells), namely:
    - [set/reset the active swimlane](#settingresetting-the-active-swimlane);
    - [get the type of the subheader of a swimlane](#getting-the-type-of-the-subheader);
    - [add](#adding-a-columnrow)/[remove](#removing-a-columnrow)/[move](#moving-a-columnrow) a column/row;
    - get the [id](#getting-the-id-of-a-cell)/[index](#getting-the-index-of-a-cell) of a cell and [check which actions can be done over the cell](#validating-cells).


Arranging shapes automatically
--------------------------------

The library provides you with the ability to implement auto-placement for shapes and connectors of the diagram initialized in the default mode. The auto-placement allows you:

- to place connected shapes in the symmetric order at once;
- to arrange data loaded in the JSON format or loaded from the server in the hierarchical structure.

To perform the auto-placement, you need to make use of the [](../api/diagram/autoplace_method.md) method. The method can take one parameter:

- **config** - (*object*) optional, an object with configuration settings of the auto-placement. The object contains two optional properties:
    - **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
    - **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default

~~~js
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
	mode: "edges",
    graphPadding: 100,
});
~~~

**Related sample:**	[Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

In case you don't pass the parameter to the method, the default settings will be applied.

~~~js
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace();
~~~

There is also the ability to configure settings for the auto-placement by using the [](../api/diagram/autoplacement_property.md) configuration option of Diagram and applying the **autoPlace()** method.

{{note The **autoPlace()** method works only in the default mode of the diagram and only for shapes.}}

Adding an item
-------------

To add a new item into a diagram, apply the [](../api/data_collection/add_method.md) method of the **data** object.

~~~js
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" }); 
~~~

For example, we've added a new shape object that has the following attributes:

- **id** - (*string|number*) the unique id of a shape
- **text** - (*string*) the text to be rendered in a shape
- **parent** - (*string|number*) the id of the parent shape

You can check all available properties of shape objects in the [API section](../../shapes/configuration_properties/).

**Related sample:** [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)

Getting an item
----------------

You can get the object of an item by passing its id to the [](../api/data_collection/getitem_method.md)  method of the **data** object. For example:

~~~js
const shape = diagram.data.getItem(1);
~~~

After getting an item, you can access its original properties, as follows: 

~~~js
const shape = diagram.data.getItem(1);
const text = shape.text;
~~~

Getting the id of an item 
----------------

If the id of an item is unknown, you can use the [](../api/data_collection/getid_method.md) method to get it. The method takes the index of the item as a parameter:

~~~js
const id = diagram.data.getId(0); // -> returns "1"
~~~

Getting the index of an item
------------------

You can get the index of an item by passing its id to the [](../api/data_collection/getindex_method.md) method:

~~~js
const id = diagram.data.getIndex("1"); // -> returns 0
~~~

Deleting items
---------------

### Deleting a single item

To delete an unnecessary item, make use of the [](../api/data_collection/remove_method.md) method of the **data** object and pass as a parameter the id of the item under question:

~~~js
diagram.data.remove("3.2");  
~~~

{{note If the diagram is initialized either in the org or mindmap mode, deleting a shape will remove its connectors and all child shapes as well.}}

### Deleting all the items

If necessary, you can clear the diagram, by deleting all the items at once. For this, apply the [](../api/data_collection/removeall_method.md) method of the **data** object:

~~~js
diagram.data.removeAll();
~~~

**Related sample:** [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)

Updating an item
-----------------

You can update the look and content of an item with the help of the [](../api/data_collection/update_method.md) method of the **data** object:

~~~js
diagram.data.update("1", { text: "Some new text" });
~~~

As parameters, you need to pass two parameters:

- **id** - (*string|number*) the id of the item 
- **config** - (*object*) an object with updated configuration properties

**Related sample:** [Diagram. Data. Update item](https://snippet.dhtmlx.com/y8uk4sbj)

Checking existence of the item
-------------------------

You can check whether an item exists in the diagram via the [](../api/data_collection/exists_method.md) method of the **data** collection. The method takes the id of the item as a parameter and returns *true*, if the item exists:

~~~js
const shapeExists = diagram.data.exists("1");
~~~

Selecting items
---------------

### Selecting an item

To select items, you need firstly [enable selection](../../guides/diagram/configuration/#selecting-items) for the diagram and then call the [](../api/selection/add_method.md) method of the **selection** object to select a desired item.

~~~js
const diagram = new dhx.Diagram("diagram_container", { select: true });
diagram.data.parse(data);
 
diagram.selection.add("2");
~~~

The method takes the item's id as a parameter.

### Unselecting an item

To unselect a selected item, make use of the [](../api/selection/remove_method.md) method of the **selection** object:

~~~js
diagram.selection.remove("2");
~~~

### Getting the id of a selected item

You can get the id of the currently selected item with the [](../api/selection/getid_method.md) method of the **selection** object:

~~~js
const selected = diagram.selection.getId();
~~~

### Getting the subId of a selected item

You can get the subId of the currently selected item with the [](../api/selection/getsubid_method.md) method of the **selection** object:

~~~js
const selected = diagram.selection.getSubId();
~~~

### Getting the object of a selected item

It is also possible to get the object of a selected item using the [](../api/selection/getitem_method.md) method of the **selection** object:

~~~js
const item = diagram.selection.getItem();
~~~

**Related sample:** [Diagram. Org chart mode. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)

Expanding/collapsing items
---------------------

You can expand and collapse either a shape that have child shapes or a group/swimlane via the corresponding API methods: [expandItem()](../../api/diagram/expanditem_method/) and [collapseItem()](../../api/diagram/collapseitem_method/).

Both methods takes two parameters:

- **id** - (*string,number*) the id of the item
- **dir** - (*string*) optional, defines the side the children will be hidden/shown in relation to the parent shape: "left", "right"

~~~js
// expanding the item with the id "3"
diagram.expandItem("3");

// collapsing the item with the id "3"
diagram.collapseItem("3");
~~~

**Note**, that the **dir** attribute can be used only in the mindmap mode of Diagram (type:"mindmap").

~~~js
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.collapseItem("main", "left");
//or
diagram.expandItem("main", "left");
~~~

Showing the necessary item
--------------------

In case you have a large diagram with lots of items, DHTMLX Diagram provides you with the possibility to make the desired item visible.
For this, you need to apply the [](../api/diagram/showitem_method.md) method, which takes the id of an item as a parameter:

~~~js
diagram.showItem("2.1");  
~~~

**Related sample:**	[Diagram. Scroll content](https://snippet.dhtmlx.com/f970hbym)

You can [read more about scrolling in DHTMLX Diagram](../../guides/diagram/scrolling_diagram/).

Finding the necessary item
--------------------

You can use the API of the Diagram component to find the necessary item in the diagram. The [](../api/data_collection/find_method.md) method of the **data** collection will help you to perform this task.
The method takes the search criteria as a parameter and returns the first object of the shape that matches the specified criteria:

~~~js
// searching for a shape by the attribute key
const shape = diagram.data.find({by:"text",match:"Manager"}); 
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
 
// searching for a shape by the function
const shape = diagram.data.find(function(shape){
    if(shape.text==="Manager"||shape.text==="Marketer"){
        return true
    }
});
~~~

**Related sample:** [Diagram. Data. Finding necessary shape](https://snippet.dhtmlx.com/sete9z73)

### Finding all the items that meet the search criteria

You can also find all the items that meet the set criteria via the [](../api/data_collection/findall_method.md) of the **data** collection method. The method takes the same parameters as the **find()** method and returns an array of item objects:

~~~js
// searching for shapes by the attribute key
const shapes = diagram.data.findAll({by:"text",match:"Manager"});
 
// searching for shapes by the function
const shapes = diagram.data.findAll(function(shapes){
    if(shapes.text==="Manager"||shapes.text==="Marketer"){
        return true
    }
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~

Filtering items
----------------

It is possible to filter the diagram and render only the items that meet the filter criteria via the [](../api/data_collection/filter_method.md) method of the **data** collection. The method will show only the filtered items, hiding the rest of items.

<iframe src="https://snippet.dhtmlx.com/tm43bsgn?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Drag-n-drop of group items

The default settings of a group allow you to reorder child items in the group and drag items between groups. 

If needed you can disable dragging child items to different groups and make it possible to drag the items only within their parent group. In addition, you can adjust the behavior of the borders of the parent group and define whether they should expand when a user is dragging a child item outside the group.

For more details about how to configure the behavior of group items, read the [related article](../../groups/index/#configuring-the-behavior-of-group-items).

## Working with swimlane cells

You can manage swimlane cells with the help of the [CellManager API](../../api/cell_manager/index/). For example, you can add, move, remove cells as rows or columns, validate cells, and much more. 

Let's take a swimlane of the following configuration:

~~~js
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 600,
        layout: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        header: {
            text: "Swimlane",
            position: "top"
        },
        subHeaderRows: {
            headers:[
                { text: "Subheader 1", id: "s1" }, 
                { text: "Subheader 2", id: "s2" },
                { text: "Subheader 3", id: "s3" }
            ],
        }
    },
];
~~~

and consider how to operate the cells of the swimlane using the available API methods.

### Setting/resetting the active swimlane

To be able to manipulate the cells of a swimlane, you need to set the active swimlane. It can be done either via the [](../api/cell_manager/setswimlane_method.md) method of the cellManager object:

~~~js
diagram.cellManager.setSwimlane("main");
~~~

or via the [](../api/selection/add_method.md) method of the selection object:

~~~js
diagram.selection.add("main");
~~~

After you finish operating the swimlane or its cells, you can apply the [](../api/cell_manager/resetswimlane_method.md) method of the cellManager object to remove selection from the swimlane:

~~~js
diagram.cellManager.resetSwimlane();
~~~

### Adding a column/row

You can add a set of cells either as a row or column into the swimlane. For this, you should apply the [](../api/cell_manager/add_method.md) method of the cellManager object and pass two parameters to the method: 
- the start index of the position of the cell where a new column/row should be added;
- the direction of its adding: *"up" | "down"* to add a row, *"left" | "right"* to add a column.

~~~js
// adding a new row under the specified row
diagram.cellManager.add(0, "down");

// adding a new column to the left of the specified column
diagram.cellManager.add(0, "left");
~~~

### Removing a column/row

To remove a set of cells either as a row or column from the swimlane, use the [](../api/cell_manager/remove_method.md) method of the cellManager object. The method takes two parameters:

- the index of the position from which a column/row should be removed;
- the type of the item to be removed: *"col" | "row"*

~~~js
// removes the first row from the swimlane
diagram.cellManager.remove(0, "row");

// removes the second column from the swimlane
diagram.cellManager.remove(1, "col");
~~~

### Moving a column/row

It is possible to change the position of a column or row in the swimlane by applying the [](../api/cell_manager/move_method.md) method of the cellManager object. The method allows you to move a column one position right or left, or move a row one position up or down. The method takes two parameters:

- the index of the current position of the column/row to move
- the direction of moving the item: *"up" | "down"* to move a row, *"left" | "right"* to move a column

~~~js
// moves the first row one position down
diagram.cellManager.move(0, "down");

// moves the third column one position left
diagram.cellManager.move(2, "left");
~~~

### Validating cells

You can check whether such actions as adding, removing, or moving cells can be done over the specified cell via the [](../api/cell_manager/validation_method.md) method of the cellManager object:

~~~js
// checks whether a cell with index 0 can be moved down
diagram.cellManager.validation(0, "down", "move"); // true
~~~

### Getting the type of the subheader

To return the type of the subheader of a swimlane, use the [](../api/cell_manager/getsubheadertype_method.md) method of the cellManager object. The method takes the id of a subheader as a parameter: 

~~~js
diagram.cellManager.getSubHeaderType("s1"); // returns "row"
~~~

### Getting the id of a cell

You can get the id of the first cell of a column/row the cell belongs to. It can be done via the [](../api/cell_manager/getcellid_method.md) method of the cellManager object. The method takes two parameters:

- the index of the first cell of a row/column;
- the type of the item: *"col" | "row"*.

~~~js
// return the id of the first cell of the first row
diagram.cellManager.getCellId(0, "row"); // returns 1

// return the id of the first cell of the third column
diagram.cellManager.getCellId(2, "col"); // returns 3
~~~

You can also get the id of a cell the subheader belongs to via using the [](../api/cell_manager/getsubheadercellid_method.md) method of the cellManager object. The method takes the id of the subheader of a swimlane as a parameter:

~~~js
// return the id of the cell the subheader belongs to
diagram.cellManager.getSubHeaderCellId("s2"); // returns 4
~~~

### Getting the index of a cell

When you need to get the index of a cell of a swimlane, use the [](../api/cell_manager/getcellindex_method.md) method of the cellManager object. The method takes two parameters:

- the id of a cell;
- the type of the item: *"col" | "row"*.

{{note All cells which belong to the same row (or column) will have the same index.}}

~~~html
layout: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
],
~~~

~~~js
// return the index of the cell with id=2 if the cell belongs to a column
diagram.cellManager.getCellIndex(2, "col"); // returns 1

// return the index of the cell with id=5 if the cell belongs to a column
diagram.cellManager.getCellIndex(8, "col"); // returns 1

// return the index of the cell with id=2 if the cell belongs to a row
diagram.cellManager.getCellIndex(2, "row"); // returns 0

// return the index of the cell with id=5 if the cell belongs to a row
diagram.cellManager.getCellIndex(8, "row"); // returns 2
~~~

You can also get the index of a cell the subheader belongs to via using the [](../api/cell_manager/getsubheadercellindex_method.md) method of the cellManager object. The method takes the id of the subheader of a swimlane as a parameter:

~~~js
// return the index of the cell the subheader belongs to
diagram.cellManager.getSubHeaderCellIndex("s2"); // returns 1
~~~






