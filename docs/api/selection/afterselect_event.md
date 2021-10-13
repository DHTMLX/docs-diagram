---
sidebar_label: afterSelect
title: afterSelect
description: text
---

# afterSelect

@short: fires after selecting an item

@signature: {`afterSelect: (id: Id, subId?: Id | undefined) => void;`}

@params:
- `id: string | number` - the item id
- `subId: string | number | undefined` - optional, the id of the edited subheader of a swimlane or a text element of a line

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("AfterSelect", function(id) {
	console.log(diagram.data.getItem(id).text + " was selected");
});

@descr:

**Related sample**: [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
