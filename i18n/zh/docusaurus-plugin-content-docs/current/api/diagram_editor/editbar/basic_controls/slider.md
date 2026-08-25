---
sidebar_label: Slider
title: Editbar 基本控件 - Slider
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 Slider 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天试用版 DHTMLX Suite。
---

# Slider

@short: 通过沿一条带有一组固定选项的线条移动滑块来选择数值的基本控件。

![Slider 控件](/img/editbar-basic-controls/slider.png)

## 用法 {#usage}

~~~jsx
{
    type: "slider",
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    css?: string,
    padding?: string | number,
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"

    inverse?: boolean, // 默认为 false
    majorTick?: number,
    max?: number, // 默认为 100
    min?: number, // 默认为 0
    mode?: "vertical" | "horizontal", // 默认为 "horizontal"
    range?: boolean, // 默认为 false
    step?: number, // 默认为 1
    tick?: number,
    tickTemplate?: (position: number) => string,
    tooltip?: boolean, // 默认为 true

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

- `type` - （必需）控件的类型。设置为 `"slider"`
- `key` - （可选）指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
- `wrap` - （可选）允许显示外部包装。默认为 *false*
- `disabled` - （可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `hidden` - （可选）定义控件是否隐藏。默认为 *false*
- `css` - （可选）为控件添加样式类
- `height` - （可选）控件的高度。默认为 `"content"`
- `width` - （可选）控件的宽度。默认为 `"content"`
- `padding` - （可选）设置单元格与 slider 控件边框之间的内边距
- `inverse` - （可选）启用/禁用反向 slider 模式。默认为 *false*
- `majorTick` - （可选）设置在 slider 刻度上渲染数值的间隔
- `max` - （可选）slider 的最大值。默认为 *100*
- `min` - （可选）slider 的最小值。默认为 *0*
- `mode` - （可选）slider 刻度的方向。默认为 `"horizontal"`
- `range` - （可选）启用/禁用在 slider 上选择数值范围。默认为 *false*
- `step` - （可选）slider 滑块移动的步长。默认为 *1*
- `tick` - （可选）设置渲染 slider 刻度的步长间隔
- `tickTemplate` - （可选）设置在刻度上渲染数值的模板
- `tooltip` - （可选）启用在悬停 slider 滑块时显示刻度值的提示信息。默认为 *true*

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能导致其功能出现问题。
:::

- `$on` - （可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName` - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` - （可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-slider-events/)
- `$handler` - （可选）- 一个回调函数，用于处理 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件的 `change` 事件以及 DataCollection 的 `change` 事件被触发时的操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改的属性名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件对象
        - `value` - [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件的新值
- `$setValue` - （可选）- 一个回调函数，用于在控件初始化以及 DataCollection 中的值发生变化时设置 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件对象
        - `value` - Diagram 项的值
- `$layout` - （可选）- 一个回调函数，用于设置控件的结构。返回 [Slider](https://docs.dhtmlx.com/suite/form/slider/) Form 控件的配置。使用以下参数调用：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $lineTitle: [
                    {
                        type: "slider",
                        key: "distance",
                        label: "Distance",
                        wrap: true,
                        min: 0,
                        max: 100,
                        step: 1,
                        tick: 5,
                        majorTick: 10,
                        tickTemplate: value => value
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1", "type": "rectangle", "text": "shape" },
    { "id": "shape_2","type": "rectangle", "text": "shape", "x": 400 },
    { "id": "line", "type": "line", "from": "shape_1", "to": "shape_2" },
    { "type": "lineTitle", "parent": "line", "text": "Title", "distance": 50 }
]);
~~~
