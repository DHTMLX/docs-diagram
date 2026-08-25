---
sidebar_label: Colorpicker
title: Editbar 基本控件 - Colorpicker
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Colorpicker 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# Colorpicker

@short: 用于选择颜色的基本控件。

![Colorpicker 控件](/img/editbar-basic-controls/colorpicker.png)

## 用法 {#usage}

~~~jsx
{
    type: "colorpicker",
    key?: string | string[],
    wrap?: boolean, // 默认为 false

    css?: string,
    disabled?: boolean, // 默认为 false
    hidden?: boolean, // 默认为 false
    height?: string | number | "content", // 默认为 "content"
    width?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    customColors?: string[],
    grayShades?: boolean, // 默认为 true
    icon?: string,
    mode?: "palette" | "picker", // 默认为 "palette"
    palette?: string[][],
    paletteOnly?: boolean, // 默认为 false
    pickerOnly?: boolean, // 默认为 false
    placeholder?: string,

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

- `type` -（必需）控件的类型，设置为 `"colorpicker"`
- `key` -（可选）指定/修改属性的名称，或该属性在 Diagram 项对象中的路径
- `wrap` -（可选）允许显示外部包装。默认值为 *false*
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）状态。默认值为 *false*
- `hidden` -（可选）定义控件是否隐藏。默认值为 *false*
- `height` -（可选）控件的高度。默认值为 `"content"`
- `width` -（可选）控件的宽度。默认值为 `"content"`
- `padding` -（可选）设置 Colorpicker 控件的单元格与边框之间的内边距
- `customColors` -（可选）在 Colorpicker 的底部显示自定义颜色区域
- `grayShades` -（可选）定义调色板中是否显示灰色阴影区域。默认值为 *true*
- `icon` -（可选）所使用图标字体中某个图标的 CSS 类
- `mode` -（可选）控件的模式：`"palette"` | `"picker"`。默认值为 `"palette"`
- `palette` -（可选）包含要在 Colorpicker 中显示的颜色数组
- `paletteOnly` -（可选）定义 Colorpicker 是否仅以调色板模式显示。默认值为 *false*
- `pickerOnly` -（可选）定义 Colorpicker 是否仅以选择器模式显示。默认值为 *false*
- `placeholder` -（可选）输入框的提示文字
- `label` -（可选）为控件指定标签
- `labelPosition` -（可选）定义标签的位置：`"left"` | `"top"`。默认值为 `"top"`
- `labelWidth` -（可选）设置控件标签的宽度

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能出现问题。
:::

- `$on` -（可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName`  - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-colorpicker-events/)
- `$handler` -（可选）- 一个回调函数，用于处理 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件的 `change` 和 `input` 事件以及 DataCollection 的 `change` 事件触发时的操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项的 id
        - `key` - 指定/修改属性的名称，或该属性在 Diagram 项对象中的路径
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件的对象
        - `value` - [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，用于在控件初始化时以及 DataCollection 中的值发生更改时设置 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 组件所基于的 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件的对象
        - `value` - Diagram 项的值
- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form 控件的配置。使用以下参数调用：
    - `object` - 不包含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-25}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "colorpicker",
                        wrap: true,
                        label: "Fill",
                        placeholder: "Select color",
                        grayShades: false,
                        palette: [
                            ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900", "#7fc7af", "#dad8a7"],
                            ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b", "#948c75", "#d5ded9"],
                            ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a", "#cbe86b", "#f2e9e1"],
                            ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58", "#dce9be", "#555152"],
                            ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc", "#005f6b", "#008c9e"],
                            ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634", "#73626e", "#b38184"],
                            ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f", "#fc913a", "#f9d423"],
                            ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2", "#fecea8", "#ff847c"],
                            ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951", "#80bca3", "#f6f7bd"],
                            ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5", "#40c0cb", "#f9f2e7"]
                        ]
                    }
                ]
            }
        }
    }
});
~~~
