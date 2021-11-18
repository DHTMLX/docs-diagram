---
sidebar_label: afterEditorEditing
title: afterEditorEditing Event
description: text
---

# afterEditorEditing

@short: fires after the text value of an item is edited via the inline editor  

@signature: {`afterEditorEditing: (value: string, id: Id, key: string, subId?: string) => void;`}

@params:
- `value: string` - the new value of the item
- `id: string | number`- the id of the item
- `key: string` - the name of the edited property
- `subId: string` - optional, the id of a subheader of a swimlane or a text element of a line

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
