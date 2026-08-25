---
sidebar_label: Button
title: Editbar 基础控件 - Button
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Button 控件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Suite 的免费 30 天评估版。
---

# Button

@short: 可带图标的基础按钮控件。

![Button 控件](/img/editbar-basic-controls/button.png)

## 用法 {#usage}

~~~jsx
{
    type: "button",
    text?: string,

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    // button view
    circle?: boolean, // 默认为 false
    color?: "danger" | "secondary" | "primary" | "success", // 默认为 "primary"
    full?: boolean, // 默认为 false
    icon?: string,
    size?: "small" | "medium", // 默认为 "medium"
    view?: "flat" | "link", // 默认为 "flat"

    // service properties and methods
    $on?: { [eventName: string]: function },
    $layout?: function
}
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型。设置为 `"button"`
- `text` -（可选）按钮的文本标签
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（可选）定义是否隐藏控件。默认为 *false*
- `height` -（可选）控件的高度。默认为 `"content"`
- `width` -（可选）控件的宽度。默认为 `"content"`
- `padding` -（可选）设置按钮控件的单元格与边框之间的内边距
- `circle` -（可选）使按钮的圆角显示。默认为 *false*
- `color` -（可选）定义按钮的配色方案：`"danger"` | `"secondary"` | `"primary"` | `"success"`。默认为 `"primary"`
- `full` -（可选）将按钮扩展到 Editbar 的完整宽度。默认为 *false*
- `icon` -（可选）设置按钮内显示的图标的 CSS 类
- `size` -（可选）定义按钮的尺寸：`"small"` | `"medium"`。默认为 `"medium"`
- `view` -（可选）定义按钮的外观：`"flat"` | `"link"`。默认为 `"flat"`

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能中断。
:::

- `$on` -（可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName`  - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [Button](https://docs.dhtmlx.com/suite/form/button/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项目的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-button-events/)
- `$layout` -（可选）- 一个回调函数，允许设置控件的结构。返回 [Button](https://docs.dhtmlx.com/suite/form/button/) Form 控件的配置。使用以下参数调用：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {8-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "input", label: "Text", placeholder: "Push the button", key: "text" },
                    {
                        type: "button",
                        full: true,
                        text: "Change shape text",
                        color: "danger",
                        $on: {
                            click: ({ id, editor }) => {
                                editor.diagram.data.update(id, {
                                    text: "New text"
                                });
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
