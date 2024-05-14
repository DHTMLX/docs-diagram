---
sidebar_label: serialize()
title: serialize Method of Data Collection
description: You can learn about the serialize method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# serialize()

### Description

@short: Serializes the diagram data into an array of JSON objects

### Usage

~~~js
serialize(): array;
~~~

### Returns

The method returns an array of JSON objects for each item and link from Diagram

### Example

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const data = diagram.data.serialize();
~~~

**Related articles**:  [Saving and restoring state](../../../guides/loading_data/#saving-and-restoring-state)
