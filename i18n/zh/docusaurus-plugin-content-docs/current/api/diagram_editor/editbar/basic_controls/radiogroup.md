---
sidebar_label: RadioGroup
title: Editbar 基本控件 - RadioGroup
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 RadioGroup 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# RadioGroup

@short: 用于创建一组单选按钮的基本控件。

![RadioGroup control](/img/editbar-basic-controls/radiogroup.png)

## 用法 {#usage}

~~~jsx
{
    type: "radiogroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content",
        padding?: string | number,
        width?: string | number | "content"
    },
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false

    css?: string,
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

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

RadioGroup 内单选按钮的配置对象：

~~~jsx
{
    value: string,
    text?: string,

    disabled?: boolean,
    hidden?: boolean,
    css?: string,
    height?: string | number | "content",
    width?: string | number | "content",
    padding?: string | number
}
~~~

## 描述 {#description}

### RadioGroup 属性 {#radiogroup-properties}

#### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型。将其设置为 `"radioGroup"`
- `key` -（可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `wrap` -（可选）允许显示外部包裹层。默认为 *false*
- `options` -（必需）包含 RadioGroup 选项的对象。该对象可以包含以下属性：
    - `rows` -（可选）将 RadioGroup 控件内的[单选按钮](#radio-button-properties)垂直排列
    - `cols` -（可选）将 RadioGroup 控件内的[单选按钮](#radio-button-properties)水平排列
    - `css` -（可选）为 RadioGroup 添加样式类
    - `height` -（可选）RadioGroup 的高度
    - `padding` -（可选）设置单元格与 RadioGroup 边框之间的内边距
    - `width` -（可选）RadioGroup 的宽度
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（boolean）定义 RadioGroup 是否隐藏。默认为 *false*
- `css` -（可选）为控件添加样式类
- `height` -（可选）控件的高度。默认为 `"content"`
- `width` -（可选）控件的宽度。默认为 `"content"`
- `padding` -（可选）设置单元格与 RadioGroup 控件边框之间的内边距
- `label` -（可选）指定控件的标签
- `labelWidth` -（可选）设置控件标签的宽度
- `labelPosition` -（可选）定义标签的位置：`"left"` | `"top"`。默认为 `"top"`

#### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能出现问题。
:::

- `$on` -（可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName` - 一个回调函数，调用时带有以下参数：
        - `object` - 一个具有以下属性的对象：
            - `control` - [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-radiogroup-events/)
- `$handler` -（可选）- 一个回调函数，用于处理 [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件的 `change` 事件以及 DataCollection 的 `change` 事件被触发时的操作。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件的对象
        - `value` - [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件的值。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form 控件的配置。调用时带有以下参数：
    - `object` - 不含服务属性的控件配置

### 单选按钮属性 {#radio-button-properties}

- `value` -（必需）单选按钮的值
- `text` -（可选）单选按钮的文本标签
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（可选）定义单选按钮是否隐藏。默认为 *false*
- `css` -（可选）为控件添加样式类
- `height` -（可选）控件的高度。默认为 `"content"`
- `width` -（可选）控件的宽度。默认为 `"content"`
- `padding` -（可选）设置单元格与单选按钮控件边框之间的内边距

## 示例 {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "radioGroup",
                        key: "textAlign",
                        label: "Text align",
                        wrap: true,
                        options: {
                            rows: [
                                {
                                    text: "Left",
                                    value: "left"
                                },
                                {
                                    text: "Center",
                                    value: "center"
                                },
                                {
                                    text: "Right",
                                    value: "right"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
~~~
