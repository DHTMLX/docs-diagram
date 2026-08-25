---
sidebar_label: preview
title: Shapebar 的 preview 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Shapebar 的 preview 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# preview

### 描述 {#description}

@short: 可选。用于配置项目预览的对象

### 用法 {#usage}

~~~jsx
preview?: {
    scale?: number,
    gap?: string | number
}
~~~

### 参数 {#parameters}

- `scale` - （可选）定义编辑器 shapebar 中渲染项目的缩放比例
- `gap` - （可选）指定 shapebar 中渲染项目之间的间距

### 默认配置 {#default-config}

~~~jsx
preview: {
    scale: 0.5,
    gap: "6px 8px"
    // 为上下两侧设置 6px 的间距，为左右两侧设置 8px 的间距
};
~~~

### 示例 {#example}

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 显示默认的 Shapebar
        // 或通过对象配置 Shapebar
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### 详情 {#details}

`gap` 和 `scale` 属性的值可以通过形状对象的 [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 属性中的 `gap` 和 `scale` 特性，为单个形状重新定义：

~~~jsx {14-17}
const defaults = {
    rectangle: {
        preview: {
            scale: 0.72,
            gap: 8
        }
    }
}

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
           preview: {
               scale: 0.65,
               gap: 2
            }
        }
    },
    defaults
});
~~~

**相关文章：** [Shapebar](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**更新日志：** v6.0 中新增
