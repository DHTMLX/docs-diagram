---
sidebar_label: find()
title: find Method of Data Collection
description: You can learn about the find method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# find()

### Description

@short: Finds the item that corresponds to the specified parameters

### Usage

~~~jsx
find(rule: object): object;

// or

find(rule: function): object;
~~~

### Parameters

- `rule` - (required) the search criteria which can be specified:
  - as an object which contains the following parameters:
    - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
    - `match: string` - the value of the item attribute
  - as a function: `DataCallback(item: T, index?: number, array?: T[])`

### Returns

The method returns the first object of the item that matches the specified criteria

### Example

~~~jsx {7,10-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//searching for a shape by the attribute key
const shape = diagram.data.find({ by: "text", match: "Manager" });

//searching for a shape by the rule specified in the function
const shape = diagram.data.find(function(shape){
    if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

**Related articles**:  [Finding the necessary item](../../../guides/manipulating_items/#finding-the-necessary-item)

**Related sample**: [Diagram. Data. Finding necessary shape](https://snippet.dhtmlx.com/sete9z73)