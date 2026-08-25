---
sidebar_label: undo()
title: Метод undo класса HistoryManager
description: Узнайте больше о методе undo класса HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# undo()

### Описание {#description}

@short: Отменяет последнее действие в Diagram Editor

### Использование {#usage}

~~~jsx
undo(first?: boolean): void;
~~~

### Параметры {#parameters}

- `first` - (необязательный) *true* для отмены всей истории изменений

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.undo();
~~~

**Журнал изменений**: Добавлено в v4.1
