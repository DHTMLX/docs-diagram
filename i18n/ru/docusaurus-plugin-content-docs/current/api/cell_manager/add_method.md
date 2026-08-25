---
sidebar_label: add()
title: Метод add() Cell Manager
description: Изучите метод add() объекта Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и демонстрации в реальном времени, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# add()

:::info
Метод `add()` автоматически проверяется системой. Ячейка не будет добавлена, если это невозможно согласно структуре swimlane.
:::

### Описание {#description}

@short: Добавляет ячейки в виде строк или столбцов в swimlane

### Использование {#usage}

~~~jsx
add(
    cellIndex: number, 
    dir: string // "up" | "down" | "left" | "right"
): void;
~~~

### Параметры {#parameters}

- `cellIndex` - (обязательный) начальный индекс ячейки в макете. Отсчет индекса начинается с 0
- `dir` - (обязательный) направление действия: `"up"` | `"down"` | `"left"` | `"right"`

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // устанавливает активный swimlane

diagram.cellManager.add(0, "down"); // добавляет ячейки как строки
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
