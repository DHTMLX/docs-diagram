---
sidebar_label: scroll
title: scroll Event
description: text
---

# scroll

@short: fires when a diagram is being scrolled

@signature: {`scroll: (position: ICoords) => void;`}

@params:
`position: object` - the position of a scroll

@example:
const diagram = new dhx.Diagram("diagram_container", { 
	type: "org", 
    scroll: true 		
});

diagram.events.on("scroll", function(pos){
	console.log("The diagram has been scrolled")
});

@relatedsample:
**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@descr:
The *pos* object contains x and y coordinates of the current scroll position, e.g.: {x: 67, y: 130}

#### Related articles

[Scrolling Diagram](../../../guides/diagram/scrolling_diagram/)
