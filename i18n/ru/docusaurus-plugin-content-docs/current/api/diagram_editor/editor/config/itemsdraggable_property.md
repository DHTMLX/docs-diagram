---
sidebar_label: itemsDraggable
title: Свойство itemsDraggable редактора Editor
description: Изучите свойство itemsDraggable редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# itemsDraggable

:::info
Свойство работает только в режимах организационной диаграммы и ментальной карты. Перемещаемый элемент перетаскивается вместе со всеми дочерними элементами.
:::

### Описание {#description}

@short: Необязательный параметр. Включает/отключает перетаскивание элемента от одного родительского элемента к другому

### Использование {#usage}

~~~jsx
itemsDraggable?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
itemsDraggable: true
~~~

### Пример {#example}

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "org", //  org" или "mindmap"
    itemsDraggable: false
});
~~~

**Журнал изменений**: Добавлено в v4.1
