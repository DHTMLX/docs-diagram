---
sidebar_label: getSubHeaderType()
title: Метод getSubHeaderType объекта Cell Manager
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о методе getSubHeaderType объекта Cell Manager. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# getSubHeaderType()

### Описание {#description}

@short: Возвращает тип подзаголовка Swimlane по его идентификатору

### Использование {#usage}

~~~jsx
getSubHeaderType(subheaderId: string): "row" | "col" | undefined;
~~~

### Параметры {#parameters}

- `subheaderId` - (обязательный) идентификатор подзаголовка Swimlane

### Возвращаемое значение {#returns}

Метод возвращает тип подзаголовка Swimlane: `"row"` | `"col"` | undefined

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// устанавливает активную Swimlane
diagram.cellManager.setSwimlane("main"); 

// получает тип направления
diagram.cellManager.getSubHeaderType("sub01"); // -> "row"
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
