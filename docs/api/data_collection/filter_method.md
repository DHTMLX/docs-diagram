---
sidebar_label: filter()!!
title: filter Method of Data Collection
description: You can learn about the filter method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# filter()

### Description

@short: Filters items in the diagram

### Usage

~~~js
filter(
    rule?: function, 
    config?: {
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;

// or

filter(
    rule?:{
        by?: string | number,
        match?: string | number | boolean,
        compare?: function(value,match,item)
    },
    config?:{
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;
~~~

### Parameters

- `rule` - (optional) the filtering criteria
  - If set as a *function*, filtering will be applied by the rule specified in the function. The function takes an object of a data item as a parameter
  - If set as an *object*, the parameter can have the following attributes:
    - `by` - (optional) the key of the item attribute
    - `match` - (optional) a pattern to match
    - `compare` - (optional) a function for extended filtering. The function returns either *true* or *false* and takes three parameters:
      - `value` - the value to compare
      - `match` - a pattern to match
      - `item` - a data item the values of which should be compared (e.g. a shape)
- `config` - (optional) an object which defines the parameters of filtering. The object may contain the following properties:
  - `id` - (optional) the id of the filter
  - `add` - (optional) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)
  - `permanent` - (optional) *true* to make the current filter permanent. It will be applied even if the next filtering doesn't have the `add:true` property in its configuration object. Such a filter can be removed just with the [***resetFilter***()](api/data_collection/resetfilter_method.md) method

### Example

~~~jsx {6-9,11-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

// filtering by the rule specified in the function
diagram.data.filter(function (shape) {
    return shape.id > 3;
});

// filtering by the key of the shape attribute
diagram.data.filter({ by: "text", match: "Read N" });
~~~

To revert the diagram to the initial state, call the `filter()` method without parameters.

~~~js
diagram.data.filter();
~~~

**Related articles**:  [Filtering items](../../../guides/manipulating_items/#filtering-items)

**Related sample**: [Diagram. Data. Filtering shapes](https://snippet.dhtmlx.com/tm43bsgn)

**Change log**: Updated in v6.0
