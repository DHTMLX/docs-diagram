---
sidebar_label: getScrollState()
title: Метод getScrollState
description: Изучите метод getScrollState в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и интерактивные демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# getScrollState()

### Описание {#description}

@short: Возвращает позицию внутренней прокрутки диаграммы

### Использование {#usage}

~~~jsx
getScrollState(): object;
~~~

### Возвращаемое значение {#returns}

Метод возвращает объект, который хранит позиции прокрутки. Он включает два свойства:

- `x` - горизонтальная позиция прокрутки
- `y` - вертикальная позиция прокрутки

### Пример {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const state = diagram.getScrollState();
// diagram.scrollTo( state.x, state.y );
~~~

**Полезная статья**: [Прокрутка диаграммы](guides/diagram/scrolling_diagram.md)

**Связанный пример**: [Диаграмма. Прокрутка содержимого](https://snippet.dhtmlx.com/f970hbym)
