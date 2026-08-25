---
sidebar_label: connectionPoints
title: Свойство connectionPoints редактора
description: Изучите свойство connectionPoints редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# connectionPoints

### Описание {#description}

@short: Необязательный. Включает/отключает возможность соединения фигур с помощью элементов соединения

:::info
Свойство `connectionPoints` работает только в режиме `default`.
:::

### Использование {#usage}

~~~jsx
connectionPoints?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
connectionPoints: true
~~~

### Пример {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // только "default"
    connectionPoints: false, // по умолчанию true
    // другие настройки
});
~~~

**Журнал изменений**: Добавлено в v6.0
