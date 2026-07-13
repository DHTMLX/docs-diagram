---
sidebar_label: afterHide
title: Событие afterHide для View
description: Вы можете узнать о событии afterHide для View в документации Diagram Editor библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterHide {#afterhide}

### Описание {#description}

@short: Срабатывает после скрытия представления Toolbar, Editbar или Shapebar

### Использование {#usage}

~~~jsx
"afterHide": (view: "toolbar" | "shapebar" | "editbar") => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события `afterHide` вызывается со следующим параметром:

- `view` — (обязательный) представление, которое было скрыто. Подробнее см. в описании свойства [`view`](api/diagram_editor/editor/config/view_property.md).

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
editor.view.events.on("afterHide", (view) => {
    console.log("The " + view + " view of Diagram Editor was hidden");
});
~~~

**Журнал изменений**: Добавлено в v6.0
