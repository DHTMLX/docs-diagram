---
sidebar_label: map()
title: Метод map класса Data Collection
description: Узнайте о методе map класса Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# map()

### Описание {#description}

@short: Проходит по всем элементам диаграммы

### Использование {#usage}

~~~jsx
map(callback: function): array;
~~~

### Параметры {#parameters}

- `callback` - (обязательный) калбэк-функция, которая будет вызываться для каждого элемента диаграммы

### Возвращаемое значение {#returns}

Метод возвращает новый массив элементов, где каждый элемент — результат выполнения калбэк-функции

### Пример {#example}

~~~jsx {7-9}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//получение id всех элементов диаграммы (фигур, связей, групп, дорожек)
diagram.data.map((item) => {
    console.log(item.id);
});
~~~
