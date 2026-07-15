---
sidebar_label: exportStyles
title: Свойство exportStyles
description: Узнайте больше о свойстве exportStyles в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# exportStyles

:::info
По умолчанию при экспорте DHTMLX Diagram на сервис экспорта отправляются все стили CSS, подключённые на странице. В результате размер запроса увеличивается, что может привести к сбою запроса.

Чтобы избежать этой проблемы, вы можете уменьшить размер экспортируемых данных с помощью свойства `exportStyles`.
:::

### Описание {#description}

@short: Необязательное свойство. Определяет стили, которые будут отправлены на сервис экспорта при экспорте диаграммы

### Использование {#usage}

~~~jsx
exportStyles?: boolean;
//или
exportStyles?: string[];
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
exportStyles: true
~~~

### Пример {#example}

Установите свойству `exportStyles` значение *false*, чтобы запретить отправку всех стилей на сервис экспорта:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

Либо укажите набор стилей, которые нужно экспортировать. Для этого задайте в массиве `exportStyles` строковые значения с абсолютными путями к нужным стилям:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

:::tip
Используйте только абсолютные пути, а не относительные
:::

**Журнал изменений**: Добавлено в v3.1

**Полезная статья**: [Экспорт диаграммы](guides/data_export.md)

**Связанный пример**: [Diagram. Экспорт. Стили экспорта](https://snippet.dhtmlx.com/jm8if6nh)
