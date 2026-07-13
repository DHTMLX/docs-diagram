---
sidebar_label: Input
title: Editbar 基本控件 - Input
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Input 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# Input

@short: 用于输入文本的基本输入框控件。

![Input control](/img/editbar-basic-controls/input.png)

## 用法 {#usage}

~~~jsx
{
    type: "input",
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    icon?: string,
    inputType?: "text" | "password" | "number", // 默认为 "text"
    max?: number | string,
    maxlength?: number | string,
    min?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // 默认为 false

    // 若 `wrap:true`，请查看 Fieldset 的 label 属性
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

- `type` -（必需）控件的类型。将其设置为 `"input"`
- `key` -（可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `wrap` -（可选）允许显示外部包裹层。默认为 *false*
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（可选）定义控件是否隐藏。默认为 *false*
- `height` -（可选）控件的高度。默认为 `"content"`
- `width` -（可选）控件的宽度。默认为 `"content"`
- `padding` -（可选）设置单元格与输入框控件边框之间的内边距
- `icon` -（可选）所用图标字体中某个[图标](https://docs.dhtmlx.com/suite/helpers/icon/)的 CSS 类
- `inputType` -（可选）设置输入框的类型：`"text"` | `"password"` | `"number"`。默认为 `"text"`
使用 `"password"` 值可指定用于输入密码的字段
- `max` -（可选）- 输入框[允许的最大值](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values)。该属性仅适用于输入类型 *"number"*
- `maxlength` -（可选）输入框中[允许输入的最大字符数](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)。该属性适用于以下输入类型：*"text", "password"*
- `min` -（可选）[输入框中允许的最小值](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values)。该属性仅适用于输入类型 *"number"*
- `minlength` -（可选）输入框中[允许输入的最小字符数](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)。该属性适用于以下输入类型：*"text", "password"*
- `placeholder` -（可选）输入框的提示信息
- `readOnly` -（可选）定义输入框是否为只读。默认为 *false*
- `label` -（可选）指定控件的标签
- `labelWidth` -（可选）设置控件标签的宽度
- `labelPosition` -（可选）定义标签的位置：`"left"` | `"top"`。默认为 `"top"`

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能出现问题。
:::

- `$on` -（可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName` - 一个回调函数，调用时带有以下参数：
        - `object` - 一个具有以下属性的对象：
            - `control` - [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-input-events/)
- `$handler` -（可选）- 一个回调函数，用于处理 [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件的 `change` 和 `input` 事件以及 DataCollection 的 `change` 事件被触发时的操作。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件的对象
        - `value` - [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件的值。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [Input](https://docs.dhtmlx.com/suite/form/input/) Form 控件的配置。调用时带有以下参数：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-22}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "input",
                        inputType: "text",
                        key: "text",
                        label: "Input with a string value",
                        placeholder: "Enter a string value"
                    },
                    {
                        type: "input",
                        inputType: "number",
                        key: "x",
                        label: "Input with a number value",
                        placeholder: "Enter a number value",
                        min: 0,
                        max: 100,
                    }
                ]
            }
        }
    }
});
~~~
