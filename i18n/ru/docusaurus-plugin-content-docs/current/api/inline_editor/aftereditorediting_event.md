---
sidebar_label: afterEditorEditing
title: Событие afterEditorEditing
description: Узнайте о событии afterEditorEditing в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterEditorEditing

### Описание {#description}

@short: Срабатывает после редактирования текстового значения элемента во встроенном редакторе

### Использование {#usage}

~~~jsx
afterEditorEditing: (
    value: string,
    id: string | number,
    key: string,
    subId?: string
) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `value` — (обязательный) новое значение элемента
- `id`— (обязательный) id элемента
- `key` — (обязательный) имя редактируемого свойства
- `subId` — (необязательный) id подзаголовка дорожки или текстового элемента линии

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("afterEditorEditing", (value, id, key, subId) => {
    console.log(value, id, key, subId);
});
~~~

**Журнал изменений**:

- Параметр `subHeaderId` изменён на `subId` в v4.1
- Добавлено в v4.0
