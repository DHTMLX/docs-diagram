---
sidebar_label: Size
title: Editbar 复合控件 - Size
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Size 控件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天 DHTMLX Suite 评估版本。
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Size

@short: 用于管理 Diagram 元素宽度和高度的复合控件

<img
  src={useBaseUrl('/img/editbar-complex-controls/size.png')}
  alt="Size control" width='300'
/>

:::info
**Size** 控件仅适用于 Diagram 编辑器中的 `shape`、`group` 和 `swimlane` 元素。
:::

## 用法 {#usage}

~~~jsx
{
    type: "size",

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

- `type` - （必需）控件的类型。将其设置为 `"size"`
- `hidden` - （可选）定义是否隐藏该控件。默认为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*）状态。默认为 *false*
- `css` - （可选）为控件添加样式类
- `width` - （可选）控件的宽度。默认为 `"content"`
- `height` - （可选）控件的高度。默认为 `"content"`
- `padding` - （可选）设置控件组内内容的内边距。默认为 *"0 16px"*
- `label` - （可选）指定控件的标签
- `labelAlignment` - （可选）定义标签的位置。默认为 `"left"`
- `align` - （可选）设置控件组内各控件的对齐方式。默认为 `"start"`
- `compact` - （可选）指定紧凑模式，移除缩进和边框。默认为 *false*

### 服务属性 {#service-properties}

- `$properties` - （可选）允许您在复合控件内覆盖[基础控件](api/diagram_editor/editbar/basic_controls_overview.md)的值。您可以基于基础控件配置 **Size** 控件的以下元素：
    - `width` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) 设置 Diagram 元素的宽度 (px)
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) 设置 Diagram 元素的高度 (px)

## 示例 {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "size",
                        label: "Shape size"
                    }
                ]
            }
        }
    }
});
~~~
