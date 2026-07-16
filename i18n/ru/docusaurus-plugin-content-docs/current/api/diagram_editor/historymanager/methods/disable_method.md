---
sidebar_label: disable()
title: Метод disable объекта HistoryManager
description: Узнайте о методе disable объекта HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# disable()

### Описание {#description}

@short: Блокирует HistoryManager

### Использование {#usage}

~~~jsx
disable(): void;
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.disable();
~~~

:::note
Обратите внимание: при отключении History manager вы не сможете работать с историей с помощью горячих клавиш.
:::

**Журнал изменений**: Добавлено в v4.1
