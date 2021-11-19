---
sidebar_label: emptyAreaClick
title: emptyAreaClick Event
description: You can learn about the emptyAreaClick event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# emptyAreaClick

@short: fires on clicking an empty space in the current diagram area

@signature: {`emptyAreaClick: (event: MouseEvent) => void;`}

@params:
`event: MouseEvent` - a native HTML event object

@example:
diagram.events.on("emptyAreaClick",function(e){
	console.log("An empty space has been clicked");
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
