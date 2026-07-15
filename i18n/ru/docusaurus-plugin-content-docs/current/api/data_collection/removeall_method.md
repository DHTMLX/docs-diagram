---
sidebar_label: removeAll()
title: Метод removeAll для Data Collection
description: Вы можете узнать о методе removeAll объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# removeAll()

### Описание {#description}

@short: Удаляет все элементы из диаграммы

### Использование {#usage}

~~~jsx
removeAll(): void;
~~~

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.removeAll();
~~~

**Related article**:  [Удаление элементов](guides/manipulating_items.md#deleting-items)

**Related sample**: [Diagram. Данные. Добавление/удаление элемента](https://snippet.dhtmlx.com/8wi20uop)
