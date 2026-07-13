---
sidebar_label: controls
title: Editbar 的 controls 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 controls 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# controls

### 描述 {#description}

@short: 可选。定义一个或多个自定义控件的一组配置

:::info
`controls` 属性允许您基于[**基本控件**](api/diagram_editor/editbar/basic_controls_overview.md) 和/或 [**复杂控件**](api/diagram_editor/editbar/complex_controls_overview.md) 创建自定义 `Editbar` 控件。使用 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 属性将自定义控件应用到所需的元素（形状、组、泳道等）。

请参阅 [**Editbar 配置**](guides/diagram_editor/editbar.md) 指南，了解更多配置信息！
:::

:::important
我们不建议您在创建自定义控件时重新定义默认控件。请为每个自定义控件使用单独的名称！
:::

### 用法 {#usage}

~~~jsx
controls?: {
    [type: string]: object, // 自定义控件
};
~~~

### 参数 {#parameters}

- `type` - 自定义控件的类型名称
    - `object` - 基于[**基本控件**](api/diagram_editor/editbar/basic_controls_overview.md) 和/或 [**复杂控件**](api/diagram_editor/editbar/complex_controls_overview.md) 的新控件的配置对象

~~~jsx
controls: {
      estimate: { /*...*/ }, // 使用自定义配置创建新的 "estimate" 控件
      // 另一个控件
}
~~~

### 示例 {#example}

~~~jsx {16-28}
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
                $shape: [
                    { type: "estimate" }, // 应用 "estimate" 自定义控件
                    { type: "name" } // 应用 "name" 自定义控件
                ]
            },
            controls: {
                // 创建 "estimate" 自定义控件
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                },
                // 创建 "name" 自定义控件
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

**更新日志：** 该属性在 v6.0 中新增

**相关文章：** [**Editbar 配置**](guides/diagram_editor/editbar.md)

**相关示例：** [Diagram Editor。默认模式。带图例的 PERT 图表](https://snippet.dhtmlx.com/w8mrh3ay?mode=wide)
