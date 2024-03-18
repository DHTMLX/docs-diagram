---
sidebar_label: TreeCollection events!!
title: TreeCollection Events of Toolbar
description: You can learn about TreeCollection events of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

You can use the following [**TreeCollection**](https://docs.dhtmlx.com/suite/category/treecollection-events/) events of [**Suite 8**](https://docs.dhtmlx.com/suite/):

| Name                                                                                                 | Description                                           |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event.md)       | Fires after adding a new item into a tree collection  |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event.md) | Fires after removing a new item from a tree collection|
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event.md)     | Fires before adding a new item into a tree collection |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event.md) | Fires before removing an item from a tree collection|
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event.md)           | Fires when a tree collection is modified              |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event.md)           | Fires after filtering a tree collection               |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event.md)               | Fires when items are loaded in a tree collection      |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event.md)     | Fires when loading of data fails                      |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event.md)     | Fires when all items are removed from a tree collection|

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
