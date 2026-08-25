---
sidebar_label: remove()
title: Метод remove класса Cell Manager
description: Вы можете узнать о методе remove класса Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# remove()

:::info
Метод `remove()` автоматически проверяется системой. Ячейка не будет удалена, если это невозможно согласно структуре swimlane.
:::

### Описание {#description}

@short: Удаляет ячейки swimlane в виде строк или столбцов

### Использование {#usage}

~~~jsx
remove(
    cellIndex: number, 
    type: string // "row" | "col"
): void;
~~~

### Параметры {#parameters}

- `cellIndex` - (обязательный) начальный индекс ячейки в макете. Отсчет индекса начинается с 0
- `type` - (обязательный) тип направления для отсчета индекса

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // устанавливает активный swimlane

diagram.cellManager.remove(0, "row"); // удаляет ячейки в виде строк
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlane](/swimlanes/)
