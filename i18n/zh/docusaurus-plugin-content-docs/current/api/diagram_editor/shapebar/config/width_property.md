---
sidebar_label: width
title: Shapebar 的 width 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Shapebar 的 width 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# width

### 描述 {#description}

@short: 可选。设置编辑器 shapebar 的宽度

### 用法 {#usage}

~~~jsx
width?: number;
~~~

### 默认配置 {#default-config}

~~~jsx
width: 300
~~~

### 示例 {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 显示默认的 Shapebar
        // 或通过对象配置 Shapebar
        shapebar: {
            width: 400 // 默认值为 300
        }
    }
});
~~~

**相关文章：** [Shapebar](guides/diagram_editor/shapebar.md#setting-the-width-of-shapebar)

**更新日志：** v6.0 中新增
