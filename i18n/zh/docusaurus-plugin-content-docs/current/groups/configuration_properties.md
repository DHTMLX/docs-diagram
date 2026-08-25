---
sidebar_label: Group 属性
title: Group 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Group 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# Group 属性 {#group-properties}

:::note
请使用 HEX 格式指定颜色值。
:::

### 用法 {#usage}

~~~jsx
const data = [
    // group 对象
    {
        type: "$group",
        id?: string | number,
        x?: number,
        y?: number,
        width: number,
        height: number,
        groupChildren?: array,
        open?: boolean, // 默认为 true
        fixed?: boolean, // 默认为 false
        style?: {
            strokeWidth?: number, // 默认为 1
            stroke?: string, // 默认为 "#DEDEDE"
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            // 默认为 "unbound"
            groupBehavior?: "unbound" | "boundNoBorderExtension" | "boundBorderExtension",
            padding?: number
        },
        header?: {
            height?: number, // 默认为 40
            fill?: string,
            text?: string,
            fontSize?: number, // 默认为 14
            lineHeight?: number, // 默认为 14
            textAlign?: "left" | "center" | "right", // 默认为 "center"
            textVerticalAlign?: "top" | "center" | "bottom", // 默认为 "center"
            fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
            fontColor?: string, // 默认为 "#4C4C4C"
            fontWeight?: string, // 默认为 "500"
            iconColor?: string, // 默认为 "#808080"
            position?: "top" | "bottom" | "left" | "right", // 默认为 "top"
            editable?: boolean, // 默认为 true
            closable?: boolean, // 默认为 false
            enable?: boolean // 默认为 true
        },
        [key: string]?: any
    },
    // 更多 group 对象
];
~~~

### 描述 {#description}

一个 group 对象包含一系列配置属性，可用于配置 group 的位置和外观：

- `type` - （必填）元素的类型，设置为 "$group"
- `id` - （可选）group 的唯一 id
- `x` - （可选）group 位置的 x 坐标
- `y` - （可选）group 位置的 y 坐标
- `width` - （必填）group 的宽度，包括其标题（*position: left/right* 时）
- `height` - （必填）group 的高度，包括其标题（*position: top/bottom* 时）
- `groupChildren` - （可选）包含 group 第一级子项 id 的数组
- `open` - （可选）定义 group 初始化时是展开状态（*true*，默认）还是折叠状态（*false*）
:::tip
只有当 `header` 已初始化 `closable` 属性时，`open` 属性才会生效
:::
- `fixed` - （可选）启用/禁用移动和调整 group 大小的功能；默认为 *false*
- `style` - （可选）包含 group 样式设置的对象。该对象可以包含以下属性：
    - `strokeWidth` - （可选）group 边框的宽度，默认为 1
    - `stroke` - （可选）group 边框的颜色，默认为 "#DEDEDE"
    - `fill` - （可选）group 的背景颜色
    - `overFill` - （可选）当用户按住图形并将其移入/移出 group 时的背景颜色（*前提是整个图形都位于 group 内部*）
    - `partiallyFill` - （可选）当用户按住图形并将其移入/移出 group 时的背景颜色（*前提是图形的一部分位于 group 外部，且未通过 `exitArea` 属性定义其他设置*）
