---
sidebar_label: Fieldset
title: Editbar 基本控件 - Fieldset
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Fieldset 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# Fieldset

@short: 用于借助 Editbar 配置项 [`controls`](api/diagram_editor/editbar/config/controls_property.md) 或 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 创建复杂控件的基本控件。

![Fieldset control](/img/editbar-basic-controls/fieldset.png)

## 用法 {#usage}

~~~jsx
{
    type: "fieldset",

    compact?: boolean,
    hidden?: boolean, // 默认为 false
    disabled?: boolean, // 默认为 false

    css?: string,
    width?: string | number | "content", // 默认为 "content"
    height?: string | number | "content", // 默认为 "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 默认为 "start"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 默认为 "left"

    rows?: object[],
    cols?: object[],

    $layout?: function
}
~~~

`rows` 和 `cols` 属性可以包含指定控件对象的数组，或如下所示的嵌套结构：

~~~jsx
{
    css?: string,
    width?: string | number | "content", // 默认为 "content"
    height?: string | number | "content", // 默认为 "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 默认为 "start"
    rows?: object[],
    cols?: object[]
}
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型。将其设置为 `"fieldset"`
- `compact` -（可选）指定紧凑模式，移除缩进和边框。默认为 *false*
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（可选）定义控件是否隐藏。默认为 *false*
- `css` -（可选）应用于控件组的 CSS 类名称
- `width` -（可选）设置控件组的宽度。默认为 `"content"`
- `height` -（可选）设置控件组的高度。默认为 `"content"`
- `padding` -（可选）设置控件组内部内容的内边距
- `align` -（可选）设置控件组内控件的对齐方式。默认为 `"start"`
- `label` -（可选）指定控件的标签
- `labelAlignment` -（可选）定义标签的位置：`"left"` | `"right"` | `"center"`。默认为 `"left"`
- `rows` -（可选）将控件组内的控件垂直排列
- `cols` -（可选）将控件组内的控件水平排列

#### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能出现问题。
:::

- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [Fieldset](https://docs.dhtmlx.com/suite/form/fieldset/) Form 控件的配置。调用时带有以下参数：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-28} title="通过 properties 属性创建 Fieldset"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "fieldset",
                        label: "Task details",
                        rows: [
                            { type: "input", key: "name", label: "Task name" },
                            { type: "input", key: "id", label: "ID", readOnly: true },
                            {
                                align: "between",
                                cols: [
                                    { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                    { type: "datepicker", key: "date_end", label: "Date end", width: "48%" },
                                ]
                            },
                            {
                                type: "combo",
                                key: "responsible",
                                label: "Responsible",
                                placeholder: "Select responsible",
                                options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {10-33} title="通过 controls 属性创建复杂控件"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "details" }
                ]
            },
            controls: {
                details: {
                    type: "fieldset",
                    label: "Task details",
                    rows: [
                        { type: "input", key: "name", label: "Task name" },
                        { type: "input", key: "id", label: "ID", readOnly: true },
                        {
                            align: "between",
                            cols: [
                                { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                { type: "datepicker", key: "date_end", label: "Date end", width: "48%" }
                            ]
                        },
                        {
                            type: "combo",
                            key: "responsible",
                            label: "Responsible",
                            placeholder: "Select responsible",
                            options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                        }
                    ]
                }
            }
        }
    }
});
~~~
