---
sidebar_label: copy()
title: Метод copy объекта Data Collection
description: Вы можете узнать о методе copy объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# copy()

### Описание {#description}

@short: Создает копию элемента в заданной позиции

### Использование {#usage}

~~~jsx
copy(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID элемента(ов) для копирования
- `index` - (обязательный) индекс, в котором создается копия
- `target` - (необязательный) целевой объект data collection

### Возвращаемое значение {#returns}

Метод возвращает ID элемента или массив ID элементов

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.copy("4",5); // копирует фигуру с id=4 на позицию с индексом 5
~~~
