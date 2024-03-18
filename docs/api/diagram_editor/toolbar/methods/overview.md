---
sidebar_label: Methods overview
title: Toolbar Methods Overview
description: You can learn about Toolbar methods in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Toolbar methods overview

:::info
Use the [`parse()`](api/diagram_editor/toolbar/methods/parse_method.md) method to manipulate data in Toolbar. This method covers almost all common cases for working with Toolbar.
:::

You can use the following [**Toolbar**](https://docs.dhtmlx.com/suite/category/toolbar-methods/) methods of [**Suite 8**](https://docs.dhtmlx.com/suite/):

| Name                                                                                  | Description                                                |
| :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| [disable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_disable_method/)        | Disables and dims an item(s) of Toolbar                    |
| [enable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_enable_method/)          | Enables a disabled item(s) of Toolbar                      |
| [getSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getselected_method/)| Returns an array with IDs of selected items                |
| [getState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getstate_method/)      | Gets current values/states of controls                     |
| [hide()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_hide_method/)              | Hides an item of Toolbar                                   |
| [isDisabled()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isdisabled_method/)  | Checks whether an item of Toolbar is disabled              |
| [isSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isselected_method/)  | Checks whether a specified Toolbar item is selected        |
| [paint()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_paint_method/)            | Repaints Toolbar on a page                                 |
| [select()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_select_method/)          | Selects a specified item of Toolbar                        |
| [setFocus()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setfocus_method/)      | Sets focus on an Input control by its ID                   |
| [setState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setstate_method/)      | Sets values/states of controls                             |
| [show()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_show_method/)              | Shows an item of Toolbar                                   |
| [unselect()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_unselect_method/)      | Unselects a selected Toolbar item                          |

~~~js {7-12}
const editor = new dhx.DiagramEditor("editor", {
    type: "default",
    view: {
        toolbar: true,
    }
});
// disables the "file" item
editor.toolbar.disable("$file");
// disables "file" and "scale" items
editor.toolbar.disable(["$file","$scale"]);
// disables all items
editor.toolbar.disable();
~~~

# TreeCollection methods overview

You can use the following [**TreeCollection**](https://docs.dhtmlx.com/suite/category/treecollection-methods/) methods of [**Suite 8**](https://docs.dhtmlx.com/suite/):

| Name                                                                                        | Description                                                      |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
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
