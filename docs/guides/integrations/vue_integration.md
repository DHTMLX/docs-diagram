---
sidebar_label: Integration with Vue.js
title: Integration with Vue.js
description: You can learn about the Integration with Vue.js in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Integration with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://v3.vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Diagram Editor is compatible with **Vue**. We have prepared code examples on how to use DHTMLX Diagram Editor with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-diagram-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **my-vue-diagram-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-vue-diagram-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~jsx
yarn
yarn start // or yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Diagram Editor

Now you should get the DHTMLX Diagram Editor source code. First of all, stop the app and proceed with installing the Diagram Editor package.

### Step 1. Package installation

Download the [**trial Diagram Editor package**](/guides/diagram_editor/initialization/#installing-diagram-editor-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Diagram Editor is available 30 days only.

### Step 2. Component creation

Now you need to create a Vue component, to add Diagram Editor into the application. Create a new file in the ***src/components/*** directory and name it ***DiagramEditor.vue***.

#### Import source files

Open the ***DiagramEditor.vue*** file and import Diagram Editor source files. Note that:

- if you use PRO version and install the Diagram Editor package from a local folder, the import paths look like this:

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **diagram.min.css**.

- if you use the trial version of Diagram Editor, specify the following paths:

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of Diagram Editor.

#### Set the container and initialize Diagram Editor

To display Diagram Editor on the page, you need to create the container for Diagram Editor, and initialize this component using the corresponding constructor:

~~~html {2,7-8,18} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    mounted() {
        // initialize the Diagram Editor component
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
    },

    unmounted() {
        this.diagram_editor.destructor(); // destruct Diagram Editor
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Adding styles

To display Diagram Editor correctly, you need to specify important styles for Diagram Editor and its container in the CSS file of the project:

~~~css title="style.css"
/* specify styles for initial page */
html,
body,
#root { /* make sure that you use the #root container */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for the Diagram Editor container */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### Loading data

To add data into the Diagram Editor, you need to provide a [**data set**](https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/data.js). You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

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
        // other data

        { from: 1, to: 2, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3, type: "dash", toSide: "bottom", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 7.5, type: "dash", fromSide: "bottom", toSide: "top", backArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3.2, type: "dash", fromSide: "top", toSide: "top", stroke: "#7D8495" },
        { from: 3, to: 3.1, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 3.1, to: 3.2, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 4, type: "dash", toSide: "top", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 4, to: 5, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 5, to: 6, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        // other data
    ]
}
~~~

Then open the ***App.vue*** file, import data, and initialize it via the inner `data()` method. After this you can pass data into the new created `<DiagramEditor/>` component as **props**:

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

Go to the ***DiagramEditor.vue*** file and apply the passed **props** to the Diagram Editor via the [`parse()`](api/diagram_editor/editor/methods/parse_method.md) method:

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

Now the Diagram Editor component is ready to use. When the element will be added to the page, it will initialize the Diagram Editor with data. You can provide necessary configuration settings as well. Visit our [Diagram Editor API docs](/category/diagram-editor-api/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Diagram Editor, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](api/diagram_editor/editor/events/overview.md).

Open ***DiagramEditor.vue*** and complete the `mounted()` method:

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

After that, you can start the app to see Diagram Editor loaded with data on a page.

![Diagram Editor initialization](../../assets/trial_diagram.png)

Now you know how to integrate DHTMLX Diagram Editor with Vue. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/vue-diagram-demo).
