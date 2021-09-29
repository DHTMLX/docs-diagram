---
sidebar_label: afterUnSelect
title: afterUnSelect
description: text
---

# afterUnSelect

@short: fires after unselecting an item

@signature: {`afterUnSelect: (id: Id, subId?: Id | undefined) => void;`}

@params:
`id: string,number` - the item id

@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("AfterUnSelect", function (id) {
	console.log(diagram.data.getItem(id).text + " was unselected");
});

@descr:

**Related sample**: [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

**Related articles**

common_guides/configuration.md#selectingshapes
