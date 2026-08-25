---
sidebar_label: beforeSubmenuOpen
title: Событие beforeSubmenuOpen
description: Изучите событие beforeSubmenuOpen в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# beforeSubmenuOpen

### Описание {#description}

@short: Срабатывает перед открытием меню подзаголовка

### Использование {#usage}

~~~jsx
beforeSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => boolean | void;
~~~

### Параметры {#parameters}

Обратный вызов события принимает следующие параметры:

- `id` - (обязательный) идентификатор дорожки
- `event` - (обязательный) объект нативного события HTML
- `subHeaderId` - (необязательный) идентификатор подзаголовка дорожки

### Возвращаемое значение {#returns}

Верните `false`, чтобы заблокировать открытие подзаголовка; в противном случае — `true`

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// прикрепление обработчика к событию
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Обработка событий](guides/event_handling.md)
