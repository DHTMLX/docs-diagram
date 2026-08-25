---
sidebar_label: css
title: Editbar 的 css 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Editbar 的 css 属性。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# css

### 描述 {#description}

@short: 可选。为 Editbar 应用自定义 CSS 类

### 用法 {#usage}

~~~jsx
css?: string;
~~~

### 示例 {#example}

~~~jsx {7}
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

**更新日志：** v6.0 中新增
