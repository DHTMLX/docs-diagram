---
sidebar_label: Select
title: Editbar 基本控件 - Select
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Select 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# Select

@short: 用于展示一组可选选项的高级下拉选择框的基本控件。

![Select control](/img/editbar-basic-controls/select.png)

## 用法 {#usage}

~~~jsx
{
    type: "select",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,
    icon?: string,

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

Select 内选项的配置对象：

~~~jsx
{
    value: string | number,
    content: string,
    disabled?: boolean
}
~~~

## 描述 {#description}

### Select 属性 {#select-properties}

#### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型。将其设置为 `"select"`
- `options` -（必需）Select 选项的数组，每个选项可以设置为 *string*，也可以设置为具有一组 `key:value` 键值对的 *object* - [选项的属性及其取值](#option-properties)
- `key` -（可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `wrap` -（可选）允许显示外部包裹层。默认为 *false*
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（boolean）定义 Select 是否隐藏。默认为 *false*
- `height` -（可选）控件的高度。默认为 `"content"`
- `width` -（可选）控件的宽度。默认为 `"content"`
- `padding` -（可选）设置单元格与 Select 控件边框之间的内边距
- `icon` -（可选）所用图标字体中某个[图标](https://docs.dhtmlx.com/suite/helpers/icon/)的 CSS 类
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
            - `control` - [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-select-events/)
- `$handler` -（可选）- 一个回调函数，用于处理 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件的 `change` 事件以及 DataCollection 的 `change` 事件被触发时的操作。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件的对象
        - `value` - [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件的值。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [Select](https://docs.dhtmlx.com/suite/form/select/) Form 控件的配置。调用时带有以下参数：
    - `object` - 不含服务属性的控件配置

### 选项属性 {#option-properties}

- `value` -（必需）设置选择选项的值
- `content` -（必需）选择选项中显示的内容
- `disabled` -（可选）定义选项是启用（*false*）还是禁用（*true*）。默认为 *false*

## 示例 {#example}

~~~jsx {7-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "select",
                        label: "Position",
                        key: "position",
                        wrap: true,
                        options: [
                            "",
                            "Technical Director",
                            "Manager",
                            "QA Lead",
                            { value: 4, content: "Team Lead", disabled: true },
                            { value: 5, content: "Programmer" }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
