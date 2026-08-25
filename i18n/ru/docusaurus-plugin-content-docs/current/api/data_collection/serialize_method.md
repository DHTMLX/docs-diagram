---
sidebar_label: serialize()
title: Метод serialize объекта Data Collection
description: Узнайте о методе serialize объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, тестируйте примеры кода и интерактивные демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# serialize()

### Описание {#description}

@short: Экспортирует текущие данные диаграммы

### Использование {#usage}

~~~jsx
serialize(): object[] | { data: object[]; links: object[] };
~~~

### Возвращаемое значение {#returns}

В зависимости от режима диаграммы метод возвращает:

- `object[]` — (для стандартного режима диаграммы, режима организационной диаграммы и режима ментальной карты) массив объектов для каждого элемента и связи диаграммы
- `{ data: object[]; links: object[] }` — (для режима диаграммы PERT) объект, содержащий:
  - массив объектов `data` (для фигур: `"task"`, `"milestone"`, `"project"`)
  - массив объектов `links` (для соединений между фигурами)

### Пример {#example}

- для стандартного режима диаграммы

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const data = diagram.data.serialize(); // -> [{...}, {...}, {...}, {...}]
~~~

- для режима диаграммы PERT

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert"
});
diagram.data.parse(dataset);

const dataset = diagram.data.serialize(); // -> { data: [...], links: [...] };
~~~

Обратите внимание, что для режима диаграммы PERT объекты `links` в экспортированном объекте данных будут иметь [такие же типы, как в диаграмме Ганта DHTMLX](https://docs.dhtmlx.com/gantt/desktop__link_properties.html). Это значит, что если тип связи в данных диаграммы совпадает с одним из типов связей Ганта, он останется прежним при сериализации. Если тип связи не указан или задан иначе (например, `type: "line"`), он будет преобразован в `type: "0"`.

**Полезная статья**:  [Сохранение и восстановление состояния](guides/loading_data.md#saving-and-restoring-state)
