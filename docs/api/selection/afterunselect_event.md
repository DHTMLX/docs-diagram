---
sidebar_label: afterUnSelect
title: afterUnSelect Event of Selection
description: You can learn about the afterUnSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterUnSelect

### Description

@short: fires after unselecting an item

@descr:

### Usage

~~~js
afterUnSelect: (id: string | number, subId?: string | number | undefined) => void;
~~~

### Parameters

- `id` - (mandatory) the item id
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Example

~~~js
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});

diagram.events.on("AfterUnSelect", function (id) {
	console.log(diagram.data.getItem(id).text + " was unselected");
});
~~~

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

**Change log**: SubId parameter has been added in v4.1

**Related articles**:  - [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

