---
sidebar_label: afterEditorClose
title: Событие afterEditorClose
description: Узнайте о событии afterEditorClose в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterEditorClose

### Описание {#description}

@short: Срабатывает после закрытия встроенного редактора элемента

### Использование {#usage}

~~~jsx
afterEditorClose: (
    id: string | number,
    key: string,
    subId?: string
) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `id` — (обязательный) id элемента
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
diagram.events.on("afterEditorClose", (id, key, subId) => {
    console.log(id, key, subId);
});
~~~

**Журнал изменений**:

- Параметр `subHeaderId` изменён на `subId` в v4.1
- Добавлено в v4.0
