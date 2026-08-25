---
sidebar_label: copyStyles()
title: Метод copyStyles() Copy Manager
description: Вы можете узнать о методе copyStyles() Copy manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# copyStyles()

### Описание {#description}

@short: Копирует стили указанного элемента или первого элемента из списка выбранных

### Использование {#usage}

~~~jsx
copyStyles(id?: string | number): void;
~~~

### Параметры {#parameters}

- `id`- (опционально) id элемента, выбранного для копирования стилей

### Пример {#example}

-  вызовите метод без аргументов, чтобы скопировать стили *первого элемента из списка выбранных*

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles(); // копирует стили первого элемента из списка выбранных
~~~

- передайте методу id элемента, чтобы скопировать его стили

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles("1"); // копирует стили указанного элемента
~~~

**Журнал изменений**: Добавлено в v6.0
