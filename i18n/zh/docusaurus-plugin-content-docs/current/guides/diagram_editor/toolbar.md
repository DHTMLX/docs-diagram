---
sidebar_label: 工具栏
title: 编辑器指南 - 工具栏
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的工具栏。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# 工具栏 {#toolbar}

工具栏是 Diagram Editor 的顶部部分，可帮助用户控制编辑过程。

![](/img/diagram-editor-toolbar/scale-default-mode.png)

要配置工具栏，您可以使用以下属性：

- [`css`](api/diagram_editor/toolbar/config/css_property.md) - 应用自定义 CSS 类

- [`navigationType`](api/diagram_editor/toolbar/config/navigationtype_property.md) - 定义激活工具栏项目的操作。您可以指定以下操作之一：
    - `"click"` - 当用户点击工具栏项目时将其激活
    - `"pointer"` - 当用户将鼠标指针悬停在工具栏项目上时将其激活

- [`items`](api/diagram_editor/toolbar/config/items_property.md) - 排列在工具栏上的 [`items`](#service-elements)（控件）数组。配置工具栏项目有两种方式：
    - [**通过字符串配置项目**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-strings)
    - [**通过对象配置项目**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects)

~~~jsx {9-40}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // 显示默认工具栏
        // 或通过对象配置工具栏
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

## 服务元素 {#service-elements}

工具栏项目由 **服务元素** 表示。您可以使用和配置以下服务元素：

- `file` - 构成一组用于导入和导出文件的服务元素

    <details>
    `file` 项目具有以下结构：

    ~~~jsx
    - file
        - importJson
        - export
            - exportJson
            - exportPdf
            - exportPng
    ~~~

    `file` 项目集合的外观如下：

    ![](/img/diagram-editor-toolbar/file-default-mode.png)
    </details>

- `importJson` - 打开一个对话框以导入 JSON 格式的文件

- `export` - 构成一组用于以所选格式导出文件的服务元素

    <details>
    `export` 项目具有以下结构：

    ~~~jsx
    - export
        - exportJson
        - exportPdf
        - exportPng
    ~~~
    </details>

- `exportJson` - 以 JSON 格式导出文件

- `exportPdf` - 以 PDF 格式导出文件

- `exportPng` - 以 PNG 格式导出文件

<hr/>

- `edit` - 构成一组用于管理和编辑形状、线条、组和泳道的服务元素

    <details>
    在 `default` 模式下，`edit` 项目集合具有以下默认结构：

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - duplicate
        - copy
        - paste
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-default-mode.png)

    在 `org`/`mindmap` 模式下，`edit` 项目集合具有以下默认结构：

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-org-mode.png)
    </details>

- `undo` - 在更改历史记录中后退一步

- `redo` - 在更改历史记录中前进一步

- `duplicate` - 复制所选元素

- `copy` - 将所选文件复制到 `model` 对象

- `paste` - 从 `model` 对象粘贴已复制的文件

- `copyStyle` - 将所选元素的样式复制到 `model` 对象

- `pasteStyle` - 将存储在 `model` 对象中的样式应用于所选元素

- `selectAll` - 选中所有可供选择的元素

- `selectNone` - 取消选中所有可用项目

<hr/>

- `view` - 构成一组用于管理 Diagram Editor 元素视图的服务元素

    <details>
    在 `default` 模式下，`view` 项目集合具有以下默认结构：

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - shapebar
        - editbar
        - grid
        - separator
        - connectionPoints
        - resizePoints
        - magnetic
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-default-mode.png)

    在 `org`/`mindmap` 模式下，`view` 项目集合具有以下默认结构：

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - editbar
        - separator
        - grid
        - separator
        - resizePoints
        - itemsDraggable
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-org-mode.png)
    </details>

- `theme` - 构成一组用于应用主题的服务元素

    <details>
    `theme` 项目具有以下结构：

    ~~~jsx
    - theme
        - themeLight
        - themeDark
        - themeLightContrast
        - themeDarkContrast
    ~~~
    </details>

- `themeLight` - 应用 **Light** 主题

- `themeDark` - 应用 **Dark** 主题

- `themeLightContrast` - 应用 **LightContrast** 主题

- `themeDarkContrast` - 应用 **DarkContrast** 主题

- `shapebar` - 显示/隐藏 `Shapebar` 面板

- `editbar` - 显示/隐藏 `Editbar` 面板

- `grid` - 显示/隐藏网格区域中的 `grid`

- `connectionPoints` - 显示/隐藏 **连接点**

- `resizePoints` - 显示/隐藏 **调整大小点**

- `magnetic` - 开启/关闭 `magnetic` 功能

- `zoomIn` - 将缩放值增加 0.05（5%）

- `zoomOut` - 将缩放值减少 0.05（5%）

<hr/>

- `arrange` - 构成一组用于排列 Diagram Editor 元素的服务元素

    <details>
    在 `default` 模式下，`arrange` 项目集合具有以下默认结构：

    ~~~jsx
    - arrange
        - layout
            - layoutMode
                - layoutModeDirect
                - layoutModeEdges
            - separator
            - layoutOrthogonal
            - layoutRadial
        - align
            - alignHorizontalLeft
            - alignHorizontalCenter
            - alignHorizontalRight
            - separator
            - alignVerticalTop
            - alignVerticalCenter
            - alignVerticalBottom
        - distribute
            - distributeVertical
            - distributeHorizontal
    ~~~

    ![](/img/diagram-editor-toolbar/arrange-default-mode.png)
    </details>

