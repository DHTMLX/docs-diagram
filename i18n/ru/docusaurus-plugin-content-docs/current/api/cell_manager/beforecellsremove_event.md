---
sidebar_label: beforeCellsRemove
title: Событие beforeCellsRemove в Cell Manager
description: Узнайте о событии beforeCellsRemove компонента Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо-версии, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeCellsRemove

### Описание {#description}

@short: Срабатывает перед удалением ячеек swimlane

### Использование {#usage}

~~~jsx
beforeCellsRemove: (swimlaneId: string | number) => boolean | void;
~~~

### Параметры {#parameters}

Колбек события принимает следующий параметр:

- `swimlaneId` — (обязательный) идентификатор элемента

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить удаление ячеек, в противном случае — `true`

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("beforeCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
