---
sidebar_label: findAll()
title: findAll Method of Data Collection
description: You can learn about the findAll method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# findAll()

### Description

@short: Finds all the items that correspond to the specified parameters

### Usage

~~~jsx
findAll(rule: object): array;

// or

findAll(rule: function): array;
~~~

### Parameters

- `rule` - (required) the search criteria which can be specified:
  - as an object which contains the following parameters:
    - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
    - `match: string` - the value of the item attribute
  - as a function: `DataCallback(item: T, index?: number, array?: T[])`

### Returns

The method returns an array of matching item objects 

### Example

~~~jsx {7,10-14}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//searching for shapes by the attribute key
const shapes = diagram.data.findAll({ by: "text", match: "Manager" });

//searching for shapes by the function
const shapes = diagram.data.findAll(function (shapes) {
    if( shapes.text === "Manager" || shapes.text === "Marketer" ){
        return true;
    }
});
~~~

**Related articles**:  [Finding the necessary item](../../../guides/manipulating_items/#finding-the-necessary-item)
