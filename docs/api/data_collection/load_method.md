---
sidebar_label: load()
title: load
description: text
---

# load()

@short: loads data from an external file

@signature: {``}

@params:

- url			string		the URL of an external file

@returns:

- loaded		promise		a promise of data loading

@example:
diagram.data.load("../common/data.json");


@descr:

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load("../some/data").then(function(){
	diagram.selection.add(123);
});
~~~

@relatedapi:
	api/data/methods/parse.md
@relatedsample:	https://snippet.dhtmlx.com/09isp2d8	Diagram. Org chart load data 
@related:
	common_guides/loading_data.md