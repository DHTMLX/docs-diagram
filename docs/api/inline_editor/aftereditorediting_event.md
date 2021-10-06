---
sidebar_label: afterEditorEditing
title: afterEditorEditing
description: text
---

# afterEditorEditing

@short: fires after the text value of an item is edited via the inline editor  

@signature: {`afterEditorEditing: (value: string, id: Id, key: string, subHeaderId?: string) => void;`}

@params:
- `value: string` - the new value of the item
- `id: string | number`- the id of the item
- `key: string` - the name of the edited property
- `subheaderId: string | undefined` - optional, the id of the edited subheader of a swimlane

@example:
diagram.events.on("afterEditorEditing", (value, id, key, subheaderId) => {
    console.log(value, id, key, subheaderId);
});

@descr:

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
