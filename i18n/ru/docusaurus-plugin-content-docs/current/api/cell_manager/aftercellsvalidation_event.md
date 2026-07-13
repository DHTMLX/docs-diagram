---
sidebar_label: afterCellsValidation
title: Событие afterCellsValidation Cell Manager
description: Изучите событие afterCellsValidation объекта Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и демонстрации в реальном времени, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterCellsValidation

### Описание {#description}

@short: Срабатывает после проверки ячеек swimlane

### Использование {#usage}

~~~jsx
afterCellsValidation: (
    swimlaneId: string | number, 
    validate: boolean, 
    action: "move" | "remove" | "add"
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующие параметры:

- `swimlaneId` - (обязательный) идентификатор элемента
- `validate` - (обязательный) указывает, пройдена проверка или нет
- `action` - (обязательный) тип действия

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика к событию
diagram.events.on("afterCellsValidation", (swimlaneId, validate, action) => {
    console.log(swimlaneId, validate, action);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
