---
sidebar_label: afterEditorOpen
title: afterEditorOpen
description: text
---

# afterEditorOpen

@short: fires after the inline editor of an item is opened

@signature: {`afterEditorOpen: (id: Id, key: string, subHeaderId?: string) => void;`}

@params:
- `id: string | number` - the id of the item
- `key: string` - the name of the edited property
- `subheaderId: string | undefined` - optional, the id of the edited subheader of a swimlane

@example:
diagram.events.on("afterEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
});
// For diagram editor
editor.diagram.events.on("afterEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
});

@descr:

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
