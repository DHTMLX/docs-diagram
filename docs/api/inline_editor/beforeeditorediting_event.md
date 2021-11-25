---
sidebar_label: beforeEditorEditing
title: beforeEditorEditing Event
description: You can learn about the beforeEditorEditing event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeEditorEditing

@short: fires before the text value of an item is edited via the inline editor

@signature: {`beforeEditorEditing: (value: string, currentValue: string, id: Id, key: string, subId?: string) => boolean | void;`}

@params:
- `value: string` - the new value of the item
- `currentValue: string` - the old value of the item
- `id: string | number` - the id of the item
- `key: string` - the name of the property to be edited
- `subId: string` - optional, the id of a subheader of a swimlane or a text element of a line

@returns:
`False` to block saving changes after editing an item via the inline editor, otherwise `true`.

@example:
diagram.events.on("beforeEditorEditing", (value, id, key, subheaderId) => {
    console.log(value, id, key, subheaderId);
    return true;
});

@descr:

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
- SubHeaderId parameter is changed to subId in v4.1.
- Added in v4.0.
