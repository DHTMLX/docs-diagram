---
sidebar_label: pasteStyles()
title: Метод pasteStyles() Copy Manager
description: Вы можете узнать о методе pasteStyles() Copy manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# pasteStyles()

### Описание {#description}

@short: Применяет скопированные стили к списку выбранных элементов или элементам, указанным по id

### Использование {#usage}

~~~jsx
pasteStyles(ids?: (string | number)[]): void;
~~~

### Параметры {#parameters}

- `ids` - (опционально) массив id элементов, к которым нужно применить скопированные стили

### Пример {#example}

- вызовите метод без аргументов, чтобы применить стили к элементам из списка выбранных

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles(); // копирует стили первого элемента из списка выбранных
editor.model.pasteStyles(); // применяет скопированные стили к элементам из списка выбранных
~~~

- передайте id определенных элементов методу, чтобы применить к ним скопированные стили

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles("2"); // копирует стили указанного элемента
editor.model.pasteStyles(["1", "2", "3"]); // применяет скопированные стили к указанным элементам
~~~

**Журнал изменений**: Добавлено в v6.0
