---
sidebar_label: serialize()
title: Метод serialize редактора
description: Узнайте больше о методе serialize редактора в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# serialize()

### Описание {#description}

@short: Сериализует данные редактора в массив объектов JSON

### Использование {#usage}

~~~jsx
serialize(): array;
~~~

### Возвращаемое значение {#returns}

Метод возвращает массив объектов JSON для каждого элемента данных редактора

### Пример {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

const data = editor.serialize();
~~~

**Связанный пример**: [Diagram Editor. Режим организационной диаграммы. Живой редактор](https://snippet.dhtmlx.com/bng7ego7)
