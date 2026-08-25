---
sidebar_label: load()
title: Метод load класса Data Collection
description: Узнайте о методе load класса Data Collection в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Diagram.
---

# load()

### Описание {#description}

@short: Загружает данные из внешнего файла

### Использование {#usage}

~~~jsx
load(
    url: string | object,
    driver?: object | string
): promise;
~~~

### Параметры {#parameters}

- `url` - (обязательный) URL внешнего файла или `DataProxy` с настроенным URL
- `driver` - (необязательный) `DataDriver` или тип данных (`"json"`, `"csv"`, `"xml"`), по умолчанию `"json"`

### Возвращаемое значение {#returns}

Метод возвращает промис загрузки данных

### Пример {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.load("../common/data.json");
~~~

### Подробности {#details}

Компонент выполнит AJAX-запрос и будет ожидать, что удалённый URL вернёт корректные данные в формате JSON.

Загрузка данных выполняется асинхронно, поэтому весь код, который должен выполняться после загрузки, нужно обернуть в промис:

~~~jsx
diagram.data.load("../some/data").then(() => {
    diagram.selection.add(123);
});
~~~

**Полезная статья**:  [Загрузка и хранение данных](guides/loading_data.md)

**Связанный пример**: [Diagram. Данные. Загрузка данных](https://snippet.dhtmlx.com/09isp2d8)
