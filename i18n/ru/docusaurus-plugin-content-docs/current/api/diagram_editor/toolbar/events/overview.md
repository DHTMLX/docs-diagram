---
sidebar_label: Обзор событий
title: Обзор событий Toolbar
description: Узнайте о событиях Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Обзор событий Toolbar

Вы можете использовать следующие события [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/) из [**Suite**](https://docs.dhtmlx.com/suite/):

| Название                                                                             | Описание                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Срабатывает после скрытия дочернего элемента Toolbar               |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Срабатывает перед скрытием дочернего элемента Toolbar               |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | Срабатывает после клика по элементу управления                     |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | Срабатывает при вводе текста в поле ввода                          |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | Срабатывает при потере фокуса элементом управления                 |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Срабатывает при изменении значения в элементе управления Input компонента Toolbar |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | Срабатывает при получении фокуса элементом управления               |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Срабатывает при нажатии любой клавиши, когда элемент управления Toolbar находится в фокусе |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | Срабатывает при разворачивании элемента управления меню             |

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

# Обзор событий TreeCollection

Вы можете использовать следующие события [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/) из [**Suite**](https://docs.dhtmlx.com/suite/):

| Название                                                                                                | Описание                                                |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)            | Срабатывает после добавления нового элемента в древовидную коллекцию |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/)      | Срабатывает после удаления нового элемента из древовидной коллекции |
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)          | Срабатывает перед добавлением нового элемента в древовидную коллекцию |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/)    | Срабатывает перед удалением элемента из древовидной коллекции |
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)                | Срабатывает при изменении древовидной коллекции         |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)                | Срабатывает после фильтрации древовидной коллекции       |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)                    | Срабатывает при загрузке элементов в древовидную коллекцию |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)          | Срабатывает при ошибке загрузки данных                  |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)          | Срабатывает при удалении всех элементов из древовидной коллекции|

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// обрабатывает событие "load"
editor.toolbar.events.on("load", () => {
    // некоторая логика здесь
});
// загружает новые данные toolbar
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
