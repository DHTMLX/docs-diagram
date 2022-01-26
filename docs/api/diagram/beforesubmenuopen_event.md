---
sidebar_label: beforeSubmenuOpen
title: beforeSubmenuOpen Event
description: You can learn about the beforeSubmenuOpen event in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeSubmenuOpen

### Description

@short: fires before the menu of the subheader is opened
@descr:

### Usage

~~~js
beforeSubmenuOpen: (
    id: string | number, 
    event: MouseEvent, 
    subHeaderId?: string
) => boolean | void;
~~~

### Parameters

- `id` - (mandatory) the id of a swimlane
- `event` - (mandatory) a native HTML event object
- `subHeaderId` - (optional) the id of a subheader of a swimlane

### Returns

Return `false` to block opening the subheader; otherwise, `true`

### Example

~~~js
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related article**: [Event Handling](../../../guides/event_handling/)