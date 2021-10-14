---
sidebar_label: shapeIconClick
title: shapeIconClick
description: text
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
