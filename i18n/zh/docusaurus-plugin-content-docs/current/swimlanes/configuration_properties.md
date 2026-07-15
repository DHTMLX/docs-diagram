---
sidebar_label: Swimlane 属性
title: Swimlane 和 Swimlane 单元格属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Swimlane 和 Swimlane 单元格属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# Swimlane 和 swimlane 单元格属性 {#swimlane-and-swimlane-cell-properties}

:::note
请使用 HEX 格式指定颜色值。
:::

## Swimlane 的属性 {#properties-of-a-swimlane}

### 用法 {#usage}

~~~jsx
const data = [
    // swimlane 对象
    {
        type: "$swimlane",
        id?: string | number,
        width: number,
        height: number,
        x?: number,
        y?: number,
        layout: array,
        fixed?: boolean,
        open?: boolean, // 默认为 true
        style?: {
            strokeWidth?: number, // 默认为 1
            stroke?: string,
            fill?: string
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
            position?: "top" | "bottom" | "left" | "right",
            editable?: boolean, // 默认为 true
            closable?: boolean, // 默认为 false
            enable?: boolean // 默认为 true
        },
        subHeaderRows?: {
            height?: number | string, // 默认为 40
            position?: "left" | "right",
            enable?: boolean, // 默认为 true
            fill?: string,
            fontSize?: number, // 默认为 14
            lineHeight?: number, // 默认为 14
            textAlign?: "left" | "center" | "right", // 默认为 "center"
            textVerticalAlign?: "top" | "center" | "bottom", // 默认为 "center"
            fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
            fontColor?: string, // 默认为 "#4C4C4C"
            fontWeight?: string, // 默认为 "500"
            iconColor?: string, // 默认为 "#808080"
            editable?: boolean, // 默认为 true
            headers?: [
                // header 对象
                {
                    id?: string,
                    text: string,
                    fill?: string,
                    fontSize?: number, // 默认为 14
                    lineHeight?: number, // 默认为 14
                    textAlign?: "left" | "center" | "right", // 默认为 "center"
                    textVerticalAlign?: "top" | "center" | "bottom", // 默认为 "center"
                    fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
                    fontColor?: string, // 默认为 "#4C4C4C"
                    fontWeight?: string, // 默认为 "500"
                    iconColor?: string, // 默认为 "#808080"
                    editable?: boolean // 默认为 true
                },
                // 更多 header 对象
            ]
        },
        subHeaderCols?: {
            position?: "top" | "bottom",
            // ... 其他属性与 subHeaderRows 的属性相同
        },
        [key: string]?: any
    }
    // 更多 swimlane 对象
];
~~~

### 描述 {#description}

每个 swimlane 对象都可以包含以下配置属性：

- `type` - （必填）元素的类型，设置为 "$swimlane"
- `id` - （可选）swimlane 的唯一 id
- `width` - （必填）swimlane 的宽度，包括其标题（*position: left/right* 时）
- `height` - （必填）swimlane 的高度，包括其标题（*position: top/bottom* 时）
- `x` - （可选）swimlane 位置的 x 坐标
- `y` - （可选）swimlane 位置的 y 坐标
- `layout` - （必填）以矩阵形式表示 swimlane 单元格的数组
- `fixed` - （可选）启用/禁用移动和调整 swimlane 大小的功能；默认为 *false*
- `open` - （可选）定义 swimlane 初始化时是展开状态（*true*，默认）还是折叠状态（*false*）
:::tip
只有当 `header` 已初始化 `closable` 属性时，`open` 属性才会生效
:::
- `style` - （可选）包含 swimlane 样式设置的对象。该对象可以包含以下属性：
    - `strokeWidth` - （可选）swimlane 边框的宽度，默认为 1
    - `stroke` - （可选）swimlane 边框的颜色，默认为 "#DEDEDE"
    - `fill` - （可选）swimlane 所有单元格的背景颜色
- `header` - （可选）包含 swimlane 标题配置属性的对象。属性包括：
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
    - `position` - （可选）swimlane 标题的位置：`"top"`（默认）| `"bottom"` | `"left"` | `"right"`
    - `editable` - （可选）启用/禁用通过双击编辑标题文本的功能；默认为 *true*
    - `closable` - （可选）显示/隐藏用于展开/折叠 swimlane 的图标；默认为 *false*
    - `enable` - （可选）显示/隐藏 swimlane 的标题；默认为 *true*
