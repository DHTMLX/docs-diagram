---
sidebar_label: select
title: Свойство select
description: Узнайте больше о свойстве select в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# select

### Описание {#description}

@short: Необязательный параметр. Включает выделение элементов диаграммы

### Использование {#usage}

~~~jsx
select?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
select: false
~~~

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
~~~

**Полезные статьи**:

- [Включение выделения элементов](guides/diagram/configuration.md#enabling-items-selection)
- [Выделение элементов](guides/manipulating_items.md#selecting-items)
