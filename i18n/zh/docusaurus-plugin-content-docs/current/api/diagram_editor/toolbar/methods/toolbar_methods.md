---
sidebar_label: Toolbar 方法
title: Toolbar 的方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

您可以使用 [**Suite**](https://docs.dhtmlx.com/suite/) 中的以下 [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-methods/) 方法：

| 名称                                                                                  | 描述                                                |
| :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| [disable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_disable_method/)        | 禁用并淡化 Toolbar 的一个或多个项目                    |
| [enable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_enable_method/)          | 启用 Toolbar 中已禁用的一个或多个项目                      |
| [getSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getselected_method/)| 返回包含已选项目 ID 的数组                |
| [getState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getstate_method/)      | 获取控件的当前值/状态                     |
| [hide()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_hide_method/)              | 隐藏 Toolbar 的一个项目                                   |
| [isDisabled()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isdisabled_method/)  | 检查 Toolbar 的某个项目是否已禁用              |
| [isSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isselected_method/)  | 检查指定的 Toolbar 项目是否已被选中        |
| [paint()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_paint_method/)            | 在页面上重新绘制 Toolbar                                 |
| [select()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_select_method/)          | 选中 Toolbar 的指定项目                        |
| [setFocus()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setfocus_method/)      | 通过 ID 将焦点设置到 Input 控件上                   |
| [setState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setstate_method/)      | 设置控件的值/状态                             |
| [show()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_show_method/)              | 显示 Toolbar 的一个项目                                   |
| [unselect()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_unselect_method/)      | 取消选中已选中的 Toolbar 项目                          |

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 禁用 "file" 项目
editor.toolbar.disable("$file");
// 禁用 "file" 和 "scale" 项目
editor.toolbar.disable(["$file", "$scale"]);
// 禁用所有项目
editor.toolbar.disable();
~~~
