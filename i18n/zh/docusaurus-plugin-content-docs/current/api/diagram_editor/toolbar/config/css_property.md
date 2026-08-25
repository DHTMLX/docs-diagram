---
sidebar_label: css
title: Toolbar 的 css 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Toolbar 的 css 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# css

### 描述 {#description}

@short: 可选。应用自定义 CSS 类

:::info
自定义 CSS 类同样适用于展开的元素。此类元素将附加 `--popup-menu` 前缀。
:::

### 用法 {#usage}

~~~jsx
css?: string;
~~~

### 示例 {#example}

~~~jsx {7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // 显示默认 Toolbar
        // 或通过对象配置 Toolbar
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

**更新日志**：v6.0 中新增

**相关文章：** [Toolbar 配置](guides/diagram_editor/toolbar.md)
