---
sidebar_label: scrollTo()
title: Метод scrollTo
description: Узнайте больше о методе scrollTo в документации библиотеки DHTMLX JavaScript Diagram. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# scrollTo()

### Описание {#description}

@short: Устанавливает внутреннюю прокрутку диаграммы в указанную позицию

### Использование {#usage}

~~~jsx
scrollTo(x: number, y: number): void;
~~~

### Параметры {#parameters}

- `x` - (обязательный) позиция горизонтальной прокрутки
- `y` - (обязательный) позиция вертикальной прокрутки

### Пример {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.scrollTo(100, 80);
~~~

**Полезная статья**: [Прокрутка Diagram](guides/diagram/scrolling_diagram.md)
