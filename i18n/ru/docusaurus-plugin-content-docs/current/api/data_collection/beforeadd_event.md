---
sidebar_label: beforeAdd
title: Событие beforeAdd объекта Data Collection
description: В этой статье вы можете узнать о событии beforeAdd объекта data collection в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, испытайте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# beforeAdd

### Описание {#description}

@short: Происходит перед добавлением элемента

### Использование {#usage}

~~~jsx
beforeAdd: (newItem: object) => boolean | void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующий параметр:

- `newItem` - (обязательный) объект добавляемого элемента

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить добавление элемента в data collection; в противном случае — `true`

### Пример {#example}

~~~jsx {9-13}
// инициализация Diagram
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// загрузка данных
diagram.data.parse(data);

// подключение обработчика события
diagram.events.on("beforeAdd", (newItem) => {
    if (some_check)
        return false;
    return true;
});
~~~
