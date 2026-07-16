---
sidebar_label: Методы Toolbar
title: Методы Toolbar
description: Вы можете узнать о методах Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

Вы можете использовать следующие методы [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-methods/) библиотеки [**Suite**](https://docs.dhtmlx.com/suite/):

| Название                                                                              | Описание                                                    |
| :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| [disable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_disable_method/)        | Отключает и затемняет элемент(ы) Toolbar                    |
| [enable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_enable_method/)          | Включает отключенный элемент(ы) Toolbar                      |
| [getSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getselected_method/)| Возвращает массив с ID выбранных элементов                |
| [getState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getstate_method/)      | Получает текущие значения/состояния элементов управления                     |
| [hide()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_hide_method/)              | Скрывает элемент Toolbar                                   |
| [isDisabled()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isdisabled_method/)  | Проверяет, отключен ли элемент Toolbar              |
| [isSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isselected_method/)  | Проверяет, выбран ли указанный элемент Toolbar        |
| [paint()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_paint_method/)            | Перерисовывает Toolbar на странице                                 |
| [select()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_select_method/)          | Выбирает указанный элемент Toolbar                        |
| [setFocus()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setfocus_method/)      | Устанавливает фокус на элемент управления Input по его ID                   |
| [setState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setstate_method/)      | Устанавливает значения/состояния элементов управления                             |
| [show()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_show_method/)              | Показывает элемент Toolbar                                   |
| [unselect()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_unselect_method/)      | Снимает выделение с выбранного элемента Toolbar                          |

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// отключает элемент "file"
editor.toolbar.disable("$file");
// отключает элементы "file" и "scale"
editor.toolbar.disable(["$file", "$scale"]);
// отключает все элементы
editor.toolbar.disable();
~~~
