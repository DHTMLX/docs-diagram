---
sidebar_label: getSubHeaderCellIndex()
title: Метод getSubHeaderCellIndex объекта Cell Manager
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о методе getSubHeaderCellIndex объекта Cell Manager. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# getSubHeaderCellIndex()

### Описание {#description}

@short: Возвращает индекс ячейки Swimlane по идентификатору подзаголовка

### Использование {#usage}

~~~jsx
getSubHeaderCellIndex(subheaderId: string): number;
~~~

### Параметры {#parameters}

- `subheaderId` - (обязательный) идентификатор подзаголовка Swimlane

### Возвращаемое значение {#returns}

Метод возвращает индекс ячейки. Отсчет индекса начинается с 0

### Пример {#example}

~~~jsx
// инициализация диаграммы
const diagram = new dhx.Diagram("diagram_container", {
    // параметры конфигурации
});
diagram.data.parse(data);

// устанавливает активную Swimlane
diagram.cellManager.setSwimlane("main"); 

// получает индекс ячейки
diagram.cellManager.getSubHeaderCellIndex("sub01"); // -> 0
~~~

**Журнал изменений**: Добавлено в v4.0

**Полезная статья**: [Настройка Swimlanes](/swimlanes/)
