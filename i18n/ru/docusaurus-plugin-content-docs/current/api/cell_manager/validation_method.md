---
sidebar_label: validation()
title: Метод validation класса Cell Manager
description: Вы можете узнать о методе validation класса Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# validation()

### Описание {#description}

@short: Проверяет ячейки swimlane по направлению и типу действия

### Использование {#usage}

~~~jsx
validation(
    cellIndex: number, 
    dir: string, // "up" | "down" | "left" | "right"
    action: string // "move" | "remove" | "add"
): boolean;
~~~

### Параметры {#parameters}

- `cellIndex` - (обязательный) начальный индекс ячейки в макете. Отсчет индекса начинается с 0
- `dir` - (обязательный) направление действия: `"up"` | `"down"` | `"left"` | `"right"`
- `action` - (обязательный) тип действия: `"move"` | `"remove"` | `"add"`

### Возвращаемое значение {#returns}

Метод возвращает `true`, если ячейка прошла проверку, иначе `false`

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// устанавливает активный swimlane
diagram.cellManager.setSwimlane("main");

// проверяет, можно ли переместить ячейку с индексом 0 вниз
diagram.cellManager.validation(0, "down", "move"); // -> true
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlane](/swimlanes/)
