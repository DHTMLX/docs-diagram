---
sidebar_label: Manipulating items
title: Manipulating Items
description: text
---

# Manipulating Items

It is easy to manipulate the items of DHTMLX Diagram via the component's API. You can perform a range of operations over items, in particular:

- [add](#adding-an-item)/[update](#updating-an-item)/[delete](#deleting-an-item) items
- [check if an item exists](#checking-existence-of-an-item) in the diagram and [get it](#getting-an-item)
- [select a certain item](#selecting-items) 
- [scroll to a necessary item](#showing-the-necessary-item) to make it visible on the screen, if there are many items in the diagram
- [expand/collapse items](#expandingcollapsing-items)
- [find items](#finding-the-necessary-item) that meet some criteria
- [filter diagram](#filtering-items) to render particular items

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
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);

diagram.autoPlace({ /*!*/
	mode: "edges", /*!*/
    graphPadding: 100 /*!*/
}); /*!*/
~~~

**Related sample:**	[Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

In case you don't pass the parameter to the method, the default settings will be applied.

~~~js
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);

diagram.autoPlace(); /*!*/
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

{{editor	https://snippet.dhtmlx.com/8wi20uop	Diagram. Org chart add/delete item}}

Getting an item
----------------

You can get the object of an item by passing its id to the [](../api/data_collection/getitem_method.md)  method of the **data** object. For example:

~~~js
var shape = diagram.data.getItem(1);
~~~

After getting an item, you can access its original properties, as follows: 

~~~js
var shape = diagram.data.getItem(1);
var text = shape.text;
~~~

Getting the id of an item 
----------------

If the id of an item is unknown, you can use the [](../api/data_collection/getid_method.md) method to get it. The method takes the index of the item as a parameter:

~~~js
var id = diagram.data.getId(0); // -> returns "1"
~~~

Getting the index of an item
------------------

You can get the index of an item by passing its id to the [](../api/data_collection/getindex_method.md) method:

~~~js
var id = diagram.data.getIndex("1"); // -> returns 0
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

{{editor	https://snippet.dhtmlx.com/8wi20uop	Diagram. Org chart add/delete item}}

Updating an item
-----------------

You can update the look and content of an item with the help of the [](../api/data_collection/update_method.md) method of the **data** object:

~~~js
diagram.data.update("1", { text: "Some new text" });
~~~

As parameters, you need to pass two parameters:

- **id** - (*string|number*) the id of the item 
- **config** - (*object*) an object with updated configuration properties

{{editor	https://snippet.dhtmlx.com/y8uk4sbj	Diagram. Org chart update item}}

Checking existence of the item
-------------------------

You can check whether an item exists in the diagram via the [](../api/data_collection/exists_method.md) method of the **data** collection. The method takes the id of the item as a parameter and returns *true*, if the item exists:

~~~js
var shapeExists = diagram.data.exists("1");
~~~

Selecting items
---------------

### Selecting an item

To select items, you need firstly [enable selection](../../guides/diagram/configuration/#selecting-items) for the diagram and then call the [](../api/selection/add_method.md) method of the **selection** object to select a desired item. 

~~~js
var diagram = new dhx.Diagram("diagram_container", { select: true });
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
var selected = diagram.selection.getId();
~~~

### Getting the object of a selected item

It is also possible to get the object of a selected item using the [](../api/selection/getitem_method.md) method of the **selection** object:

~~~js
var item = diagram.selection.getItem();
~~~

{{editor	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection}}

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
var diagram = new dhx.Diagram("diagram_container", {
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

You can [read more about scrolling in DHTMLX Diagram](../../guides/scrolling_diagram/).

Finding the necessary item
--------------------

You can use the API of the Diagram component to find the necessary item in the diagram. The [](../api/data_collection/find_method.md) method of the **data** collection will help you to perform this task.
The method takes the search criteria as a parameter and returns the first object of the shape that matches the specified criteria:

~~~js
// searching for a shape by the attribute key
var shape = diagram.data.find({by:"text",match:"Manager"}); 
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
 
// searching for a shape by the function
var shape = diagram.data.find(function(shape){
    if(shape.text==="Manager"||shape.text==="Marketer"){
        return true
    }
});
~~~

{{editor	https://snippet.dhtmlx.com/sete9z73	Diagram. Finding necessary shape}}

### Finding all the items that meet the search criteria

You can also find all the items that meet the set criteria via the [](../api/data_collection/findall_method.md) of the **data** collection method. The method takes the same parameters as the **find()** method and returns an array of item objects:

~~~js
// searching for shapes by the attribute key
var shapes = diagram.data.findAll({by:"text",match:"Manager"});
 
// searching for shapes by the function
var shapes = diagram.data.findAll(function(shapes){
    if(shapes.text==="Manager"||shapes.text==="Marketer"){
        return true
    }
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~


Filtering items
----------------

It is possible to filter the diagram and render only the items that meet the filter criteria via the [](../api/data_collection/filter_method.md) method of the **data** collection.

An example of filtering shapes:

~~~js
// filtering by the key of the shape attribute
diagram.data.filter({ by: "text", match: "Operation 1" });

// filtering by the function
diagram.data.filter(function(shape){
	if(shape.text==="Manager"||shape.text==="Marketer"){
        return true
    }
});
~~~

The method will show only the filtered items, hiding the rest of shapes, lines, groups, swimlanes. 

To revert the diagram to the initial state, call the **filter()** method without parameters.

~~~js
diagram.data.filter();
~~~

{{editor	https://snippet.dhtmlx.com/tm43bsgn	Diagram. Filtering shapes}}


## Manipulating swimlane cells

To operate the cells of a swimlane dynamically, use [Cell Manager API](../../api/cell_manager/index/).