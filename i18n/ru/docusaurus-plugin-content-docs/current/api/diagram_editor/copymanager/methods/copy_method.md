---
sidebar_label: copy()
title: Метод copy() Copy Manager
description: Вы можете узнать о методе copy() Copy manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# copy()

### Описание {#description}

@short: Копирует выбранные элементы или элементы с указанными id

:::note
Метод `copy()` работает только в том случае, если Diagram Editor инициализирован в режиме `default`.
:::

### Использование {#usage}

~~~jsx
copy(ids?: (string | number)[]): void;
~~~

### Параметры {#parameters}

- `ids` - (опционально) массив (список) id элементов для копирования

### Пример {#example}

- вызовите метод без аргументов, чтобы скопировать элементы из списка выбранных

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // только default
});
// ...
editor.model.copy(); // копирует выбранные элементы
~~~

- передайте методу id элементов, чтобы скопировать соответствующие элементы

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // только default
});
// ...
editor.model.copy(["1", "2"]); // копирует указанные элементы
~~~

**Журнал изменений**: Добавлено в v6.0
