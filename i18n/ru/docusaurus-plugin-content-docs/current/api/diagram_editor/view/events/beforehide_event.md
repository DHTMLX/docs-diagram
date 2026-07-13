---
sidebar_label: beforeHide
title: Событие beforeHide для View
description: Вы можете узнать о событии beforeHide для View в документации Diagram Editor библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeHide {#beforehide}

### Описание {#description}

@short: Срабатывает перед скрытием представления Toolbar, Editbar или Shapebar

### Использование {#usage}

~~~jsx
"beforeHide": (view: "toolbar" | "shapebar" | "editbar") => boolean | void;
~~~

### Параметры {#parameters}

Функция обратного вызова события `beforeHide` вызывается со следующим параметром:

- `view` — (обязательный) представление, которое будет скрыто. Подробнее см. в описании свойства [`view`](api/diagram_editor/editor/config/view_property.md).

:::info
Для обработки внутренних событий Diagram Editor используйте метод `on()`.
:::

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true
    }
});

// подключение обработчика события
editor.view.events.on("beforeHide", (view) => {
    console.log("The " + view + " view of Diagram Editor will be hidden");
});
~~~

**Журнал изменений**: Добавлено в v6.0
