---
sidebar_label: shapeMouseDown
title: shapeMouseDown
description: text
---

# shapeMouseDown

@short:
	fires when a pointing device button is pressed while the pointer is over a shape
    
@params:
- id	 	string,number 		the id of a shape

@example:
diagram.events.on("shapeMouseDown", function(id) {
	console.log('An item "' + diagram.data.getItem(id).text + '"will be clicked');
});

// For editor
editor.diagram.events.on("shapeMouseDown", function(id) {
  console.log('An item "' + editor.diagram.data.getItem(id).text + '"will be clicked');
});

@template: api_event
@descr:

@relatedapi:
api/diagram_onshapeclick_event.md
api/diagram_onshapedblclick_event.md
api/diagram_shapeiconclick_event.md

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
