---
sidebar_label: filter()
title: filter Method of Data Collection
description: You can learn about the filter method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# filter()

### Description

@short: filters items in the diagram

@descr:

### Usage

~~~js
filter(
	rule?: function, 
	config?: {
		add?: boolean,
		smartFilter?: boolean
	}
): void;

// or

filter(
	rule?: {
		by?: string | number,
		match?: string | number | boolean,
		compare?: (value: any, match: any, item: any) => boolean
	}, 
	config?: {
		add?: boolean,
		smartFilter?: boolean
	}
): void;
~~~

### Parameters

- `rule` - (optional) the filtering criteria. The parameter can be either a function **or** an object with the following attributes:
  - `by` - (optional) the key of the item attribute
  - `match` - (optional) a pattern to match
  - `compare` - (optional) a function for extended filtering that takes three parameters:
    - `value` - the value to compare
    - `match` - a pattern to match
    - `item` - a data item the values of which should be compared (e.g. a shape)
- `config` - (optional) defines the parameters of filtering. The parameter may contain two properties:
  - `add` - (optional) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)
  - `smartFilter` - (optional) defines whether a filtering rule will be applied after adding and editing items of the collection

### Example

~~~js
// filtering by the rule specified in the function
diagram.data.filter(function (shape) {
    return shape.id > 3;
});

// filtering by the key of the shape attribute
diagram.data.filter({ by: "text", match: "Read N" });
~~~

To revert the diagram to the initial state, call the **filter()** method without parameters.

~~~js
diagram.data.filter();
~~~

**Related articles**:  [Filtering items](../../../guides/manipulating_items/#filtering-items)

**Related sample**: [Diagram. Data. Filtering shapes](https://snippet.dhtmlx.com/tm43bsgn)