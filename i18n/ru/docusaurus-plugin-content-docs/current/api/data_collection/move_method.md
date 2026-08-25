---
sidebar_label: move()
title: Метод move для Data Collection
description: Вы можете узнать о методе move объекта Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# move()

### Описание {#description}

@short: Перемещает элемент в указанную позицию

### Использование {#usage}

~~~jsx
move(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### Параметры {#parameters}

- `id` - (обязательный) идентификатор(ы) элемента(ов), который(е) нужно переместить
- `index` - (обязательный) индекс, на который нужно переместить элемент(ы)
- `target` - (опциональный) целевой объект Data Collection

### Возвращаемое значение {#returns}

Метод возвращает либо строку с идентификатором элемента, либо массив строковых значений с идентификаторами элементов

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.move("4",5); // перемещает фигуру с id=4 на позицию с индексом 5
~~~
