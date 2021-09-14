---
sidebar_label: shapeDblClick
title: shapeDblClick
description: text
---

# shapeDblClick

@short:
	fires on double-clicking a shape

@params:
- id	 	string,number		the shape id


@example:
diagram.events.on("shapeDblClick", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});

// For editor
editor.diagram.events.on("shapeDblClick", function(id) {
    console.log('An item"' + editor.diagram.data.getItem(id).text + '"double-clicked');
});

@template:	api_event
@descr:

@relatedapi:
api/diagram_onshapeclick_event.md
api/diagram_shapeiconclick_event.md
api/diagram_shapemousedown_event.md

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)