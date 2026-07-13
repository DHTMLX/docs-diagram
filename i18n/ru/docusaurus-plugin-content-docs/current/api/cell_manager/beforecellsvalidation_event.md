---
sidebar_label: beforeCellsValidation
title: Событие beforeCellsValidation в Cell Manager
description: Узнайте о событии beforeCellsValidation компонента Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо-версии, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeCellsValidation

### Описание {#description}

@short: Срабатывает перед валидацией ячеек swimlane

### Использование {#usage}

~~~jsx
beforeCellsValidation: (
    swimlaneId: string | number, 
    action: "move" | "remove" | "add"
) => boolean | void;
~~~

### Параметры {#parameters}

Колбек события принимает следующие параметры:

- `swimlaneId` — (обязательный) идентификатор элемента
- `action` — (обязательный) тип действия

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить валидацию новых ячеек, в противном случае — `true`

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("beforeCellsValidation", (swimlaneId, action) => {
    console.log(swimlaneId, action);
    return true;
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
