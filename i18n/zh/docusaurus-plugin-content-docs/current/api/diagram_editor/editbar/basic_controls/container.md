---
sidebar_label: Container
title: Editbar 基本控件 - Container
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Container 控件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Suite 的免费 30 天评估版本。
---

# Container

@short: 用于附加 HTML 代码的基本控件。

![Container 控件](/img/editbar-basic-controls/container.png)

## 用法 {#usage}

~~~jsx
{
    type: "container",
    html: HTMLElement | string,
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

    // 服务方法
    $layout?: function
}
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型，设置为 `"container"`
- `html` -（必需）控件的 HTML 内容
- `wrap` -（可选）允许显示外部包装。默认值为 *false*
- `css` -（可选）为控件添加样式类
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）状态。默认值为 *false*
- `hidden` -（可选）定义控件是否隐藏。默认值为 *false*
- `height` -（可选）控件的高度。默认值为 `"content"`
- `width` -（可选）控件的宽度。默认值为 `"content"`
- `padding` -（可选）设置控件的单元格与边框之间的内边距
- `label` -（可选）为控件指定标签
- `labelWidth` -（可选）设置控件标签的宽度
- `labelPosition` -（可选）定义标签的位置：`"left"` | `"top"`。默认值为 `"top"`

#### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能出现问题。
:::

- `$layout` -（可选）- 一个回调函数，用于设置控件的结构。返回 [Container](https://docs.dhtmlx.com/suite/form/container/) Form 控件的配置。使用以下参数调用：
    - `object` - 不包含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "container",
                        html: `
                            <h3>DHTMLX Diagram</h3>
                            <p>This is an example of simple customization of the editing panel using the container control.</p>
                            <p>You can also use this control to create your own controls.</p>
                            <img
                                style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto'
                                src='https://snippet.dhtmlx.com/codebase/data/common/img/01/developer-01.svg'
                            >
                        `
                    }
                ]
            }
        }
    }
});
~~~
