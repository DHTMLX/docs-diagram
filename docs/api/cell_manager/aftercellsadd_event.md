---
sidebar_label: afterCellsAdd
title: afterCellsAdd Event of Cell Manager
description: You can learn about the afterCellsAdd event of Cell Manager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# afterCellsAdd

### Description

@short: fires after new cells are added to a swimlane

@descr:

### Usage

~~~js
afterCellsAdd: (swimlaneId: string | number) => void;
~~~

### Parameters

`swimlaneId` - (mandatory) the id of the item

### Example

~~~js
diagram.events.on("afterCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

@descr:

**Change log**: Added in v4.0

**Related articles**: [Configuring Swimlanes](../../../swimlanes/index/)
