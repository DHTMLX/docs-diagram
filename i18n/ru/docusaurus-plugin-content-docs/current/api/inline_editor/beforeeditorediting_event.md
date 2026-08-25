---
sidebar_label: beforeEditorEditing
title: Событие beforeEditorEditing
description: Узнайте о событии beforeEditorEditing в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeEditorEditing

### Описание {#description}

@short: Срабатывает перед редактированием текстового значения элемента во встроенном редакторе

### Использование {#usage}

~~~jsx
beforeEditorEditing: (
    value: string,
    currentValue: string,
    id: string | number,
    key: string,
    subId?: string
) => boolean | void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `value` — (обязательный) новое значение элемента
- `currentValue` — (обязательный) предыдущее значение элемента
- `id` — (обязательный) id элемента
- `key` — (обязательный) имя свойства, которое будет отредактировано
- `subId` — (необязательный) id подзаголовка дорожки или текстового элемента линии

### Возвращаемое значение {#returns}

Верните `false`, чтобы заблокировать сохранение изменений после редактирования элемента во встроенном редакторе, в противном случае — `true`

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("beforeEditorEditing", (value, id, key, subId) => {
    console.log(value, id, key, subId);
    return true;
});
~~~

**Журнал изменений**:

- Параметр `subHeaderId` изменён на `subId` в v4.1
- Добавлено в v4.0
