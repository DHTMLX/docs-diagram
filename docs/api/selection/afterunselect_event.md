---
sidebar_label: afterUnSelect
title: afterUnSelect Event of Selection
description: text
---

# afterUnSelect

@short: fires after unselecting an item

@signature: {`afterUnSelect: (id: Id) => void;`}

@params:
`id: string | number` - the item id

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

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
