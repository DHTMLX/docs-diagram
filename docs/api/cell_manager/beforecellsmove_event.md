---
sidebar_label: beforeCellsMove
title: beforeCellsMove Event of Cell Manager
description: You can learn about the beforeCellsMove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# beforeCellsMove

### Description

@short: fires before cells of the swimlane are moved

@descr:

### Usage

~~~js
beforeCellsMove: (swimlaneId: string | number) => boolean | void;
~~~

### Parameters

- `swimlaneId` - (mandatory) the id of the item

### Returns

Return `false` to prevent moving of the cells, otherwise `true`

### Example

~~~js
diagram.events.on("beforeCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
