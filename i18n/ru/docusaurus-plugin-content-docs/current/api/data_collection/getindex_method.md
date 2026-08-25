---
sidebar_label: getIndex()
title: Метод getIndex для Data Collection
description: Узнайте о методе getIndex модуля Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getIndex()

### Описание {#description}

@short: Возвращает индекс элемента по его ID

### Использование {#usage}

~~~jsx
getIndex(id: string | number): number;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID элемента

### Возвращаемое значение {#returns}

Метод возвращает индекс элемента

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const index = diagram.data.getIndex("1"); // -> возвращает 0
~~~
