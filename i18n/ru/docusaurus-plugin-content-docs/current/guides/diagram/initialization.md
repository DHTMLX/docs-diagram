---
sidebar_label: Инициализация
title: Инициализация
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать, как начать работу с Diagram. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Инициализация Diagram {#diagram-initialization}

В этой статье мы рассмотрим этапы добавления DHTMLX Diagram на страницу. Этот процесс включает несколько простых шагов:

- [Скачайте пакет DHTMLX Diagram](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) и распакуйте его в папку вашего проекта
- [Подключите исходные файлы DHTMLX Diagram на странице](#including-required-code-files)
- [Инициализируйте Diagram с помощью конструктора объекта](#initializing-diagram)
- [Загрузите данные в Diagram](#loading-data-into-diagram)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="codebase/diagram.js"></script>
    <link rel="stylesheet" href="codebase/diagram.css">
</head>

<body>
    <div id="diagram_container"></div>
    <script>
        // подготовка данных диаграммы
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // другие объекты
        ];

        // создание DHTMLX Diagram
        const diagram = new dhx.Diagram("diagram_container", {
            // опции конфигурации
        });

        // загрузка данных в диаграмму
        diagram.data.parse(data);
    </script>
</body>
</html>
~~~

## Подключение необходимых файлов кода {#including-required-code-files}

Чтобы создать Diagram, необходимо подключить на странице 2 исходных файла:

- **diagram.js**
- **diagram.css**

Убедитесь, что вы указали правильные относительные пути к этим файлам:

~~~html
<script type="text/javascript" src="../codebase/diagram.js"></script>
<link rel="stylesheet" href="../codebase/diagram.css">
~~~

Структура пакета DHTMLX Diagram выглядит следующим образом:

- **sources** - файлы исходного кода библиотеки. Эти файлы не минифицированы и легко читаются. Пакет предназначен в основном для отладки компонента

:::note
Обратите внимание, что **Trial**-версия библиотеки Diagram не содержит папку sources.
:::

- **samples** - примеры кода
- **codebase** - упакованные файлы кода библиотеки. Эти файлы значительно меньше по размеру и предназначены для использования в продакшене
:::info
В своих приложениях используйте файлы из папки **codebase**
:::

## Инициализация Diagram {#initializing-diagram}

Вы можете инициализировать Diagram в контейнере, в теле документа или в ячейке Layout.

### Инициализация в контейнере {#initialization-in-a-container}

Чтобы инициализировать диаграмму в контейнере, используйте конструктор `dhx.Diagram` и передайте следующие два параметра в функцию-конструктор:

- контейнер, в который будет помещён Diagram; присвоим ему идентификатор `"diagram_container"`:

~~~html title="index.html"
<div id="diagram_container"></div>
~~~

- объект со [свойствами конфигурации](#configuration-properties). Если этот аргумент не передан в конструктор, будут применены настройки по умолчанию

~~~jsx title="index.js"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Инициализация в теле документа {#initialization-in-the-document-body}

Вы можете не задавать контейнер для Diagram и добавить его напрямую в тело документа:

~~~jsx
const diagram = new dhx.Diagram(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Инициализация в ячейке Layout {#initialization-in-a-layout-cell}

Вы также можете инициализировать диаграмму внутри [ячейки Layout](https://docs.dhtmlx.com/suite/layout/). В этом случае используйте *null* вместо контейнера:

~~~jsx
const diagram = new dhx.Diagram(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram"
        }
    ]
});

layout.getCell("diagram").attach(diagram);
~~~

### Свойства конфигурации {#configuration-properties}

Чтобы изменить [конфигурацию диаграммы](guides/diagram/configuration.md), укажите нужное свойство в объекте конфигурации, передаваемом вторым параметром функции-конструктора.

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.7,
    // другие опции конфигурации
});
~~~

См. [полный список свойств конфигурации Diagram](api/diagram/api_overview.md#diagram-properties).

**Связанный пример**:	[Diagram Editor. Режим по умолчанию. Широкая блок-схема](https://snippet.dhtmlx.com/4d4k3o8p)

Также вы можете получить доступ к какой-либо опции и задать/изменить её значение через объект `config` диаграммы. Не забудьте вызвать метод [`paint()`](api/diagram/paint_method.md), чтобы перерисовать диаграмму с новой конфигурацией:

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.config.scale = 0.7;
diagram.paint();
~~~

## Загрузка данных в Diagram {#loading-data-into-diagram}

Подробная информация о загрузке данных в DHTMLX Diagram приведена в статье [Загрузка и хранение данных](guides/loading_data.md).
