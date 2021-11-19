---
sidebar_label: afterEditorClose
title: afterEditorClose Event
description: You can learn about the afterEditorClose event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterEditorClose

@short: fires after the inline editor of the item is closed

@signature: {`afterEditorClose: (id: Id, key: string, subId?: string) => void;`}

@params:
- `id: string | number` - the id of an item
- `key: string` - the name of the edited property
- `subId: string` - optional, the id of the edited subheader of a swimlane

@example:
diagram.events.on("afterEditorClose", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
