---
sidebar_label: beforeCellsRemove
title: beforeCellsRemove Event of Cell Manager
description: You can learn about the beforeCellsRemove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsRemove

### Description

@short: fires before cells of the swimlane are removed

@descr:

### Usage

~~~js
beforeCellsRemove: (swimlaneId: string | number) => boolean | void;
~~~

### Parameters

`swimlaneId` - (mandatory) the id of the item

### Returns

`False` to prevent removing of the cells, otherwise `true`.

### Example

~~~js
diagram.events.on("beforeCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
