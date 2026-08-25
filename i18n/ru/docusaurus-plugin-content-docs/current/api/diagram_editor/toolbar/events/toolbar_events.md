---
sidebar_label: События Toolbar
title: События Toolbar
description: Вы можете узнать о событиях Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

Вы можете использовать следующие события [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/) библиотеки [**Suite**](https://docs.dhtmlx.com/suite/):

| Название                                                                             | Описание                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Происходит после скрытия дочернего элемента Toolbar                           |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Происходит перед скрытием дочернего элемента Toolbar                          |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | Происходит после клика по элементу управления                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | Происходит при вводе текста в поле ввода                      |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | Происходит при потере фокуса элементом управления                                    |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Происходит при изменении значения в элементе управления Input панели Toolbar        |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | Происходит при получении фокуса элементом управления                                    |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Происходит при нажатии любой клавиши, когда элемент управления Toolbar находится в фокусе |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | Происходит при раскрытии элемента управления меню                                  |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// обрабатывает событие "click"
editor.toolbar.events.on("click", (id, event) => {
    // некоторая логика
});
~~~
