---
sidebar_label: 与 Vue.js 集成
title: 与 Vue.js 集成
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解与 Vue.js 的集成。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# 与 Vue 集成 {#integration-with-vue}

:::tip
在阅读本文档之前，您应该熟悉 [**Vue**](https://vuejs.org/) 的基本概念和模式。要回顾相关知识，请参阅 [**Vue 3 文档**](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX Diagram Editor 与 **Vue** 兼容。我们准备了关于如何在 **Vue 3** 中使用 DHTMLX Diagram Editor 的代码示例。有关更多信息，请参阅相应的 [**GitHub 示例**](https://github.com/DHTMLX/vue-diagram-demo)。

## 创建项目 {#creating-a-project}

:::info
在开始创建新项目之前，请安装 [**Node.js**](https://nodejs.org/en/)。
:::

要创建 **Vue** 项目，请运行以下命令：

~~~json
npm create vue@latest
~~~

此命令会安装并执行 `create-vue`，即官方的 **Vue** 项目脚手架工具。详情请查看 [Vue.js 快速开始](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

我们将项目命名为 **my-vue-diagram-app**。

### 安装依赖项 {#installation-of-dependencies}

进入应用目录：

~~~json
cd my-vue-diagram-app
~~~

安装依赖项并启动开发服务器。为此，请使用包管理器：

- 如果您使用 [**yarn**](https://yarnpkg.com/)，请运行以下命令：

~~~jsx
yarn
yarn start // 或者 yarn dev
~~~

- 如果您使用 [**npm**](https://www.npmjs.com/)，请运行以下命令：

~~~json
npm install
npm run dev
~~~

该应用应会在本地主机上运行（例如 `http://localhost:3000`）。

## 创建 Diagram Editor {#creating-diagram-editor}

现在您需要获取 DHTMLX Diagram Editor 的源代码。首先，停止应用，然后继续安装 Diagram Editor 软件包。

### 步骤 1：安装软件包 {#step-1-package-installation}

下载 [**试用版 Diagram Editor 软件包**](guides/diagram_editor/initialization.md#installing-diagram-editor-via-npm-or-yarn)，并按照 README 文件中提到的步骤操作。请注意，试用版 Diagram Editor 仅可使用 30 天。

### 步骤 2：创建组件 {#step-2-component-creation}

现在您需要创建一个 Vue 组件，以便将 Diagram Editor 添加到应用程序中。在 ***src/components/*** 目录下创建一个新文件，并将其命名为 ***DiagramEditor.vue***。

#### 导入源文件 {#import-source-files}

打开 ***DiagramEditor.vue*** 文件，并导入 Diagram Editor 源文件。请注意：

- 如果您使用 PRO 版本，并从本地文件夹安装 Diagram Editor 软件包，导入路径如下所示：

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
</script>
~~~

请注意，根据所使用的软件包不同，源文件可能会被压缩（minified）。这种情况下，请确保导入的 CSS 文件名为 **diagram.min.css**。

- 如果您使用试用版 Diagram Editor，请指定以下路径：

~~~html title="DiagramEditor.vue"
<script>
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
</script>
~~~

在本教程中，您将了解如何配置 Diagram Editor 的 **试用版**。

#### 设置容器并初始化 Diagram Editor {#set-the-container-and-initialize-diagram-editor}

要在页面上显示 Diagram Editor，您需要为 Diagram Editor 创建容器，并使用相应的构造函数初始化该组件：

~~~html {2,7-8,18} title="DiagramEditor.vue"
<script>
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default {
    mounted() {
        // 初始化 Diagram Editor 组件
        this.diagram_editor = new DiagramEditor(this.$refs.container, { type: "default" });
    },

    unmounted() {
        this.diagram_editor.destructor(); // 销毁 Diagram Editor
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### 添加样式 {#adding-styles}

要正确显示 Diagram Editor，您需要在项目的 CSS 文件中为 Diagram Editor 及其容器指定重要样式：

~~~css title="style.css"
/* 为初始页面指定样式 */
html,
body,
#root { /* 请确保使用 #root 容器 */
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

要向 Diagram Editor 中添加数据，您需要提供一个 [**数据集**](https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/data.js)。您可以在 ***src/*** 目录下创建 ***data.js*** 文件，并向其中添加一些数据：

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
        // 其他数据

        { from: 1, to: 2, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3, type: "dash", toSide: "bottom", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 7.5, type: "dash", fromSide: "bottom", toSide: "top", backArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 3.2, type: "dash", fromSide: "top", toSide: "top", stroke: "#7D8495" },
        { from: 3, to: 3.1, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 3.1, to: 3.2, type: "line", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 2, to: 4, type: "dash", toSide: "top", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 4, to: 5, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        { from: 5, to: 6, type: "dash", forwardArrow: "filled", stroke: "#7D8495" },
        // 其他数据
    ]
}
~~~

然后打开 ***App.vue*** 文件，导入数据，并通过内部的 `data()` 方法对其进行初始化。之后，您可以将数据作为 `props` 传递给新创建的 `<DiagramEditor/>` 组件：

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

打开 ***DiagramEditor.vue*** 文件，通过 [`parse()`](api/diagram_editor/editor/methods/parse_method.md) 方法将传入的 `props` 应用到 Diagram Editor：

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

现在 Diagram Editor 组件已可以使用。当该元素被添加到页面中时，它会使用数据初始化 Diagram Editor。您还可以提供所需的配置设置。请访问我们的 [Diagram Editor API 文档](/category/diagram-editor-api/)，查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在 Diagram Editor 中执行某些操作时，会触发一个事件。您可以使用这些事件来检测该操作，并运行相应的代码。请参阅 [完整的事件列表](api/diagram_editor/editor/events/overview.md)。

打开 ***DiagramEditor.vue*** 文件，并完善 `mounted()` 方法：

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

之后，您可以启动应用，以查看页面中加载了数据的 Diagram Editor。

![Diagram Editor 初始化](/img/trial_diagram.png)

现在您已经了解了如何将 DHTMLX Diagram Editor 与 Vue 集成。您可以根据具体需求自定义代码。完整示例请参阅 [**GitHub**](https://github.com/DHTMLX/vue-diagram-demo)。
