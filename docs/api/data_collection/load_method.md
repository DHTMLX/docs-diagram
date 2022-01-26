---
sidebar_label: load()
title: load Method of Data Collection
description: You can learn about the load method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# load()

### Description

@short: loads data from an external file

### Usage

~~~js
load?(url: IDataProxy | string, driver?: DataDriver): Promise<any>;
~~~

### Parameters


- `url: IDataProxy | string` - the URL of an external file or DataProxy with the URL configured
- `driver: string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

### Returns

A promise of data loading.

### Example

~~~js
diagram.data.load("../common/data.json");
~~~


**Related sample**: [Diagram. Data. Data loading](https://snippet.dhtmlx.com/09isp2d8)

@descr:

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load("../some/data").then(function(){
	diagram.selection.add(123);
});
~~~

**Related articles**:  [Loading and storing data](../../../guides/loading_data/)
