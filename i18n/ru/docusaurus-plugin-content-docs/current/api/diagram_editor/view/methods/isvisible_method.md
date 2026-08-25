---
sidebar_label: isVisible()
title: Метод isVisible View
description: Вы можете узнать о методе isVisible объекта view в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# isVisible()

### Описание {#description}

@short: Проверяет, видна ли панель инструментов, панель редактирования или панель фигур Diagram Editor.

### Использование {#usage}

~~~jsx
isVisible(view: "toolbar" | "shapebar" | "editbar"): boolean;
~~~

### Параметры {#parameters}

- `toolbar` - (обязательно) проверяет, видна ли панель инструментов
- `shapebar` - (обязательно) проверяет, видна ли панель фигур
- `editbar` - (обязательно) проверяет, видна ли панель редактирования

### Пример {#example}

~~~jsx {9-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false,
        toolbar: true
    }
});

// проверяет видимость панели инструментов и панели фигур
editor.view.isVisible("shapebar"); // вернёт false
editor.view.isVisible("toolbar"); // вернёт true
~~~

**Журнал изменений**: Добавлено в v6.0
