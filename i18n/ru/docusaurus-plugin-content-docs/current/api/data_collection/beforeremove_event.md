---
sidebar_label: beforeRemove
title: Событие beforeRemove объекта Data Collection
description: В этой статье вы можете узнать о событии beforeRemove объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, испытайте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeRemove

### Описание {#description}

@short: Происходит после удаления элемента из data collection

### Использование {#usage}

~~~jsx
beforeRemove: (removedItem: any) => boolean | void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующий параметр:

- `removedItem` - (обязательный)  объект удаляемого элемента

### Возвращаемое значение {#returns}

Верните `false`, чтобы заблокировать удаление элемента из data collection; в противном случае — `true`.

### Пример {#example}

~~~jsx {9-12}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("beforeRemove", (newItem) => {
    console.log("beforeRemove "+ item);
    return true;
});
~~~
