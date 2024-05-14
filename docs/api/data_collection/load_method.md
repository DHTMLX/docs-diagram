---
sidebar_label: load()
title: load Method of Data Collection
description: You can learn about the load method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# load()

### Description

@short: Loads data from an external file

### Usage

~~~js
load(
	url: string | object, 
	driver?: object | string
): promise;
~~~

### Parameters

- `url` - (required) the URL of an external file or DataProxy with the URL configured
- `driver` - (optional) DataDriver or type of data ("json", "csv", "xml"), "json" by default

### Returns

The method returns a promise of data loading

### Example

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.load("../common/data.json");
~~~

### Details

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load("../some/data").then(function(){
	diagram.selection.add(123);
});
~~~

**Related articles**:  [Loading and storing data](../../../guides/loading_data/)

**Related sample**: [Diagram. Data. Data loading](https://snippet.dhtmlx.com/09isp2d8)