- `subHeaderRows` - （可选）包含 swimlane 左/右子标题配置设置的对象。该对象具有以下属性：
    - `height` - （可选）子标题的高度，默认为 40
    - `position` - （可选）子标题的位置：`"left"` | `"right"`
    - `enable` - （可选）显示/隐藏 swimlane 的子标题；默认为 *true*
    - `fill` - （可选）子标题的背景颜色
    - `fontSize` - （可选）字体大小（像素），默认为 14
    - `lineHeight` - （可选）行高，默认为 14
    - `textAlign` - （可选）子标题中文本的对齐方式：`"left"`、`"center"`（默认）、`"right"`
    - `textVerticalAlign` - （可选）子标题中文本的垂直对齐方式：`"top"`、`"center"`（默认）、`"bottom"`
    - `fontStyle` - （可选）文本字体的样式：`"normal"`（默认）、`"italic"`、`"oblique"`
    - `fontColor` - （可选）文本字体的颜色，默认为 "#4C4C4C"
    - `fontWeight` - （可选）文本字体的粗细，可能的值为：`"normal"`、`"bold"`、`"bolder"`、`"lighter"`，以及 `"100"`-`"900"` 的值，其中 `"400"` 与 normal 相同，`"600"` 及以上为最粗字体；默认为 `"500"`
    - `iconColor` - （可选）子标题图标的颜色，默认为 "#808080"
    - `editable` - （可选）启用/禁用通过双击编辑子标题文本的功能；默认为 *true*
    - `headers` - （可选）子标题对象的数组。每个对象可以包含以下属性：
        - `id` - （可选）子标题的 id
        - `text` - （必填）要在子标题中渲染的文本
        - `fill` - （可选）子标题的背景颜色
        - `fontSize` - （可选）字体大小（像素），默认为 14
        - `lineHeight` - （可选）行高，默认为 14
        - `textAlign` - （可选）子标题中文本的对齐方式：`"left"`、`"center"`（默认）、`"right"`
        - `textVerticalAlign` - （可选）子标题中文本的垂直对齐方式：`"top"`、`"center"`（默认）、`"bottom"`
        - `fontStyle` - （可选）文本字体的样式：`"normal"`（默认）、`"italic"`、`"oblique"`
        - `fontColor` - （可选）文本字体的颜色，默认为 "#4C4C4C"
        - `fontWeight` - （可选）文本字体的粗细，可能的值为：`"normal"`、`"bold"`、`"bolder"`、`"lighter"`，以及 `"100"`-`"900"` 的值，其中 `"400"` 与 normal 相同，`"600"` 及以上为最粗字体；默认为 `"500"`
        - `iconColor` - （可选）子标题图标的颜色，默认为 "#808080"
        - `editable` - （可选）启用/禁用通过双击编辑子标题文本的功能；默认为 *true*
- `subHeaderCols` - （可选）包含 swimlane 上/下子标题配置设置的对象。该对象具有以下属性：
    - `position` - （可选）子标题的位置：`"top"` | `"bottom"`
    - `subHeaderCols` 的其他属性与 `subHeaderRows` 的属性相同（详见上文）
- `key` - （可选）自定义属性，其逻辑由您自行实现

### 示例 {#example}

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
    }
];
~~~

## Swimlane 单元格的属性 {#properties-of-a-swimlane-cell}

### 用法 {#usage-1}

~~~jsx
const data = [
    // swimlane 单元格对象
    {
        type: "$sgroup",
        id?: string | number,
        groupChildren?: array,
        style?: {
            fill?: string,
            overFill?: string,
            partiallyFill?: string
        },
        exitArea?: {
            groupBehavior?: "unbound" | "boundNoBorderExtension", // 默认为 "unbound"
            padding?: number
        }
    },
    // 更多 swimlane 单元格对象
];
~~~

### 描述 {#description-1}

swimlane 单元格的配置属性如下：

- `type` - （必填）swimlane 单元格的类型，设置为 "$sgroup"
- `id` - （可选）swimlane 单元格的唯一 id
- `groupChildren` - （可选）包含单元格第一级子项 id 的数组
- `style` - （可选）包含单元格样式设置的对象。该对象可以包含以下属性：
    - `fill` - （可选）单元格的背景颜色
    - `overFill` - （可选）当用户按住图形并将其移入/移出单元格时的背景颜色（*前提是图形至少 75% 的区域位于单元格内*）
    - `partiallyFill` - （可选）当用户按住图形并将其移入/移出单元格时的背景颜色（*前提是图形 75% 或更多的区域位于单元格外部，且未通过 `exitArea` 属性定义其他设置*）
- `exitArea` - （可选）包含用户将图形拖出单元格时应用于该图形的设置的对象（*仅适用于单元格的第一级子项*）。该对象可以包含以下属性：
    - `groupBehavior` - （可选）用户将单元格的子项拖出单元格时该子项的行为：
        - `"unbound"`（默认）- 用户可以将图形移入或移出单元格
        - `"boundNoBorderExtension"` - 用户可以将图形移入单元格，但如果图形已被放入单元格内，则无法将其拖出单元格。当用户尝试将图形拖出单元格时，单元格的边框不会扩展
    - `padding` - （可选）定义在单元格内移动图形时，单元格与图形边缘之间的间距。<br/>
    :::tip
    仅当 `groupBehavior` 设置为 `"boundNoBorderExtension"` 时，`padding` 属性才可用
    :::

### 示例 {#example-1}

~~~jsx
const data = [
  // 配置 swimlane
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "layout": [
            [1, 2, 3, 4]
        ]
    },
    // 配置 swimlane 的单元格
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
    // 配置要放入单元格的图形
    {
        "id": "s1", "type": "end", "text": "Step 1", "x": 20, "y": 110
    }
];
~~~

**相关文章**：[配置 Swimlane](/swimlanes/)

**相关示例**：

- [Diagram。默认模式。游戏关卡与位置](https://snippet.dhtmlx.com/1h4j9gb3?tag=diagram&mode=wide)
- [Diagram。默认模式。Swimlane 模板](https://snippet.dhtmlx.com/z6x5m3gb?tag=diagram&mode=wide)
- [Diagram。默认模式。瀑布图模板](https://snippet.dhtmlx.com/k5vlvj8i?tag=diagram&mode=wide)
- [Diagram。默认模式。艾森豪威尔矩阵示例](https://snippet.dhtmlx.com/yfvccvc4?mode=wide)<br/>详情请参阅 [如何使用 DHTMLX 构建 JavaScript 艾森豪威尔矩阵](https://dhtmlx.com/blog/build-javascript-eisenhower-matrix-dhtmlx/) 一文
