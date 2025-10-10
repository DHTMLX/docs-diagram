---
sidebar_label: serialize()
title: serialize Method of Data Collection
description: You can learn about the serialize method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# serialize()

### Description

@short: Exports the current diagram data 

### Usage

~~~jsx
serialize(): object[] | { data: object[]; links: object[] }; 
~~~

### Returns

Depending on the diagram type, the method returns:

- `object[]` - (for the `default`, `org` and `mindmap` Diagram modes) an array of JSON objects for each item and link from Diagram 
- `{ data: object[]; links: object[] }` - (for the `pert` Diagram mode) an object with:
  - the `data` array (for shapes: "task", "milestone", "project") 
  - the `links` array (for connections between shapes)

### Example

- for the `default` diagram type

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const data = diagram.data.serialize(); // -> [{...}, {...}, {...}, {...}]
~~~

- for the `pert` diagram type

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});
diagram.data.parse(dataset);

const dataset = diagram.data.serialize(); // -> { data: [...], links: [...] };
~~~

**Related articles**:  [Saving and restoring state](../../../guides/loading_data/#saving-and-restoring-state)
