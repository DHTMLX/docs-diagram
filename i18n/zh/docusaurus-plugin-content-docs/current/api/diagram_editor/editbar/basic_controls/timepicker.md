---
sidebar_label: Timepicker
title: Editbar 基本控件 - Timepicker
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Timepicker 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天试用版 DHTMLX Suite。
---

# Timepicker

@short: 用于通过沿轨道移动手柄或直接在相应输入框中输入小时和分钟值来选择时间值的基本控件。

![Timepicker 控件](/img/editbar-basic-controls/timepicker.png)

## 用法 {#usage}

~~~jsx
{
    type: "timepicker",
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    controls?: boolean, // 默认为 false
    icon?: string,
    placeholder?: string,
    timeFormat?: 12 | 24, // 默认为 24
    valueFormat?: "string" | "timeObject", // 默认为 "string"

    // 当 `wrap:true` 时，请查看 Fieldset 的标签属性
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // 默认为 "top"

    // 服务属性和方法
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` - （必需）控件的类型。设置为 `"timepicker"`
- `key` - （可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `wrap` - （可选）允许显示外部包装。默认为 *false*
- `css` - （可选）为控件添加样式类
- `hidden` - （可选）定义控件是否隐藏。默认为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `width` - （可选）控件的宽度。默认为 `"content"`
- `height` - （可选）控件的高度。默认为 `"content"`
- `padding` - （可选）设置单元格与 Timepicker 控件边框之间的内边距
- `controls` - （可选）定义 timepicker 是否配备 Close 和 Save 按钮。默认为 *false*
- `icon` - （可选）所使用图标字体中图标的 CSS 类
- `placeholder` - （可选）输入框的提示信息
- `timeFormat` - （可选）定义启用哪种时钟格式：12 小时制或 24 小时制。请相应地将该属性设置为 *12* 或 *24*。默认为 *24*
- `valueFormat` - （可选）定义在处理 timepicker 控件事件时所应用值的格式：`"string"` | `"timeObject"`。默认为 `"string"`
- `label` - （可选）为控件指定标签
- `labelWidth` - （可选）设置控件标签的宽度
- `labelPosition` - （可选）定义标签的位置：`"left"` | `"top"`。默认为 `"top"`

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能导致其功能出现问题。
:::

- `$on` - （可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName` - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` - （可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-timepicker-events/)
- `$handler` - （可选）- 一个回调函数，用于处理 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件的 `change` 和 `input` 事件以及 DataCollection 的 `change` 事件被触发时的操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件对象
        - `value` - [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件的新值
- `$setValue` - （可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件对象
        - `value` - Diagram 项的值
- `$layout` - （可选）- 一个回调函数，用于设置控件的结构。返回 [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/) Form 控件的配置。使用以下参数调用：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {8-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    {
                        type: "timepicker",
                        key: "time",
                        label: "Select time",
                        controls: true
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "time": "14:00" },
    { "id": "shape_3", "parent": "shape_1", "time": "18:30" }
]);
~~~
