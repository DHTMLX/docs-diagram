---
sidebar_label: afterShow
title: Событие afterShow для View
description: Вы можете узнать о событии afterShow для View в документации Diagram Editor библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterShow {#aftershow}

### Описание {#description}

@short: Срабатывает после отображения представления Toolbar, Editbar или Shapebar

### Использование {#usage}

~~~jsx
"afterShow": (view: "toolbar" | "shapebar" | "editbar") => void;
~~~

### Параметры {#parameters}

Колбек события `afterShow` вызывается со следующим параметром:

- `view` — (обязательный) представление, которое было отображено. Подробнее см. в описании свойства [`view`](api/diagram_editor/editor/config/view_property.md).

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
editor.view.events.on("afterShow", (view) => {
    console.log("The " + view + " view of Diagram Editor was displayed");
});
~~~

**Журнал изменений**: Добавлено в v6.0
