---
sidebar_label: parse()
title: parse Method of Data Collection
description: You can learn about the parse method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# parse()

### Description

@short: Loads data from a local data source into a diagram and processes them

### Usage

~~~jsx
parse(data: object[] | { data: object[]; links: object[] }, driver?: object | string): void; 
~~~

### Parameters

- `data: object[] | { data: object[]; links: object[] }` - (required) the data to load. You can load data in any supported data format. The data structure depends on the diagram type:
    - for the `default`, `org` and `mindmap` Diagram modes it is set as an array that contains a set of data objects
    ~~~jsx
    data: object[]; // an array of all shapes and connections
    ~~~
    - for the `pert` Diagram mode it is an object with:
      -  the `data` array (for shapes: "task", "milestone", "project") 
      -  the `links` array (for connections between shapes) 
    ~~~jsx
    {
        data: object[]; // an array of shapes (tasks, milestones, projects)
        links: object[] // an array of connections between the shapes
    };
    ~~~
- `driver` - (optional) DataDriver or type of data ("json", "csv", "xml"), "json" by default

### Example

- for the `org` type of diagram

~~~jsx
const data = [
    {
        id: "1",
        text: "Chairman & CEO",
        title: "Henry Bennett",
        img: "../common/img/avatar-1.png"
    },
    {
        id: "2",
        text: "Manager",
        title: "Mildred Kim",
        img: "../common/img/avatar-2.png"
    },
    {
        id: "3",
        text: "Technical Director",
        title: "Jerry Wagner",
        img: "../common/img/avatar-3.png"
    },
    { id: "1-2", from: "1", to: "2", type: "line" },
    { id: "1-3", from: "1", to: "3", type: "line" }
];

const diagram = new dhx.Diagram("diagram_container", { 
    type: "org" 
});

diagram.data.parse(data);
~~~

- for the `pert` type of diagram

~~~jsx
const dataset = {
    data: [
        { id: 1, text: "Project #1", type: "project", parent: null },
        { id: "1.1", text: "Task #1", parent: 1, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: 1, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
    ],
    links: [
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" },
    ]
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});

diagram.data.parse(dataset);
~~~

**Related articles**:  [Loading and storing data](../../../guides/loading_data/)

**Related samples**: 
- [Diagram. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/5ign6fyy)
- [Diagram. PERT mode](https://snippet.dhtmlx.com/8leu8jh1)
