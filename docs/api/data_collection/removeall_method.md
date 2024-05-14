---
sidebar_label: removeAll()
title: removeAll Method of Data Collection
description: You can learn about the removeAll method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# removeAll()

### Description

@short: Deletes all items from the diagram

### Usage

~~~js
removeAll(): void;
~~~

### Example

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.removeAll();
~~~

**Related articles**:  [Deleting items](../../../guides/manipulating_items/#deleting-items)

**Related sample**: [Diagram. Data. Add/delete item](https://snippet.dhtmlx.com/8wi20uop)