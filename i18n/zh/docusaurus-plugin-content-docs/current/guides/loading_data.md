---
sidebar_label: 加载和存储数据
title: 加载和存储数据
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的数据加载和存储方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 加载和存储数据

您可以通过以下方式为 DHTMLX Diagram 填充数据：

- [从外部文件加载数据](#external-data-loading)
- [从本地数据源加载数据](#loading-from-a-local-source)

## 准备要加载的数据 {#preparing-data-to-load}

DHTMLX Diagram 接受 JSON 格式的数据。对于默认模式、组织结构图模式和思维导图模式，数据是一个包含一组数据对象的数组。共有 5 种对象类型：

- **形状对象**

~~~jsx {2-5}
const data = [
   // 配置形状
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // 配置连接线
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // 配置连接线标题
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

该库为您提供了[各种类型的默认形状](shapes/default_shapes.md)，这些形状既有通用选项，也有特定选项。您可以在 [API 参考](shapes/configuration_properties.md)中查看 `shape` 对象的完整属性列表。

您还可以创建[自定义类型的形状](shapes/custom_shape.md)，并为形状对象添加任意自定义属性。

- **连接线对象**

~~~jsx {6-8}
const data = [
   // 配置形状
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // 配置连接线
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // 配置连接线标题
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

数据集中是否存在连接线对象，取决于所选择的[形状连接方式](/lines/#setting-connections-between-shapes)。您可以在 [API 参考](lines/configuration_properties.md)中查看 `line` 对象的完整属性列表。

- **连接线标题对象**

~~~jsx {9-10}
const data = [
   // 配置形状
   { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
   { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call Client and \n set-up Appointment" },
   { "id": "shape_3", "type": "decision", "x": 200, "y": 240, "text": "Decision" },
   // 配置连接线
   { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" },
   { "id": "line_2", "type": "dash", "from": "shape_2", "to": "shape_3" },
   // 配置连接线标题
   { "id": "title_1", "type": "lineTitle", "parent": "line_1", "text": "Some text" }
];
~~~

您可以在 [API 参考](line_titles/configuration_properties.md)中查看 **连接线标题** 对象的完整属性列表。

- **组对象**

~~~jsx
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Top and collapsed header with tеxt alignment",
            "editable": true,
            "closable": true,
            "textAlign": "left", // "left", "center", "right"
            "textVerticalAlign": "center", // "top", "center", "bottom"
        },
        // 组的子项目
        "groupChildren": [1.1, 1.2],
        "open": false,
    },
    // 配置要放入组中的形状
    { "type": "rectangle", "id": 1.1, "x": 50, "y": 75, "text": "Shape 1.1" },
    { "type": "rectangle", "id": 1.2, "x": 200, "y": 75, "text": "Shape 1.2" }
];
~~~

您可以在 [API 参考](groups/configuration_properties.md)中查看 `group` 对象的完整属性列表。

- **泳道及其单元格对象**

~~~jsx
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template"
        },
        "layout": [
            [1, 2, 3, 4]
        ],
        "subHeaderCols": {
            "headers": [
                {
                    "text": "September",
                    "fill": "#f35c4f66"
                },
                {
                    "text": "October",
                    "fill": "#9b60f866"
                },
                {
                    "text": "November",
                    "fill": "#ffae1266"
                },
                {
                    "text": "December",
                    "fill": "#3cc97a66"
                }
            ]
        }
    },
   // 配置泳道的单元格
    {
        "id": 1,
        "type": "$sgroup",
        "groupChildren": ["s1"],
        "style": {
            "fill": "#D4DAE4"
        },
        "x": 0,
        "y": 80
    },
   // 配置要放入单元格中的形状
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

您可以在 [API 参考](swimlanes/configuration_properties.md)中查看 `swimlane` 及其单元格对象的完整配置属性列表。

## 在 PERT 模式下使用 Diagram 数据 {#working-with-diagram-data-in-the-pert-mode}

在 PERT 模式下使用 Diagram 具有以下特点：

- [加载到 Diagram 中的数据](#data-structure-of-diagram-in-the-pert-mode)具有 DHTMLX Gantt 数据的结构
- 在 Diagram 中处理数据时，与其他 Diagram 模式下的数据一样，都通过 [Data Collection](/api/data_collection/) 进行处理
- [导出的 Diagram 数据](#saving-and-restoring-state)具有 DHTMLX Gantt 数据的结构

### Diagram 在 PERT 模式下的数据结构 {#data-structure-of-diagram-in-the-pert-mode}

PERT 模式下 Diagram 数据的结构与 [DHTMLX Gantt 的数据结构](https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json)相同，以简化组件之间的集成和数据交换。当 Gantt 数据集加载到 PERT Diagram 中时，系统会根据形状之间的连接关系自动排列任务和项目。其中包含 `data`（用于形状："task"、"milestone"、"project"）和 `links`（用于形状之间的连接）两个数组：

~~~jsx
{
    data: object[]; // 形状数组（任务、里程碑、项目）
    links: object[] // 形状之间的连接数组
};
~~~

这种结构支持独立处理形状及其连接关系。[查看关于处理连接的重要说明](#processing-links)。

PERT 模式下的 Diagram 支持以下类型的形状和连接：

- **项目对象**

~~~jsx {3-4}
const dataset = {
    data: [
        // 配置项目形状
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 配置任务形状
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 配置连接对象
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

您可以在 [API 参考](groups/configuration_properties.md#properties-specific-for-project-object)中查看 `project` 对象的完整配置属性列表。

- **任务对象**

~~~jsx {5-9}
const dataset = {
    data: [
        // 配置项目形状
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 配置任务形状
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 配置连接对象
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

您可以在 [API 参考](shapes/configuration_properties.md#properties-specific-for-task-shapes)中查看 `task` 对象的完整配置属性列表。

- **里程碑对象**

~~~jsx {7-8}
const dataset = {
    data: [
        // 配置项目形状
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 配置任务形状
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        // 配置里程碑形状
        { id: "1.2", text: "Task #2", parent: "1", type: "milestone", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        //  配置连接对象
        { id: "line-1", source: "1.1", target: "1.2" }
    ]
}
~~~

您可以在 [API 参考](shapes/configuration_properties.md#properties-specific-for-milestone-shapes)中查看 `milestone` 对象的完整配置属性列表。

- **连接对象**

~~~jsx {11-16}
const dataset = {
    data: [
        // 配置项目形状
        { id: "1", text: "Project #1", type: "project", parent: null },
        // 配置任务形状
        { id: "1.1", text: "Task #1", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "1.2", text: "Task #2", parent: "1", type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.1", text: "Task #3", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 },
        { id: "2.2", text: "Task #4", parent: null, type: "task", start_date: new Date(2026, 0, 1), duration: 10 }
    ],
    links: [
        // 配置连接对象
        { id: "line-1", source: "1.1", target: "1.2" },
        { id: "line-2", source: "1.2", target: "2.1" },
        { id: "line-3", source: "2.1", target: "2.2" }
    ]
}
~~~

您可以在 [API 参考](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode)中查看 `link` 对象的完整配置属性列表。

#### 处理连接 {#processing-links}

:::info important
请注意，PERT 模式下的 Diagram 仅支持 `type: "0"`（"finish" -> "start"）类型的连接。[DHTMLX Gantt 图表中使用的其他所有连接类型](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)也将被处理为 `type: "0"`。
:::

:::tip
请注意，由于 Diagram 数据集合中项目的 id 必须唯一，因此在加载数据或添加新连接时，系统会为连接的现有 id 添加 `$link` 前缀。

举例说明：

~~~jsx
{
    data: [...],
    links: [
        { id: "1" }, // 将在 diagram 中以 "$link:1" 的形式提供
    ]
}

// diagram.data.getItem("$link:1");
~~~
:::

### PERT 模式下数据加载的特殊性 {#specificity-of-data-loading-in-the-pert-mode}

请遵循以下建议，以避免错误并正确渲染 Diagram：

- **不存在循环依赖**。系统不支持任务、项目、连接和混合元素之间存在循环。如果检测到循环依赖，将出现异常。
- **不允许父级与子级之间存在连接**。不允许在父级元素（例如项目）与其子元素之间建立直接连接。此类连接将在数据处理过程中被自动删除。
- **避免交叉连接**。请将交叉连接的数量降至最低，因为它们可能会使图表更复杂，并降低其可读性。
- **按顺序处理数据**。数据将按照到达的顺序进行处理，这可能会影响元素的排列方式。您应按照合理的逻辑顺序指定数据，以获得最佳效果。
- **任务排序**。在任务和项目之间使用线性或顺序连接，以保持图表清晰，避免视觉混乱。

上述规则旨在创建适用于 PERT 分析的、简洁且无循环的图表。如果数据违反了这些规则，Diagram 可能会自动进行修正（例如，删除不被允许的连接）。不过，最好还是事先检查输入的数据。

### 在 Diagram 中渲染未连接子级的 Gantt 任务 {#rendering-gantt-tasks-with-not-connected-children-in-the-diagram}

请注意，具有 `type: "task"` 的 Gantt 元素可能存在在视觉上未与父任务连接的子元素。此类关系不会在 Diagram 中体现。若要使这些元素在视觉上呈现于同一项目中，您可以：

- 在将数据加载到 Diagram 中时，为父元素分配 `type:"project"`
- 或者将该任务的 *父项目* id 分配给其子元素

例如：

~~~jsx
{
    data: [
        { id: "1", type: "project" },
        { id: "1.1", type: "task", parent: "1" },
        { id: "1.1.1", type: "task", parent: "1.1" }
    ]
}
~~~

在上例中：

- 元素 "1.1" 不是项目，而是作为任务渲染。
- 由于元素 "1.1.1" 连接到并非项目的父级 "1.1"，因此它将被渲染在错误的位置。
- 若要使元素 "1.1" 和 "1.1.1" 在视觉上呈现于同一项目中：
    - 为元素 "1.1.1" 分配元素 "1.1" 的父项目 id（使用 `parent: "1"` 选项）：
    ~~~jsx
    { id: "1.1.1", type: "task", parent: "1" }
    ~~~
    - 或者为父元素 "1.1" 使用 `"project"` 类型代替 `"task"` 类型：
    ~~~jsx
     { id: "1.1", type: "project", parent: "1" }
    ~~~

## 外部数据加载 {#external-data-loading}

若要从外部文件加载数据，请使用 [`load()`](api/data_collection/load_method.md) 方法。该方法将包含数据的文件 URL 作为参数：

~~~jsx
diagram.data.load("../common/data.json");
~~~

该组件将发起一次 AJAX 调用，并期望远程 URL 提供有效的 JSON 数据。

数据加载是异步的，因此您需要将加载完成后执行的代码封装到一个 Promise 中：

~~~jsx
diagram.data.load("/some/data").then(() => {
   diagram.selection.add("123");
});
~~~

**相关示例**：[Diagram. Data. Data loading](https://snippet.dhtmlx.com/09isp2d8)

## 从本地数据源加载数据 {#loading-from-a-local-source}

若要从本地数据源加载数据，请使用 [`parse()`](api/data_collection/parse_method.md) 方法。您需要传入一个[预定义的数据集](#preparing-data-to-load)，并可选择性地传入 DataDriver 或数据类型（"json"（默认）、"csv"、"xml"）作为参数：

~~~jsx
diagram.data.parse(data, driver);
~~~

**相关示例**：[Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p)

### 将数据加载到编辑器中 {#loading-data-into-the-editor}

若要将数据集加载到编辑器中，请使用编辑器的 [parse()](api/diagram_editor/editor/methods/parse_method.md) 方法。

~~~jsx
editor.parse(data);
~~~

**相关示例**：[Diagram editor. Default mode. Basic initialization](https://snippet.dhtmlx.com/xshe9ut7)

## 保存和恢复状态 {#saving-and-restoring-state}

若要保存图表的当前状态，请使用 [`serialize()`](api/data_collection/serialize_method.md) 方法。根据 Diagram 模式的不同，该方法会将图表的数据转换为：

- 对于默认模式、组织结构图模式和思维导图模式的 Diagram——转换为一个对象数组，其中每个对象包含单个形状的配置
- 对于 PERT 模式的 Diagram——转换为一个对象，其中包含 `data` 对象数组（用于形状："task"、"milestone"、"project"）和 `links` 对象数组（用于形状之间的连接）。

~~~jsx
const state = diagram1.data.serialize();
~~~

请注意，对于 PERT 模式的 Diagram，导出的数据对象中的 *links* 对象将具有[与 DHTMLX Gantt 图表相同的类型](https://docs.dhtmlx.com/gantt/desktop__link_properties.html)。这意味着，如果 Diagram 数据中某个连接的类型与 Gantt 的某种连接类型一致，则该类型在序列化过程中将保持不变。如果未指定连接类型，或将其设置为其他类型（例如 `type: "line"`），则会被转换为 `type: "0"`。

然后，您可以将保存状态中存储的数据解析到另一个图表中。例如：

~~~jsx
// 创建一个新的图表
const diagram2 = new dhx.Diagram("diagram_container");
// 将 diagram1 的状态解析到 diagram2 中
diagram2.data.parse(state);
~~~

## 将数据导入编辑器 {#importing-data-into-the-editor}

当您将图表与编辑器一起使用时，可以通过编辑器对象的 [import()](api/diagram_editor/editor/methods/import_method.md) 方法，将数据从图表导入编辑器：

~~~jsx
function runEditor() {
    expand();
    editor.import(diagram);
}
~~~

**相关示例**：[Diagram. Default mode. Wide flowchart](https://snippet.dhtmlx.com/4d4k3o8p)

运行编辑器时，图表状态将被导入编辑器。
