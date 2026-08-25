---
sidebar_label: grid
title: Свойство grid редактора Editor
description: Изучите свойство grid редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# grid

### Описание {#description}

@short: Необязательный параметр. Включает/отключает сетку, отображаемую на холсте редактора

### Использование {#usage}

~~~jsx
grid?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
grid: true
~~~

### Пример {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "org" | "mindmap" | "default"
    grid: false, // по умолчанию true
    // другие параметры конфигурации
});
~~~

**Журнал изменений**: Добавлено в v6.0
