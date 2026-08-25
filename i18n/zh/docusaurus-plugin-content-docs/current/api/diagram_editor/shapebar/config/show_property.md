---
sidebar_label: show
title: Shapebar 的 show 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Shapebar 的 show 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# show

### 描述 {#description}

@short: 可选。定义在 Diagram Editor 初始化时是否显示具有自定义设置的 shapebar

### 用法 {#usage}

~~~jsx
show?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
show: true
~~~

### 示例 {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 显示默认的 Shapebar
        // 或通过对象配置 Shapebar
        shapebar: {
            show: false // 默认值为 true
        }
    }
});
~~~

**相关文章：** [Shapebar](guides/diagram_editor/shapebar.md#showinghiding-the-shapebar)

**更新日志：** v6.0 中新增
