---
sidebar_label: parse()
title: parse Method of Data Collection
description: You can learn about the parse method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# parse()

### Description

@short: Loads data from a local data source

### Usage

~~~jsx
parse(
    data: array | string, 
    driver?: object | string
): void;
~~~

### Parameters

- `data` - (required) the data to load. You can load data in any supported data format
- `driver` - (optional) DataDriver or type of data ("json", "csv", "xml"), "json" by default

### Example

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

const diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.data.parse(data);
~~~

**Related articles**:  [Loading and storing data](../../../guides/loading_data/)

**Related sample**: [Diagram. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/5ign6fyy)
