---
sidebar_label: beforeEditorOpen
title: beforeEditorOpen Event
description: You can learn about the beforeEditorOpen event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeEditorOpen

### Description

@short: fires before the inline editor of an item is opened

@descr:

### Usage

~~~js
beforeEditorOpen: (id: string | number, key: string, subId?: string) => boolean | void;
~~~

### Parameters

- `id` - (mandatory) the id of the item
- `key` - (mandatory) the name of the property to be edited
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Returns

`False` to block opening of the inline editor, otherwise `true`.

### Example

~~~js
diagram.events.on("beforeEditorOpen", (id, key, subId) => {
    console.log(id, key, subId);
    return true;
});
~~~

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)

**Change log**: - SubHeaderId parameter has been changed to subId in v4.1.
- Added in v4.0.
