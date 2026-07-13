---
sidebar_label: exists()
title: Метод exists объекта Data Collection
description: Вы можете узнать о методе exists объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# exists()

### Описание {#description}

@short: Проверяет, существует ли указанный элемент в диаграмме

### Использование {#usage}

~~~jsx
exists(id: string | number): boolean;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID проверяемого элемента

### Возвращаемое значение {#returns}

Метод возвращает `true`, если элемент существует, иначе `false`

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.exists("1");
~~~
