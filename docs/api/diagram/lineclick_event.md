---
sidebar_label: lineClick
title: lineClick
description: text
---

# lineClick

@short: fires on clicking a connector line
	
@params:
- `id: string | number` - the id of a connector
- `e: Event` - a native event object

@example:
diagram.events.on("lineClick", function(id, events) {
    console.log(id);
}); 

// For diagram editor
diagram.events.on("lineClick", function(id, events) {
    console.log(id);
});

@template:	api_event

@relatedapi:
api/diagram_linedblclick_event.md
api/diagram_linemousedown_event.md

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v3.0
