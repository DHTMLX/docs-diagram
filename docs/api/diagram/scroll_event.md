---
sidebar_label: scroll
title: scroll
description: text
---

# scroll


@short: fires when a diagram is being scrolled

@params:
`pos: object` - the position of a scroll		

@example:
var diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
    scroll: true 		
});

diagram.events.on("scroll", function(pos){
	console.log("The diagram has been scrolled")
});

// For editor


editor.diagram.events.on("scroll", function(pos){
	console.log("The diagram has been scrolled")
});

@template:	api_event
@descr:
The *pos* object contains x and y coordinates of the current scroll position, e.g.: {x: 67, y: 130}

@related:
	common_guides/configuration.md#scrollingdiagram
    
**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)