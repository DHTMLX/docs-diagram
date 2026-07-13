---
sidebar_label: eachChild()
title: Метод eachChild объекта Data Collection
description: Вы можете узнать о методе eachChild объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# eachChild()

### Описание {#description}

@short: Проходит по дочерним элементам указанного элемента

### Использование {#usage}

~~~jsx
eachChild(
    id: string | number,
    callback: function,
    isTree?: boolean
): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID элемента
- `callback` - (обязательный) колбек, который будет применён к каждому дочернему элементу указанного элемента
- `isTree` - (необязательный) определяет, должна ли функция проходить по всем дочерним элементам (любого уровня) указанного элемента. Если задано значение *false*, функция будет проходить только по дочерним элементам первого уровня указанного элемента; по умолчанию — *true*.

### Пример {#example}

~~~jsx {6-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.eachChild("id_1", (item) => {
    console.log(item);
}, true);
~~~

**Журнал изменений**: Добавлено в v4.0
