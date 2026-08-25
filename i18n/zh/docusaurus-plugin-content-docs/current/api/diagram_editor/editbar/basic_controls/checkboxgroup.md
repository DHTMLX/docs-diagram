---
sidebar_label: CheckboxGroup
title: Editbar 基本控件 - CheckboxGroup
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 CheckboxGroup 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# CheckboxGroup

@short: 用于创建复选框组的基本控件。

![CheckboxGroup 控件](/img/editbar-basic-controls/checkboxgroup.png)

## 用法 {#usage}

~~~jsx
{
    type: "checkboxGroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content", // 默认为 "content"
        width?: string | number | "content", // 默认为 "content"
        padding?: string | number,
    },
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

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

CheckboxGroup 内部的 Checkbox 配置对象：

~~~jsx
{
    id: string,
    text: string,
    value?: string,

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number
}
~~~

如果指定了 `value` 属性，控件内部的 `checkbox` 配置对象既可以使用 *boolean* 值，也可以使用 *string* 值。[请查看下方示例](#example)以了解详情。

## 描述 {#description}

### CheckboxGroup 属性 {#checkboxgroup-properties}

#### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型，设置为 `"checkboxGroup"`
- `key` -（可选）指定/修改属性的名称，或该属性在 Diagram 项对象中的路径
- `wrap` -（可选）允许显示外部包装。默认值为 *false*
- `options` -（必需）包含 CheckboxGroup 选项的对象。该对象可以包含以下属性：
    - `rows` -（可选）将 CheckboxGroup 控件内的[复选框](#checkbox-properties)垂直排列
    - `cols` -（可选）将 CheckboxGroup 控件内的[复选框](#checkbox-properties)水平排列
    - `css` -（可选）为 CheckboxGroup 添加样式类
    - `height` -（可选）CheckboxGroup 的高度
    - `padding` -（可选）设置 CheckboxGroup 的单元格与边框之间的内边距
    - `width` -（可选）CheckboxGroup 的宽度
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）状态。默认值为 *false*
- `hidden` -（boolean）定义 CheckboxGroup 是否隐藏。默认值为 *false*
- `height` -（可选）控件的高度。默认值为 `"content"`
- `width` -（可选）控件的宽度。默认值为 `"content"`
- `padding` -（可选）设置 CheckboxGroup 控件的单元格与边框之间的内边距
- `label` -（可选）为控件指定标签
- `labelWidth` -（可选）设置控件标签的宽度
- `labelPosition` -（可选）定义标签的位置：`"left"` | `"top"`。默认值为 `"top"`

#### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能出现问题。
:::

- `$on` -（可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName`  - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-checkboxgroup-events/)
- `$handler` -（可选）- 一个回调函数，用于处理 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件的 `change` 事件以及 DataCollection 的 `change` 事件触发时的操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改属性的名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件的对象
        - `value` - [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，用于在控件初始化时以及 DataCollection 中的值发生更改时设置 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form 控件的配置。使用以下参数调用：
    - `object` - 不包含服务属性的控件配置

### Checkbox 属性 {#checkbox-properties}

- `id` -（可选）控件的 id，如果未设置则自动生成
- `text` -（可选）复选框的文本标签
- `value` -（可选）复选框的值
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）状态。默认值为 *false*
- `hidden` -（可选）定义复选框是否隐藏。默认值为 *false*
- `height` -（可选）控件的高度。默认值为 `"content"`
- `width` -（可选）控件的宽度。默认值为 `"content"`
- `padding` -（可选）设置 Checkbox 控件的单元格与边框之间的内边距

## 示例 {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkboxGroup",
                        label: "Select products",
                        key: "products",
                        options: {
                            rows: [
                                { id: "diagram", text: "DHTMLX Diagram", value: "diagram" },
                                { id: "suite", text: "DHTMLX Suite", value: "suite" },
                                { id: "gantt", text: "DHTMLX Gantt" },
                                { id: "spreadsheet", text: "DHTMLX Spreadsheet", disabled: true }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
editor.parse([
    {
        "type": "rectangle",
        "products": {
            "diagram": "diagram",
            "suite": "",
            "gantt": true,
            "spreadsheet": false
        }
    }
]);
~~~
