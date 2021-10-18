---
sidebar_label: afterEditorOpen
title: afterEditorOpen
description: text
---

# afterEditorOpen

@short: fires after the inline editor of an item is opened

@signature: {`afterEditorOpen: (id: Id, key: string, subId?: string) => void;`}

@params:
- `id: string | number` - the id of the item
- `key: string` - the name of the edited property
- `subId: string` - optional, the id of a subheader of a swimlane or a text element of a line

@example:
diagram.events.on("afterEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
