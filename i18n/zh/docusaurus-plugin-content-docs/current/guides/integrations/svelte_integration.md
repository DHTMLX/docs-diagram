---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解与 Svelte 的集成。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# 与 Svelte 集成 {#integration-with-svelte}

:::tip
在阅读本文档之前，您应熟悉 **Svelte** 的基本概念和模式。如需回顾相关知识，请参阅 [**Svelte 文档**](https://svelte.dev/)。
:::

DHTMLX Diagram Editor 与 **Svelte** 兼容。我们已准备了有关如何在 **Svelte** 中使用 DHTMLX Diagram Editor 的代码示例。有关更多信息，请参阅相应的 [**GitHub 示例**](https://github.com/DHTMLX/svelte-diagram-demo)。

## 创建项目 {#creating-a-project}

:::info
在开始创建新项目之前，请安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

要创建一个 **Svelte** JS 项目，请运行以下命令：

~~~json
npm create vite@latest
~~~

在创建项目时选择 Svelte 和 JavaScript 选项。我们将该项目命名为 **my-svelte-diagram-app**。

### 安装依赖 {#installation-of-dependencies}

进入应用目录：

~~~json
cd my-svelte-diagram-app
~~~

然后您需要安装依赖并运行应用。为此，您需要使用包管理器：

- 如果您使用 [**yarn**](https://yarnpkg.com/)，则需要调用以下命令：

~~~jsx
yarn
yarn start // 或 yarn dev
~~~

- 如果您使用 [**npm**](https://www.npmjs.com/)，则需要调用以下命令：

~~~json
npm install
npm run dev
~~~

该应用应在本地主机上运行（例如 `http://localhost:3000`）。

## 创建 Diagram Editor {#creating-diagram-editor}

现在您需要获取 DHTMLX Diagram Editor 的源代码。首先，请停止应用，然后继续安装 Diagram Editor 软件包。

### 步骤 1. 安装软件包 {#step-1-package-installation}

下载 [**试用版 Diagram Editor 软件包**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn)，并按照 README 文件中提到的步骤进行操作。请注意，试用版 Diagram Editor 仅可使用 30 天。

### 步骤 2. 创建组件 {#step-2-component-creation}

现在您需要创建一个 Svelte 组件，以便将 Diagram Editor 添加到应用程序中。我们在 ***src/*** 目录下创建一个新文件，并将其命名为 ***DiagramEditor.svelte***。

#### 导入源文件 {#importing-source-files}

打开 ***DiagramEditor.svelte*** 文件，并导入 Diagram Editor 源文件。请注意：

- 如果您使用 PRO 版本，并从本地文件夹安装 Diagram Editor 软件包，则导入路径如下所示：

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

请注意，根据所使用的软件包不同，源文件可能是压缩（minified）版本。在这种情况下，请确保导入的 CSS 文件名为 **diagram.min.css**。

- 如果您使用 Diagram Editor 的试用版，请指定以下路径：

~~~html title="DiagramEditor.svelte"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

在本教程中，您将了解如何配置 Diagram Editor 的 **试用版**。

#### 设置容器并初始化 Diagram Editor {#set-the-container-and-initialize-diagram-editor}

要在页面上显示 Diagram Editor，您需要为 Diagram Editor 创建容器，并使用相应的构造函数初始化该组件：

~~~html {3,6,10-11,19} title="DiagramEditor.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { DiagramEditor } from "@dhx/trial-diagram";
    import "@dhx/trial-diagram/codebase/diagram.min.css"

    let container; // 初始化 Diagram Editor 的容器
    let diagram_editor;

    onMount(() => {
        // 初始化 Diagram Editor 组件
        diagram_editor = new DiagramEditor(container, {});
    });

    onDestroy(() => {
        diagram_editor.destructor(); // 销毁 Diagram Editor
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### 添加样式 {#adding-styles}

为了正确显示 Diagram Editor，您需要在项目的 CSS 文件中为 Diagram Editor 及其容器指定重要样式：

~~~css title="app.css"
/* 为初始页面指定样式 */
html,
body,
#app { /* 请确保使用 #app 根容器 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* 为 Diagram Editor 容器指定样式 */
.widget {
    height: 100%;
    width: 100%;
}
~~~

#### 加载数据 {#loading-data}

要将数据添加到 Diagram Editor 中，我们需要提供一个[**数据集**](https://github.com/DHTMLX/svelte-diagram-demo/blob/main/src/data.js)。我们在 ***src/*** 目录下创建 ***data.js*** 文件，并向其中添加一些数据：

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

然后打开 ***App.svelte*** 文件，导入数据，并将其作为 `props` 传递给新创建的 `<DiagramEditor/>` 组件：

~~~html {3,5,8} title="App.svelte"
<script>
    import DiagramEditor from "./DiagramEditor.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<DiagramEditor data={data} />
~~~

打开 ***DiagramEditor.svelte*** 文件，并通过 [`parse()`](api/diagram_editor/editor/methods/parse_method.md) 方法将传入的 `props` 应用到 Diagram Editor：

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

现在 Diagram Editor 组件已可以使用。当该元素被添加到页面中时，它将使用数据初始化 Diagram Editor。您也可以提供所需的配置设置。请访问我们的 [Diagram Editor API 文档](/category/diagram-editor-api/)，查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在 Diagram Editor 中执行某个操作时，会触发一个事件。您可以使用这些事件来检测该操作，并运行所需的代码。请参阅[完整的事件列表](api/diagram_editor/editor/events/overview.md)。

打开 ***DiagramEditor.svelte***，并按以下方式完善 `onMount()` 方法：

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

之后，当我们启动应用时，应该能在页面上看到加载了数据的 Diagram Editor。

![Diagram Editor 初始化](/img/trial_diagram.png)

现在，您应该已经掌握了将 DHTMLX Diagram Editor 与 Svelte 集成的基本设置。您可以根据自己的具体需求自定义代码。您可以在 [**GitHub**](https://github.com/DHTMLX/svelte-diagram-demo) 上找到最终示例。
