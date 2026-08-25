---
sidebar_label: setSwimlane()
title: Метод setSwimlane класса Cell Manager
description: Вы можете узнать о методе setSwimlane класса Cell Manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# setSwimlane()

### Описание {#description}

@short: Устанавливает активный swimlane для дальнейших действий с ним

### Использование {#usage}

~~~jsx
setSwimlane(id: string | number): boolean;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор swimlane

### Возвращаемое значение {#returns}

Метод возвращает `true`, если swimlane установлен, иначе `false`.

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // устанавливает активный swimlane
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlane](/swimlanes/)
