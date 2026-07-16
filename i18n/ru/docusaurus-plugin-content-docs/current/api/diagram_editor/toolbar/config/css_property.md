---
sidebar_label: css
title: Свойство css Toolbar
description: Узнайте о свойстве css компонента Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# css

### Описание {#description}

@short: Необязательный. Применяет пользовательский класс CSS

:::info
Пользовательский класс CSS также применяется к развёрнутым элементам. К таким элементам добавляется префикс `--popup-menu`.
:::

### Использование {#usage}

~~~jsx
css?: string;
~~~

### Пример {#example}

~~~jsx {7}
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
