---
sidebar_label: Toolbar methods!!
title: Methods of Toolbar
description: You can learn about methods of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

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

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// disables the "file" item
editor.toolbar.disable("$file");
// disables "file" and "scale" items
editor.toolbar.disable(["$file", "$scale"]);
// disables all items
editor.toolbar.disable();
~~~
