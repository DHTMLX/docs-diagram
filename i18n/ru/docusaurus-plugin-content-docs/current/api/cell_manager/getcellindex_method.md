---
sidebar_label: getCellIndex()
title: Метод getCellIndex объекта Cell Manager
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о методе getCellIndex объекта Cell Manager. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# getCellIndex()

### Описание {#description}

@short: Возвращает индекс ячейки Swimlane по идентификатору

### Использование {#usage}

~~~jsx
getCellIndex(
    cellId: string | number, 
    type: string // "row" | "col"
): number | undefined;
~~~

### Параметры {#parameters}

- `cellId` - (обязательный) идентификатор ячейки
- `type` - (обязательный) тип направления для подсчета индекса: `"row"` | `"col"`

### Возвращаемое значение {#returns}

Метод возвращает индекс ячейки. Отсчет индекса начинается с 0

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// устанавливает активную Swimlane
diagram.cellManager.setSwimlane("main"); 

// получает индекс ячейки
diagram.cellManager.getCellIndex("r01", "row"); // -> 0
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
