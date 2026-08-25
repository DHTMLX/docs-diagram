---
sidebar_label: ToggleGroup
title: Editbar 基本控件 - ToggleGroup
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 ToggleGroup 控件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Suite 的免费 30 天评估版。
---

# ToggleGroup

@short: 用于创建切换按钮组的基本控件。

![ToggleGroup 控件](/img/editbar-basic-controls/togglegroup.png)

## 用法 {#usage}

~~~jsx
{
    type: "toggleGroup",
    options: object[],
    key?: string | string[],

    full?: boolean, // 默认为 false
    gap?: number, // 默认为 0
    hidden?: boolean, // 默认为 false
    disabled?: boolean, // 默认为 false

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

ToggleGroup 内的 Toggle 配置对象：

~~~jsx
{
    id?: string,
    hidden?: boolean,
    disabled?: boolean,
    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number
}
~~~

如果指定了 `value` 属性，控件内带有 `toggle` 配置的对象既可以使用 *boolean* 值，也可以使用 *string* 值。`value` 属性用于将设置的值赋给所应用的属性。[请参阅下方示例](#example) 以了解详情。

## 描述 {#description}

### ToggleGroup 属性 {#togglegroup-properties}

#### 基本属性 {#basic-properties}

- `type` - （必需）控件的类型。将其设置为 `"toggleGroup"`
- `key` - （可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `options` - （必需）ToggleGroup 选项的数组，每个选项都设置为包含一组 `key:value` 键值对的 *object*——[选项的属性及其值](#toggle-properties)
- `hidden` - （可选）定义 ToggleGroup 是否隐藏。默认值为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*）。默认值为 *false*
- `full` - （可选）定义 ToggleGroup 是否扩展到 `width` 属性指定的宽度。默认值为 *false*
- `gap` - （可选）设置选项的各元素（按钮）之间的偏移量。默认值为 *0*
- `css` - （可选）为控件添加样式类
- `width` - （可选）控件的宽度。默认值为 `"content"`
- `height` - （可选）控件的高度。默认值为 `"content"`
- `padding` - （可选）设置 ToggleGroup 控件的单元格与边框之间的内边距

#### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能异常。
:::

- `$on` - （可选）——允许设置事件监听器。该对象具有以下属性：
    - `eventName`  - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` - （可选）——[原始事件参数](https://docs.dhtmlx.com/suite/category/form-togglegroup-events/)
- `$handler` - （可选）——一个回调函数，用于在触发 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件的 `change` 事件以及 DataCollection 的 `change` 事件时处理相应操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件的对象
        - `value` - [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件的新值
- `$setValue` - （可选）——一个回调函数，用于在控件初始化时以及 DataCollection 中的值发生变化时设置 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` - （可选）——一个回调函数，用于设置控件的结构。返回 [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/) Form 控件的配置。使用以下参数调用：
    - `object` - 不含服务属性的控件配置

### Toggle 属性 {#toggle-properties}

- `id` - （可选）控件的 id，如果未设置则自动生成
- `hidden` - （可选）定义选项是否隐藏。默认值为 *false*
- `disabled` - （可选）定义选项是启用（*false*）还是禁用（*true*）。默认值为 *false*
- `full` - （可选）定义选项是否扩展到 `width` 属性指定的宽度。默认值为 *false*
- `text` - （可选）设置选项内的文本。当与 `offText` 属性一起初始化时，指定的文本将在选中（按下）状态下呈现
- `icon` - （可选）设置在选项内显示的图标的 CSS 类。当与 `offIcon` 属性一起初始化时，指定的图标 CSS 类将在选项的选中（按下）状态下呈现
- `offText` - （可选）设置将在选项的未选中（未按下）状态下呈现的文本
- `offIcon` - （可选）设置将在选项的未选中（未按下）状态下呈现的图标的 CSS 类
- `value` - （可选）指定选中（按下）状态下的值。如果未定义，则该选项使用 *boolean* 值

## 示例 {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggleGroup",
                        key: "textAlign",
                        gap: 4,
                        $on: {
                            beforeChange: (spec, values) => !Object.values(values).every(i => !i),
                        },
                        options: [
                            {
                                icon: "dxi dxi-format-align-left",
                                value: "left"
                            },
                            {
                                icon: "dxi dxi-format-align-center",
                                value: "center"
                            },
                            {
                                icon: "dxi dxi-format-align-right",
                                value: "right"
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
