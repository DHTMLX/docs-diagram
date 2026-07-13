---
sidebar_label: itemRotateEnd
title: Событие itemRotateEnd редактора
description: Узнайте больше о событии itemRotateEnd редактора в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную пробную версию DHTMLX Diagram сроком на 30 дней.
---

# itemRotateEnd

### Описание {#description}

@short: Срабатывает после завершения операции поворота элемента (когда пользователь отпускает кнопку мыши)

### Использование {#usage}

~~~jsx
"itemRotateEnd": ({
    id: string | number,
    angle: number
}) => void;
~~~

### Параметры {#parameters}

Функция обратного вызова события вызывается с объектом со следующими параметрами:

- `id` - идентификатор повёрнутого элемента
- `angle` - итоговый угол поворота элемента в градусах

### Пример {#example}

~~~jsx
// инициализация Diagram Editor
const editor = new dhx.DiagramEditor("editor_container");
// загрузка данных
editor.parse(data);

// подключение обработчика события
editor.events.on("itemRotateEnd", ({ id, angle }) => {
    console.log(`The item ${id} finished rotating, the final angle: ${angle}`);
    // Здесь можно сохранить новый угол поворота элемента на сервере
});
~~~

**Журнал изменений**:

- Событие добавлено в v6.1

**Похожее API**:

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)

**Связанный пример**:

- [Diagram Editor. Управление перемещением, поворотом и изменением размера фигур через события](https://snippet.dhtmlx.com/qldjbbm7)