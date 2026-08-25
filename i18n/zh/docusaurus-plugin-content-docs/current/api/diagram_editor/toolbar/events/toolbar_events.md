---
sidebar_label: Toolbar 事件
title: Toolbar 的事件
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

您可以使用 [**Suite**](https://docs.dhtmlx.com/suite/) 中的以下 [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/) 事件：

| 名称                                                                                 | 描述                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | 在隐藏 Toolbar 的子项后触发                           |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | 在隐藏 Toolbar 的子项之前触发                          |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | 点击控件后触发                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | 在输入框中输入文本时触发                      |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | 当控件失去焦点时触发                                    |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | 更改 Toolbar 中 Input 控件的值时触发        |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | 当控件获得焦点时触发                                    |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | 当 Toolbar 的控件处于焦点状态且按下任意键时触发 |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | 展开菜单控件时触发                                  |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 处理 "click" 事件
editor.toolbar.events.on("click", (id, event) => {
    // 此处编写具体逻辑
});
~~~
