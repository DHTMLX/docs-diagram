---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the Integration with Svelte in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX Diagram Editor is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX Diagram Editor with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-diagram-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

To create a **Svelte** JS project, run the following command:

~~~json
npm create vite@latest
~~~

Select Svelte and JavaScript options while creating the project. Let's name the project as **my-svelte-diagram-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-svelte-diagram-app
~~~

Then you need to install dependencies and run the app. For this, you need to make use of a package manager:

- if you use [**yarn**](https://yarnpkg.com/), you need to call the following commands:

~~~jsx
yarn
yarn start // or yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), you need to call the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Diagram Editor

Now you should get the DHTMLX Diagram Editor source code. First of all, stop the app and proceed with installing the Diagram Editor package.

### Step 1. Package installation

Download the [**trial Diagram Editor package**](/guides/diagram_editor/initialization/#installing-diagram-editor-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial Diagram Editor is available 30 days only.

### Step 2. Component creation

Now you need to create a Svelte component, to add Diagram Editor into the application. Let's create a new file in the ***src/*** directory and name it ***DiagramEditor.svelte***.

#### Importing source files

Open the ***DiagramEditor.svelte*** file and import Diagram Editor source files. Note that:

- if you use PRO version and install the Diagram Editor package from a local folder, the import paths look like this:

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **diagram.min.css**.

- if you use the trial version of Diagram Editor, specify the following paths:

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of Diagram Editor.

#### Set the container and initialize Diagram Editor

To display Diagram Editor on the page, you need to create the container for Diagram Editor, and initialize this component using the corresponding constructor:

~~~html {3,6,10-11,19} title="DiagramEditor.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { DiagramEditor } from "@dhx/trial-diagram";
    import "@dhx/trial-diagram/codebase/diagram.min.css"

    let container; // initialize container for Diagram Editor
    let diagram_editor;
    
    onMount(() => {
        // initialize the Diagram Editor component
        diagram_editor = new DiagramEditor(container, {});
    });

    onDestroy(() => {
        diagram_editor.destructor(); // destruct Diagram Editor
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### Adding styles

To display Diagram Editor correctly, you need to specify important styles for Diagram Editor and its container in the CSS file of the project:

~~~css title="app.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
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

To add data into the Diagram Editor, we need to provide a [**data set**](https://github.com/DHTMLX/svelte-diagram-demo/blob/main/src/data.js). Let's create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***App.svelte*** file, import data, and pass it into the newly created `<DiagramEditor/>` components as **props**:

~~~html {3,5,8} title="App.svelte"
<script>
    import DiagramEditor from "./DiagramEditor.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<DiagramEditor data={data} />
~~~

Go to the ***DiagramEditor.svelte*** file and apply the passed **props** to the Diagram Editor via the [`parse()`](api/diagram_editor/editor/methods/parse_method.md) method:

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

Now the Diagram Editor component is ready to use. When the element will be added to the page, it will initialize the Diagram Editor with data. You can provide necessary configuration settings as well. Visit our [Diagram Editor API docs](/category/diagram-editor-api/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Diagram Editor, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](api/diagram_editor/editor/events/overview.md).

Open ***DiagramEditor.svelte*** and complete the `onMount()` method in the following way:

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

After that, when we start the app, we should see Diagram Editor loaded with data on a page.

![Diagram Editor initialization](../../assets/trial_diagram.png)

Now you should have a basic setup for integrating DHTMLX Diagram Editor with Svelte. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-diagram-demo).
