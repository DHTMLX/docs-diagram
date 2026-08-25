---
sidebar_label: parse()
title: Метод parse класса Editor
description: Вы можете узнать больше о методе parse редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# parse()

### Описание {#description}

@short: Загружает данные в редактор из локального источника данных

### Использование {#usage}

~~~jsx
parse(data: array): void;
~~~

### Параметры {#parameters}

- `data` - (обязательный) данные, которые необходимо загрузить в редактор

Вы можете загружать данные в любом поддерживаемом формате. Подробности см. в статье [`parse()`](api/data_collection/parse_method.md).

### Пример {#example}

~~~jsx
const data = [
    // фигуры
    {
        "id": "a",
        "x": 50,
        "y": 53,
        "type": "triangle",
        "text": "Shape 1",
        "height": 50,
        "width": 50
    },
    {
        "id": "b",
        "x": 367,
        "y": 158,
        "type": "rectangle",
        "text": "Shape 2"
    },

    // соединительная линия
    {
        "id": "ab",
        "from":"a",
        "to":"b",
        "type": "line"
    },
];

const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);
~~~

**Связанные примеры**:

- [Diagram Editor. Режим по умолчанию. Базовая инициализация](https://snippet.dhtmlx.com/xshe9ut7)
- [Diagram Editor. Режим организационной диаграммы. Базовая инициализация](https://snippet.dhtmlx.com/og4qm3ja)
- [Diagram Editor. Режим ментальной карты. Ментальная карта эмоций](https://snippet.dhtmlx.com/lo1vm0e8)
