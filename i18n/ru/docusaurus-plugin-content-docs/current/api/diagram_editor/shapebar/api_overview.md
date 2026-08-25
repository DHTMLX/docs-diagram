---
sidebar_label: Обзор API Shapebar
title: Обзор API Shapebar
description: Вы можете ознакомиться с обзором Shapebar в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Обзор API Shapebar {#shapebar-api-overview}

[Shapebar](guides/diagram_editor/shapebar.md) — это часть Diagram Editor, которая отображает превью элементов Diagram (фигур, групп и дорожек). Используйте свойство `shapebar` конфигурационного объекта [`view`](api/diagram_editor/editor/config/view_property.md) для отображения, скрытия и настройки Shapebar. Есть два способа инициализации, один из которых можно выбрать:

- создание Shapebar по умолчанию с помощью настройки `shapebar:true`:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true // отображение Shapebar по умолчанию
    }
});
~~~

- настройка Shapebar путём указания его в виде объекта с [набором свойств](/category/shapebar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // настройка Shapebar через объект
        shapebar: {
            css: "custom_css",
            show: true,
            width: 300,
            preview: {
               scale: 0.65,
               gap: 8
            },
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

Изучите [связанный раздел API](/category/shapebar-properties/), чтобы ознакомиться с доступными свойствами Shapebar.
