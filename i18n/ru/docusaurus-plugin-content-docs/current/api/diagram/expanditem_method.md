---
sidebar_label: expandItem()
title: Метод expandItem
description: Узнайте больше о методе expandItem в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# expandItem()

### Описание {#description}

@short: Отображает все дочерние элементы целевой фигуры или разворачивает группу/дорожку

### Использование {#usage}

~~~jsx
expandItem(
    id: string | number,
    dir?: string
): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор элемента
- `dir` - (необязательный) определяет сторону, с которой будут показаны дочерние элементы относительно корневой фигуры: `"left"`, `"right"`
  :::note
  Параметр `dir` можно использовать только если диаграмма инициализирована в режиме mindmap (*type:`"mindmap"`*)
  :::

### Пример {#example}

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.expandItem(123);
~~~

или

~~~jsx {2,6}
const diagram = new dhx.Diagram("diagram_container", {
    type:"mindmap"
});
diagram.data.parse(data);

diagram.expandItem("main", "left");
~~~

**Журнал изменений**: Параметр `dir` добавлен в v3.1

**Полезная статья**: [Разворачивание/сворачивание элементов](guides/manipulating_items.md#expandingcollapsing-items)
