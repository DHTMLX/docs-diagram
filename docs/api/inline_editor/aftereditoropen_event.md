---
sidebar_label: afterEditorOpen
title: afterEditorOpen Event
description: You can learn about the afterEditorOpen event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterEditorOpen

### Description

@short: fires after the inline editor of an item is opened

@descr:

### Usage

~~~js
afterEditorOpen: (
    id: string | number, 
    key: string, 
    subId?: string
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (mandatory) the id of the item
- `key` - (mandatory) the name of the edited property
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Example

~~~js
diagram.events.on("afterEditorOpen", (id, key, subId) => {
    console.log(id, key, subId);
});
~~~

**Change log**: 
- SubHeaderId parameter has been changed to subId in v4.1
- Added in v4.0

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)