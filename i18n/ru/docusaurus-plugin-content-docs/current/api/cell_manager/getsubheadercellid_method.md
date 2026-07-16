---
sidebar_label: getSubHeaderCellId()
title: Метод getSubHeaderCellId объекта Cell Manager
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о методе getSubHeaderCellId объекта Cell Manager. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# getSubHeaderCellId()

### Описание {#description}

@short: Возвращает идентификатор ячейки Swimlane по идентификатору подзаголовка

### Использование {#usage}

~~~jsx
getSubHeaderCellId(subheaderId: string): string | number;
~~~

### Параметры {#parameters}

- `subheaderId` - (обязательный) идентификатор подзаголовка Swimlane

### Возвращаемое значение {#returns}

Метод возвращает идентификатор ячейки

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// устанавливает активную Swimlane
diagram.cellManager.setSwimlane("main"); 

// получает идентификатор ячейки
diagram.cellManager.getSubHeaderCellId("sub01"); // -> "r01"
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
