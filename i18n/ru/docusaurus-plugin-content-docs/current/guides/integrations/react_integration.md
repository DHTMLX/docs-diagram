---
sidebar_label: Интеграция с React
title: Интеграция с React
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать об интеграции с React. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Интеграция с React {#integration-with-react}

:::tip
Чтобы использовать эту документацию, вы должны быть знакомы с основными концепциями и шаблонами [**React**](https://react.dev). Чтобы освежить знания, обратитесь к [**документации React**](https://react.dev/learn).
:::

DHTMLX Diagram Editor совместим с **React**. Мы подготовили примеры кода, показывающие, как использовать DHTMLX Diagram Editor с **React**. Дополнительную информацию можно найти в соответствующем [**примере на GitHub**](https://github.com/DHTMLX/react-diagram-demo).

## Создание проекта {#creating-a-project}

:::info
Прежде чем создавать новый проект, установите [**Vite**](https://vite.dev/) (необязательно) и [**Node.js**](https://nodejs.org/en/).
:::

Вы можете создать базовый проект **React** (используемый в этом руководстве) или использовать **React с Vite**. Назовём проект **my-react-diagram-app**:

~~~json
npx create-react-app my-react-diagram-app
~~~

### Установка зависимостей {#installation-of-dependencies}

Перейдите в каталог только что созданного приложения:

~~~json
cd my-react-diagram-app
~~~

Установите зависимости и запустите сервер разработки. Для этого используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~json
yarn
yarn start
~~~

- если вы используете [**npm**](https://www.npmjs.com/), выполните следующие команды:

~~~json
npm install
npm run dev
~~~

Приложение должно запуститься на локальном хосте (например, `http://localhost:3000`).

## Создание Diagram Editor {#creating-diagram-editor}

Теперь вам нужно получить исходный код DHTMLX Diagram Editor. Сначала остановите приложение и переходите к установке пакета Diagram Editor.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет Diagram Editor**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn) и выполните шаги, описанные в файле README. Обратите внимание, что пробная версия Diagram Editor доступна только в течение 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Теперь вам нужно создать компонент React, чтобы добавить Diagram Editor в приложение. Создайте новый файл в каталоге ***src/*** и назовите его ***DiagramEditor.jsx***.

#### Импорт исходных файлов {#import-source-files}

Откройте файл ***DiagramEditor.jsx*** и импортируйте исходные файлы Diagram Editor. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Diagram Editor из локальной папки, пути импорта выглядят следующим образом:

~~~jsx title="DiagramEditor.jsx"
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
~~~

Обратите внимание, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что вы импортируете файл CSS как **diagram.min.css**.

- если вы используете пробную версию Diagram, укажите следующие пути:

~~~jsx title="DiagramEditor.jsx"
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
~~~

В этом руководстве показано, как настроить **пробную** версию Diagram.

#### Настройка контейнера и инициализация Diagram Editor {#set-the-container-and-initialize-diagram-editor}

Чтобы отобразить Diagram Editor на странице, нужно создать контейнер для Diagram Editor и инициализировать этот компонент с помощью соответствующего конструктора:

~~~jsx {2,6,9-10} title="DiagramEditor.jsx"
import { useEffect, useRef } from "react";
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css"; // подключение стилей Diagram Editor

export default function DiagramEditorComponent(props) {
    let container = useRef(); // инициализация контейнера для Diagram Editor

    useEffect(() => {
        // инициализация компонента Diagram Editor
        const diagram_editor = new DiagramEditor(container.current, {});

        return () => {
            diagram_editor.destructor(); // уничтожение Diagram Editor
        }
    });

    return <div ref={container} className="widget"></div>;
}
~~~

#### Добавление стилей {#adding-styles}

Чтобы Diagram Editor отображался корректно, укажите важные стили для Diagram Editor и его контейнера в CSS-файле проекта:

~~~css title="index.css"
/* стили для начальной страницы */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнера Diagram Editor */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в Diagram Editor, нужно предоставить [**набор данных**](https://github.com/DHTMLX/react-diagram-demo/blob/master/src/data.js). Создадим файл ***data.js*** в каталоге ***src/*** и добавим в него данные:

~~~jsx title="data.js"
export function getData() {
    return [
        { id: 1, x: 880, y: 105, text: "Does user remember his password?", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        { id: 2, x: 1080, y: 125, width: 50, "height": 50, text: "XOR", type: "circle", lineHeight: 18, fontColor: "#fff", fill: "#7D8495", stroke: "#7D8495" },
        { id: 3, x: 1160, y: 40, text: "User forgets his password", type: "preparation", lineHeight: 18, fontColor: "#fff", fill: "#33B579", stroke: "#33B579" },
        { id: 3.1, x: 1340, y: 40, text: "Send an E-mail with new password", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        { id: 3.2, x: 1520, y: 40, text: "E-mail sent", type: "preparation", fontColor: "#fff", lineHeight: 18, fill: "#33B579", stroke: "#33B579" },
        { id: 4, x: 1160, y: 180, text: "User remembers his password", type: "preparation", lineHeight: 18, fontColor: "#fff", fill: "#33B579", stroke: "#33B579" },
        { id: 5, x: 1340, y: 180, text: "User types in login and password", type: "process", lineHeight: 18, fontColor: "#fff", fill: "#3DA0E3", stroke: "#3DA0E3" },
        // другие данные

        { from: 1, to: 2, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3, type: "dash", toSide: "bottom", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 7.5, type: "dash", fromSide: "bottom", toSide: "top", backArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3.2, type: "dash", fromSide: "top", toSide: "top", stroke: "#7D8495" },
        { from: 3, to: 3.1, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 3.1, to: 3.2, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 4, type: "dash", toSide: "top", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 4, to: 5, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 5, to: 6, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        // другие данные
    ]
}
~~~

Затем откройте файл ***App.js*** и импортируйте данные. После этого вы можете передать данные в только что созданный компонент `<DiagramEditor/>` в качестве `props`:

~~~jsx {2,5-6} title="App.js"
import DiagramEditor from "./DiagramEditor";
import { getData } from "./data";

function App() {
    let data = getData();
    return <DiagramEditor data={data} />;
}

export default App;
~~~

Перейдите в файл ***DiagramEditor.jsx*** и примените переданные `props` к Diagram Editor с помощью метода [`parse()`](api/diagram_editor/editor/methods/parse_method.md):

~~~jsx {5,11} title="DiagramEditor.jsx"
import { useEffect, useRef } from "react";
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default function DiagramEditorComponent(props) {
    let container = useRef();

    useEffect(() => {
        const diagram_editor = new DiagramEditor(container.current, {});

        diagram_editor.parse(props.data);

        return () => {
            diagram_editor.destructor();
        }
    });

    return <div ref={container} className="widget"></div>;
}
~~~

Теперь компонент Diagram Editor готов к использованию. Когда элемент будет добавлен на страницу, он инициализирует Diagram Editor с данными. Вы также можете указать необходимые настройки конфигурации. Посетите наш [справочник API Diagram Editor](/category/diagram-editor-api/), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в Diagram Editor, возникает событие. Вы можете использовать эти события, чтобы отслеживать действие и запускать нужный код в ответ на него. См. [полный список событий](api/diagram_editor/editor/events/overview.md).

Откройте ***DiagramEditor.jsx*** и дополните метод `useEffect()` следующим образом:

~~~jsx {5-7} title="DiagramEditor.jsx"
// ...
useEffect(() => {
    const diagram_editor = new DiagramEditor(container.current, {});

    diagram_editor.events.on("zoomIn", (step) => {
        console.log("The diagram in the editor is zoomed in. The step is" + step);
    });

    return () => {
        diagram_editor.destructor();
    }
}, []);
// ...
~~~

После этого вы можете запустить приложение и увидеть Diagram Editor, загруженный с данными на странице.

![Инициализация Diagram Editor](/img/trial_diagram.png)

Теперь вы знаете, как интегрировать DHTMLX Diagram Editor с React. Вы можете настроить код в соответствии со своими требованиями. Итоговый пример можно найти на [**GitHub**](https://github.com/DHTMLX/react-diagram-demo).
