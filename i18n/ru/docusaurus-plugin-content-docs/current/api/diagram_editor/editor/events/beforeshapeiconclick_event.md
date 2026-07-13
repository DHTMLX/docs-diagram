---
sidebar_label: beforeShapeIconClick
title: beforeShapeIconClick — событие Editor
description: Изучите событие beforeShapeIconClick редактора Editor в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeShapeIconClick

### Описание {#description}

@short: Срабатывает перед нажатием элемента управления на панели инструментов элемента

### Использование {#usage}

~~~jsx
"beforeShapeIconClick": (
    iconId: string,
    shape: object
) => boolean | void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается со следующими параметрами:

- `iconId` - тип или идентификатор элемента управления панели инструментов
- `shape` - объект с конфигурацией элемента

### Возвращаемое значение {#returns}

Функция обратного вызова возвращает `false`, чтобы предотвратить нажатие элемента управления панели инструментов; в противном случае — `true`

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-12}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика события
editor.events.on("beforeShapeIconClick", (iconId, shape) => {
    console.log(`
        You will click the ${iconId} toolbar control of the shape ${shape.id}
    `);
    return true;
});
~~~

**Журнал изменений**: Добавлено в v3.1
