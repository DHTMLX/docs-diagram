---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Migration to newer versions

## 5.0 -> 6.0

### Diagram Editor structure

The main parts of the Diagram Editor are renamed:

- Left panel -> [Shapebar](guides/diagram_editor/shapebar.md)
- Right panel -> [Editbar](guides/diagram_editor/editbar.md) is [provided with a flexible configuration](/whats_new/#new-functionality)

The default [Toolbar](guides/diagram_editor/toolbar.md) structure has been modified. It became highly configurable as well, so you can also add custom Toolbar elements.

### Diagram Editor API

The `view` object is introduced for configuring the Diagram Editor panels:

~~~jsx
view?: {
    toolbar?: boolean | obj,
    shapebar?: boolean | obj,
    editbar?: boolean | obj
}
~~~

Check the related API overview guides to explore the new possibilities of managing panels:

- [View API overview](/api/diagram_editor/view/api_overview/)
- [Toolbar API overview](/api/diagram_editor/toolbar/api_overview/)
- [Shapebar API overview](/api/diagram_editor/shapebar/api_overview/)
- [Editbar API overview](/api/diagram_editor/editbar/api_overview/)

#### Deprecated methods

- The `setViewMode()` method of Diagram Editor is deprecated and no longer supported. Instead, use the [`show()`](../api/diagram_editor/view/methods/show_method/)/[`hide()`](../api/diagram_editor/view/methods/hide_method/) methods of the `view` object.

~~~jsx {4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.setViewMode("preview"); // "preview" or "edit"
~~~

~~~jsx {4-5} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.view.hide("shapebar"); 
editor.view.hide("editbar");
~~~

#### Deprecated properties

- The `reservedWidth` property of Diagram Editor is deprecated and no longer supported.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    reservedWidth: 150
});
~~~

Instead, use the following syntax:

~~~jsx title="From v6.0"
editor.diagram.config.margin = 40; 
~~~

- The `editMode` property of Diagram Editor is deprecated and no longer supported. Instead, use the corresponding property of the `view` object ([toolbar](/api/diagram_editor/toolbar/api_overview/), [shapebar](/api/diagram_editor/shapebar/api_overview/), [editbar](/api/diagram_editor/editbar/api_overview/)).

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    editMode: false
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: false,
        shapebar: false, // only for "default" mode
        editbar: false
    }
});
~~~

- The `controls` property of Diagram Editor is deprecated and no longer supported. Instead, use the [`items`](/api/diagram_editor/toolbar/config/items_property/) property of the `view.toolbar` configuration.

~~~jsx {2-4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { 
        // ...
    }
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: {
            items: []
        }
    }
});
~~~

- The `shapeBarWidth` property of Diagram Editor is deprecated and no longer supported. Instead, use the [`width`](/api/diagram_editor/shapebar/config/width_property/) property of the `view.shapebar` configuration.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeBarWidth: 190
});
~~~

~~~jsx {3-7} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 300 by default
        }
    }
});
~~~

- The `shapeSections` property of Diagram Editor is deprecated and no longer supported. Instead, use the [`sections`](/api/diagram_editor/shapebar/config/sections_property/) property of the `view.shapebar` configuration.

~~~jsx {2-7} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],   
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    }
});
~~~

~~~jsx {3-12} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],   
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

- The `gapPreview` property of Diagram Editor is deprecated and no longer supported. Instead, use the `gap` property of the [`preview`](/api/diagram_editor/shapebar/config/preview_property/) object of the `view.shapebar` configuration.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

- The `scalePreview` property of Diagram Editor is deprecated and no longer supported. Instead, use the `scale` property of the [`preview`](/api/diagram_editor/shapebar/config/preview_property/) object of the `view.shapebar` configuration.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

#### Deprecated events

