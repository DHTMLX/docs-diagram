---
sidebar_label: Loading and storing data 
title: Loading and Storing data
description: You can learn about loading and storing data of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Loading and storing data

You can populate DHTMLX Diagram with data in the following ways:

- [load data from an external file](#external-data-loading)
- [load data from a local data source](#loading-from-a-local-source)

## Preparing data to load

DHTMLX Diagram takes data in the JSON format. It is an array that contains a set of data objects. There are 5 types of objects:

- **shape objects**

~~~jsx {2-5}
const data = [
   // configuring shapes
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // configuring lines
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // configuring a line title
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

The library provides you with [various types of default shapes](../../shapes/default_shapes/) which have both common and specific options. Check the full list of available properties of a shape object in the [API reference](shapes/configuration_properties.md). <br>
Besides, you may create [your own type of shapes](../../shapes/custom_shape/) and add any custom properties to shape objects.

- **line objects**

~~~jsx {6-8}
const data = [
   // configuring shapes
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // configuring lines
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // configuring a line title
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

The presence or absence of line objects in the data set depends on the chosen [way of shapes connection](../../lines/#setting-connections-between-shapes). Check the full list of available properties of the line object in the [API reference](lines/configuration_properties.md).

- **line title objects**

~~~jsx {9-10}
const data = [
   // configuring shapes
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // configuring lines
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // configuring a line title
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

Check the full list of available properties of the line title object in the [API reference](line_titles/configuration_properties.md).

- **group objects**

~~~jsx
const data = [    
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Top and collapsed header with tеxt alignment",
            "editable": true,
            "closable": true,
            "textAlign": "left", // "left", "center", "right"
            "textVerticalAlign": "center", // "top", "center", "bottom"
        },
        // the child items of the group
        "groupChildren": [1.1, 1.2],
        "open": false,
    },
    // configuring shapes to put into the group
    { "type": "rectangle", "id": 1.1, "x": 50, "y": 75, "text": "Shape 1.1" },
    { "type": "rectangle", "id": 1.2, "x": 200, "y": 75, "text": "Shape 1.2" }
];
~~~

Check the full list of the available properties of a group object in the [API reference](groups/configuration_properties.md).

- **objects of a swimlane and its cell**

~~~jsx
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
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
   },
   // configuring a cell of the swimlane
   {
      "id": 1,
      "type": "$sgroup",
      "groupChildren": ["s1"],
      "style": {
         "fill": "#D4DAE4"
      },
      "x": 0,
      "y": 80
   },
   // configuring a shape to put into the cell
   {
      "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
   }
];
~~~

Check the full list of the available configuration properties of the objects of a swimlane and its cells in the [API reference](swimlanes/configuration_properties.md).

External data loading
-------------------

To load data from an external file, make use of the [](../api/data_collection/load_method.md) method. It takes the URL of the file with data as a parameter:

~~~jsx
diagram.data.load("../common/data.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
diagram.data.load("/some/data").then(function(){
   diagram.selection.add("123");
});
~~~

**Related sample:** [Diagram. Data. Data loading](https://snippet.dhtmlx.com/09isp2d8)

Loading from a local source
--------------------

To load data from a local data source, use the [](../api/data_collection/parse_method.md) method. As a parameter you need to pass an array of [predefined data objects](#preparing-data-to-load):

~~~jsx
diagram.data.parse(data);
~~~

**Related sample:** [Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p)

### Loading data into the editor

To load a data set into the editor, use the [parse()](/api/diagram_editor/editor/methods/parse_method/) method of the editor.

~~~jsx
editor.parse(data);
~~~

**Related sample:** [Diagram editor. Default mode. Basic initialization](https://snippet.dhtmlx.com/xshe9ut7)

## Saving and restoring state

To save the current state of a diagram, use the [](../api/data_collection/serialize_method.md) method. It converts the data of the diagram into an array of JSON objects. 
Each JSON object contains the configuration of a separate shape.

~~~jsx
const state = diagram1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different diagram. For example:

~~~jsx
// creating a new diagram
const diagram2 = new dhx.Diagram("diagram_container");
// parsing the state of the diagram1 into diagram2
diagram2.data.parse(state);
~~~

## Importing data into the editor

When you use a diagram together with an editor, you can import data from the diagram into the editor via the [import()](/api/diagram_editor/editor/methods/import_method/) method of the editor object:

~~~jsx
function runEditor() {
    expand();
    editor.import(diagram);
}
~~~

**Related sample**: [Diagram editor. Org chart mode. Live editor](https://snippet.dhtmlx.com/4d4k3o8p)

The diagram state will be imported into the editor on running the editor.
