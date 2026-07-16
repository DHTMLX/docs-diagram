---
sidebar_label: Header position
title: Editbar 复杂控件 - Header position
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Header position 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天试用版 DHTMLX Suite。
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Header position

@short: 用于更改组标题位置的复杂控件

<img
  src={useBaseUrl('/img/editbar-complex-controls/headerposition.png')}
  alt="Header position control" width='300'
/>

:::info
**Header position** 控件仅在 Diagram 编辑器的 *default* 模式下对 `group` 和 `swimlane` 元素可用。
:::

## 用法 {#usage}

~~~jsx
{
    type: "headerPosition",

    hidden?: boolean, // 默认为 false
    disabled?: boolean, // 默认为 false

    css?: string,
    width?: string | number | "content", // 默认为 "content"
    height?: string | number | "content", // 默认为 "content"
    padding?: string | number, // 默认为 "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 默认为 "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 默认为 "start"
    compact?: boolean, // 默认为 false

    // 服务属性
    $properties?: object
}
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` - （必需）控件的类型，设置为 `"headerPosition"`
- `hidden` - （可选）定义控件是否隐藏，默认为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*），默认为 *false*
- `css` - （可选）为控件添加样式类
- `width` - （可选）控件的宽度，默认为 `"content"`
- `height` - （可选）控件的高度，默认为 `"content"`
- `padding` - （可选）设置控件组内内容的内边距，默认为 *"0 16px"*
- `label` - （可选）指定控件的标签
- `labelAlignment` - （可选）定义标签的位置，默认为 `"left"`
- `align` - （可选）设置控件组内控件的对齐方式，默认为 `"start"`
- `compact` - （可选）指定紧凑模式，移除缩进和边框，默认为 *false*

### 服务属性 {#service-properties}

- `$properties` - （可选）允许您在复杂控件中覆盖[基本控件](api/diagram_editor/editbar/basic_controls_overview.md)的值。您可以配置基于基本控件的 **Header position** 控件的以下元素：
    - `position` - （[toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)）- 设置组标题的位置

## 示例 {#example}

~~~jsx {6-25}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "headerPosition",
                        label: "Header position",
                        $properties: {
                            position: {
                                options: [
                                    {
                                        icon: "dxi dxi-format-vertical-align-top",
                                        value: "top"
                                    },
                                    {
                                        icon: "dxi dxi-format-vertical-align-bottom",
                                        value: "bottom"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
