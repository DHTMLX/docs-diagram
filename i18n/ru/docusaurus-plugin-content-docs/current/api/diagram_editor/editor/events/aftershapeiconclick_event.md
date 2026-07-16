---
sidebar_label: afterShapeIconClick
title: Событие afterShapeIconClick редактора
description: Здесь вы можете узнать о событии afterShapeIconClick редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную ознакомительную версию DHTMLX Diagram сроком на 30 дней.
---

# afterShapeIconClick

### Описание {#description}

@short: Срабатывает после нажатия элемента управления на индивидуальной панели инструментов элемента

### Использование {#usage}

~~~jsx
"afterShapeIconClick": (
    iconId: string,
    shape: object
) => void;
~~~

### Параметры {#parameters}

Колбек события вызывается со следующими параметрами:

- `iconId` - тип или идентификатор элемента управления панели инструментов
- `shape` - объект с конфигурацией элемента

:::info
Для обработки внутренних событий Diagram Editor используйте метод `on()`.
:::

### Пример {#example}

~~~jsx {6-11}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика к событию
editor.events.on("afterShapeIconClick", (iconId, shape) => {
    console.log(`
        You've clicked the ${iconId} toolbar control of the shape ${shape.id}
    `);
});
~~~

**Журнал изменений**: Добавлено в v3.1
