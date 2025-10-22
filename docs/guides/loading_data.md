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

DHTMLX Diagram takes data in the JSON format. For the default, org chart and mindmap Diagram modes it is an array that contains a set of data objects. There are 5 types of objects:

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

The library provides you with [various types of default shapes](../../shapes/default_shapes/) which have both common and specific options. Check the full list of available properties of a **shape** object in the [API reference](shapes/configuration_properties.md). 

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

The presence or absence of line objects in the data set depends on the chosen [way of shapes connection](../../lines/#setting-connections-between-shapes). Check the full list of available properties of the **line** object in the [API reference](lines/configuration_properties.md).

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

Check the full list of available properties of the **line title** object in the [API reference](line_titles/configuration_properties.md).

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

Check the full list of the available properties of a **group** object in the [API reference](groups/configuration_properties.md).

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

Check the full list of the available configuration properties of the objects of a **swimlane** and its cells in the [API reference](swimlanes/configuration_properties.md).

## Data structure of Diagram in the PERT mode

The data structure of Diagram in the PERT mode coincides with the [data structure of DHTMLX Gantt](https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json) to simplify integration and data exchange between the components. There are `data` (for shapes: "task", "milestone", "project") and `links` (for connections between shapes) arrays:

~~~jsx
{
    data: object[]; // an array of shapes (tasks, milestones, projects)
    links: object[] // an array of connections between the shapes
};
~~~

Such a structure allows processing the shapes and their connections independently. 

There are the following types of shapes and connections specific for the Diagram in the PERT mode:

- **project objects**

~~~jsx {3-4}
const dataset = {
    data: [
        // configuring a project shape
        { id: "1", text: "Project #1", type: "project", parent: null },
        // configuring task shapes
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // configuring a link object
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

Check the full list of the available configuration properties of the **project** object in the [API reference](groups/configuration_properties.md/#properties-specific-for-project-shapes).

- **task objects**

~~~jsx {5-9}
const dataset = {
    data: [
        // configuring a project shape
        { id: "1", text: "Project #1", type: "project", parent: null },
        // configuring task shapes
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // configuring links objects
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

Check the full list of the available configuration properties of the **task** object in the [API reference](shapes/configuration_properties.md/#properties-specific-for-task-shapes).

- **milestone objects**

~~~jsx {7-8}
const dataset = {
    data: [
        // configuring a project shape
        { id: "1", text: "Project #1", type: "project", parent: null },
        // configuring task shapes
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        // configuring a milestone shape
        { id: "1.2", text: "Task #2", parent: "1", type: "milestone", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        //  configuring a link object
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

Check the full list of the available configuration properties of the **milestone** object in the [API reference](shapes/configuration_properties.md/#properties-specific-for-milestone-shapes).

- **link objects**

~~~jsx {11-16}
const dataset = {
    data: [
        // configuring a project shape
        { id: "1", text: "Project #1", type: "project", parent: null },
        // configuring task shapes
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // configuring links objects
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

Check the full list of the available configuration properties of the **link** object in the [API reference](/lines/configuration_properties/#properties-specific-for-links-in-the-pert-mode).

:::info important
Note that since the ids of items in the data collection of Diagram must be unique, the `$link` prefix is added to the existing id of a link on loading data or adding a new link.

For example:

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // will be available in the diagram as "$link:1"
    ]
}

// diagram.data.getItem("$link:1");
~~~ 
:::

### Specificity of loading data in the PERT mode

Follow the recommendations below to avoid errors and render Diagram in a correct way:

- **Absence of cyclic dependencies**. There is no support for cycles among tasks, projects, links and mixed elements. In case a cyclic dependency is detected, an exception will appear.
- **Links between the parent and children are permitted**. Direct connections between the parent element (e.g. a project) and its children elements are not allowed. Such connections will be deleted automatically during data processing.
- **Avoid intersecting connections**. Reduce the number of intersecting links to the minimum, as they may make the diagram more complex and lead to the low-level readability. 
- **Successive data processing**. Data are processed in the order they are coming, which may affect the arrangement of elements. You should specify the data in the logical order to achieve the best result.
- **Task sequencing**. Use linear or sequential connections between tasks and projects to keep the diagram clear and avoid visual disorder.

The above rules are intended for creating clean, non-cyclic graphs, suitable for PERT analysis. If data break these rules, Diagram may automatically correct them (for example, by removing unacceptable connections). However, it is better to check the data input beforehand.   

Also note that the Gantt elements with `type: "task"` may have children elements not connected to the parent task visually. Such relations won't be reflected in the Diagram. For such elements to be rendered in the same project visually, you can:

- either assign `type:"project"` to the parent element on loading data into Diagram
- or assign the *parent project* id of such a task to its children elements

For example:

~~~jsx
{
    data: [
        { id: "1", type: "project" },
        { id: "1.1", type: "task", parent: "1" }, 
        { id: "1.1.1", type: "task", parent: "1.1" } 
    ]
}
~~~

In the above example:

- The element "1.1" is not a project and is rendered as a task.
- Since the element "1.1.1" links to the parent "1.1" which is not a project, it will be rendered in the wrong place.
- For the elements "1.1" and "1.1.1" to be rendered in the same project visually:
    - either assign the id of the parent project of the element "1.1" to the element "1.1.1" (using the `parent: "1"` option):
    ~~~jsx
    { id: "1.1.1", type: "task", parent: "1" }
    ~~~
    - or use the "project" type instead of the "task" type for the parent element "1.1": 
    ~~~jsx
     { id: "1.1", type: "project", parent: "1" }
    ~~~

## External data loading

To load data from an external file, make use of the [](../api/data_collection/load_method.md) method. It takes the URL of the file with data as a parameter:

~~~jsx
diagram.data.load("../common/data.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
diagram.data.load("/some/data").then(() => {
   diagram.selection.add("123");
});
~~~

**Related sample**: [Diagram. Data. Data loading](https://snippet.dhtmlx.com/09isp2d8)

## Loading from a local source

To load data from a local data source, use the [](../api/data_collection/parse_method.md) method. As parameters, you need to pass a [predefined data set](#preparing-data-to-load) and, optionally, the DataDriver or type of data ("json" (default), "csv", "xml"):

~~~jsx
diagram.data.parse(data, driver);
~~~

**Related sample**: [Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p)

### Loading data into the editor

To load a data set into the editor, use the [parse()](/api/diagram_editor/editor/methods/parse_method/) method of the editor.

~~~jsx
editor.parse(data);
~~~

**Related sample**: [Diagram editor. Default mode. Basic initialization](https://snippet.dhtmlx.com/xshe9ut7)

## Saving and restoring state

To save the current state of a diagram, use the [](../api/data_collection/serialize_method.md) method. Depending on the Diagram mode, it converts the data of the diagram into:

- an array of JSON objects, where each object contains the configuration of a separate shape - for the default, org chart and mindmap Diagram modes
- an object with the `data` array (for shapes: "task", "milestone", "project") and the `links` array (for connections between shapes) - for the PERT Diagram mode 

~~~jsx
const state = diagram1.data.serialize();
~~~

Then you can parse the data stored in the saved state to a different diagram. For example:

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

**Related sample**: [Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p)

The diagram state will be imported into the editor on running the editor.
