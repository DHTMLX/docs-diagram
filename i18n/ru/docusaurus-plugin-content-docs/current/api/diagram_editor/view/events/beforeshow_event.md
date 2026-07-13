---
sidebar_label: beforeShow
title: Событие beforeShow для View
description: Вы можете узнать о событии beforeShow для View в документации Diagram Editor библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeShow {#beforeshow}

### Описание {#description}

@short: Срабатывает перед отображением представления Toolbar, Editbar или Shapebar

### Использование {#usage}

~~~jsx
"beforeShow": (view: "toolbar" | "shapebar" | "editbar") => boolean | void;
~~~

### Параметры {#parameters}

Колбек события `beforeShow` вызывается со следующим параметром:

- `view` — (обязательный) представление, которое будет отображено. Подробнее см. в описании свойства [`view`](api/diagram_editor/editor/config/view_property.md).

:::info
Для обработки внутренних событий Diagram Editor используйте метод `on()`.
:::

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false
    }
});

// подключение обработчика события
editor.view.events.on("beforeShow", (view) => {
    console.log("The " + view + " view of Diagram Editor will be displayed");
});
~~~

**Журнал изменений**: Добавлено в v6.0