- `exitArea` - （可选）包含用户将图形拖出 group 时应用于该图形的设置的对象（*仅适用于 group 的第一级子项*）。该对象可以包含以下属性：
    - `groupBehavior` - （可选）用户将 group 的子项拖出 group 时该子项的行为：
        - `"unbound"`（默认）- 用户可以将图形移入或移出 group
        - `"boundNoBorderExtension"` - 用户可以将图形移入 group，但如果图形已被放入 group 内，则无法将其拖出 group。当用户尝试将图形拖出 group 时，group 的边框不会扩展
        - `"boundBorderExtension"` - 用户可以将图形移入 group，但如果图形已被放入 group 内，则无法将其拖出 group。当用户尝试将图形拖出 group 时，group 的边框会扩展<br/>**相关示例**：[Diagram editor。默认模式。Group 与图形的交互](https://snippet.dhtmlx.com/4gxy38ek)
    - `padding` - （可选）定义在 group 内移动图形时，group 与图形边缘之间的间距
    :::tip
    仅当 `groupBehavior` 设置为 `"boundNoBorderExtension"` 或 `"boundBorderExtension"` 时，`padding` 属性才可用
    :::
- `header` - （可选）包含 group 标题配置属性的对象。属性包括：
    - `height` - （可选）标题的高度，默认为 40
    - `fill` - （可选）标题的背景颜色
    - `text` - （可选）要在标题中渲染的文本
    - `fontSize` - （可选）字体大小（像素），默认为 14
    - `lineHeight` - （可选）行高，默认为 14
    - `textAlign` - （可选）标题中文本的对齐方式：`"left"`、`"center"`（默认）、`"right"`
    - `textVerticalAlign` - （可选）标题中文本的垂直对齐方式：`"top"`、`"center"`（默认）、`"bottom"`
    - `fontStyle` - （可选）文本字体的样式：`"normal"`（默认）、`"italic"`、`"oblique"`
    - `fontColor` - （可选）文本字体的颜色，默认为 "#4C4C4C"
    - `fontWeight` - （可选）文本字体的粗细，可能的值为：`"normal"`、`"bold"`、`"bolder"`、`"lighter"`，以及 `"100"`-`"900"` 的值，其中 `"400"` 与 normal 相同，`"600"` 及以上为最粗字体；默认为 `"500"`
    - `iconColor` - （可选）标题图标的颜色，默认为 "#808080"
    - `position` - （可选）group 标题的位置：`"top"`（默认）| `"bottom"` | `"left"` | `"right"`
    - `editable` - （可选）启用/禁用通过双击编辑标题文本的功能；默认为 *true*
    - `closable` - （可选）显示/隐藏用于展开/折叠 group 的图标；默认为 *false*
    - `enable` - （可选）显示/隐藏 group 的标题；默认为 *true*
- `key` - （可选）自定义属性，其逻辑由您自行实现

### 示例 {#example}

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            editable: true,
            closable: true,
            textAlign: "left", // "left", "center", "right"
            textVerticalAlign: "center", // "top", "center", "bottom"
        },
      	// group 的子项
        groupChildren: [1.1, 1.2],
        open: false
    },
  	// 配置要放入 group 中的图形
    { type: "rectangle", id: 1.1, x: 50, y: 75, text: "Shape 1.1" },
    { type: "rectangle", id: 1.2, x: 200, y: 75, text: "Shape 1.2" }
];
~~~

**相关文章**：[配置 Group](/groups/)

## "项目"对象特有的属性 {#properties-specific-for-project-object}

"项目"对象用作任务和里程碑的容器，其工作方式类似于 [group](/groups/)，支持创建具有多种嵌套级别的 PERT 图表，并提供可视化分组。

### 用法 {#usage-1}

~~~jsx
const data = [
    // project 对象
    {
        type: "project",
        id: string | number,
        parent?: string | number | null,
        text?: string, // 将设置 header.text 属性
        open?: boolean,

        // 自动生成
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        groupChildren?: (string | number)[],
        style?: {
            fill?: string, // 默认为 "#20B56D08"
            stroke?: string, // 默认为 "#20B56D33"
            borderStyle?: string, // 默认为 "dashed"
        },
        header?: {
            height?: number, // 默认为 40
            text?: string, // 由 text 属性自动生成
            closable?: boolean, // 默认为 false
            enable?: boolean, // 默认为 true
            fill?: string // 默认为 "inherit"
        }
    },
    // 更多 project 对象
]
~~~

### 描述 {#description-1}

准备 `"project"` 对象的数据集时，您可以使用以下配置属性：

- `type` - （必填）元素的类型，设置为 `"project"`
- `id` - （可选）project 的唯一 id
- `parent` - （可选）project 父级的 id
- `text` - （可选）project 的描述
- `open` - （可选）定义 project 初始化时是展开状态（*true*，默认）还是折叠状态（*false*）

以下属性为自动生成。它们在渲染过程中计算得出，不应手动指定。

- `x` - （可选）project 位置的 x 坐标
- `y` - （可选）project 位置的 y 坐标
- `width` - （必填）project 的宽度，包括其标题（*position: left/right* 时）
- `height` - （必填）project 的高度，包括其标题（*position: top/bottom* 时）
- `groupChildren` - （可选）包含 project 第一级子项 id 的数组
- `style` - （可选）包含 project 样式设置的对象。该对象可以包含以下属性：
    - `fill` - （可选）project 的背景颜色
    - `stroke` - （可选）project 边框的颜色
    - `borderStyle` - （可选）project 边框的样式
- `header` - （可选）包含 project 标题配置属性的对象。属性包括：
    - `height` - （可选）标题的高度，默认为 40
    - `text` - （可选）要在标题中渲染的文本（由 `text` 属性自动生成）
    - `closable` - （可选）显示/隐藏用于展开/折叠 group 的图标；默认为 *false*
    - `enable` - （可选）显示/隐藏 project 的标题；默认为 *true*
    - `fill` - （可选）标题的背景颜色


### 示例 {#example-1}

~~~jsx
const data = [
    {
        "id": "4.2",
        "text": "QA Testing",
        "type": "project",
        "parent": "4",
        "start_date": new Date(2026, 1, 18),
        "duration": 3,
        "progress": 0,
        "open": true
    },
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    },
    {
        "id": "4.2.2",
        "text": "Usability Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 20),
        "duration": 1
    }
];
~~~

**相关文章**：[在 PERT 模式下对图形进行分组](/groups/#grouping-shapes-in-the-pert-mode)
