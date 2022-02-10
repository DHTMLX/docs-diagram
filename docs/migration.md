---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Migration to newer versions


4.1 -> 4.2
--------------

### API

In v4.2, the **defaultLinkType** property is deprecated. 

Starting from v4.2, you need to apply the new [lineConfig](../api/diagram/lineconfig_property/) property to specify the default type for connector lines.

~~~js title="Before v4.2"
const diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType: "dash"
});
~~~

~~~js {2-4} title="From v4.2"
const diagram = new dhx.Diagram("diagram_container", { 
    lineConfig: {
        lineType: "dash",
    },
    // other config parameters
});
~~~

### Editor API

The syntax of specifying basic sets of items for the sections of the left panel of the editor has been changed.

Before v4.2, you could set boolean *true* value to the array of the section's items to display all available flow-chart shapes in the section:

~~~js {3} title="Before v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Starting from v4.2, you need to use the different syntax for this purpose:

~~~js {3} title="From v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [{ flowShapes: true }],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Besides, it became possible to specify other basic sets of items via the related *key:value* pairs. For more details, check the [shapeSections](../api/editor/shapesections_property/) article.

3.1 -> 4.0
------------

### API

The **shapeHover** event has been deprecated in v4.0. Starting with v4.0, use the new [itemMouseOver](../api/diagram/itemmouseover_event/) event instead.

~~~js title="Before v4.0"
diagram.events.on("shapeHover",function(id,e){
    console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});
~~~

~~~js title="From v4.0"
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

3.0 -> 3.1
------------

### Editor API

The **shapeMove** event of the editor object has been deprecated in v3.1. Starting with v3.1, use the new **BeforeShapeMove** and **AfterShapeMove** events instead.

~~~js title="Before v3.1"
editor.events.on("shapeMove",function() {
    console.log("The shape is moved");
});
~~~

~~~js title="From v3.1"
// BeforeShapeMove event
editor.events.on("BeforeShapeMove", function(events) {
    console.log("Before the shape is moved:", events);
    return true;
});

// AfterShapeMove event
editor.events.on("AfterShapeMove", function(events) {
    console.log("After the shape is moved:", events);
});
~~~

## 2.2 -> 3.0

### Creating custom shapes

The way of creating custom shapes has been changed, simplified and improved.

Starting from v3.0, in order to create your own types of shapes, the new **addShape** method should be used instead of the *diagram.flowShapes* object. The method provides you with the ability to create HTML templates that will work in different browsers. Besides, the method allows creating and editing custom shapes in Diagram Editor.

Despite the *diagram.flowShapes* object has been deprecated, it will still continue working.

### Toolbar buttons in Editor

Before version 3.0 you were able to show/hide toolbar buttons in Diagram Editor via the related *showApply, showReset, showExport* configuration properties of the Editor.

In the version 3.0 these properties are deprecated and removed. Instead, the **controls** config property that contains a set of *control_name:value* pairs is added. Thus, the properties are replaced with:

- showApply -> controls.apply
- showReset -> controls.reset
- showExport -> controls.export

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { 
        apply: false,
        reset: false,
        export: true
    },
});
~~~

To enable/disable a toolbar button you need to specify the value of the control to *true* (by default) or *false*.

See the full list of the available controls in the [Toolbar](../guides/diagram_editor/toolbar/) article.

## 1.1 -> 2.0

### Removed API

- diagram.eachChild

### Changed API

- diagram.addItem -> [diagram.data.add](../api/data_collection/add_method/)
- diagram.attachEvent -> [diagram.events.on](../guides/event_handling/#attaching-event-listeners)
- diagram.callEvent -> [diagram.events.fire](../guides/event_handling/#calling-events)
- diagram.clearAll -> [diagram.data.removeAll](../api/data_collection/removeall_method/)
- diagram.deleteItem -> [diagram.data.remove](../api/data_collection/remove_method/)
- diagram.detachEvent -> [diagram.events.detach](../guides/event_handling/#detaching-event-listeners)
- diagram.eachItem -> [diagram.data.map](../api/data_collection/map_method/)
- diagram.getItem -> [diagram.data.getItem](../api/data_collection/getitem_method/)
- diagram.getSelectedId -> [diagram.selection.getId](../api/selection/getid_method/)
- diagram.load -> [diagram.data.load](../api/data_collection/load_method/) 
- diagram.parse -> [diagram.data.parse](../api/data_collection/parse_method/)
- diagram.selectItem -> [diagram.selection.add](../api/selection/add_method/)
- diagram.serialize -> [diagram.data.serialize](../api/data_collection/serialize_method/)
- diagram.unselectItem -> [diagram.selection.remove](../api/selection/remove_method/)
- diagram.updateItem -> [diagram.data.update](../api/data_collection/update_method/)