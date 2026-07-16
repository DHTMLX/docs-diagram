---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: В документации библиотеки DHTMLX JavaScript Diagram вы можете узнать об интеграции с Svelte. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Интеграция с Svelte {#integration-with-svelte}

:::tip
Прежде чем читать эту документацию, вы должны быть знакомы с основными концепциями и шаблонами **Svelte**. Чтобы освежить знания, обратитесь к [**документации Svelte**](https://svelte.dev/).
:::

DHTMLX Diagram Editor совместим со **Svelte**. Мы подготовили примеры кода, показывающие, как использовать DHTMLX Diagram Editor со **Svelte**. Дополнительную информацию можно найти в соответствующем [**примере на GitHub**](https://github.com/DHTMLX/svelte-diagram-demo).

## Создание проекта {#creating-a-project}

:::info
Прежде чем создавать новый проект, установите [**Vite**](https://vite.dev/) (необязательно) и [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать проект **Svelte** на JS, выполните следующую команду:

~~~json
npm create vite@latest
~~~

При создании проекта выберите варианты Svelte и JavaScript. Назовём проект **my-svelte-diagram-app**.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в каталог приложения:

~~~json
cd my-svelte-diagram-app
~~~

Затем вам нужно установить зависимости и запустить приложение. Для этого используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~jsx
yarn
yarn start // или yarn dev
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

Теперь вам нужно создать компонент Svelte, чтобы добавить Diagram Editor в приложение. Создадим новый файл в каталоге ***src/*** и назовём его ***DiagramEditor.svelte***.

#### Импорт исходных файлов {#importing-source-files}

Откройте файл ***DiagramEditor.svelte*** и импортируйте исходные файлы Diagram Editor. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Diagram Editor из локальной папки, пути импорта выглядят следующим образом:

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

Обратите внимание, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что вы импортируете файл CSS как **diagram.min.css**.

- если вы используете пробную версию Diagram Editor, укажите следующие пути:

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

В этом руководстве показано, как настроить **пробную** версию Diagram Editor.

#### Настройка контейнера и инициализация Diagram Editor {#set-the-container-and-initialize-diagram-editor}

Чтобы отобразить Diagram Editor на странице, нужно создать контейнер для Diagram Editor и инициализировать этот компонент с помощью соответствующего конструктора:

~~~html {3,6,10-11,19} title="DiagramEditor.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { DiagramEditor } from "@dhx/trial-diagram";
    import "@dhx/trial-diagram/codebase/diagram.min.css"

    let container; // инициализация контейнера для Diagram Editor
    let diagram_editor;

    onMount(() => {
        // инициализация компонента Diagram Editor
        diagram_editor = new DiagramEditor(container, {});
    });

    onDestroy(() => {
        diagram_editor.destructor(); // уничтожение Diagram Editor
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### Добавление стилей {#adding-styles}

Чтобы Diagram Editor отображался корректно, укажите важные стили для Diagram Editor и его контейнера в CSS-файле проекта:

~~~css title="app.css"
/* стили для начальной страницы */
html,
body,
#app { /* убедитесь, что используете корневой контейнер #app */
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

Чтобы добавить данные в Diagram Editor, нужно предоставить [**набор данных**](https://github.com/DHTMLX/svelte-diagram-demo/blob/main/src/data.js). Создадим файл ***data.js*** в каталоге ***src/*** и добавим в него данные:

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

Затем откройте файл ***App.svelte***, импортируйте данные и передайте их в только что созданный компонент `<DiagramEditor/>` в качестве `props`:

~~~html {3,5,8} title="App.svelte"
<script>
    import DiagramEditor from "./DiagramEditor.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<DiagramEditor data={data} />
~~~

Перейдите в файл ***DiagramEditor.svelte*** и примените переданные `props` к Diagram Editor с помощью метода [`parse()`](api/diagram_editor/editor/methods/parse_method.md):

~~~html {6,13} title="DiagramEditor.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { DiagramEditor } from "@dhx/trial-diagram";
    import "@dhx/trial-diagram/codebase/diagram.min.css"

    export let data;

    let container;
    let diagram_editor;

    onMount(() => {
        diagram_editor = new DiagramEditor(container, {});
        diagram_editor.parse(data);
    });

    onDestroy(() => {
        diagram_editor.destructor();
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

Теперь компонент Diagram Editor готов к использованию. Когда элемент будет добавлен на страницу, он инициализирует Diagram Editor с данными. Вы также можете указать необходимые настройки конфигурации. Посетите наш [справочник API Diagram Editor](/category/diagram-editor-api/), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в Diagram Editor, возникает событие. Вы можете использовать эти события, чтобы отслеживать действие и запускать нужный код в ответ на него. См. [полный список событий](api/diagram_editor/editor/events/overview.md).

Откройте ***DiagramEditor.svelte*** и дополните метод `onMount()` следующим образом:

~~~html {8-11} title="DiagramEditor.svelte"
<script>
// ...
let diagram_editor;

onMount(() => {
    diagram_editor = new DiagramEditor(container, {})

    diagram_editor.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + diagram_editor.selection.getSelectedCell());
        console.log(cell);
    });
});

onDestroy(() => {
    diagram_editor.destructor();
});
</script>

// ...
~~~

После этого, когда мы запустим приложение, мы должны увидеть Diagram Editor, загруженный с данными на странице.

![Инициализация Diagram Editor](/img/trial_diagram.png)

Теперь у вас должна быть базовая настройка для интеграции DHTMLX Diagram Editor со Svelte. Вы можете настроить код в соответствии со своими требованиями. Итоговый пример можно найти на [**GitHub**](https://github.com/DHTMLX/svelte-diagram-demo).
