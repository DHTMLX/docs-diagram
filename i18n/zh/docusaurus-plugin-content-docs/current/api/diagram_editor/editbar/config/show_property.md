---
sidebar_label: show
title: Editbar 的 show 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 show 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# show

### 描述 {#description}

@short: 可选。定义初始化时是否显示 Editbar

### 用法 {#usage}

~~~jsx
show?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
show: true
~~~

### 示例 {#example}

~~~jsx {8}
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
