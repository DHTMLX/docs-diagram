---
sidebar_label: afterEditorClose
title: afterEditorClose
description: text
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
