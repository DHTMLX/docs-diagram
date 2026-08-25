---
sidebar_label: afterAdd
title: Событие afterAdd объекта Data Collection
description: В этой статье вы можете узнать о событии afterAdd объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, испытайте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterAdd

### Описание {#description}

@short: Происходит после добавления элемента

### Использование {#usage}

~~~jsx
afterAdd: (newItem: object) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующий параметр:

- `newItem` - (обязательный) объект добавленного элемента

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("afterAdd", (newItem) => {
    console.log("A new item is added");
});
~~~

Событие можно использовать для задания значений по умолчанию или форматирования данных элемента по умолчанию
