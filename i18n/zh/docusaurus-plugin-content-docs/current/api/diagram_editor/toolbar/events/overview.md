---
sidebar_label: 事件概述
title: Toolbar 事件概述
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# Toolbar 事件概述 {#toolbar-events-overview}

您可以使用[**Suite**](https://docs.dhtmlx.com/suite/)的以下 [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/) 事件：

| Name                                                                                 | Description                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | 在隐藏 Toolbar 的子项之后触发                                       |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | 在隐藏 Toolbar 的子项之前触发                                       |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | 在点击控件之后触发                                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | 在输入框中输入文本时触发                                             |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | 在控件失去焦点时触发                                                 |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | 在更改 Toolbar 的 Input 控件的值时触发                               |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | 在控件获得焦点时触发                                                 |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | 在 Toolbar 的某个控件处于焦点状态时按下任意键触发                     |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | 在展开菜单控件时触发                                                 |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 处理 "click" 事件
editor.toolbar.events.on("click", (id, event) => {
    // 一些逻辑
});
~~~

# TreeCollection 事件概述 {#treecollection-events-overview}

您可以使用[**Suite**](https://docs.dhtmlx.com/suite/)的以下 [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/) 事件：

| Name                                                                                                    | Description                                            |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)            | 在向树集合中添加新项之后触发                             |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/)      | 在从树集合中删除新项之后触发                             |
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)          | 在向树集合中添加新项之前触发                             |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/)    | 在从树集合中删除项目之前触发                             |
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)                | 在树集合被修改时触发                                     |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)                | 在筛选树集合之后触发                                     |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)                    | 在树集合中加载项目时触发                                 |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)          | 在数据加载失败时触发                                     |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)          | 在从树集合中删除所有项目时触发                           |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 处理 "load" 事件
editor.toolbar.events.on("load", () => {
    // 一些逻辑
});
// 加载新的 toolbar 数据
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
