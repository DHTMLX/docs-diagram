---
sidebar_label: Прокрутка Diagram
title: Прокрутка Diagram
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о прокрутке Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Прокрутка Diagram {#scrolling-diagram}

По умолчанию размер компонента задаётся автоматически в соответствии с содержимым. При необходимости компонент примет размер HTML-контейнера и отобразит внутренние горизонтальную и вертикальную прокрутки для соответствия содержимому.

## Прокрутка диаграммы {#scrolling-diagram-1}

Вы можете прокрутить диаграмму к области, где расположен нужный элемент, с помощью метода [`showItem()`](api/diagram/showitem_method.md) объекта диаграммы.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Также вы можете прокрутить диаграмму к нужной позиции с помощью метода [`scrollTo()`](api/diagram/scrollto_method.md).

<iframe src="https://snippet.dhtmlx.com/f970hbym?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Получение состояния прокрутки {#getting-scroll-state}

API Diagram позволяет получить текущую позицию прокрутки с помощью соответствующего метода [`getScrollState()`](api/diagram/getscrollstate_method.md):

~~~jsx
// возврат начальной позиции прокрутки
const coords = diagram.getScrollState(); // -> {x:0,y:0}
~~~

Он возвращает объект с горизонтальной и вертикальной позицией прокрутки.

## Отслеживание прокрутки диаграммы {#catching-diagram-scrolling}

Вы можете отслеживать начало прокрутки Diagram с помощью события [`scroll`](api/diagram/scroll_event.md). Функция-обработчик принимает позицию прокрутки в качестве параметра:

- `pos` - (*object*) позиция прокрутки в виде объекта с атрибутами x и y

~~~jsx
diagram.events.on("Scroll", (position) => {
    alert("The diagram has been scrolled:" + position);
});
~~~
