---
sidebar_label: getNearId()
title: Метод getNearId для Data Collection
description: Узнайте о методе getNearId модуля Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getNearId()

### Описание {#description}

@short: Ищет ближайший элемент относительно указанного

### Использование {#usage}

~~~jsx
getNearId(id: string | number): string | number;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID элемента

### Возвращаемое значение {#returns}

Метод возвращает ID ближайшего элемента

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const nearId = diagram.data.getNearId(id);
~~~
