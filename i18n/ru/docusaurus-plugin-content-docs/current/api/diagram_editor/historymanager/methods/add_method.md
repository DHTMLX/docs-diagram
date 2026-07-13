---
sidebar_label: add()
title: Метод add объекта HistoryManager
description: Узнайте о методе add объекта HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# add()

### Описание {#description}

@short: Добавляет новое состояние

:::info
Добавление нового состояния выполняется автоматически, поэтому этот метод не рекомендуется использовать вручную
:::

### Использование {#usage}

~~~jsx
add(newState: array): void;
~~~

### Параметры {#parameters}

- `newState` - (обязательный) массив JSON-объектов текущего состояния диаграммы

### Пример {#example}

~~~jsx {5-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.add([
    { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call the client" },
    { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" }
]);
~~~

**Журнал изменений**: Добавлено в v4.1