- `layout` - 构成一组用于自动放置 Diagram Editor 元素的服务元素

    <details>
    `layout` 项目具有以下结构：

    ~~~jsx
    - layout
        - layoutMode
            - layoutModeDirect
            - layoutModeEdges
        - separator
        - layoutOrthogonal
        - layoutRadial
    ~~~
    </details>

- `layoutMode` - 构成一组用于管理自动放置模式的服务元素

    <details>
    `layoutMode` 项目具有以下结构：

    ~~~jsx
    - layoutMode
        - layoutModeDirect
        - layoutModeEdges
    ~~~
    </details>

- `layoutModeDirect` - 应用元素连接线的 `direct` 模式

- `layoutModeEdges` - 应用元素连接线的 `edges` 模式

- `layoutOrthogonal` - 应用元素排列的 `orthogonal` 模式

- `layoutRadial` - 应用元素排列的 `radial` 模式

- `align` - 构成一组用于管理 Diagram Editor 元素对齐方式的服务元素

    <details>
    `align` 项目具有以下结构：

    ~~~jsx
    - align
        - alignHorizontalLeft
        - alignHorizontalCenter
        - alignHorizontalRight
        - separator
        - alignVerticalTop
        - alignVerticalCenter
        - alignVerticalBottom
    ~~~
    </details>

- `alignHorizontalLeft` - 将元素水平左对齐

- `alignHorizontalCenter` - 将元素水平居中对齐

- `alignHorizontalRight` - 将元素水平右对齐

- `alignVerticalTop` - 将元素垂直顶部对齐

- `alignVerticalCenter` - 将元素垂直居中对齐

- `alignVerticalBottom` - 将元素垂直底部对齐

- `distribute` - 构成一组用于分布 Diagram Editor 元素的服务元素

    <details>
    `distribute` 项目具有以下结构：
    ~~~jsx
    - distribute
        - distributeVertical
        - distributeHorizontal
    ~~~
    </details>

- `distributeVertical` - 垂直分布元素

- `distributeHorizontal` - 水平分布元素

<hr/>

- `scale` - 允许用户将缩放值增加或减少 0.05（5%）的控件

    <details>
    `scale` 项目的外观如下：

    ![](/img/diagram-editor-toolbar/scale-default-mode.png)
    </details>

- [`separator`](https://docs.dhtmlx.com/suite/toolbar/api/api_separator_properties/) - 用于分隔项目/项目组的水平线（位于菜单选项之间）或垂直线（位于工具栏控件之间）。

- [`spacer`](https://docs.dhtmlx.com/suite/toolbar/api/api_spacer_properties/) - 工具栏上用于对齐控件的空白间隔

## 基础元素 {#base-elements}

除 [**服务元素**](#service-elements) 外，您还可以使用 [对象](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects) 方式指定和配置以下 **基础元素**：

- [Button](https://docs.dhtmlx.com/suite/toolbar/button/)
- [Custom HTML](https://docs.dhtmlx.com/suite/toolbar/customhtmlbutton/)
- [Datepicker](https://docs.dhtmlx.com/suite/toolbar/datepicker/)
- [ImageButton]( https://docs.dhtmlx.com/suite/toolbar/image_button/)
- [Input](https://docs.dhtmlx.com/suite/toolbar/input/)
- [MenuItem](https://docs.dhtmlx.com/suite/toolbar/menuitem/)
- [NavItem](https://docs.dhtmlx.com/suite/toolbar/navitem/)
- [SelectButton](https://docs.dhtmlx.com/suite/toolbar/selectbutton/)
- [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/)
- [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/)
- [Title](https://docs.dhtmlx.com/suite/toolbar/title/)

以下示例展示了如何将 [Button](https://docs.dhtmlx.com/suite/toolbar/button/) 控件添加到工具栏：

~~~jsx {8-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org", // "default" | "org" | "mindmap"
    view: {
        // toolbar: true, // 显示默认工具栏
        // 或通过对象配置工具栏
        toolbar: {
            items: [
                {
                    type: "button",
                    value: "Best button"
                }
            ]
        }
    }
});
~~~

除了 **基础元素**（不包括 [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/)、[Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/) 和 [Title](https://docs.dhtmlx.com/suite/toolbar/title/)）的内部属性外，您还可以使用以下属性：

- `checkIcon` -（可选）- 返回图标 CSS 类的处理程序。调用时带有以下参数：
    - `editor` - Diagram Editor 对象

~~~jsx
checkIcon?: (editor: IDiagramEditor) => string; // 仅用于包含图标的基础元素
~~~

- `handler` -（可选）- 当 `click` 或 `inputChange` 事件发生时运行的处理程序。调用时带有以下参数：
    - `editor` - Diagram Editor 对象
    - `event` - 一个[原生事件](https://developer.mozilla.org/en-US/docs/Web/API/Event)

~~~jsx
handler?: (editor: object, event: Event) => void;
~~~

**相关示例**：[带编辑器的 Diagram。默认模式。卡片、编辑栏、工具栏和形状栏的自定义](https://snippet.dhtmlx.com/1p0wemnn)
