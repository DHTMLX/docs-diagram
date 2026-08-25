---
sidebar_label: События TreeCollection
title: События TreeCollection в Toolbar
description: Вы можете узнать о событиях TreeCollection в Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

Вы можете использовать следующие события [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/) библиотеки [**Suite**](https://docs.dhtmlx.com/suite/):

| Название                                                                                             | Описание                                              |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)       | Происходит после добавления нового элемента в древовидную коллекцию  |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/) | Происходит после удаления элемента из древовидной коллекции|
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)     | Происходит перед добавлением нового элемента в древовидную коллекцию |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/) | Происходит перед удалением элемента из древовидной коллекции|
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)           | Происходит при изменении древовидной коллекции              |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)           | Происходит после фильтрации древовидной коллекции               |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)               | Происходит при загрузке элементов в древовидную коллекцию      |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)     | Происходит при ошибке загрузки данных                      |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)     | Происходит при удалении всех элементов из древовидной коллекции|

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// обрабатывает событие "load"
editor.toolbar.events.on("load", () => {
    // некоторая логика
});
// загружает новые данные Toolbar
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
