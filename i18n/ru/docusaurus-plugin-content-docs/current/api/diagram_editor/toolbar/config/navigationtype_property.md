---
sidebar_label: navigationType
title: Свойство navigationType Toolbar
description: Узнайте о свойстве css компонента Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# navigationType

### Описание {#description}

@short: Необязательный. Задаёт действие, которое открывает опции меню

### Использование {#usage}

~~~jsx
navigationType?: "click" | "pointer";
~~~

:::info
- `"click"` - отображает меню при клике пользователя на нём
- `"pointer"` - отображает меню при наведении курсора мыши пользователем на него
:::

### Конфигурация по умолчанию {#default-config}

~~~jsx
navigationType: "click"
~~~

### Пример {#example}

~~~jsx {9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // отображение Toolbar по умолчанию
        // или настройте Toolbar через объект
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

**Журнал изменений**: Добавлено в v6.0

**Полезная статья**:  [Настройка Toolbar](guides/diagram_editor/toolbar.md)
