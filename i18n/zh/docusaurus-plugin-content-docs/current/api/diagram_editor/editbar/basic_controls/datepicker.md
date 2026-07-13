---
sidebar_label: Datepicker
title: Editbar 基本控件 - Datepicker
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Datepicker 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# Datepicker

@short: 用于选择日期的基本控件。

![Datepicker control](/img/editbar-basic-controls/datepicker.png)

## 用法 {#usage}

~~~jsx
{
    type: "datepicker",
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    date?: Date | string,
    dateFormat?: string, // 默认为 "%d/%m/%y"
    disabledDates?: (date: Date) => boolean,
    icon?: string,
    mark?: (date: Date) => string,
    mode?: "calendar" | "month" | "year", // 默认为 "calendar"
    placeholder?: string,
    thisMonthOnly?: boolean, // 默认为 false
    timeFormat?: 24 | 12, // 默认为 24
    timePicker?: boolean, // 默认为 false
    valueFormat?: "string" | "Date", // 默认为 "string"
    weekNumbers?: boolean, // 默认为 false
    weekStart?: "saturday" | "sunday" | "monday", // 默认为 "sunday"

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

- `type` -（必需）控件的类型。将其设置为 `"datepicker"`
- `key` -（可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `wrap` -（可选）允许显示外部包裹层。默认为 *false*
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` -（可选）定义控件是否隐藏。默认为 *false*
- `height` -（可选）控件的高度。默认为 `"content"`
- `width` -（可选）控件的宽度。默认为 `"content"`
- `padding` -（可选）设置单元格与 Datepicker 控件边框之间的内边距
- `date` -（可选）定义创建日历时打开的日期
- `dateFormat` -（可选）定义日历中日期的格式。默认为 *"%d/%m/%y"*。日期格式必须包含分隔符（空格或符号），否则将抛出错误
- `disabledDates` -（可选）允许禁用某些日期区间，对应的日期标签会变暗
- `icon` -（可选）所用图标字体中某个图标的 CSS 类
- `mark` -（可选）允许为特定日期添加 CSS 类
- `mode` -（可选）指定日历的显示模式：`"calendar"` | `"month"` | `"year"`。默认为 `"calendar"`
- `placeholder` -（可选）输入框的提示信息
- `thisMonthOnly` -（可选）隐藏相对于当前显示月份的上一个/下一个月的日期
- `timeFormat` -（可选）定义时间选择器的时间格式，12 小时制或 24 小时制：*12* | *24*。默认为 *24*
- `timePicker` -（可选）在日历中添加时间选择器。默认为 *false*
- `valueFormat` -（可选）定义获取控件当前值时返回值的格式：`"string"` | `"Date"`。默认为 `"string"`
- `weekNumbers` -（可选）定义是否显示周数，默认为 *false*
- `weekStart` -（可选）设置一周的起始日：`"saturday"` | `"monday"` | `"sunday"`。默认为 `"sunday"`
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
            - `control` - [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-datepicker-events/)
- `$handler` -（可选）- 一个回调函数，用于处理表单控件的 `change` 和 `input` 事件以及 DataCollection 的 `change` 事件被触发时的操作。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 控件的对象
        - `value` - [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 控件的值。调用时带有以下参数：
    - `object` - 一个具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 该组件所基于的 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form 控件的配置。调用时带有以下参数：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-21}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "datepicker",
                        key: "date_start",
                        label: "Date start",
                        wrap: true,
                    },
                    {
                        type: "datepicker",
                        key: "date_end",
                        label: "Date end",
                        wrap: true,
                        valueFormat: "Date",
                        timePicker: true,
                        weekStart: "monday"
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date },
    { "id": "shape_3", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date }
]);
~~~
