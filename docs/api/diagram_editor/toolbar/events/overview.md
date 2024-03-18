---
sidebar_label: Events overview
title: Toolbar Events Overview
description: You can learn about Toolbar events in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Toolbar events overview

You can use the following [**Toolbar**](https://docs.dhtmlx.com/suite/category/toolbar-events/) events of [**Suite 8**](https://docs.dhtmlx.com/suite/):

| Name                                                                                 | Description                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Fires after hiding a sub-item of Toolbar                           |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Fires before hiding a sub-item of Toolbar                          |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | Fires after a click on a control                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | Fires on entering a text into the input field                      |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | Fires when a control is blurred                                    |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Fires on changing the value in the Input control of Toolbar        |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | Fires when a control is focused                                    |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Fires when any key is pressed and a control of Toolbar is in focus |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | Fires on expanding a menu control                                  |

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});

editor.toolbar.events.on("click", ($id, event) => {
    // some logic
});
~~~

# TreeCollection events overview

You can use the following [**TreeCollection**](https://docs.dhtmlx.com/suite/category/treecollection-events/) events of [**Suite 8**](https://docs.dhtmlx.com/suite/):

| Name                                                                                                    | Description                                            |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)            | Fires after adding a new item into a tree collection   |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/)      | Fires after removing a new item from a tree collection |
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)          | Fires before adding a new item into a tree collection  |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/)    | Fires before removing an item from a tree collection   |
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)                | Fires when a tree collection is modified               |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)                | Fires after filtering a tree collection                |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)                    | Fires when items are loaded in a tree collection       |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)          | Fires when loading of data fails                       |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)          | Fires when all items are removed from a tree collection|

~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});

editor.toolbar.events.on("load", () => {
    console.log("load event")
});

editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
