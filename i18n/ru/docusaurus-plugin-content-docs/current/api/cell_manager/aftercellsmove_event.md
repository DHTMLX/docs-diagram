---
sidebar_label: afterCellsMove
title: Событие afterCellsMove Cell Manager
description: Изучите событие afterCellsMove объекта Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и демонстрации в реальном времени, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterCellsMove

### Описание {#description}

@short: Срабатывает после перемещения ячеек swimlane

### Использование {#usage}

~~~jsx
afterCellsMove: (swimlaneId: string | number) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующий параметр:

- `swimlaneId` - (обязательный) идентификатор элемента

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика к событию
diagram.events.on("afterCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
});
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
