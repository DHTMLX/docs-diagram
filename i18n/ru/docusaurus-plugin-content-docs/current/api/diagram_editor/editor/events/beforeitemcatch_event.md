---
sidebar_label: beforeItemCatch
title: Событие beforeItemCatch редактора
description: Изучите событие beforeItemCatch редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо-версии, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# beforeItemCatch

### Описание {#description}

@short: Срабатывает перед захватом элемента

:::info
Событие работает только в режимах **организационной диаграммы** и `mindmap` компонента Diagram, при этом свойство `itemsDraggable` должно быть установлено в значение `true`.
:::

### Использование {#usage}

~~~jsx
"beforeItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### Параметры {#parameters}

Колбек события вызывается с объектом со следующими параметрами:

  - `id` - идентификатор перемещаемого элемента
  - `targetId` - идентификатор целевого элемента
  - `batch` - массив идентификаторов перемещённых элементов
  - `event` - объект события

### Возвращаемое значение {#returns}

Колбек возвращает `false`, чтобы предотвратить захват элемента; в противном случае — `true`

:::info
Для обработки внутренних событий Diagram Editor можно использовать метод `on()`.
:::

### Пример {#example}

~~~jsx {6-20}
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// прикрепление обработчика к событию
editor.events.on("beforeItemCatch", ({ id, targetId }) => {
  if (targetId === "2.1"){
    console.log(`
      Item ${id} won't be be caught by the item "2.1"
    `);
    return false;
  }
  else{
    console.log(`
      Item ${id} will be caught by the item ${targetId}
    `);
    return true;
  }
});
~~~

**Журнал изменений**:

- Параметр `batch` добавлен в v6.0
- Начиная с v6.0, колбек принимает объект в качестве параметра
