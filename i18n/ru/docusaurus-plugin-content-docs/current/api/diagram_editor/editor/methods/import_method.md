---
sidebar_label: import()
title: Метод import класса Editor
description: Вы можете узнать больше о методе import редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# import()

### Описание {#description}

@short: Импортирует данные из существующей диаграммы в редактор

### Использование {#usage}

~~~jsx
import(diagram: object): void;
~~~

### Параметры {#parameters}

- `diagram` - (обязательный) объект диаграммы

### Пример {#example}

~~~jsx
// инициализация Diagram
const diagram = new dhx.Diagram("diagram", {
    type: "org"
});
// загрузка данных в Diagram
diagram.data.parse(data);

// инициализация Editor
const editor = new dhx.DiagramEditor("editor_container");

// импорт данных из Diagram в Editor
editor.import(diagram);
~~~

Вы можете загружать данные в любом поддерживаемом формате. Подробности см. в статье [`parse()`](api/data_collection/parse_method.md).

**Связанный пример**: [Diagram Editor. Режим организационной диаграммы. Интерактивный редактор](https://snippet.dhtmlx.com/bng7ego7)
