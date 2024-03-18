---
sidebar_label: Toolbar events!!
title: Events of Toolbar
description: You can learn about events of Toolbar in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

:::info
You can use all the [**Toolbar**](https://docs.dhtmlx.com/suite/category/toolbar-events/) events of **Suite 8**!
:::

| Name                                                                                 | Description                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Fires after hiding a sub-item of Toolbar                           |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Fires before hiding a sub-item of Toolbar                          |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | Fires after a click on a control                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | Fires on entering a text into the input field                      |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | Fires when a control is blurred                                    |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Fires on changing the value in the Input control of Toolbar        |
| [inputCreated](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputcreated_event/)| Fires when a new input is added                                    |
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

editor.toolbar.events.on("click", (editor, event) => {
    // some logic
});
~~~
