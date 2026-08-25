---
sidebar_label: showItem()
title: Метод showItem
description: Подробнее о методе showItem вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# showItem()

### Описание {#description}

@short: Прокручивает область просмотра, чтобы сделать целевой элемент видимым

### Использование {#usage}

~~~jsx
showItem(id: string | number): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) **ID** целевого элемента

### Пример {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.showItem(123);
~~~

**Связанные примеры**:

- [Diagram. Поиск фигуры](https://snippet.dhtmlx.com/d7kvzq4r)
- [Diagram. Прокрутка содержимого](https://snippet.dhtmlx.com/f970hbym)
