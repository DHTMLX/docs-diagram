---
sidebar_label: afterUnSelect
title: afterUnSelect Event of Selection
description: You can learn about the afterUnSelect event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterUnSelect

@short: fires after unselecting an item

@signature: {`afterUnSelect: (id: Id, subId?: Id | undefined) => void;`}

@params:
- `id: string | number` - the item id
- `subId: string | number | undefined` - optional, the id of a subheader of a swimlane or a text element of a line

@example:
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true
});

diagram.events.on("AfterUnSelect", function (id) {
	console.log(diagram.data.getItem(id).text + " was unselected");
});

@descr:

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
SubId parameter has been added in v4.1.

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)

