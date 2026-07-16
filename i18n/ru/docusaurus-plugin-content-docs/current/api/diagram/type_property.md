---
sidebar_label: type
title: Свойство type
description: Вы можете изучить свойство type в документации библиотеки DHTMLX JavaScript Diagram. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# type

### Описание {#description}

@short: Обязательный. Определяет режим инициализации Diagram

### Использование {#usage}

~~~jsx
type: "default" | "org" | "mindmap" | "pert";
~~~

### Пример {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "org" | "mindmap" | "pert"
});
~~~

### Режимы Diagram {#diagram-modes}

DHTMLX Diagram можно инициализировать в одном из следующих режимов: `"default"`, `"org"`, `"mindmap"` или `"pert"`. Чтобы применить нужный режим, укажите соответствующее значение свойства `type`:

- `type:"default"` используется для визуализации связей между сущностями

<iframe src="https://snippet.dhtmlx.com/f3uekgjw?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"org"` используется для отображения структуры группы людей путем представления их связей в иерархическом порядке

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"mindmap"` используется для упорядочивания информации по теме путем представления основной идеи, окруженной связанными идеями

<iframe src="https://snippet.dhtmlx.com/twd25ww1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

- `type:"pert"` используется для отображения последовательностей задач и проектов, а также визуализации связей между ними. Такой тип диаграммы также полезен при оценке критического пути и планировании проекта

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Журнал изменений**:

- Тип `"pert"` добавлен в v6.1

**Полезные статьи**:

- [Обзор](/)
- [Как начать работу с Diagram](guides/diagram/initialization.md)
