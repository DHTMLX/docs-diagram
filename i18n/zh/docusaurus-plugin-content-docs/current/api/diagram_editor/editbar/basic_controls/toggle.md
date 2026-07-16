---
sidebar_label: Toggle
title: Editbar 基本控件 - Toggle
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Toggle 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天试用版 DHTMLX Suite。
---

# Toggle

@short: 一种基本控件，表示可以在点击时从按下状态切换到未按下状态的特殊按钮。

![Toggle 控件](/img/editbar-basic-controls/toggle.png)

## 用法 {#usage}

~~~jsx
{
    type: "toggle",
    key?: string | string[],

    hidden?: boolean, // 默认为 false
    disabled?: boolean, // 默认为 false
    full?: boolean, // 默认为 false

    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

    css?: string,
    width?: string | number | "content", // 默认为 "content"
    height?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    // 服务属性和方法
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

如果指定了 `value` 属性，该控件既可以与 *boolean* 值一起使用，也可以与 *string* 值一起使用。`value` 属性用于将设置的值指定为所应用属性的值。[查看下面的示例](#example)以了解详情。

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` - （必需）控件的类型。设置为 `"toggle"`
- `key` - （可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `hidden` - （可选）定义控件是否隐藏。默认为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `full` - （可选）定义 toggle 是否扩展至 `width` 属性指定的宽度。默认为 *false*
- `text` - （可选）设置 toggle 内部的文本。当与 `offText` 属性一起初始化时，指定的文本将在选中（按下）状态下渲染
- `offText` - （可选）设置将在 toggle 未选中（未按下）状态下渲染的文本
- `icon` - （可选）设置在 toggle 内部显示的图标的 CSS 类。当与 `offIcon` 属性一起初始化时，指定的图标 CSS 类将在 toggle 的选中（按下）状态下渲染
- `offIcon` - （可选）设置将在 toggle 未选中（未按下）状态下渲染的图标的 CSS 类
- `value` - （可选）指定选中（按下）状态下的值。如果未定义，则控件将使用 *boolean* 值
- `css` - （可选）为控件添加样式类
- `width` - （可选）控件的宽度。默认为 `"content"`
- `height` - （可选）控件的高度。默认为 `"content"`
- `padding` - （可选）设置单元格与 Toggle 控件边框之间的内边距

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能导致其功能出现问题。
:::

- `$on` - （可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName` - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` - （可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-toggle-events/)
- `$handler` - （可选）- 一个回调函数，用于处理 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件的 `change` 事件以及 DataCollection 的 `change` 事件被触发时的操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件对象
        - `value` - [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件的新值
- `$setValue` - （可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件对象
        - `value` - Diagram 项的值
- `$layout` - （可选）- 一个回调函数，用于设置控件的结构。返回 [Toggle](https://docs.dhtmlx.com/suite/form/toggle/) Form 控件的配置。使用以下参数调用：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-14} title="为 toggle 应用布尔值"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "toggle",
                        key: ["header", "enable"],
                        icon: "dxi dxi-eye",
                        offIcon: "dxi dxi-eye-off",
                        text: "Visible",
                        offText: "Invisible"
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {7-12} title="将设置的值指定为所应用属性的值"
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggle",
                        key: "fontStyle",
                        value: "italic",
                        icon: "dxi dxi-format-italic"
                    }
                ]
            }
        }
    }
});
~~~
