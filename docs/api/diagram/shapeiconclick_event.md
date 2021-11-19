---
sidebar_label: shapeIconClick
title: shapeIconClick Event
description: You can learn about the shapeIconClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# shapeIconClick

@short: fires on clicking a toolbar icon

@signature: {`shapeIconClick: (id: string, event: MouseEvent) => void;`}

@params:
- `id: string | number` - the id of the icon
- `event: MouseEvent` - a native HTML event object

@example:
const diagram = new dhx.Diagram("diagram_container", { 
	toolbar: [
      {
		id:"download",
		content:"<i class='zmdi zmdi-download'></i>"
	  },
	  {
		id:"info",
		content:"<i class='zmdi zmdi-info-outline'></i>"
	  }
    ]
});

diagram.events.on("shapeIconClick", function(icon){
	const id = diagram.selection.getId();
	alert(icon + " was clicked for id = " + id);
});

@descr:
