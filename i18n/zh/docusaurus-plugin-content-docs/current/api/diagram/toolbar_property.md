---
sidebar_label: toolbar
title: toolbar 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 toolbar 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# toolbar

### 描述 {#description}

@short: 可选。用于为项目设置带按钮的工具栏的图标对象数组

### 用法 {#usage}

~~~jsx
toolbar?: [
    {
        id: string,
        content: string,
        check?: function,
        css?: function,
        tooltip?: string
    },
    {...} // 其他图标对象
];
~~~

### 参数 {#parameters}

`toolbar` 数组包含一组图标对象。每个图标对象可以具有以下参数：

- `id` - （必需）图标的 ID
- `content` - （必需）图标的内容。它可以包含带有图标类名称的 HTML 元素
- `check` - （可选）检查该图标是否应应用于该项目。该函数接受一个项目对象作为参数，如果该图标将为此项目渲染，则返回 *true*
- `css` - （可选）返回应应用于该项目的 CSS 类名称的函数
- `tooltip` - （可选）鼠标悬停在图标上时出现的工具提示

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true,
    // 为项目设置带按钮的工具栏
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>",
            check: item => !item.assistant && !item.partner,
            tooltip: "Add new shape"
        },
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

**更新日志：**

- `tooltip` 参数已在 v5.0 中新增

**相关文章：**

- [为形状设置工具栏](guides/diagram/configuration.md#setting-toolbar-for-shapes)
- [默认图标](https://docs.dhtmlx.com/suite/helpers/icon/)

**相关示例：** [Diagram。配置。形状工具栏](https://snippet.dhtmlx.com/4if395hd)
