Shapes Overview
==================

Org Chart shapes
---------------

The Org Chart has specific types of shapes. You will find them together with the connectors types available for the Org Chart in this article. 
The article also covers such issues as creating a new type of shapes and adding the Diagram shapes into Org Chart.

There are two types of shapes typical of the Org Chart:

- **"card"** - the default type for an org chart

<img src="type_card.png">

- **"img-card"** - for adding shapes with images. Don't forget to provide images for cards via the **img** attribute of the shape object.

<img src="type_image.png">


Flow chart shapes
---------------------

All possible shapes types that you can use to build your diagram are presented below:<br><br>

<img style="display:block; margin-left:auto;margin-right:auto;" src="shapes_types.png">

{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}

Mind Map shape
--------------

- **"topic"** - the default shape of the mind map

<img src="mindmap.png">

Use the name of the necessary shape as a value of the **type** attribute inside the shape object, while [preparing a data set for loading into the diagram](common_guides/loading_data.md#preparingdatatoload).

~~~js
var data = [
	// shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },
    { "id": "4", "x": 20,  "y": 430, "text": "End 1", "type": "end", "height": 50 },
    { "id": "5", "x": 280, "y": 250, "text": "Extra Step", "type": "process" },
    { "id": "6", "x": 350, "y": 60,  "text": "End 2", "type": "end", "height": 50 }
];
~~~

{{editor	https://snippet.dhtmlx.com/loz7yh2y	Diagram. Flow-Chart shapes}}

Besides, you can create a new type of shapes for Diagram. For more information see the common_guides/configuration.md#creatingcustomshapes article.