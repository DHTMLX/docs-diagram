---
sidebar_label: Интеграция с Vue.js
title: Интеграция с Vue.js
description: Из документации библиотеки DHTMLX JavaScript Diagram вы узнаете об интеграции с Vue.js. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Diagram.
---

# Интеграция с Vue {#integration-with-vue}

:::tip
Прежде чем читать эту документацию, вам следует ознакомиться с базовыми концепциями и паттернами [**Vue**](https://vuejs.org/). Чтобы освежить знания, обратитесь к [**документации Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Diagram Editor совместим с **Vue**. Мы подготовили примеры кода по использованию DHTMLX Diagram Editor с **Vue 3**. Подробнее см. соответствующий [**Пример на GitHub**](https://github.com/DHTMLX/vue-diagram-demo).

## Создание проекта {#creating-a-project}

:::info
Прежде чем приступить к созданию нового проекта, установите [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать проект **Vue**, выполните следующую команду:

~~~json
npm create vue@latest
~~~

Эта команда устанавливает и запускает `create-vue` — официальный инструмент для скаффолдинга проектов **Vue**. Подробности см. в разделе [Vue.js. Быстрый старт](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Назовём проект **my-vue-diagram-app**.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в директорию приложения:

~~~json
cd my-vue-diagram-app
~~~

Установите зависимости и запустите сервер разработки. Для этого используйте менеджер пакетов:

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

Приложение должно запуститься на localhost (например, `http://localhost:3000`).

## Создание Diagram Editor {#creating-diagram-editor}

Теперь необходимо получить исходный код DHTMLX Diagram Editor. Сначала остановите приложение и переходите к установке пакета Diagram Editor.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет Diagram Editor**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn) и выполните шаги, описанные в файле README. Обратите внимание, что пробная версия Diagram Editor доступна только в течение 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Теперь необходимо создать компонент Vue, чтобы добавить Diagram Editor в приложение. Создайте новый файл в директории ***src/components/*** и назовите его ***DiagramEditor.vue***.

#### Импорт исходных файлов {#import-source-files}

Откройте файл ***DiagramEditor.vue*** и импортируйте исходные файлы Diagram Editor. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Diagram Editor из локальной папки, пути импорта будут выглядеть так:

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

Обратите внимание, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что вы импортируете CSS-файл как **diagram.min.css**.

- если вы используете пробную версию Diagram Editor, укажите следующие пути:

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

В этом руководстве показано, как настроить **пробную** версию Diagram Editor.

#### Настройка контейнера и инициализация Diagram Editor {#set-the-container-and-initialize-diagram-editor}

Чтобы отобразить Diagram Editor на странице, необходимо создать контейнер для Diagram Editor и инициализировать этот компонент с помощью соответствующего конструктора:

~~~html {2,7-8,18} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    mounted() {
        // инициализация компонента Diagram Editor
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
    },

    unmounted() {
        this.diagram_editor.destructor(); // уничтожение Diagram Editor
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Добавление стилей {#adding-styles}

Чтобы Diagram Editor отображался корректно, необходимо задать важные стили для Diagram Editor и его контейнера в CSS-файле проекта:

~~~css title="style.css"
/* задайте стили для начальной страницы */
html,
body,
#root { /* убедитесь, что используете контейнер #root */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* задайте стили для контейнера Diagram Editor */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в Diagram Editor, необходимо предоставить [**набор данных**](https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/data.js). Вы можете создать файл ***data.js*** в директории ***src/*** и добавить в него данные:

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

Затем откройте файл ***App.vue***, импортируйте данные и инициализируйте их с помощью внутреннего метода `data()`. После этого вы можете передать данные во вновь созданный компонент `<DiagramEditor/>` как `props`:

~~~html {3,7-9,14} title="App.vue"
<script>
import DiagramEditor from "./components/DiagramEditor.vue";
import { getData } from "./data";

export default {
    components: { DiagramEditor },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <DiagramEditor :data="data" />
</template>

~~~

Перейдите в файл ***DiagramEditor.vue*** и примените переданные `props` к Diagram Editor с помощью метода [`parse()`](api/diagram_editor/editor/methods/parse_method.md):

~~~html {6,10} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    props: ["data"],

    mounted() {
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
        this.diagram_editor.parse(this.data);
    },

    unmounted() {
        this.diagram_editor.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

Теперь компонент Diagram Editor готов к использованию. При добавлении элемента на страницу он инициализирует Diagram Editor с данными. Вы также можете указать необходимые настройки конфигурации. Посетите наш раздел [документация по API Diagram Editor](/category/diagram-editor-api/), чтобы увидеть полный список доступных свойств.

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в Diagram Editor, вызывается событие. Вы можете использовать эти события, чтобы отслеживать действия и выполнять нужный код. См. [полный список событий](api/diagram_editor/editor/events/overview.md).

Откройте ***DiagramEditor.vue*** и дополните метод `mounted()`:

~~~html {8-10} title="DiagramEditor.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });

        this.diagram_editor.events.on("zoomIn", (step) => {
            console.log("The diagram in the editor is zoomed in. The step is" + step);
        });
    }
    //...
}
</script>

//...
~~~

После этого запустите приложение, чтобы увидеть Diagram Editor, загруженный данными, на странице.

![Инициализация Diagram Editor](/img/trial_diagram.png)

Теперь вы знаете, как интегрировать DHTMLX Diagram Editor с Vue. Вы можете настроить код в соответствии со своими требованиями. Итоговый пример можно найти на [**GitHub**](https://github.com/DHTMLX/vue-diagram-demo).
