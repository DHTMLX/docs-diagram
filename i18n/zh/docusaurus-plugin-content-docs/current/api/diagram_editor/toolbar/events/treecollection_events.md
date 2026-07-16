---
sidebar_label: TreeCollection 事件
title: Toolbar 的 TreeCollection 事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的 TreeCollection 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

您可以使用 [**Suite**](https://docs.dhtmlx.com/suite/) 中的以下 [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/) 事件：

| 名称                                                                                                 | 描述                                           |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)       | 在向树集合中添加新项目后触发  |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/) | 在从树集合中删除新项目后触发|
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)     | 在向树集合中添加新项目之前触发 |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/) | 在从树集合中删除项目之前触发|
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)           | 当树集合被修改时触发              |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)           | 筛选树集合后触发               |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)               | 当树集合中的项目被加载时触发      |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)     | 当数据加载失败时触发                      |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)     | 当树集合中的所有项目被删除时触发|

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 处理 "load" 事件
editor.toolbar.events.on("load", () => {
    // 此处编写具体逻辑
});
// 加载新的 Toolbar 数据
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
