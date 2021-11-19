---
sidebar_label: afterEditorEditing
title: afterEditorEditing Event
description: You can learn about the afterEditorEditing event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterEditorEditing

@short: fires after the text value of an item is edited via the inline editor  

@signature: {`afterEditorEditing: (value: string, id: Id, key: string, subId?: string) => void;`}

@params:
- `value: string` - the new value of the item
- `id: string | number`- the id of the item
- `key: string` - the name of the edited property
- `subId: string` - optional, the id of the edited subheader of a swimlane

@example:
diagram.events.on("afterEditorEditing", (value, id, key, subheaderId) => {
    console.log(value, id, key, subheaderId);
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
