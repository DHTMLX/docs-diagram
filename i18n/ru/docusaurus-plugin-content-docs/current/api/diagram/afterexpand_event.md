---
sidebar_label: afterExpand
title: Событие afterExpand
description: Подробнее о событии afterExpand вы можете узнать в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# afterExpand

### Описание {#description}

@short: Срабатывает после того, как элемент был развёрнут

### Использование {#usage}

~~~jsx
afterExpand: (
    id: string | number,
    dir?: string
) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события принимает следующие параметры:

- `id` - (обязательный) идентификатор элемента, который был развёрнут
- `dir` - (необязательный) сторона, в которую были показаны дочерние элементы относительно родительской фигуры (`"left"` или `"right"` для *type:`"topic"`*, в остальных случаях - undefined)

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("afterExpand", (id, dir) => {
    console.log(diagram.data.getItem(id).text + " was expanded", dir);
});
~~~

**Журнал изменений**: параметр `dir` добавлен в v3.1
