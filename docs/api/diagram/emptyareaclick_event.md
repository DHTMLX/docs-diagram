---
sidebar_label: emptyAreaClick
title: emptyAreaClick
description: text
---

# emptyAreaClick

@short: fires on clicking an empty space in the current diagram area
    
@params:
- e			Event		a native event object	

@example:
diagram.events.on("emptyAreaClick",function(e){
	console.log("An empty space has been clicked");
});

// For diagram editor
editor.diagram.events.on("emptyAreaClick",function(e){
	console.log("An empty space has been clicked");
});

@template: api_event
@descr:

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)
