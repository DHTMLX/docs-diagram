---
sidebar_label: afterCellsMove
title: afterCellsMove Event of Cell Manager
description: You can learn about the afterCellsMove event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsMove

### Description

@short: fires after cells of the swimlane are moved

@descr:

### Usage

~~~js
afterCellsMove: (swimlaneId: string | number) => void;
~~~

### Parameters

`swimlaneId` - (mandatory) the id of the item

### Example

~~~js
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
