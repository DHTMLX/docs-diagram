---
sidebar_label: eachParent()
title: Метод eachParent объекта Data Collection
description: Вы можете узнать о методе eachParent объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# eachParent()

### Описание {#description}

@short: Проходит по всем родительским элементам указанного элемента

### Использование {#usage}

~~~jsx
eachParent(
    id: string | number,
    callback: function,
    self?: boolean
): void
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID элемента
- `callback` - (обязательный) колбек, который будет применён к каждому родительскому элементу указанного элемента
- `self` - (необязательный) определяет, должна ли колбек также обрабатывать сам указанный элемент; по умолчанию — *false*

### Пример {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachParent("id_1.1.1", (item) => {
    console.log(item);
}, false);
~~~

**Журнал изменений**: Добавлено в v4.0
