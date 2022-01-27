---
sidebar_label: beforeCellsAdd
title: beforeCellsAdd Event of Cell Manager
description: You can learn about the beforeCellsAdd event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsAdd

### Description

@short: fires before new cells are added to a swimlane

@descr:

### Usage

~~~js
beforeCellsAdd: (swimlaneId: string | number) => boolean | void;
~~~

### Parameters

`swimlaneId` - (mandatory) the id of the item

### Returns

`False` to prevent adding of new cells, otherwise `true`.

### Example

~~~js
diagram.events.on("beforeCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
