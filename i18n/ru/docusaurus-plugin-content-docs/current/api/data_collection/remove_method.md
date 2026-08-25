---
sidebar_label: remove()
title: Метод remove для Data Collection
description: Вы можете узнать о методе remove объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# remove()

### Описание {#description}

@short: Удаляет указанный элемент из диаграммы

:::note
Если диаграмма инициализирована в режиме org (`type: "org"`) или mindmap (`type: "mindmap"`), удаление фигуры также приведёт к удалению связи с этой фигурой и всех дочерних фигур
:::

### Использование {#usage}

~~~jsx
remove(id: string | number | array): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор(ы) элементов, которые должны быть удалены

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.remove("2");
~~~

**Related article**:  [Удаление элементов](guides/manipulating_items.md#deleting-items)

**Related sample**: [Diagram. Данные. Добавление/удаление элемента](https://snippet.dhtmlx.com/8wi20uop)