- The following events of Diagram Editor are deprecated and no longer supported, since there are no corresponding buttons in the toolbar: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`. Instead, you can listen to the `click` event of the `toolbar` object of Diagram Editor:

~~~jsx
editor.toolbar.events.on("click", id => console.log(id));
~~~

:::note
The names of the [service elements](/guides/diagram_editor/toolbar/#service-elements) ids start from the `$` symbol.
:::

- The `changeGridStep` event of Diagram Editor is deprecated and no longer supported.

### Diagram Selection API

- The `getId()` method of the Selection object of Diagram is deprecated and no longer supported. Instead you can use the [`getIds()`](/api/selection/getids_method/) and [`getItem()`](/api/selection/getitem_method/) methods of the Selection object. Check the examples below:

~~~jsx {7} title="Before v6.0"
// diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

const id = diagram.selection.getId(); // -> "2"
~~~

~~~jsx {7-11} title="From v6.0"
// a diagram must be created with the "select:true" option
const diagram = new dhx.Diagram("diagram_container", { 
    select: true 
});
diagram.data.parse(data);

// returning the last selected element
let id = diagram.selection.getIds().at(-1);
id = diagram.selection.getItem().id;
~~~

### Shape properties

The usage of the `text` property of the [Shape configuration object](/shapes/configuration_properties/) is limited to the string value only. Its usage as an array of string values while configuring a custom shape is deprecated and no longer supported.

### Line titles

The titles of Lines are moved from the `line` objects to the common data structure on the same level with Lines and defined as [`lineTitles`](../line_titles/) objects.

Before v6.0 titles of lines have been specified inside the `line` object as follows:

~~~jsx title="Before v6.0"
const data = [
    // line object
    {
        // line object properties
        title?: {
            fontSize?: number | string, // 14 by default
            lineHeight?: number | string, // 14 by default
            textAlign?: "center" | "left" | "right", // "center" by default
            textVerticalAlign?: string,
            fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
            fontColor?: string, // "#4C4C4C" by default
            fontWeight?: string, // "500" by default
            fill?: string,
            editable?: boolean, // true by default
            hidden?: boolean,
            draggable?: boolean,
            autoPosition?: boolean,
            text?: [
                {
                    id?: string | number,
                    type?: "$linetext",
                    width?: number,
                    height?: number,
                    distance?: number,
                    autoPosition?: boolean,
                    hidden?: boolean,
                    editable?: boolean, // true by default
                    draggable?: boolean,
                    fill?: string,
                    text?: string,
                    fontSize?: number | string, // 14 by default
                    lineHeight?: number | string, // 14 by default
                    fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
                    fontColor?: string, // "#4C4C4C" by default
                    fontWeight?: string, // "500" by default
                    textAlign?: "center" | "left" | "right", // "center" by default
                    textVerticalAlign?: "center" | "top" | "bottom" // "center" by default
                },
                // more objects for text items of a line
            ]
        }
    },
    // more line objects
]
~~~

From v6.0 line titles are defined in separate objects with the **"lineTitle"** type. The `lineTitle` object has the following configuration properties:

~~~jsx title="From v6.0"
const data = [
    // line title object
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number, 

        distance?: number, // 50 by default
        autoPosition?: boolean, // true by default
        editable?: boolean, // true by default
        fixed?: boolean, // false by default
        hidden?: boolean, // false by default

        fill?: string,
        fontSize?: string | number, // 14 by default
        lineHeight?: string | number, // 14 by default
        fontStyle?: "normal" | "italic" | "oblique", // "normal" by default
        fontColor?: string, // "#4C4C4C" by default
        fontWeight?: string, // "500" by default
        textAlign?: "center" | "left" | "right" // "center" by default
    },
    // more objects
];
~~~

Check the details in the LineTitles [API](/line_titles/configuration_properties/) and [guides](/line_titles/).

### Localization

Due to the modifications in the Diagram editor interface, the locale settings have been updated. Check the [Localization guides](/guides/localization/) for details.

## 4.2 -> 5.0

### Diagram API

The **lineGap** property of Diagram is deprecated and no longer supported. Instead, use the **lineGap** parameter of the [lineConfig](diagram/api/diagram/lineconfig_property.md) property.

~~~jsx {3} title="Before v5.0"
const diagram = new dhx.Diagram("diagram_container", { 
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const diagram = new dhx.Diagram("diagram_container", { 
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // other config parameters
});
~~~

### Editor API

The **lineGap** property of Diagram Editor is deprecated and no longer supported. Instead, use the **lineGap** parameter inside the `lineConfig` property.

~~~jsx {3} title="Before v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // other config parameters
});
~~~

## 4.1 -> 4.2

### Diagram API

In v4.2, the **defaultLinkType** property is deprecated. 

Starting from v4.2, you need to apply the new [lineConfig](../api/diagram/lineconfig_property/) property to specify the default type for connector lines.

~~~jsx title="Before v4.2"
const diagram = new dhx.Diagram("diagram_container", { 
    defaultLinkType: "dash"
});
~~~

~~~jsx {2-4} title="From v4.2"
const diagram = new dhx.Diagram("diagram_container", { 
    lineConfig: {
        lineType: "dash",
    },
    // other config parameters
});
~~~

### Editor API

The syntax of specifying basic sets of items for sections in the left panel of the editor has been changed.

Before v4.2, you could set boolean *true* value to the array of the section's items to display all available flow-chart shapes in the section:

~~~jsx {3} title="Before v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Starting from v4.2, you need to use the different syntax for this purpose:

~~~jsx {3} title="From v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [{ flowShapes: true }],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

Besides, it became possible to specify other basic sets of items via the related *key:value* pairs. For more details, check the `shapeSections` article.

## 3.1 -> 4.0

### API

The **shapeHover** event has been deprecated in v4.0. Starting with v4.0, use the new [itemMouseOver](../api/diagram/itemmouseover_event/) event instead.

~~~jsx title="Before v4.0"
diagram.events.on("shapeHover", (id,e) => {
    console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});
~~~

~~~jsx title="From v4.0"
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// For diagram editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

## 3.0 -> 3.1

### Editor API

The **shapeMove** event of the editor object has been deprecated in v3.1. Starting with v3.1, use the new **BeforeShapeMove** and **AfterShapeMove** events instead.

~~~jsx title="Before v3.1"
editor.events.on("shapeMove", () => {
    console.log("The shape is moved");
});
~~~

~~~jsx title="From v3.1"
// BeforeShapeMove event
editor.events.on("BeforeShapeMove", (e) => {
    console.log("Before the shape is moved:", e);
    return true;
});

// AfterShapeMove event
editor.events.on("AfterShapeMove", (e) => {
    console.log("After the shape is moved:", e);
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

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { 
        apply: false,
        reset: false,
        export: true
    }
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
- diagram.getSelectedId -> `diagram.selection.getId`
- diagram.load -> [diagram.data.load](../api/data_collection/load_method/) 
- diagram.parse -> [diagram.data.parse](../api/data_collection/parse_method/)
- diagram.selectItem -> [diagram.selection.add](../api/selection/add_method/)
- diagram.serialize -> [diagram.data.serialize](../api/data_collection/serialize_method/)
- diagram.unselectItem -> [diagram.selection.remove](../api/selection/remove_method/)
- diagram.updateItem -> [diagram.data.update](../api/data_collection/update_method/) 
