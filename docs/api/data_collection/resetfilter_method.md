---
sidebar_label: resetFilter()!!
title: resetFilter Method of Data Collection
description: You can explore the resetFilter method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# !!resetFilter()

### Description

@short: Resets the active filters

### Usage

~~~js
resetFilter(config?: object): boolean;
~~~

### Parameters

- `config: object` - (optional), specifies the parameters of resetting the active filters. If the config isn't specified or it is empty, all the filters except for those that have the **permanent** property in the configuration object will be reset. Can contain the following properties:
	- `id: string` - (optional), the id of the filter to reset
	- `permanent: boolean` - (optional), *true* to reset all the active filters, including those that have the **permanent:true** property in their config

### Returns

- `result: boolean` - *true*, if all the filters, including the permanent ones, have been reset; otherwise *false*

### Example

~~~js
// resets all the filters, except for those that have the "permanent" property in the config
diagram.data.resetFilter();

// resets all the filters, including those that have the "permanent" property in the config
diagram.data.resetFilter({ permanent: true });

// resets the filter with the specified id
diagram.data.resetFilter({ id: "filter_id" });
~~~