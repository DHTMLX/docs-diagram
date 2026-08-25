---
sidebar_label: Обзор API Editbar
title: Обзор API Editbar
description: Ознакомьтесь с обзором Editbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите гайды для разработчиков и справочник API, попробуйте примеры кода и демонстрации в реальном времени, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# Обзор API Editbar {#editbar-api-overview}

[Editbar](guides/diagram_editor/editbar.md) — это часть Diagram Editor, которая содержит элементы управления для работы с элементами Diagram (фигурами, линиями, группами и т. д.). Используйте свойство `editbar` конфигурационного объекта [`view`](api/diagram_editor/editor/config/view_property.md), чтобы показывать, скрывать и настраивать Editbar. Есть два способа инициализации на выбор:

- создание Editbar по умолчанию с помощью настройки `editbar:true`:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // отображение Editbar по умолчанию
    }
});
~~~

- настройка Editbar путём указания его в виде объекта с [набором свойств](/category/editbar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // настройка Editbar через объект
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

Перейдите в [соответствующий раздел API](/category/editbar-properties/), чтобы ознакомиться с доступными свойствами Editbar.
