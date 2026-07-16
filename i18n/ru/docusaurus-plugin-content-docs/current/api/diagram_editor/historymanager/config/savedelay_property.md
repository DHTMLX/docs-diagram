---
sidebar_label: saveDelay
title: Свойство saveDelay объекта HistoryManager
description: Узнайте о свойстве disabled объекта HistoryManager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# saveDelay

### Описание {#description}

@short: Задает интервал времени для сохранения текущего состояния в мс

### Использование {#usage}

~~~jsx
saveDelay: number;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
saveDelay: 500
~~~

### Пример {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

editor.history.saveDelay = 1000;
~~~

**Журнал изменений**: Добавлено в v4.1
