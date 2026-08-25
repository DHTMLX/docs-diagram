---
sidebar_label: getRoots()
title: Метод getRoots класса Data Collection
description: Узнайте о методе getRoots класса Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# getRoots()

### Описание {#description}

@short: Возвращает массив с id всех корневых элементов диаграммы

### Использование {#usage}

~~~jsx
getRoots(): array
~~~

### Возвращаемое значение {#returns}

Метод возвращает массив с id корневых элементов

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoots();
~~~

**Журнал изменений**: Добавлено в v4.0
