---
sidebar_label: afterItemCatch
title: Событие afterItemCatch редактора Editor
description: Вы можете узнать о событии afterItemCatch редактора Editor в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# afterItemCatch

### Описание {#description}

@short: Происходит после захвата элемента

:::info
Событие работает только в режимах **организационной диаграммы** и `mindmap` библиотеки Diagram, свойство `itemsDraggable` должно быть установлено в `true`.
:::

### Использование {#usage}

~~~jsx
"afterItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом со следующими параметрами:

  - `id` - идентификатор перемещённого элемента
  - `targetId` - идентификатор целевого элемента
  - `batch` - массив идентификаторов перемещённых элементов
  - `event` - объект события

### Пример {#example}

~~~jsx {6-11}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// привязка обработчика к событию
editor.events.on("afterItemCatch", ({ id, targetId }) => {
    console.log(`
        item ${id} is caught by the item ${targetId}
    `);
});
~~~

**Журнал изменений**:

- Параметр `batch` был добавлен в v6.0
- Начиная с v6.0, функция обратного вызова принимает объект в качестве параметра
