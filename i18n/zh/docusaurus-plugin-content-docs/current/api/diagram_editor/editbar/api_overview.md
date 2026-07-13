---
sidebar_label: Editbar API 概览
title: Editbar API 概览
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中查看 Editbar 概览。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# Editbar API 概览 {#editbar-api-overview}

[Editbar](guides/diagram_editor/editbar.md) 是 Diagram Editor 的一部分，包含用于管理 Diagram 项目（形状、线条、组等）的控件。使用 [`view`](api/diagram_editor/editor/config/view_property.md) 配置对象的 `editbar` 属性来显示、隐藏和配置 Editbar。您可以选择以下两种初始化方式之一：

- 使用 `editbar:true` 设置创建默认 Editbar：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // 显示默认 Editbar
    }
});
~~~

- 将 Editbar 指定为具有[一组属性](/category/editbar-properties/)的对象来配置 Editbar：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // 通过对象配置 Editbar
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

查看[相关 API 部分](/category/editbar-properties/)以了解 Editbar 的可用属性。
