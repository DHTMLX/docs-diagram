---
sidebar_label: parse()
title: Метод parse Toolbar
description: Вы можете узнать о методе parse Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# parse()

### Описание {#description}

@short: Загружает элементы в Toolbar редактора Diagram Editor

### Использование {#usage}

~~~jsx
parse(items: (object | string)[]): void;
~~~

### Параметры {#parameters}

- `items` - (обязательный) массив элементов, который передаётся в Toolbar. Полный список доступных элементов см. [здесь](api/diagram_editor/toolbar/config/items_property.md)

### Пример {#example}

~~~jsx {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        toolbar: true
    }
});
// отображает Toolbar с указанными элементами
editor.toolbar.parse([{ type: "file", disabled: false }, "spacer", "scale"]);
~~~

**Журнал изменений**: Добавлено в v6.0
