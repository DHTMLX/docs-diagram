---
sidebar_label: Editor events
title: Editor events overview
description: You can explore the Editor events in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editor events overview

| Name                                                              | Description                                                               |
| :---------------------------------------------------------------  | :------------------------------------------------------------------------ |
| [](../diagram_editor/editor/events/aftergroupmove_event.md)      | @getshort(../diagram_editor/editor/events/aftergroupmove_event.md)       |
| [](../diagram_editor/editor/events/afteritemcatch_event.md)      | @getshort(../diagram_editor/editor/events/afteritemcatch_event.md)       |
| [](../diagram_editor/editor/events/afteritemmove_event.md)       | @getshort(../diagram_editor/editor/events/afteritemmove_event.md)        |
| [](../diagram_editor/editor/events/afterlinetitlemove_event.md)  | @getshort(../diagram_editor/editor/events/afterlinetitlemove_event.md)  |
| [](../diagram_editor/editor/events/aftershapeiconclick_event.md) | @getshort(../diagram_editor/editor/events/aftershapeiconclick_event.md) |
| [](../diagram_editor/editor/events/aftershapemove_event.md)      | @getshort(../diagram_editor/editor/events/aftershapemove_event.md)       |
| [](../diagram_editor/editor/events/beforegroupmove_event.md)     | @getshort(../diagram_editor/editor/events/beforegroupmove_event.md)      |
| [](../diagram_editor/editor/events/beforeitemcatch_event.md)     | @getshort(../diagram_editor/editor/events/beforeitemcatch_event.md)      |
| [](../diagram_editor/editor/events/beforeitemmove_event.md)      | @getshort(../diagram_editor/editor/events/beforeitemmove_event.md)       |
| [](../diagram_editor/editor/events/beforelinetitlemove_event.md) | @getshort(../diagram_editor/editor/events/beforelinetitlemove_event.md) |
| [](../diagram_editor/editor/events/beforeshapeiconclick_event.md)| @getshort(../diagram_editor/editor/events/beforeshapeiconclick_event.md) |
| [](../diagram_editor/editor/events/beforeshapemove_event.md)     | @getshort(../diagram_editor/editor/events/beforeshapemove_event.md)      |
| [](../diagram_editor/editor/events/groupmoveend_event.md)        | @getshort(../diagram_editor/editor/events/groupmoveend_event.md)         |
| [](../diagram_editor/editor/events/itemmoveend_event.md)         | @getshort(../diagram_editor/editor/events/itemmoveend_event.md)          |
| [](../diagram_editor/editor/events/itemtarget_event.md)          | @getshort(../diagram_editor/editor/events/itemtarget_event.md)           |
| [](../diagram_editor/editor/events/linetitlemoveend_event.md)    | @getshort(../diagram_editor/editor/events/linetitlemoveend_event.md)     |
| [](../diagram_editor/editor/events/shapemoveend_event.md)        | @getshort(../diagram_editor/editor/events/shapemoveend_event.md)         |
| [](../diagram_editor/editor/events/shaperesize_event.md)         | @getshort(../diagram_editor/editor/events/shaperesize_event.md)          |
| [](../diagram_editor/editor/events/zoomin_event.md)              | @getshort(../diagram_editor/editor/events/zoomin_event.md)               |
| [](../diagram_editor/editor/events/zoomout_event.md)             | @getshort(../diagram_editor/editor/events/zoomout_event.md)              |

In addition to the events listed above, you may also apply [events of the diagram object](../../../api/diagram/api_overview/#diagram-events) while working in the editor. Here is an example of applying the [itemClick](../../../api/diagram/itemclick_event/) event of the Diagram object in the editor:

~~~js
editor.diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
~~~