---
sidebar_label: History manager API overview
title: History manager API overview 
description: You can check a History manager overview in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# History manager API overview

A set of APIs that you can use for managing the history of actions in the Diagram Editor. Use the `history` keyword to access the History manager via the `editor` object:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default" // only default
});
// ...
editor.history.redo(); // restores an action that has been reverted by the Undo action
~~~

## History manager methods overview

| Name                                                           | Description                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [add()](/api/diagram_editor/historymanager/methods/add_method/) | @getshort(/api/diagram_editor/historymanager/methods/add_method.md) |
| [disable()](/api/diagram_editor/historymanager/methods/disable_method/) | @getshort(/api/diagram_editor/historymanager/methods/disable_method.md) |
| [enable()](/api/diagram_editor/historymanager/methods/enable_method/) | @getshort(/api/diagram_editor/historymanager/methods/enable_method.md) |
| [isRedo()](/api/diagram_editor/historymanager/methods/isredo_method/) | @getshort(/api/diagram_editor/historymanager/methods/isredo_method.md) |
| [isUndo()](/api/diagram_editor/historymanager/methods/isundo_method/) | @getshort(/api/diagram_editor/historymanager/methods/isundo_method.md) |
| [redo()](/api/diagram_editor/historymanager/methods/redo_method/) | @getshort(/api/diagram_editor/historymanager/methods/redo_method.md) |
| [reset()](/api/diagram_editor/historymanager/methods/reset_method/) | @getshort(/api/diagram_editor/historymanager/methods/reset_method.md) |
| [undo()](/api/diagram_editor/historymanager/methods/undo_method/) | @getshort(/api/diagram_editor/historymanager/methods/undo_method.md) |


## History manager properties overview

| Name                                                               | Description                                                               |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [saveDelay](/api/diagram_editor/historymanager/config/savedelay_property/) | @getshort(/api/diagram_editor/historymanager/config/savedelay_property.md) |
