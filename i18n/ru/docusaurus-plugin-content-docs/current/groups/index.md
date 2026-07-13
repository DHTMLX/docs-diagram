---
sidebar_label: Groups
title: Groups
description: Вы можете узнать о Groups в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и демонстрации в реальном времени, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Groups {#groups}

## Обзор Group {#group-overview}

Group — это отдельный тип элемента Diagram. Вы можете рисовать простые или более сложные схемы, группируя фигуры или другие Groups различными способами. Вы можете создавать как одноуровневые, так и вложенные Groups, а также настраивать их внешний вид и поведение.

:::note
Groups доступны только в режиме по умолчанию для Diagram/Diagram Editor (type: `"default"`).
:::

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Создание Groups {#creating-groups}

Чтобы создать Group, укажите *"$group"* в качестве значения атрибута `type` внутри объекта группы при подготовке соответствующей JSON-структуры для загрузки в Diagram:

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "User Access"
        },
        groupChildren: ["1.1", "1.2"]
    },
    {
        type: "it",
        id: "1.1",
        x: 50,
        y: 75,
        text: "Remote Desktop"
    },
    {
        type: "it",
        id: "1.2",
        x: 200,
        y: 75,
        text: "Login Server"
    },
];

// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### Свойства {#properties}

Смотрите [полный список свойств конфигурации объекта `group`](groups/configuration_properties.md), которые позволяют настроить позиционирование и внешний вид Group.

## Группировка фигур в режиме PERT {#grouping-shapes-in-the-pert-mode}

Чтобы сгруппировать фигуры типов `"task"` и `"milestone"` в режиме PERT Diagram, используйте объект `"project"` в наборе данных Diagram. Объект `"project"` служит контейнером для задач и вех, работая как Group. Он позволяет создавать PERT-диаграммы с различными уровнями вложенности и обеспечивает визуальную группировку.

~~~jsx
const data = [
    {
        "id": "4.2",
        "text": "QA Testing",
        "type": "project",
        "parent": "4",
        "start_date": new Date(2026, 1, 18),
        "duration": 3,
        "progress": 0,
        "open": true
    },
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    },
    {
        "id": "4.2.2",
        "text": "Usability Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 20),
        "duration": 1
    }
];
~~~

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### Свойства {#properties-1}

Смотрите [полный список свойств конфигурации объекта `"project"`](groups/configuration_properties.md#properties-specific-for-project-object), которые позволяют настроить позиционирование и внешний вид задач и вех в проекте.

## Настройка заголовка Group {#configuring-the-group-header}

Заголовок Group по умолчанию отключён. Чтобы создать Group с заголовком, укажите свойство `header` в объекте конфигурации Group.

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {}
    }
];
~~~

Это свойство содержит несколько атрибутов, которые позволяют легко настроить конфигурацию заголовка Group.
Например, вы можете задать высоту заголовка и его позицию, указать текст заголовка и настроить остальные параметры.

<iframe src="https://snippet.dhtmlx.com/6hunrja8?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="470"></iframe>

Ознакомьтесь с [полным списком свойств API объекта Group](groups/configuration_properties.md).

### Иконка заголовка {#a-header-icon}

Чтобы свернуть или развернуть Group, включите атрибут `closable` свойства [заголовка](groups/configuration_properties.md). В результате в заголовок будет добавлена иконка, позволяющая пользователю разворачивать/сворачивать Group.

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            closable: true
        }
    }
];
~~~

Вы можете изменить цвет иконки с помощью атрибута `iconColor` [объекта Group](groups/configuration_properties.md).

## Настройка поведения элементов Group {#configuring-the-behavior-of-group-items}

По умолчанию вы можете перетащить любой дочерний элемент Group за пределы Group и переместить его в другую Group.
Чтобы изменить поведение элементов Group, используйте атрибуты `groupBehavior` и `padding` свойства `exitArea` объекта [Group](groups/configuration_properties.md).

:::note
Свойство `exitArea` определяет поведение только дочерних элементов первого уровня вложенности настраиваемой Group.
:::

<iframe src="https://snippet.dhtmlx.com/4gxy38ek?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

Значения `"unbound"` и `"boundBorderExtension"` атрибута `groupBehavior` позволяют определить, можно ли перемещать дочерние элементы за пределы Group, а также задать расширение границ Group, когда пользователь пытается перетащить элемент за её пределы. При необходимости вы также можете отключить возможность перетаскивания элементов за пределы Group с помощью значения `"boundNoBorderExtension"`.

![](/img/group_behavior.gif)

Если `groupBehavior` установлено в значение `"boundNoBorderExtension"` или `"boundBorderExtension"`, вы можете задать отступ между Group и краем элемента при перемещении элемента внутри Group. Для этого используйте атрибут `padding`:

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 830,
        height: 400,
        x: 0,
        y: 0,
        exitArea: {
            groupBehavior: "boundBorderExtension",
            padding: 10
        },
        //fixed: true,
        groupChildren: ["1.1", "1.2", "1.3"]
    },
    // ...
];
~~~
