---
sidebar_label: afterRemove
title: Событие afterRemove объекта Data Collection
description: В этой статье вы можете узнать о событии afterRemove объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, испытайте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterRemove

### Описание {#description}

@short: Происходит после удаления элемента из data collection

### Использование {#usage}

~~~jsx
afterRemove: (removedItem: object) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующий параметр:

- `removedItem` - (обязательный) объект удалённого элемента

### Пример {#example}

~~~jsx {9-11}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("afterRemove", (newItem) => {
    console.log("afterRemove "+ item);
});
~~~
