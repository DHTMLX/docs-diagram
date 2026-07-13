---
sidebar_label: width
title: Editbar 的 width 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 width 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# width

### 描述 {#description}

@short: 可选。定义 Editbar 的宽度

### 用法 {#usage}

~~~jsx
width?: number;
~~~

### 示例 {#example}

~~~jsx {9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        // editbar: true, // 显示默认 Editbar
        // 或通过对象配置 Editbar
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

**更新日志**：v6.0 中新增
