---
sidebar_label: API overview
title: Editor API Overview
description: You can have an overview of the Editor API in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editor API overview

## Editor methods

| Name                               | Description                               |
| :--------------------------------- | :---------------------------------------- |
| [](api/editor/import_method.md)    | @getshort(api/editor/import_method.md)    |
| [](api/editor/paint_method.md)     | @getshort(api/editor/paint_method.md)     |
| [](api/editor/parse_method.md)     | @getshort(api/editor/parse_method.md)     |
| [](api/editor/serialize_method.md) | @getshort(api/editor/serialize_method.md) |

## Editor events

| Name                                         | Description                                         |
| :------------------------------------------- | :-------------------------------------------------- |
| [](api/editor/aftergroupmove_event.md)       | @getshort(api/editor/aftergroupmove_event.md)       |
| [](api/editor/afteritemcatch_event.md)       | @getshort(api/editor/afteritemcatch_event.md)       |
| [](api/editor/afteritemmove_event.md)        | @getshort(api/editor/afteritemmove_event.md)        |
| [](api/editor/aftershapeiconclick_event.md)  | @getshort(api/editor/aftershapeiconclick_event.md)  |
| [](api/editor/aftershapemove_event.md)       | @getshort(api/editor/aftershapemove_event.md)       |
| [](api/editor/applybutton_event.md)          | @getshort(api/editor/applybutton_event.md)          |
| [](api/editor/autolayout_event.md)           | @getshort(api/editor/autolayout_event.md)           |
| [](api/editor/beforegroupmove_event.md)      | @getshort(api/editor/beforegroupmove_event.md)      |
| [](api/editor/beforeitemcatch_event.md)      | @getshort(api/editor/beforeitemcatch_event.md)      |
| [](api/editor/beforeitemmove_event.md)       | @getshort(api/editor/beforeitemmove_event.md)       |
| [](api/editor/beforeshapeiconclick_event.md) | @getshort(api/editor/beforeshapeiconclick_event.md) |
| [](api/editor/beforeshapemove_event.md)      | @getshort(api/editor/beforeshapemove_event.md)      |
| [](api/editor/changegridstep_event.md)       | @getshort(api/editor/changegridstep_event.md)       |
| [](api/editor/exportdata_event.md)           | @getshort(api/editor/exportdata_event.md)           |
| [](api/editor/groupmoveend_event.md)         | @getshort(api/editor/groupmoveend_event.md)         |
| [](api/editor/importdata_event.md)           | @getshort(api/editor/importdata_event.md)           |
| [](api/editor/itemmoveend_event.md)          | @getshort(api/editor/itemmoveend_event.md)          |
| [](api/editor/itemtarget_event.md)           | @getshort(api/editor/itemtarget_event.md)           |
| [](api/editor/resetbutton_event.md)          | @getshort(api/editor/resetbutton_event.md)          |
| [](api/editor/shapemoveend_event.md)         | @getshort(api/editor/shapemoveend_event.md)         |
| [](api/editor/shaperesize_event.md)          | @getshort(api/editor/shaperesize_event.md)          |
| [](api/editor/visibility_event.md)           | @getshort(api/editor/visibility_event.md)           |
| [](api/editor/zoomin_event.md)               | @getshort(api/editor/zoomin_event.md)               |
| [](api/editor/zoomout_event.md)              | @getshort(api/editor/zoomout_event.md)              |

In addition to the events listed above, you may also apply [events of the diagram object](../../../api/diagram/api_overview/#diagram-events) while working in the editor. Here is an example of applying the [itemClick](../../../api/diagram/itemclick_event/) event of the Diagram object in the editor:

~~~js
editor.diagram.events.on("itemClick", (id, event) => {
    console.log(id, event);
});
~~~

## Editor properties

| Name                                     | Description                                     |
| :--------------------------------------- | :---------------------------------------------- |
| [](api/editor/autoplacement_property.md) | @getshort(api/editor/autoplacement_property.md) |
| [](api/editor/controls_property.md)      | @getshort(api/editor/controls_property.md)      |
| [](api/editor/defaults_property.md)      | @getshort(api/editor/defaults_property.md)      |
| [](api/editor/editmode_property.md)      | @getshort(api/editor/editmode_property.md)      |
| [](api/editor/gappreview_property.md)    | @getshort(api/editor/gappreview_property.md)    |
| [](api/editor/gridstep_property.md)      | @getshort(api/editor/gridstep_property.md)      |
| [](api/editor/linegap_property.md)       | @getshort(api/editor/linegap_property.md)       |
| [](api/editor/reservedwidth_property.md) | @getshort(api/editor/reservedwidth_property.md) |
| [](api/editor/scale_property.md)         | @getshort(api/editor/scale_property.md)         |
| [](api/editor/scalepreview_property.md)  | @getshort(api/editor/scalepreview_property.md)  |
| [](api/editor/shapebarwidth_property.md) | @getshort(api/editor/shapebarwidth_property.md) |
| [](api/editor/shapesections_property.md) | @getshort(api/editor/shapesections_property.md) |
| [](api/editor/shapetoolbar_property.md)  | @getshort(api/editor/shapetoolbar_property.md)  |
| [](api/editor/shapetype_property.md)     | @getshort(api/editor/shapetype_property.md)     |
| [](api/editor/type_property.md)          | @getshort(api/editor/type_property.md)          |

## HistoryManager API

HistoryManager works automatically by default. In case you need manual application of HistoryManager use the construction `editor.history`.

### HistoryManager methods

| Name                                    | Description                                    |
| :-------------------------------------- | :--------------------------------------------- |
| [](../historymanager/add_method.md)     | @getshort(../historymanager/add_method.md)     |
| [](../historymanager/disable_method.md) | @getshort(../historymanager/disable_method.md) |
| [](../historymanager/enable_method.md)  | @getshort(../historymanager/enable_method.md)  |
| [](../historymanager/isredo_method.md)  | @getshort(../historymanager/isredo_method.md)  |
| [](../historymanager/redo_method.md)    | @getshort(../historymanager/redo_method.md)    |
| [](../historymanager/reset_method.md)   | @getshort(../historymanager/reset_method.md)   |
| [](../historymanager/undo_method.md)    | @getshort(../historymanager/undo_method.md)    |

### HistoryManager properties

| Name                                        | Description                                        |
| :------------------------------------------ | :------------------------------------------------- |
| [](../historymanager/disabled_property.md)  | @getshort(../historymanager/disabled_property.md)  |
| [](../historymanager/savedelay_property.md) | @getshort(../historymanager/savedelay_property.md) |
