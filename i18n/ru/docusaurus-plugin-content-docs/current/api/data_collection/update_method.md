---
sidebar_label: update()
title: Метод update объекта Data Collection
description: Узнайте о методе update объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, тестируйте примеры кода и интерактивные демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# update()

### Описание {#description}

@short: Обновляет свойства элемента

:::note
Этот метод нельзя использовать для изменения *id* или *type* элемента
:::

### Использование {#usage}

~~~jsx
update(
    id: string | number,
    newItem: object
): void;
~~~

### Параметры {#parameters}

- `id` — (обязательный) id элемента, который нужно обновить
- `newItem` — (обязательный) набор свойств, которые нужно обновить

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.update(123, { text:"New text" });
~~~

**Полезная статья**:  [Обновление элемента](guides/manipulating_items.md#updating-an-item)
