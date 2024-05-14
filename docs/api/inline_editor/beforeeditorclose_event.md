---
sidebar_label: beforeEditorClose
title: beforeEditorClose Event
description: You can learn about the beforeEditorClose event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeEditorClose

### Description

@short: Fires before the inline editor of an item is closed

### Usage

~~~jsx
beforeEditorClose: (
    id: string | number, 
    key: string, 
    subId?: string
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `id` - (required) the id of the item
- `key` - (required) the name of the property to be edited
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Returns

Return `false` to block closing of the inline editor, otherwise `true`.

### Example

~~~jsx {9-11}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeEditorClose", (id, key, subId) => {
    console.log(id, key, subId);
    return true;
});
~~~

**Change log**: 
- The **subHeaderId** parameter has been changed to **subId** in v4.1
- Added in v4.0

**Related samples**:
- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)