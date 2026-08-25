---
sidebar_label: Avatar
title: Editbar 基础控件 - Avatar
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Editbar 的 Avatar 控件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Suite 的免费 30 天评估版。
---

# Avatar

@short: 用于上传图片的基础控件。

![Avatar 控件](/img/editbar-basic-controls/avatar.png)

## 用法 {#usage}

~~~jsx
{
    type: "avatar",
    key?: string, // 默认为 "img"
    wrap?: boolean, // 默认为 false
    target?: string,

    hidden?: boolean, // 默认为 false
    disabled?: boolean, // 默认为 false
    readOnly?: boolean, // 默认为 false

    removeIcon?: boolean, // 默认为 true
    circle?: boolean, // 默认为 false
    icon?: string,
    placeholder?: string,
    preview?: string,
    alt?: string,
    size?: "small" | "medium" | "large" | number, // 默认为 "medium"

    css?: string,
    width?: string | number | "content", // 默认为 "content"
    height?: string | number | "content", // 默认为 "content"
    padding?: string | number,

    // 当 `wrap:true` 时，请查看 Fieldset 的 label 属性
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // 默认为 "top"

    accept?: string, // 默认为 "image/*"
    fieldName?: string, // 默认为 "file"
    autosend?: boolean, // 默认为 false
    params?: { [key: string]: any },
    headerParams?: { [key: string]: any },
    updateFromResponse?: boolean,  // 默认为 true

    // 服务属性和方法
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
~~~

## 描述 {#description}

### 基本属性 {#basic-properties}

- `type` -（必需）控件的类型。设置为 `"avatar"`
- `key` -（可选）Diagram 项目对象中指定/修改属性的名称。默认为 `"img"`
- `wrap` -（可选）允许显示外部包装。默认为 *false*
- `target` -（可选）设置用于处理文件上传的服务器端脚本的 URL，当通过控件将图片发送到服务器时，该属性为必需项
:::note
在加载图片并通过 `target` 属性将其发送到服务器时，请注意，[*value* 对象](https://docs.dhtmlx.com/suite/form/avatar/api_avatar_properties/#description)将被发送到服务器。文件本身将以 *base64* 格式记录在数据集中。您可以使用[服务方法](#service-properties-and-methods)重新定义此逻辑。
:::
- `hidden` -（可选）定义是否隐藏控件。默认为 *false*
- `disabled` -（可选）定义控件是启用（*false*）还是禁用（*true*）。默认为 *false*
- `readOnly` -（可选）为控件设置只读模式。默认为 *false*
- `removeIcon` -（可选）启用通过 UI 清除控件的功能。默认为 *true*
- `circle` -（可选）设置以圆角模式显示控件。默认为 *false*
- `icon` -（可选）允许在未上传图片时设置图标的 CSS 类，不能与 `preview` 属性一起使用
- `placeholder` -（可选）允许设置在未上传图片时显示的文本，不能与 `preview` 属性一起使用
- `preview` -（可选）指定预览图片的绝对路径。当未上传图片时，将显示预览图片
- `alt` -（可选）设置 &lt;img&gt; 标签的属性 - 未上传图片时的替代文本
- `size` -（可选）允许设置控件的三种基本尺寸之一：`"small"` | `"medium"` | `"large"`，或以 px 为单位应用自定义尺寸。默认为 `"medium"`
- `css` -（可选）为控件添加样式类
- `width` -（可选）控件的宽度。默认为 `"content"`
- `height` -（可选）控件的高度。默认为 `"content"`
- `padding` -（可选）设置单元格与 Avatar 控件边框之间的内边距
- `label` -（可选）为控件指定标签
- `labelWidth` -（可选）设置控件标签的宽度
- `labelPosition` -（可选）定义标签的位置：`"left"` | `"top"`。默认为 `"top"`
- `accept` -（可选）允许指定所选文件的类型/扩展名。默认为 *"image/*"*。[查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept)
- `fieldName` -（可选）设置发送到服务器的表单数据中的文件字段名称。默认为 `"file"`
- `autosend` -（可选）启用/禁用已添加文件的自动发送。默认为 *false*
- `params` -（可选）为发送 XMLHttpRequest 添加额外参数
- `headerParams` -（可选）为 Request Headers 提供附加参数
- `updateFromResponse` -（可选）使用服务器响应中的数据更新文件属性。默认为 *true*

### 服务属性和方法 {#service-properties-and-methods}

:::warning
请注意，我们强烈建议不要重新定义默认类型控件的服务属性和方法，因为这可能会导致其功能中断。
:::

- `$on` -（可选）- 允许设置事件监听器。该对象具有以下属性：
    - `eventName`  - 使用以下参数调用的回调函数：
        - `object` - 具有以下属性的对象：
            - `control` - [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件
            - `editor` - Diagram Editor 的对象
            - `id` - Diagram 项目的 id
        - `arguments` -（可选）- [原始事件参数](https://docs.dhtmlx.com/suite/category/form-avatar-events/)
- `$handler` -（可选）- 一个回调函数，允许在触发 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件的 `change` 事件和 DataCollection 的 `change` 事件时处理相应操作。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `id` - Diagram 项目的 id
        - `key` - Diagram 项目对象中指定/修改属性的名称
        - `editor` - Diagram Editor 的对象
        - `control` - 构建该组件所基于的 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件的对象
        - `value` - [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件的新值
- `$setValue` -（可选）- 一个回调函数，允许在控件初始化以及 DataCollection 中的值发生变化时设置 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件的值。使用以下参数调用：
    - `object` - 具有以下属性的对象：
        - `editor` - Diagram Editor 的对象
        - `control` - 构建该组件所基于的 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件的对象
        - `value` - Diagram 项目的值
- `$layout` -（可选）- 一个回调函数，允许设置控件的结构。返回 [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form 控件的配置。使用以下参数调用：
    - `object` - 不含服务属性的控件配置

## 示例 {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                "img-card": [
                    {
                        type: "avatar",
                        accept: "image/*",
                        fieldName: "file",
                        target: "https://docs.dhtmlx.com/suite/backend/upload",
                        params: {
                            "firstCustomParam": "customValue"
                        },
                        headerParams: {
                            "firstCustomParam": "customValue"
                        },
                        autosend: true
                    }
                ]
            }
        }
    }
});
~~~
