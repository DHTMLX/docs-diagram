---
sidebar_label: Методы TreeCollection
title: Методы TreeCollection в Toolbar
description: Вы можете узнать о методах TreeCollection в Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

Вы можете использовать следующие методы [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-methods/) библиотеки [**Suite**](https://docs.dhtmlx.com/suite/):

| Название                                                                                     | Описание                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [add()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_add_method/)     | Добавляет элемент в компонент                                        |
| [canCopy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_cancopy_method/) | Проверяет, можно ли скопировать элемент управления в другой элемент управления |
| [copy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_copy_method/)   | Добавляет копию элемента и размещает её в указанной позиции     |
| [eachChild()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachchild_method/) | Перебирает дочерние элементы элемента управления                  |
| [eachParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachparent_method/) | Перебирает все родительские элементы (непосредственного родителя и его родителя и так далее, пока родителем не станет сам компонент) |
| [exists()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_exists_method/) | Проверяет, существует ли указанный элемент в компоненте        |
| [filter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_method/) | Фильтрует элементы управления по определённому критерию                                |
| [forEach()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_foreach_method/) | Перебирает все элементы древовидной коллекции                   |
| [getFilters()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getfilters_method/) | Возвращает объект с применёнными фильтрами               |
| [getId()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getid_method/) | Получает ID элемента                                             |
| [getIndex()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getindex_method/) | Получает текущую позицию элемента                         |
| [getItem()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitem_method/) | Получает элемент по его ID                                         |
| [getItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitems_method/) | Получает дочерние элементы элемента управления                            |
| [getLength()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getlength_method/) | Подсчитывает дочерние элементы элемента управления                            |
| [getParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getparent_method/) | Получает ID родителя элемента управления                   |
| [getRoot()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getroot_method/) | Возвращает ID главного компонента                         |
| [haveItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_haveitems_method/) | Проверяет, есть ли у элемента дочерние элементы                        |
| [move()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_move_method/)       | Перемещает элементы на другие позиции                             |
| [refreshItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_refreshitems_method/) | Обновляет дочерние элементы элемента управления                   |
| [remove()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_remove_method/)   | Удаляет элемент                                                |
| [removeAll()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_method/) | Очищает компонент от всех элементов управления                       |
| [resetFilter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_resetfilter_method/) | Сбрасывает активные фильтры                              |
| [restoreOrder()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_restoreorder_method/) | Восстанавливает компонент в состояние, предшествовавшее сортировке/фильтрации |
| [save()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_save_method/) | Сохраняет изменения, внесённые в древовидную коллекцию, на стороне сервера           |
| [serialize()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_serialize_method/) | Сериализует данные компонента в формат JSON, XML или CSV |
| [sort()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/) | Сортирует элементы управления по определённому критерию                            |
| [update()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_update_method/) | Изменяет элемент                                                  |

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// удаляет все элементы Toolbar
editor.toolbar.data.removeAll();
~~~
