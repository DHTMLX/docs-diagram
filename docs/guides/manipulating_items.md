Manipulating Shapes
======================

It is easy to manipulate the shapes of dhtmlxDiagram via the component's API. You can perform a range of operations over shapes, in particular:

- [add](#addingshape)/[update](#updatingshape)/[delete](#deletingshapes) shapes
- [check if an item exists](#checkingexistenceofshape) in the diagram and [get it](#gettingshape)
- [select a certain shape](#selectingshapes) 
- [scroll to a necessary shape](#showingnecessaryshape) to make it visible on the screen, if there are many shapes in the diagram
- [expand/collapse shapes](#expandingcollapsingshapes)
- [find shapes](#findingnecessaryshape) that meet some criteria
- [filter diagram](#filteringshapes) to render particular shapes

Adding Shape
-------------

To add a new shape into a diagram, apply the api/data/methods/add.md method of the **data** object. It takes a new item object as a parameter:

~~~js
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" }); 
~~~

A new item object has the following attributes:

- **id** - (*string|number*) the unique id of a shape
- **text** - (*string*) the text to be rendered in a shape
- **parent** - (*string|number*) the id of the parent shape

Check all available properties of shape objects in [Diagram](diagram_guides/shapes_arrows_list.md#shapeattrs) and in [Org Chart](orgchart_guides/orgchart_shapes_types.md#shapesconfiguration).

{{editor	https://snippet.dhtmlx.com/8wi20uop	Diagram. Org chart add/delete item}}

Getting Shape
----------------

You can get the object of a shape by passing its id to the api/data/methods/getitem.md method of the **data** object:

~~~js
var shape = diagram.data.getItem(1);
~~~

After getting an item, you can [access its original properties](diagram_guides/shapes_arrows_list.md#shapeattrs), as follows: 

~~~js
var shape = diagram.data.getItem(1);
var text = shape.text;
~~~

Getting Shape Id 
----------------

If the id of a shape is unknown, you can use the api/data/methods/getid.md method to get it. The method takes the index of the item as a parameter:

~~~js
var id = diagram.data.getId(0); // -> returns "1"
~~~

Getting Item Index
------------------

You can get the index of a shape by passing its id to the api/data/methods/getindex.md method:

~~~js
var id = diagram.data.getIndex("1"); // -> returns 0
~~~

Deleting Shapes
---------------

###Deleting a single shape

To delete an unnecessary shape, make use of the api/data/methods/remove.md method of the **data** object and pass as a parameter the id of the shape under question:

~~~js
diagram.data.remove("3.2");  
~~~

{{note In case of Org Chart, deleting a shape will remove its connectors and all child shapes as well.}}

###Deleting all the shapes

If necessary, you can clear the diagram, by deleting all the shapes at once. For this, apply the api/data/methods/removeall.md method of the **data** object:

~~~js
diagram.data.removeAll();
~~~

{{editor	https://snippet.dhtmlx.com/8wi20uop	Diagram. Org chart add/delete item}}

Updating Shape
-----------------

You can update the look and content of a shape with the help of the api/data/methods/update.md method of the **data** object:

~~~js
diagram.data.update("1", { text: "Some new text" });
~~~

As parameters, you need to pass two parameters:

- **id** - (*string|number*) the id of the shape 
- **config** - (*object*) an object with updated configuration properties

{{editor	https://snippet.dhtmlx.com/y8uk4sbj	Diagram. Org chart update item}}

Checking Existence of Shape
-------------------------

You can check whether a shape exists in the diagram via the api/data/methods/exists.md method of the **data** collection. The method takes the id of the shape as a parameter and returns *true*, if the shape exists:

~~~js
var shapeExists = diagram.data.exists("1");
~~~


Selecting Shapes
---------------

###Selecting a shape

To select shapes, you need firstly [enable selection](common_guides/configuration.md#selectingshapes) for the diagram and then call the api/selection/methods/add.md method of the **selection** object to select a desired shape. 

~~~js
var diagram = new dhx.Diagram("diagram_container", { select: true });
diagram.data.parse(data);
 
diagram.selection.add("2");
~~~

The method takes the shape id as a parameter.

###Unselecting a shape

To unselect a selected shape, make use of the api/selection/methods/remove.md method of the **selection** object:

~~~js
diagram.selection.remove("2");
~~~

###Getting the id of a selected shape

You can get the id of the currently selected shape with the api/selection/methods/getid.md method of the **selection** object:

~~~js
var selected = diagram.selection.getId();
~~~

### Getting the object of a selected shape

It is also possible to get the object of a selected shape using the api/selection/methods/getitem.md method of the **selection** object:

~~~js
var shape = diagram.selection.getItem();
~~~

Check all available properties of shape objects in [Diagram](diagram_guides/shapes_arrows_list.md#shapeattrs) and in [Org Chart](orgchart_guides/orgchart_shapes_types.md#shapeattrs).

{{editor	https://snippet.dhtmlx.com/jyoxn5h7	Diagram. Org chart item selection}}

Expanding/Collapsing Shapes
---------------------

You can expand and collapse a shape that have child shapes via the corresponding API methods: api/diagram_expanditem.md and api/diagram_collapseitem.md.

{{note The methods won't work in dhtmlxDiagram with the **type:"default"** but will work with **type:"org"** or **type:"mindmap"**.}}

Both methods takes two parameters:

- **id** - (*string,number*) the id of the shape
- **dir** - (*string*) optional, defines the side the children will be hidden/shown in relation to the parent shape: "left", "right"

~~~js
// expanding the item with the id "3"
diagram.expandItem("3");

// collapsing the item with the id "3"
diagram.collapseItem("3");
~~~

**Note**, that the **dir** attribute can be used only in Mind Maps (type:"mindmap").

~~~js
var diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.parse(data);

diagram.collapseItem("main", "left");
//or
diagram.expandItem("main", "left");
~~~

Showing Necessary Shape
--------------------

In case you have a large diagram with lots of shapes, dhtmlxDiagram provides you with the possibility to make the desired item visible.
For this, you need to apply the api/diagram_showitem.md method, which takes the id of a shape as a parameter:

~~~js
diagram.showItem("2.1");  
~~~

{{editor	https://snippet.dhtmlx.com/f970hbym	Diagram. Scroll content}}

You can [read more about scrolling in dhtmlxDiagram](common_guides/configuration.md#scrollingdiagram).


Finding Necessary Shape
--------------------

You can use the API of the Diagram component to find the necessary shape in the diagram. The api/data/methods/find.md method of the **data** collection will help you to perform this task.
The method takes the following parameters:

- **by** - (*string|function*) the search criterion (either the key of the shape attribute or a function)
- **match** - (*string*) the value of the shape attribute

and returns the first object of the shape that matches the specified criteria:

~~~js
// searching for a shape by the attribute key
var shape = diagram.data.find({by:"text",match:"Manager"}); 
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
 
// searching for a shape by the function
var shape = diagram.data.find(function(shape){
    if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

{{editor	https://snippet.dhtmlx.com/sete9z73	Diagram. Finding necessary shape}}

###Finding all the shapes that meet the search criteria

You can also find all the shapes that meet the set criteria via the api/data/methods/findall.md of the **data** collection method. The method takes the same parameters as the **find()**
method and returns an array of shape objects:

~~~js
// searching for shapes by the attribute key
var shapes = diagram.data.findAll({by:"text",match:"Manager"});
 
// searching for shapes by the function
var shapes = diagram.data.findAll(function(shapes){
    if(shapes.text==="Manager"||shapes.text==="Marketer"){return true}
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~


Filtering Shapes
----------------

It is possible to filter the diagram and render only the shapes that meet the filter criteria via the api/data/methods/filter.md method of the **data** collection.
The method takes the parameters listed below:

- **criteria** - (*object,function*) the filtering criteria (either the key of the shape attribute or a filtering function)
- **mode** - (*boolean*) optional, <i>true</i> to define that each next filtering will be applied to the already filtered data, not to the initial data

~~~js
// filtering by the key of the shape attribute
diagram.data.filter({ by: "text", match: "Operation 1" });

// filtering by the function
diagram.data.filter(function(shape){
	if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

The **criteria** parameter set as object has the following attributes:

- **by** - (*string*) the key of the shape attribute
- **match** - (*string*) the value of the shape attribute

The method will show only the filtered shapes, hiding the rest of shapes and connectors. 

To revert the diagram to the initial state, call the **filter()** method without parameters.

~~~js
diagram.data.filter();
~~~

{{editor	https://snippet.dhtmlx.com/tm43bsgn	Diagram. Filtering shapes}}

Arranging shapes automatically
--------------------------------

The library provides you with the ability of implementing autoplacement for shapes and connectors of Diagram. The autoplacement allows you:

- to place connected shapes in the symmetric order at once;
- to arrange data loaded in the JSON format or loaded from the server in the hierarchical structure.

To implement the autoplacement in your Diagram, you need to make use of the api/diagram_autoplace.md method. The method can take one parameter:

- **config** - (*object*) optional, an object with configuration settings of the autoplacement. The object contains two optional properties:
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

{{editor	https://snippet.dhtmlx.com/f3uekgjw	Diagram. Autoplacement}}

In case you don't pass the parameter to the method, the default settings will be applied.

~~~js
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);

diagram.autoPlace(); /*!*/
~~~

There is also the ability to configure settings for the autoplacement by using the [autoplacement](common_guides/configuration.md#configuringautoplacement) configuration option of Diagram and applying the **autoPlace()** method.

{{note The **autoPlace()** method works only for Diagram but not Org Chart.  The **autoPlace()** method does not work if you use groups or swimlanes.}}
