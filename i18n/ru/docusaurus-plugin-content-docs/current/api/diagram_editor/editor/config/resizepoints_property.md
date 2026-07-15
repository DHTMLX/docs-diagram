---
sidebar_label: resizePoints
title: Свойство resizePoints редактора
description: Узнайте о свойстве resizePoints редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# resizePoints

### Описание {#description}

@short: Необязательный параметр. Включает/отключает возможность изменения размера фигур с помощью элементов управления размером

### Использование {#usage}

~~~jsx
resizePoints?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
resizePoints: true
~~~

### Пример {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    resizePoints: false, // по умолчанию true
    // остальные настройки
});
~~~

**Журнал изменений**: Добавлено в v6.0
