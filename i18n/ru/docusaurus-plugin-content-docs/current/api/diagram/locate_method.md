---
sidebar_label: locate()
title: Метод locate()
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать о методе locate. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и live-демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# locate()

### Описание {#description}

@short: Возвращает идентификатор элемента по указанному событию HTML или тегу

### Использование {#usage}

~~~jsx
locate(event: object): any;
~~~

### Параметры {#parameters}

- `event` - (обязательный) нативный объект события

### Возвращаемое значение {#returns}

Метод возвращает идентификатор фигуры, к которой относится событие/тег

### Пример {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const id = diagram.locate(event);
~~~
