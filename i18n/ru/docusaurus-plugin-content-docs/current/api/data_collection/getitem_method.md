---
sidebar_label: getItem()
title: Метод getItem для Data Collection
description: Узнайте о методе getItem модуля Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getItem()

### Описание {#description}

@short: Возвращает объект элемента по его ID

### Использование {#usage}

~~~jsx
getItem(id: string | number): object;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID выбранного элемента

### Возвращаемое значение {#returns}

Метод возвращает объект элемента

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.getItem(123);
~~~

Вы можете получить доступ к исходным свойствам элемента следующим образом:

~~~jsx
// доступ к свойствам фигуры
const shape = diagram.data.getItem(123);
const text = shape.text;
~~~

**Полезная статья**:  [Получение элемента](guides/manipulating_items.md#getting-an-item)
