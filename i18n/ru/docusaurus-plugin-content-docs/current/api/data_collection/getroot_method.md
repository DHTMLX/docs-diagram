---
sidebar_label: getRoot()
title: Метод getRoot для Data Collection
description: Узнайте о методе getRoot модуля Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# getRoot()

### Описание {#description}

@short: Возвращает ID корневого элемента по ID его дочернего элемента

### Использование {#usage}

~~~jsx
getRoot(id: string | number): string | number;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID дочернего элемента

### Возвращаемое значение {#returns}

Метод возвращает ID корневого элемента. Корневой элемент — это первый элемент древовидной структуры

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoot("id_1.1.1"); // -> "id_1"
~~~

**Журнал изменений**: Добавлено в v4.0
