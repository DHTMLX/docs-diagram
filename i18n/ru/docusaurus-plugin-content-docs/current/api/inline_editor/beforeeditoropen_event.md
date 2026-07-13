---
sidebar_label: beforeEditorOpen
title: Событие beforeEditorOpen
description: Узнайте о событии beforeEditorOpen в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeEditorOpen

### Описание {#description}

@short: Срабатывает перед открытием встроенного редактора элемента

### Использование {#usage}

~~~jsx
beforeEditorOpen: (
    id: string | number,
    key: string,
    subId?: string
) => boolean | void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `id` — (обязательный) id элемента
- `key` — (обязательный) имя свойства, которое будет отредактировано
- `subId` — (необязательный) id подзаголовка дорожки или текстового элемента линии

### Возвращаемое значение {#returns}

Верните `false`, чтобы заблокировать открытие встроенного редактора, в противном случае — `true`

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("beforeEditorOpen", (id, key, subId) => {
    console.log(id, key, subId);
    return true;
});
~~~

**Журнал изменений**:

- Параметр `subHeaderId` изменён на `subId` в v4.1
- Добавлено в v4.0
