---
sidebar_label: css
title: Shapebar 的 css 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Shapebar 的 css 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# css

### 描述 {#description}

@short: 可选。允许应用自定义 CSS 类以调整 shapebar 的外观

### 用法 {#usage}

~~~jsx
css?: string;
~~~

### 示例 {#example}

~~~html {8}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            // shapebar: true, // 显示默认的 Shapebar
            // 或通过对象配置 Shapebar
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

**相关文章：**

- [Shapebar 与形状外观](guides/diagram_editor/shapebar.md#shapebar-and-shapes-appearance)
- [配置 Shapebar 中形状的外观](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)

**更新日志：** v6.0 中新增
