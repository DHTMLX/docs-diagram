---
sidebar_label: collapseItem()
title: Метод collapseItem
description: Вы можете изучить метод collapseItem в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# collapseItem()

### Описание {#description}

@short: Скрывает все дочерние элементы целевой фигуры или сворачивает группу/дорожку

### Использование {#usage}

~~~jsx
collapseItem(
    id: string | number,
    dir?: string
): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) **ID** элемента
- `dir` - (опциональный) определяет сторону, в которую будут скрыты дочерние элементы относительно корневой фигуры: `"left"` или `"right"`.
  :::note
  Параметр `dir` можно использовать только если диаграмма инициализирована в режиме mindmap (*type:`"mindmap"`*)
  :::

### Пример {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.collapseItem(123);
~~~

или

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
~~~

**Журнал изменений**: Параметр `dir` добавлен в v3.1

**Полезная статья**: [Разворачивание/сворачивание элементов](guides/manipulating_items.md#expandingcollapsing-items)
