---
sidebar_label: reset()
title: Метод reset класса HistoryManager
description: Узнайте больше о методе reset класса HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# reset()

### Описание {#description}

@short: Сбрасывает предыдущие изменения и сохраняет текущее состояние

### Использование {#usage}

~~~jsx
reset(): void;
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.reset();
~~~

**Журнал изменений**: Добавлено в v4.1
