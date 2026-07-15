---
sidebar_label: toolbar
title: Свойство toolbar
description: Вы можете изучить свойство toolbar в документации библиотеки DHTMLX JavaScript Diagram. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# toolbar

### Описание {#description}

@short: Необязательный. Массив объектов иконок, который задает панель инструментов с кнопками для элементов

### Использование {#usage}

~~~jsx
toolbar?: [
    {
        id: string,
        content: string,
        check?: function,
        css?: function,
        tooltip?: string
    },
    {...} // другие объекты иконок
];
~~~

### Параметры {#parameters}

Массив `toolbar` включает набор объектов иконок. Каждый объект иконки может содержать следующие параметры:

- `id` - (обязательный) идентификатор иконки
- `content` - (обязательный) содержимое иконки. Может содержать HTML-элемент с именем класса иконки
- `check` - (необязательный) проверяет, должна ли иконка применяться к элементу. Функция принимает объект элемента и возвращает *true*, если иконка будет отображена для этого элемента
- `css` - (необязательный) функция, которая возвращает имя (имена) CSS-класса(ов), который(е) должен(ы) применяться к элементу
- `tooltip` - (необязательный) всплывающая подсказка, которая появляется при наведении на иконку

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true,
    // настройка панели инструментов с кнопками для элементов
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>",
            check: item => !item.assistant && !item.partner,
            tooltip: "Add new shape"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
            check: item => item.parent,
            css: () => "dhx_diagram_toolbar__icon--remove",
            tooltip: "Remove"
        }
    ]
});
~~~

**Журнал изменений**:

- Параметр `tooltip` добавлен в v5.0

**Полезные статьи**:

- [Настройка панели инструментов для фигур](guides/diagram/configuration.md#setting-toolbar-for-shapes)
- [Иконки по умолчанию](https://docs.dhtmlx.com/suite/helpers/icon/)

**Связанный пример**: [Diagram. Конфигурация. Панель инструментов фигур](https://snippet.dhtmlx.com/4if395hd)
