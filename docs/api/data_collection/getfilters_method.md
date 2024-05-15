---
sidebar_label: getFilters()
title: getFilters Method of Data Collection
description: You can learn about the getFilters method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# getFilters()

### Description

@short: Returns an object with the applied filters 

### Usage

~~~jsx
getFilters({ permanent?: boolean }): object;
~~~

### Parameters

- `permanent` - (optional) *false* by default. Allows getting the list of permanent filters

### Returns

The method returns an object with the applied filters, where:
- `key` - the id of a filter 
- `value` - an object with the [**rule** and **config** properties](/api/data_collection/filter_method.md#parameters)

### Example

~~~jsx {6-7}
const diagram = new dhx.Diagram("diagram_container", {
    // configuration settings
});
diagram.data.parse(data);
    
const filters = diagram.data.getFilters(); // gets all the applied filters
console.log(filters);
~~~

**Change log**: Added in v6.0
