---
sidebar_label: Grid step
title: Editbar 复杂控件 - Grid step
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Grid step 控件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Suite 的免费 30 天评估版。
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Grid step

@short: 用于显示和修改 Diagram 编辑器网格步长的复杂控件

<img
  src={useBaseUrl('/img/editbar-complex-controls/gridstep.png')}
  alt="Gridstep 控件" width='300'
/>

## 用法 {#usage}

~~~jsx
{
    type: "gridStep",

    hidden?: boolean, // 默认为 false
    disabled?: boolean, // 默认为 false

    css?: string,
    width?: string | number | "content", // 默认为 "content"
    height?: string | number | "content", // 默认为 "content"
    padding?: string | number, // 默认为 "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 默认为 "left"
    readOnly?: boolean, // 默认为 false
    wrap?: boolean // 默认为 true
}
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` - （必需）控件的类型。将其设置为 `"gridStep"`
- `hidden` - （可选）定义控件是否隐藏。默认值为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*）。默认值为 *false*
- `css` - （可选）为控件添加样式类
- `width` - （可选）控件的宽度。默认值为 `"content"`
- `height` - （可选）控件的高度。默认值为 `"content"`
- `padding` - （可选）设置控件组内内容的内边距。默认值为 *"0 16px"*
- `label` - （可选）指定控件的标签
- `labelAlignment` - （可选）定义标签的位置。默认值为 `"left"`
- `readOnly` - （可选）为控件设置只读模式。默认值为 *false*
- `wrap` - （可选）允许显示外部包装。默认值为 *true*

## 示例 {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "gridStep",
                        readOnly: true
                    }
                ]
            }
        }
    }
});
~~~
