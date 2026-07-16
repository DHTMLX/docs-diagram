---
sidebar_label: paste()
title: Метод paste() Copy Manager
description: Вы можете узнать о методе paste() Copy manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# paste()

### Описание {#description}

@short: Создает новые элементы, идентичные элементам, переданным методом "copy()"

:::note
Метод `paste()` работает только в том случае, если Diagram Editor инициализирован в режиме `default`.
:::

### Использование {#usage}

~~~jsx
paste(): void;
~~~

### Пример {#example}

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // только default
});
// ...
editor.model.copy(); // копирует выбранные элементы
editor.model.paste() // вставляет новые элементы
~~~

**Журнал изменений**: Добавлено в v6.0
