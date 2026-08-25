---
sidebar_label: Shapebar API 概述
title: Shapebar API 概述
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中查看 Shapebar 概述。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# Shapebar API 概述 {#shapebar-api-overview}

[Shapebar](guides/diagram_editor/shapebar.md) 是 Diagram Editor 的一部分，用于渲染 Diagram 项目（形状、组和泳道）的预览。使用 [`view`](api/diagram_editor/editor/config/view_property.md) 配置对象的 `shapebar` 属性来显示、隐藏和配置 Shapebar。您可以从以下两种初始化方式中进行选择：

- 使用 `shapebar:true` 设置创建默认的 Shapebar：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true // 显示默认的 Shapebar
    }
});
~~~

- 将 Shapebar 指定为具有[一组属性](/category/shapebar-properties/)的对象来进行配置：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // 通过对象配置 Shapebar
        shapebar: {
            css: "custom_css",
            show: true,
            width: 300,
            preview: {
               scale: 0.65,
               gap: 8
            },
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

请查看[相关 API 部分](/category/shapebar-properties/)以了解 Shapebar 的可用属性。
