---
sidebar_label: TreeCollection 方法
title: Toolbar 的 TreeCollection 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的 TreeCollection 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

您可以使用 [**Suite**](https://docs.dhtmlx.com/suite/) 中的以下 [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-methods/) 方法：

| 名称                                                                                        | 描述                                                        |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [add()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_add_method/)     | 向组件添加一个项目                                        |
| [canCopy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_cancopy_method/) | 检查是否可以将某个控件复制到另一个控件中 |
| [copy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_copy_method/)   | 添加项目的副本并将其放置在指定位置     |
| [eachChild()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachchild_method/) | 遍历控件的子项目                  |
| [eachParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachparent_method/) | 遍历所有父级项目（直接父项及其父项，依此类推，直到父项为组件本身） |
| [exists()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_exists_method/) | 检查指定项目是否存在于组件中        |
| [filter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_method/) | 按指定条件筛选控件                                |
| [forEach()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_foreach_method/) | 遍历树集合的所有项目                   |
| [getFilters()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getfilters_method/) | 返回包含已应用筛选条件的对象               |
| [getId()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getid_method/) | 获取项目的 ID                                             |
| [getIndex()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getindex_method/) | 获取项目的当前位置                         |
| [getItem()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitem_method/) | 通过 ID 获取项目                                         |
| [getItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitems_method/) | 获取控件的子项目                            |
| [getLength()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getlength_method/) | 统计控件的子项目数量                            |
| [getParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getparent_method/) | 获取控件父项的 ID                   |
| [getRoot()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getroot_method/) | 返回主组件的 ID                         |
| [haveItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_haveitems_method/) | 检查项目是否包含子项目                        |
| [move()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_move_method/)       | 将项目移动到不同位置                             |
| [refreshItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_refreshitems_method/) | 刷新控件的子项目                   |
| [remove()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_remove_method/)   | 删除一个项目                                                |
| [removeAll()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_method/) | 清空组件中的所有控件                       |
| [resetFilter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_resetfilter_method/) | 重置当前生效的筛选条件                              |
| [restoreOrder()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_restoreorder_method/) | 将组件恢复到排序/筛选之前的状态 |
| [save()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_save_method/) | 将树集合中所做的更改保存到服务器端           |
| [serialize()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_serialize_method/) | 将组件数据序列化为 JSON、XML 或 CSV 格式 |
| [sort()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/) | 根据指定条件对控件进行排序                            |
| [update()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_update_method/) | 更改一个项目                                                  |

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 删除 Toolbar 中的所有项目
editor.toolbar.data.removeAll();
~~~
