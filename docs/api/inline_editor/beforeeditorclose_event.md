---
sidebar_label: beforeEditorClose
title: beforeEditorClose
description: text
---

# beforeEditorClose

@short: fires before the inline editor of an item is closed

@signature: {`beforeEditorClose: (id: Id, key: string, subId?: string) => boolean | void;`}

@params:
- `id: string | number` - the id of the item
- `key: string` - the name of the property to be edited
- `subId: string` - optional, the id of the edited subheader of a swimlane or a text element of a line

@returns:
`False` to block closing of the inline editor, otherwise `true`.

@example:
diagram.events.on("beforeEditorClose", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
    return true;
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0
