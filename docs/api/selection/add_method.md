---
sidebar_label: add()
title: add Method of Selection
description: text
---

# add

@short: selects the specified item

@signature: {`add(id: Id, subId?: Id): void;`}

@params:
- `id: string | number` - the item id
- `subId: string | number` - optional, the id of a subheader of a swimlane or a text element of a line

@example:
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

diagram.selection.add("2");

@descr:

**Related samples**:

- [Diagram. Org chart mode. Item selection](https://snippet.dhtmlx.com/jyoxn5h7)
- [Diagram. Default mode. Item selection](https://snippet.dhtmlx.com/tcny4obw)

#### Related articles

- [diagram.config.select](../../../api/diagram/select_property/)
- [Selecting items](../../../guides/manipulating_items/#selecting-items)
