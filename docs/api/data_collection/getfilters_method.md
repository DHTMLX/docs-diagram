---
sidebar_label: getFilters()!!
title: getFilters Method of Data Collection
description: You can learn about the getFilters method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!getFilters()

### Description

@short: Returns an object with the applied filters 

### Usage

~~~js
getFilters({ permanent?: boolean }): { [key: string]: { rule: object | callback, config: object } }; 
~~~

### Parameters

- `permanent: boolean` - (optional) *false* by default. Allows getting the list of permanent filters

### Returns

- `filters: object` - an object with the applied filters, where the key is the id of a filter and the value is an object with the [**rule** and **config** properties](api/data_collection/filter_method.md#parameters)

### Example

~~~js
const filters = diagram.data.getFilters();
~~~
