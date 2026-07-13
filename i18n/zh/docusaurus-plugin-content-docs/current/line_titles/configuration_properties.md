---
sidebar_label: 线条标题属性
title: 线条标题属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解线条标题属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# 线条标题属性 {#linetitle-properties}

:::note
请使用 HEX 格式指定颜色值。
:::

### 用法 {#usage}

~~~jsx
const data = [
    // 线条标题对象
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // 默认为 50
        autoPosition?: boolean, // 默认为 true
        editable?: boolean, // 默认为 true
        fixed?: boolean, // 默认为 false
        hidden?: boolean, // 默认为 false

        fill?: string,
        fontSize?: string | number, // 默认为 14
        lineHeight?: string | number, // 默认为 14
        fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
        fontColor?: string, // 默认为 "#4C4C4C"
        fontWeight?: string, // 默认为 "500"
        textAlign?: "center" | "left" | "right" // 默认为 "center"
    },
    // 更多线条对象
];
~~~

### 描述 {#description}

每个线条标题对象都可以包含以下属性：

- `type` - （必填）项目的类型，设置为 `"lineTitle"`
- `id` - （可选）线条标题的 id，默认自动生成
- `parent` - （必填）要为其显示标题的线条的 id
- `text` - （必填）线条标题的文本
- `distance` - （可选）指定标题在线条上显示位置的距离，取值范围为 0 到 100，默认为 50
- `autoPosition` - （可选）定义文本的方向，如果设置为 *true* - 文本方向与线条方向相同；*false* - 文本方向始终为水平方向；默认为 *true*
- `editable` - （可选）启用/禁用通过双击编辑项目文本的功能，默认为 *true*
- `fixed` - （可选）启用/禁用以指定的 `distance` 值固定项目文本的功能，默认为 *false*
- `hidden` - （可选）定义文本是否隐藏，默认为 *false*
- `fill` - （可选）线条标题项目的背景颜色
- `fontSize` - （可选）字体大小，默认为 14
- `lineHeight` - （可选）文本行高，默认为 14
- `fontStyle` - （可选）文本字体的样式：`"normal"`（默认）、`"italic"`、`"oblique"`
- `fontColor` - （可选）文本字体的颜色，默认为 "#4C4C4C"
- `fontWeight` - （可选）文本字体的粗细，可能的值为：`"normal"`、`"bold"`、`"bolder"`、`"lighter"`；以及 `"100"`-`"900"` 的值，其中 `"400"` 与 normal 相同，`"600"` 及以上为最粗字体；默认为 `"500"`
- `textAlign` - （可选）文本的对齐方式：`"center"`（默认）、`"left"`、`"right"`

### 示例 {#example}

~~~jsx
const data = [
    // 配置图形
    { type: "rectangle", id: "shape_1" },
    { type: "rectangle", id: "shape_2", x: 400 },

    // 配置线条
    { type: "line", id: "line_1", from: "shape_1", to: "shape_2" },

    // 配置线条标题
    { type: "lineTitle", id: "title_1", parent: "line_1", text: "Some text" }
];
~~~

**相关文章**：[配置线条标题](/line_titles/)
