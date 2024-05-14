---
sidebar_label: beforeEditorEditing
title: beforeEditorEditing Event
description: You can learn about the beforeEditorEditing event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeEditorEditing

### Description

@short: Fires before the text value of an item is edited via the inline editor

### Usage

~~~jsx
beforeEditorEditing: (
    value: string, 
    currentValue: string, 
    id: string | number, 
    key: string, 
    subId?: string
) => boolean | void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `value` - (required) the new value of the item
- `currentValue` - (required) the old value of the item
- `id` - (required) the id of the item
- `key` - (required) the name of the property to be edited
- `subId` - (optional) the id of a subheader of a swimlane or a text element of a line

### Returns

Return `false` to block saving changes after editing an item via the inline editor, otherwise `true`

### Example

~~~jsx {9-12}
// initializing Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// loading data
diagram.data.parse(data);

// attaching a handler to the event
diagram.events.on("beforeEditorEditing", (value, id, key, subId) => {
    console.log(value, id, key, subId);
    return true;
});
~~~

**Change log**:

- The **subHeaderId** parameter has been changed to **subId** in v4.1
- Added in v4.0

**Related samples**:

- [Diagram. Default mode. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart mode. Events](https://snippet.dhtmlx.com/l38pct7c)
