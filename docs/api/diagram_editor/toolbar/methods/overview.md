---
sidebar_label: Methods overview
title: Toolbar Methods Overview
description: You can learn about Toolbar methods in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Toolbar methods overview

| Name                                                         | Description                                                         |
| :----------------------------------------------------------- | :------------------------------------------------------------------ |
| [](api/diagram-editor/toolbar/methods/disable_method.md)     | @getshort(api/diagram-editor/toolbar/methods/disable_method.md)     |
| [](api/diagram-editor/toolbar/methods/enable_method.md)      | @getshort(api/diagram-editor/toolbar/methods/enable_method.md)      |
| [](api/diagram-editor/toolbar/methods/getselected_method.md) | @getshort(api/diagram-editor/toolbar/methods/getselected_method.md) |
| [](api/diagram-editor/toolbar/methods/getstate_method.md)    | @getshort(api/diagram-editor/toolbar/methods/getstate_method.md)    |
| [](api/diagram-editor/toolbar/methods/hide_method.md)        | @getshort(api/diagram-editor/toolbar/methods/hide_method.md)        |
| [](api/diagram-editor/toolbar/methods/paint_method.md)       | @getshort(api/diagram-editor/toolbar/methods/paint_method.md)       |
| [](api/diagram-editor/toolbar/methods/parse_method.md)       | @getshort(api/diagram-editor/toolbar/methods/parse_method.md)       |
| [](api/diagram-editor/toolbar/methods/select_method.md)      | @getshort(api/diagram-editor/toolbar/methods/select_method.md)      |
| [](api/diagram-editor/toolbar/methods/setfocus_method.md)    | @getshort(api/diagram-editor/toolbar/methods/setfocus_method.md)    |
| [](api/diagram-editor/toolbar/methods/setstate_method.md)    | @getshort(api/diagram-editor/toolbar/methods/setstate_method.md)    |
| [](api/diagram-editor/toolbar/methods/show_method.md)        | @getshort(api/diagram-editor/toolbar/methods/show_method.md)        |
| [](api/diagram-editor/toolbar/methods/unselect_method.md)    | @getshort(api/diagram-editor/toolbar/methods/unselect_method.md)    |

:::info
~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// disables the "file" item
editor.toolbar.disable("file");
// disables "file" and "scale" items
editor.toolbar.disable(["file","scale"]);
// disables all items
editor.toolbar.disable();
~~~
:::

# TreeCollection methods overview

:::info
You can use all the [**TreeCollection**](https://docs.dhtmlx.com/suite/category/treecollection-methods/) methods of [**Suite 8**](https://docs.dhtmlx.com/suite/)!
:::

| Name                                                                                        | Description                                                        |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [add()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_add_method/)     | Adds an item to a component                                        |
| [canCopy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_cancopy_method/) | Checks whether it is possible to copy a control into some other control |
| [copy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_copy_method/)   | Adds a copy of an item and places it in the specified position     |
| [eachChild()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachchild_method/) | Iterates through child items of a control                  |
| [eachParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachparent_method/) | Iterates through all the parent items (the immediate parent and its parent, etc until the parent is the component itself) |
| [exists()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_exists_method/) | Checks whether the specified item exists in the component        |
| [filter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_method/) | Filters controls by some criteria                                |
| [forEach()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_foreach_method/) | Iterates over all items of a tree collection                   |
| [getFilters()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getfilters_method/) | Returns an object with the applied filters               |
| [getId()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getid_method/) | Gets the ID of an item                                             |
| [getIndex()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getindex_method/) | Gets the current position of an item                         |
| [getItem()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitem_method/) | Gets an item by its ID                                         |
| [getItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitems_method/) | Gets the child items of a control                            |
| [getLength()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getlength_method/) | Counts child items of a control                            |
| [getParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getparent_method/) | Gets the ID of the parent of the control                   |
| [getRoot()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getroot_method/) | Returns the ID of the master component                         |
| [haveItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_haveitems_method/) | Checks whether an item has children                        |
| [isSaved()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_issaved_method/) | Checks whether the changes made in a tree collection are saved |
| [move()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_move_method/)       | Moves items to different positions                             |
| [refreshItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_refreshitems_method/) | Refreshes child items of a control                   |
| [remove()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_remove_method/)   | Removes an item                                                |
| [removeAll()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_method/) | Clears the component of all controls                       |
| [resetFilter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_resetfilter_method/) | Resets the active filters                              |
| [restoreOrder()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_restoreorder_method/) | Restores the component to the state previous to sorting / filtering |
| [save()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_save_method/) | Saves changes made in a tree collection to the server side           |
| [serialize()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_serialize_method/) | Serializes the component data into JSON, XML or CSV format |
| [sort()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/) | Sorts controls according to some criteria                            |
| [update()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_update_method/) | Changes an item                                                  |

:::info
~~~js
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// removes all the toolbar items
editor.toolbar.data.removeAll();
~~~
:::
