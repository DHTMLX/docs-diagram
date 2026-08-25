---
sidebar_label: defaultLinkType
title: Свойство defaultLinkType
description: Вы можете изучить свойство defaultLinkType в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# defaultLinkType

### Описание {#description}

@short: Опционально. Тип соединительной линии по умолчанию

Значение применяется, если объект линии не содержит свойства `"type"`

### Использование {#usage}

~~~jsx
defaultLinkType?: "line" | "dash";
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
defaultLinkType: "line"
~~~

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

**Полезная статья**: [Настройка соединений между фигурами](/lines/#setting-connections-between-shapes)
