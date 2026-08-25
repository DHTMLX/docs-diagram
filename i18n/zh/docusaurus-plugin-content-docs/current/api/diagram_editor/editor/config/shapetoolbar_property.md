---
sidebar_label: shapeToolbar
title: 编辑器的 shapeToolbar 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 shapeToolbar 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# shapeToolbar

### 描述 {#description}

@short: 可选。定义应在图表项的个人工具栏中显示哪些控件

### 用法 {#usage}

~~~jsx
shapeToolbar?: boolean | array;
~~~

### 参数 {#parameters}

作为数组时，`shapeToolbar` 属性可以包含：

- 一个 *boolean* 值 - 用于显示或隐藏默认工具栏
- 带有工具栏控件名称的字符串值。这些值在数组中的排列顺序决定了控件在工具栏中的显示顺序。可用的值如下：
    - 在默认模式下：`"copy"` | `"connect"` | `"remove"` | `"addRowLast"` | `"addColumnLast"`
    - 在组织结构图模式下：`"add"` | `"horizontal"` | `"vertical"` | `"remove"`
    - 在思维导图模式下：`"add"` | `"addLeft"` | `"addRight"` | `"remove"`
- 一组图标对象。每个图标对象可以具有以下属性：
    - `id: string` -（必需）图标的 id。请注意，禁止将工具栏控件的默认名称用作新控件的 id
    - `content: string` -（必需）图标的内容，可以包含带有图标类名的 HTML 元素
    - `check: function` -（可选）用于检查该图标是否应用于形状。该函数接收一个形状对象作为参数，如果将为该形状渲染此图标，则返回 *true*
    - `css: function` -（可选）返回应应用于形状的 CSS 类名称的函数
    - `tooltip: string` -（可选）鼠标悬停在图标上时显示的工具提示

### 示例 {#example}

~~~jsx title="将属性设置为布尔值"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: false, // 默认为 true
});
~~~

~~~jsx title="将属性设置为图标名称或图标对象的数组"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    shapeToolbar: [
        "add",
        // 添加自定义 "download" 控件
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
            check: item => item.parent,
            css: () => "dhx_diagram_toolbar__icon--remove",
            tooltip: "Remove"
        }
    ]
});
~~~

### 为特定项目重新定义默认工具栏 {#redefining-the-default-toolbar-for-certain-items}

您可能需要为部分项目提供特定的工具栏控件，而其他项目则使用默认工具栏。在这种情况下，您应在 `shapeToolbar` 数组中指定 *true* 值以启用默认工具栏，并添加必要的图标对象，该对象应包含一个 check 函数来定义该图标将应用于哪种形状。

~~~jsx title="为 start 类型的项设置下载图标"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeToolbar:
    [
        true,
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF",
            check: item => item.type === "start"
        }
    ]
});
~~~

**更新日志：** 图标对象的 `tooltip` 参数已在 v5.0 中新增

**相关文章：** [网格区域](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item)

**相关示例：** [Diagram Editor。组织结构图模式。形状工具栏配置](https://snippet.dhtmlx.com/b2agwets)
