---
sidebar_label: Editor events
title: Editor events overview
description: You can explore the Editor events in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editor events overview

| Name                                         | Description                                         |
| :------------------------------------------- | :-------------------------------------------------- |
| [](../editor/aftergroupmove_event.md)       | @getshort(../editor/aftergroupmove_event.md)       |
| [](../editor/afteritemcatch_event.md)       | @getshort(../editor/afteritemcatch_event.md)       |
| [](../editor/afteritemmove_event.md)        | @getshort(../editor/afteritemmove_event.md)        |
| [](../editor/afterlinetitlemove_event.md)   | @getshort(../editor/afterlinetitlemove_event.md)   |
| [](../editor/aftershapeiconclick_event.md)  | @getshort(../editor/aftershapeiconclick_event.md)  |
| [](../editor/aftershapemove_event.md)       | @getshort(../editor/aftershapemove_event.md)       |
| [](../editor/applybutton_event.md)          | @getshort(../editor/applybutton_event.md)          |
| [](../editor/autolayout_event.md)           | @getshort(../editor/autolayout_event.md)           |
| [](../editor/beforegroupmove_event.md)      | @getshort(../editor/beforegroupmove_event.md)      |
| [](../editor/beforeitemcatch_event.md)      | @getshort(../editor/beforeitemcatch_event.md)      |
| [](../editor/beforeitemmove_event.md)       | @getshort(../editor/beforeitemmove_event.md)       |
| [](../editor/beforelinetitlemove_event.md)  | @getshort(../editor/beforelinetitlemove_event.md)  |
| [](../editor/beforeshapeiconclick_event.md) | @getshort(../editor/beforeshapeiconclick_event.md) |
| [](../editor/beforeshapemove_event.md)      | @getshort(../editor/beforeshapemove_event.md)      |
| [](../editor/changegridstep_event.md)       | @getshort(../editor/changegridstep_event.md)       |
| [](../editor/exportdata_event.md)           | @getshort(../editor/exportdata_event.md)           |
| [](../editor/groupmoveend_event.md)         | @getshort(../editor/groupmoveend_event.md)         |
| [](../editor/importdata_event.md)           | @getshort(../editor/importdata_event.md)           |
| [](../editor/itemmoveend_event.md)          | @getshort(../editor/itemmoveend_event.md)          |
| [](../editor/itemtarget_event.md)           | @getshort(../editor/itemtarget_event.md)           |
| [](../editor/linetitlemoveend_event.md)     | @getshort(../editor/linetitlemoveend_event.md)     |
| [](../editor/resetbutton_event.md)          | @getshort(../editor/resetbutton_event.md)          |
| [](../editor/shapemoveend_event.md)         | @getshort(../editor/shapemoveend_event.md)         |
| [](../editor/shaperesize_event.md)          | @getshort(../editor/shaperesize_event.md)          |
| [](../editor/visibility_event.md)           | @getshort(../editor/visibility_event.md)           |
| [](../editor/zoomin_event.md)               | @getshort(../editor/zoomin_event.md)               |
| [](../editor/zoomout_event.md)              | @getshort(../editor/zoomout_event.md)              |

In addition to the events listed above, you may also apply [events of the diagram object](../../../api/diagram/api_overview/#diagram-events) while working in the editor. Here is an example of applying the [itemClick](../../../api/diagram/itemclick_event/) event of the Diagram object in the editor:

~~~js
editor.diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
~~~