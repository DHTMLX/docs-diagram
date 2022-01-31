---
sidebar_label: afterCellsRemove
title: afterCellsRemove Event of Cell Manager
description: You can learn about the afterCellsRemove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsRemove

### Description

@short: fires after cells of the swimlane are removed

@descr:

### Usage

~~~js
afterCellsRemove: (swimlaneId: string | number) => void;
~~~

### Parameters

The callback of the event takes the following parameter:

- `swimlaneId` - (mandatory) the id of the item

### Example

~~~js
diagram.events.on("afterCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

@descr:

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
