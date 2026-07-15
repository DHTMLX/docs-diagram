---
sidebar_label: move()
title: Метод move класса Cell Manager
description: Вы можете узнать о методе move класса Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# move()

:::info
Метод `move()` автоматически проверяется системой. Ячейка не будет перемещена, если это невозможно согласно структуре swimlane.
:::

### Описание {#description}

@short: Перемещает ячейки swimlane в виде строк или столбцов

### Использование {#usage}

~~~jsx
move(
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

diagram.cellManager.move(0, "down"); // перемещает ячейки в виде строк
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlane](/swimlanes/)
