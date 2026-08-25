---
sidebar_label: shapeType
title: Editor 的 shapeType 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 shapeType 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# shapeType

### 描述 {#description}

@short: 可选。元素的类型

如果 shape 对象不包含 `"type"` 属性，则会应用此值

### 用法 {#usage}

~~~jsx
shapeType?: string;
~~~

### 默认配置 {#default-config}

在 Editor 的默认模式下 (type: `"default"`)：

~~~jsx
shapeType: "rectangle"
~~~

在 Editor 的组织结构图模式下 (type: `"card"`)：

~~~jsx
shapeType: "card"
~~~

在 Editor 的思维导图模式下 (type: `"topic"`)：

~~~jsx
shapeType: "topic"
~~~

### 示例 {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    shapeType: "circle"
});
~~~

**相关文章：** [默认形状](shapes/default_shapes.md)
