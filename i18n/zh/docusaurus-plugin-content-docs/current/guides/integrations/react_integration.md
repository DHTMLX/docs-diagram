---
sidebar_label: 与 React 集成
title: 与 React 集成
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解与 React 的集成。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# 与 React 集成 {#integration-with-react}

:::tip
在使用本文档之前，您应熟悉 [**React**](https://react.dev) 的基本概念和模式。如需回顾相关知识，请参阅 [**React 文档**](https://react.dev/learn)。
:::

DHTMLX Diagram Editor 与 **React** 兼容。我们已准备了有关如何在 **React** 中使用 DHTMLX Diagram Editor 的代码示例。有关更多信息，请参阅相应的 [**GitHub 示例**](https://github.com/DHTMLX/react-diagram-demo)。

## 创建项目 {#creating-a-project}

:::info
在开始创建新项目之前，请安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

您可以创建一个基础的 **React** 项目（即本项目），或使用 **React with Vite**。我们将该项目命名为 **my-react-diagram-app**：

~~~json
npx create-react-app my-react-diagram-app
~~~

### 安装依赖 {#installation-of-dependencies}

进入新创建的应用目录：

~~~json
cd my-react-diagram-app
~~~

安装依赖并启动开发服务器。为此，请使用包管理器：

- 如果您使用 [**yarn**](https://yarnpkg.com/)，请运行以下命令：

~~~json
yarn
yarn start
~~~

- 如果您使用 [**npm**](https://www.npmjs.com/)，请运行以下命令：

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

现在您需要创建一个 React 组件，以便将 Diagram Editor 添加到应用程序中。在 ***src/*** 目录下创建一个新文件，并将其命名为 ***DiagramEditor.jsx***。

#### 导入源文件 {#import-source-files}

打开 ***DiagramEditor.jsx*** 文件，并导入 Diagram Editor 源文件。请注意：

- 如果您使用 PRO 版本，并从本地文件夹安装 Diagram Editor 软件包，则导入路径如下所示：

~~~jsx title="DiagramEditor.jsx"
import { DiagramEditor } from 'dhx-diagram-package';
import 'dhx-diagram-package/codebase/diagram.css';
~~~

请注意，根据所使用的软件包不同，源文件可能是压缩（minified）版本。在这种情况下，请确保导入的 CSS 文件名为 **diagram.min.css**。

- 如果您使用 Diagram 的试用版，请指定以下路径：

~~~jsx title="DiagramEditor.jsx"
import { DiagramEditor } from '@dhx/trial-diagram';
import '@dhx/trial-diagram/codebase/diagram.min.css';
~~~

在本教程中，您将了解如何配置 Diagram 的 **试用版**。

#### 设置容器并初始化 Diagram Editor {#set-the-container-and-initialize-diagram-editor}

要在页面上显示 Diagram Editor，您需要为 Diagram Editor 创建容器，并使用相应的构造函数初始化该组件：

~~~jsx {2,6,9-10} title="DiagramEditor.jsx"
import { useEffect, useRef } from "react";
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css"; // 引入 Diagram Editor 样式

export default function DiagramEditorComponent(props) {
    let container = useRef(); // 初始化 Diagram Editor 的容器

    useEffect(() => {
        // 初始化 Diagram Editor 组件
        const diagram_editor = new DiagramEditor(container.current, {});

        return () => {
            diagram_editor.destructor(); // 销毁 Diagram Editor
        }
    });

    return <div ref={container} className="widget"></div>;
}
~~~

#### 添加样式 {#adding-styles}

为了正确显示 Diagram Editor，您需要在项目的 CSS 文件中为 Diagram Editor 及其容器指定重要样式：

~~~css title="index.css"
/* 为初始页面指定样式 */
html,
body,
#root {
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

要将数据添加到 Diagram Editor 中，您需要提供一个[**数据集**](https://github.com/DHTMLX/react-diagram-demo/blob/master/src/data.js)。我们在 ***src/*** 目录下创建 ***data.js*** 文件，并向其中添加一些数据：

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

然后打开 ***App.js*** 文件并导入数据。之后，您可以将数据作为 `props` 传递给新创建的 `<DiagramEditor/>` 组件：

~~~jsx {2,5-6} title="App.js"
import DiagramEditor from "./DiagramEditor";
import { getData } from "./data";

function App() {
    let data = getData();
    return <DiagramEditor data={data} />;
}

export default App;
~~~

打开 ***DiagramEditor.jsx*** 文件，并通过 [`parse()`](api/diagram_editor/editor/methods/parse_method.md) 方法将传入的 `props` 应用到 Diagram Editor：

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

现在 Diagram Editor 组件已可以使用。当该元素被添加到页面中时，它将使用数据初始化 Diagram Editor。您也可以提供所需的配置设置。请访问我们的 [Diagram Editor API 文档](/category/diagram-editor-api/)，查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在 Diagram Editor 中执行某个操作时，会触发一个事件。您可以使用这些事件来检测该操作，并运行所需的代码。请参阅[完整的事件列表](api/diagram_editor/editor/events/overview.md)。

打开 ***DiagramEditor.jsx***，并按以下方式完善 `useEffect()` 方法：

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

之后，您可以启动应用，查看页面上加载了数据的 Diagram Editor。

![Diagram Editor 初始化](/img/trial_diagram.png)

现在您已经了解了如何将 DHTMLX Diagram Editor 与 React 集成。您可以根据自己的具体需求自定义代码。您可以在 [**GitHub**](https://github.com/DHTMLX/react-diagram-demo) 上找到最终示例。
