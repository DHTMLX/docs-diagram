---
sidebar_label: getCellId()
title: Метод getCellId в Cell Manager
description: Узнайте о методе getCellId компонента Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо-версии, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getCellId()

### Описание {#description}

@short: Возвращает идентификатор ячейки swimlane по индексу

### Использование {#usage}

~~~jsx
getCellId(
    cellIndex: number, 
    type: string // "row" | "col"
): string | number | undefined;
~~~

### Параметры {#parameters}

- `cellIndex` — (обязательный) начальный индекс ячейки в макете. Отсчет индекса начинается с 0
- `type` — (обязательный) тип направления для подсчета индекса: `"row"` | `"col"`

### Возвращаемое значение {#returns}

Метод возвращает идентификатор ячейки

### Пример {#example}

~~~jsx
// инициализация diagram
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// устанавливает активный swimlane
diagram.cellManager.setSwimlane("main"); 

// получает идентификатор ячейки
diagram.cellManager.getCellId(0, "row"); // -> "r01"
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
