---
sidebar_label: Toolbar API 概述
title: Toolbar API 概述
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中查看 Toolbar 概述。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# Toolbar API 概述 {#toolbar-api-overview}

[Toolbar](guides/diagram_editor/toolbar.md) 是 Diagram Editor 的一部分，可帮助用户控制编辑过程。使用 [`view`](api/diagram_editor/editor/config/view_property.md) 配置对象的 `toolbar` 属性来显示、隐藏和配置 Toolbar。您可以选择以下两种初始化方式之一：

- 使用 `toolbar:true` 设置创建默认 Toolbar：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true // 显示默认 Toolbar
    }
});
~~~

- 将 Toolbar 指定为具有[一组属性](/category/toolbar-properties/)的对象进行配置：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // 通过对象配置 Toolbar
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

请查看相关 API 章节，以了解 Toolbar 可用的方法、属性和事件。

## Toolbar 方法 {#toolbar-methods}

- [Toolbar 方法列表](api/diagram_editor/toolbar/methods/overview.md)

## Toolbar 属性 {#toolbar-properties}

- [Toolbar 属性列表](/category/toolbar-properties/)

## Toolbar 事件 {#toolbar-events}

- [Toolbar 事件列表](api/diagram_editor/toolbar/events/overview.md)
