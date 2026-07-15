---
sidebar_label: Инициализация
title: Инициализация Diagram Editor
description: Узнайте, как начать работу с Diagram Editor, в документации библиотеки DHTMLX JavaScript Diagram. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Инициализация Diagram Editor

В этой статье рассматривается процесс отображения Diagram Editor на странице. Чтобы инициализировать редактор, необходимо подключить исходные файлы, специфичные для Editor, и использовать экземпляр `DiagramEditor`. Во всех остальных аспектах этап инициализации совпадает с инициализацией компонента Diagram:

- [Скачайте пакет DHTMLX Diagram](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) и распакуйте его в папку своего проекта
- [Подключите исходные файлы на странице](#including-required-code-files)
- [Инициализируйте Diagram Editor с помощью конструктора объекта](#initializing-diagram-editor)
- [Загрузите данные в Diagram Editor](#loading-data-into-diagram-editor)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
    <link rel="stylesheet" href="../codebase/diagramWithEditor.css">
</head>

<body>
    <div id="editor_container"></div>
    <script>
        // подготовка данных
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // другие объекты
        ];

        // создание Diagram Editor
        const editor = new dhx.DiagramEditor("editor_container", {
            // параметры конфигурации
        });

        // загрузка данных в редактор
        editor.parse(data);
    </script>
</body>
</html>
~~~

## Подключение необходимых файлов кода {#including-required-code-files}

Чтобы создать Diagram Editor, необходимо подключить на странице 2 исходных файла:

- **diagramWithEditor.js**
- **diagramWithEditor.css**

Убедитесь, что вы указали правильные относительные пути к этим файлам:

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

### Установка Diagram Editor через npm или yarn {#installing-diagram-editor-via-npm-or-yarn}

Вы можете импортировать JavaScript Diagram Editor в свой проект с помощью пакетного менеджера `yarn` или `npm`.

#### Установка пробной версии Diagram Editor через npm или yarn {#installing-trial-diagram-editor-via-npm-or-yarn}

:::info
Если вы хотите использовать пробную версию Diagram Editor, скачайте [**пробный пакет Diagram**](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) и выполните шаги, описанные в файле *README*. Обратите внимание, что пробная версия Diagram Editor доступна только 30 дней.
:::

#### Установка PRO-версии Diagram Editor через npm или yarn {#installing-pro-diagram-editor-via-npm-or-yarn}

:::info
Вы можете получить доступ к приватному **npm** DHTMLX напрямую в [Личном кабинете](https://dhtmlx.com/clients/), сгенерировав логин и пароль для **npm**. Там же доступно подробное руководство по установке. Обратите внимание, что доступ к приватному **npm** предоставляется только при активной проприетарной лицензии на Diagram.
:::

## Инициализация Diagram Editor {#initializing-diagram-editor}

Вы можете инициализировать Diagram Editor в контейнере, в теле документа или в ячейке Layout.

### Инициализация в контейнере {#initialization-in-a-container}

Чтобы инициализировать Diagram Editor в контейнере, используйте конструктор `dhx.DiagramEditor` и передайте функции-конструктору следующие два параметра:

- контейнер, в который будет помещён Diagram Editor; присвоим ему id `"editor_container"`:

~~~html title="index.html"
<div id="editor_container"></div>
~~~

- объект с [параметрами конфигурации](#configuration-properties). Если этот аргумент не передан конструктору, будут применены настройки по умолчанию

~~~jsx title="index.js"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Инициализация в теле документа {#initialization-in-the-document-body}

Вы также можете не задавать контейнер для Diagram Editor и добавить его непосредственно в тело документа:

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### Инициализация в ячейке Layout {#initialization-in-a-layout-cell}

Вы также можете инициализировать редактор внутри [ячейки Layout](https://docs.dhtmlx.com/suite/layout/). В этом случае используйте *null* вместо контейнера:

~~~jsx
const editor = new dhx.DiagramEditor(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram_editor"
        }
    ]
});

layout.getCell("diagram_editor").attach(editor);
~~~

### Параметры конфигурации {#configuration-properties}

Чтобы изменить конфигурацию редактора, укажите нужное свойство в объекте конфигурации, передаваемом вторым параметром функции-конструктору.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "default" | "org" | "mindmap"
    shapeBarWidth: 320,
    lineGap: 20
});
~~~

### Свойства {#properties}

Ознакомьтесь с [полным списком параметров конфигурации Editor](api/diagram_editor/editor/config/overview.md).

## Загрузка данных в Diagram Editor {#loading-data-into-diagram-editor}

Вы можете загрузить [подходящий набор данных](guides/loading_data.md#preparing-data-to-load) в редактор с помощью метода [parse()](api/diagram_editor/editor/methods/parse_method.md) редактора.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
