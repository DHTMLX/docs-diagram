---
sidebar_label: items
title: Toolbar 的 items 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的 items 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# items

### 描述 {#description}

@short: 可选。一个数组，包含 Diagram Editor 的 Toolbar 上显示的控件

### 用法 {#usage}

~~~jsx
items?: (object | string)[];
~~~

### 通过字符串配置 items {#configuring-items-via-strings}

`items` 属性允许您将[**服务元素**](guides/diagram_editor/toolbar.md#service-elements)指定为一个字符串数组：

~~~jsx
items: [ "file", "edit", "view", "arrange", "spacer", "scale" ];
~~~

完整的服务元素列表请参见[此处](guides/diagram_editor/toolbar.md#service-elements)。

### 通过对象配置 items {#configuring-items-via-objects}

`items` 属性允许您将[**服务元素**](guides/diagram_editor/toolbar.md#service-elements)和[**基础元素**](guides/diagram_editor/toolbar.md#base-elements)指定为一个对象数组：

~~~jsx
items: [
    {
        type: string,
        id?: string,
        value?: string,
        hotkey?: string,
        icon?: string,
        hidden?: boolean,
        disabled?: boolean,
        css?: string | string[],
        items?: (string | object)[],
        checkIcon?: (editor: object) => string,
        handler?: (editor: object, event: Event) => void
    }, {...}
];
~~~

#### 参数 {#parameters}

对于所有[**服务元素**](guides/diagram_editor/toolbar.md#service-elements)（`separator` / `spacer` / `scale` 除外），您可以指定一个具有以下参数的对象：

- `type` - （必需）- 服务元素的类型。服务元素类型的完整列表请参见[此处](guides/diagram_editor/toolbar.md)
- `id` - （可选）- 服务元素的 ID。默认情况下，服务元素的 ID 包含 `$` 和该服务元素的 `type`：`$file`
- `value` - （可选）- 服务元素的标签
- `hotkey` - （可选）- 服务元素的快捷键组合标签
- `icon` - （可选）- 服务元素图标的 css 类
- `hidden` - （可选）- 隐藏服务元素
- `disabled` - （可选）- 禁用服务元素
- `css` - （可选）- 为服务元素应用自定义 css 类
- `items` - （可选）- 定义子元素的结构
- `checkIcon` - （可选）- 返回图标 css 类的处理函数。调用时带有以下参数：
    - `editor` - Diagram Editor 对象
- `handler` - （可选）- 当 `click` 或 `inputChange` 事件发生时运行的处理函数。调用时带有以下参数：
    - `editor` - Diagram Editor 对象
    - `event` - 一个[原生事件](https://developer.mozilla.org/en-US/docs/Web/API/Event)

### 示例 1 {#example-1}

下面的示例展示了如何通过字符串配置 Toolbar 的 items：

~~~jsx {10-14}
// 通过字符串配置 items
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // 显示默认 Toolbar
        // 或通过对象配置 Toolbar
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                "file",
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

### 示例 2 {#example-2}

下面的示例展示了如何通过对象配置 Toolbar 的 items：

~~~jsx {7-38}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // 自定义逻辑
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

**更新日志**：v6.0 中新增

**相关文章：** [Toolbar 配置](guides/diagram_editor/toolbar.md)

**相关示例：** [Diagram Editor。默认模式。工具栏自定义。新增按形状搜索功能](https://snippet.dhtmlx.com/846cz71r)
