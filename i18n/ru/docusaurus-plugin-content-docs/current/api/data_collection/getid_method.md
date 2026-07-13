---
sidebar_label: getId()
title: Метод getId для Data Collection
description: Узнайте о методе getId модуля Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getId()

### Описание {#description}

@short: Возвращает ID элемента по его индексу

### Использование {#usage}

~~~jsx
getId(index: number): string | number;
~~~

### Параметры {#parameters}

- `index` - (обязательный) индекс элемента

### Возвращаемое значение {#returns}

Метод возвращает ID элемента

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const id = diagram.data.getId(0); // -> возвращает "1"
~~~
