---
sidebar_label: Обзор API Copy manager
title: Обзор API Copy manager
description: Ознакомьтесь с обзором Copy manager в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# Обзор API Copy manager {#copy-manager-api-overview}

Набор API, которые можно использовать при копировании и вставке элементов Diagram Editor. Используйте ключевое слово `model`, чтобы получить доступ к Copy manager через объект `editor`:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // только default
});
// ...
editor.model.copy(); // копирует выбранные элементы
~~~

## Обзор методов Copy manager {#copy-manager-methods-overview}

| Название                                                                     | Описание                                                                 |
| :----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [](api/diagram_editor/copymanager/methods/copy_method.md)             | @getshort(api/diagram_editor/copymanager/methods/copy_method.md)       |
| [](api/diagram_editor/copymanager/methods/copystyles_method.md)    | @getshort(api/diagram_editor/copymanager/methods/copystyles_method.md) |
| [](api/diagram_editor/copymanager/methods/paste_method.md)         | @getshort(api/diagram_editor/copymanager/methods/paste_method.md)      |
| [](api/diagram_editor/copymanager/methods/pastestyles_method.md)   | @getshort(api/diagram_editor/copymanager/methods/pastestyles_method.md)|
