---
sidebar_label: redo()
title: Метод redo класса HistoryManager
description: Вы можете узнать о методе redo класса HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# redo()

### Описание {#description}

@short: Восстанавливает действие, отменённое действием Undo

### Использование {#usage}

~~~jsx
redo(): void;
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.redo();
~~~

**Журнал изменений**: Добавлено в v4.1
