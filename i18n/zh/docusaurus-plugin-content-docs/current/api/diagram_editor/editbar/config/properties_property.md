---
sidebar_label: properties
title: Editbar 的 properties 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 properties 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# properties

### 描述 {#description}

@short: 可选。用于修改 Diagram 元素（形状、组、泳道等）控件的一组配置

:::info
`properties` 配置允许您执行以下操作：
- 基于[**基础控件**](api/diagram_editor/editbar/basic_controls_overview.md)和/或[**复合控件**](api/diagram_editor/editbar/complex_controls_overview.md)修改所有或单个 Diagram 元素的 Editbar 控件
- 将通过 [`controls`](api/diagram_editor/editbar/config/controls_property.md) 属性定义的自定义 Editbar 控件应用于 Diagram 元素
- 指定将 Editbar 控件（自定义或默认）应用于 Diagram 元素的条件

有关配置 Editbar 的更多信息，请参阅[**Editbar 配置**](guides/diagram_editor/editbar.md)指南！
:::

### 用法 {#usage}

~~~jsx
properties?: {
    [type: string]: object[] | function, // 应用于 Diagram 元素的控件的自定义配置
};
~~~

### 参数 {#parameters}

- `type` - Diagram 元素或元素组的名称
    - `object` - Diagram 元素的配置对象

    或

    - `function` - 一个回调函数，应返回一个包含 Diagram 元素控件配置的对象数组。该函数使用一个包含以下参数的对象调用：
        - `item` -（可选）所选元素的对象
        - `editor` -（必需）Diagram editor 的对象

您可以为单个 Diagram 元素（例如 `rectangle`、`circle`、`card` 等）配置 Editbar 控件：

~~~jsx
properties: {
    // 修改单个元素（形状）的 Editbar 控件
    rectangle: [], // 配置 "rectangle" 类型的控件
    circle: [], // 配置 "circle" 类型的控件
    card: [], // 配置 "card" 类型的控件
    estimate: [], // 配置自定义 "estimate" 类型的控件
    // 其他元素
}
~~~

您还可以为一组 Diagram 元素配置 Editbar 控件。以下服务属性可用于配置元素组：

- [`$default`](guides/diagram_editor/editbar.md#configure-editbar-for-the-grid-area) - 允许在未选择任何元素或选择了多个元素时配置 Editbar 控件
- [`$shape`](guides/diagram_editor/editbar.md#configure-editbar-for-shapes) - 允许为所有形状（包括自定义形状）配置 Editbar 控件
- [`$group`](guides/diagram_editor/editbar.md#configure-editbar-for-group-elements) - 允许为所有 "group" 类型的元素配置 Editbar 控件
- [`$swimlane`](guides/diagram_editor/editbar.md#configure-editbar-for-swimlanes) - 允许为所有 "swimlane" 类型的元素配置 Editbar 控件
- [`$line`](guides/diagram_editor/editbar.md#configure-editbar-for-lines) - 允许为所有 "line" 类型的元素配置 Editbar 控件
- [`$lineTitle`](guides/diagram_editor/editbar.md#configure-editbar-for-line-titles) - 允许为所有 "lineTitle" 类型的元素配置 Editbar 控件

~~~jsx
properties: {
    $default: [],
    $shape: [],
    $group: [],
    $swimlane: [],
    $line: [],
    $lineTitle: [],
    // ... 其他参数
}
~~~

### 示例 {#example}

~~~jsx {10-44}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // 显示默认 Editbar
        // 或通过对象配置 Editbar
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            properties: {
                $shape: ({ item, editor }) => {
                    const controls = [
                        { type: "position" },
                        { type: "size" }
                    ];
                    if (item.hasOwnProperty("title")) {
                        controls.push({ type: "input", key: "title", label: "Title", wrap: true });
                    }
                    if (item.hasOwnProperty("text")) {
                        controls.push({ type: "textarea", key: "text", height: 200, label: "Text", wrap: true });
                    }
                    if (item.hasOwnProperty("img")) {
                        controls.push({ type: "avatar", key: "img", label: "Image", wrap: true });
                    }
                    return controls;
                },
                $group: [
                    {
                        type: "arrange",
                        $properties: {
                            angle: { hidden: true }
                        }
                    },
                    { type: "header" },
                    {
                        type: "border",
                        $properties: {
                            stroke: { key: ["style", "stroke"] },
                            strokeType: { hidden: true },
                            strokeWidth: { key: ["style", "strokeWidth"], width: "85%" }
                        }
                    }
                ]
            }
        }
    }
});
~~~

**更新日志**：该属性已在 v6.0 中新增

**相关文章：** [**Editbar 配置**](guides/diagram_editor/editbar.md)

**相关示例：** [Diagram Editor 默认模式。Editbar 的自定义。添加形状计数器](https://snippet.dhtmlx.com/ealq0m4l?mode=wide)
