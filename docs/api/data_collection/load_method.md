---
sidebar_label: load()
title: load
description: text
---

# load()

@short: loads data from an external file

@signature: {`load?(url: IDataProxy | string, driver?: DataDriver): Promise<any>;`}

@params:

- `url: IDataProxy | string` - the URL of an external file or DataProxy with the URL configured
- `driver: string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@returns:
A promise of data loading.

@example:
diagram.data.load("../common/data.json");

@relatedsample:
**Related sample**: [Diagram. Org chart load data](https://snippet.dhtmlx.com/09isp2d8)

@descr:

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load("../some/data").then(function(){
	diagram.selection.add(123);
});
~~~

**Related articles**

common_guides/loading_data.md
