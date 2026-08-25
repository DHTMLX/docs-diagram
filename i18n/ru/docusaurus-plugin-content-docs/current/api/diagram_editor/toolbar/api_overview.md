---
sidebar_label: Обзор API Toolbar
title: Обзор API Toolbar
description: Ознакомьтесь с обзором Toolbar в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Обзор API Toolbar

[Toolbar](guides/diagram_editor/toolbar.md) является частью Diagram Editor и помогает пользователям управлять процессом редактирования. Используйте свойство `toolbar` конфигурационного объекта [`view`](api/diagram_editor/editor/config/view_property.md), чтобы показывать, скрывать и настраивать Toolbar. Доступны два способа инициализации на выбор:

- создание Toolbar по умолчанию с помощью настройки `toolbar:true`:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true // отображение Toolbar по умолчанию
    }
});
~~~

- настройка Toolbar в виде объекта с [набором свойств](/category/toolbar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // настройка Toolbar через объект
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

Изучите соответствующие разделы API, чтобы ознакомиться с доступными методами, свойствами и событиями Toolbar.

## Методы Toolbar {#toolbar-methods}

- [Список методов Toolbar](api/diagram_editor/toolbar/methods/overview.md)

## Свойства Toolbar {#toolbar-properties}

- [Список свойств Toolbar](/category/toolbar-properties/)

## События Toolbar {#toolbar-events}

- [Список событий Toolbar](api/diagram_editor/toolbar/events/overview.md)
