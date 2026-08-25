---
sidebar_label: defaultShapeType
title: defaultShapeType 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 defaultShapeType 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# defaultShapeType

### 描述 {#description}

@short: 可选。形状的默认类型

如果形状对象不包含 `"type"` 属性，则应用该值

### 用法 {#usage}

~~~jsx
defaultShapeType?: string;
~~~

### 默认配置 {#default-config}

- 在 Diagram 的**默认**模式下 (type: `"default"`)

~~~jsx
defaultShapeType: "rectangle"
~~~

- 在 Diagram 的**组织结构图**模式下 (type: `"org"`)

~~~jsx
defaultShapeType: "card"
~~~

- 在 Diagram 的**思维导图**模式下 (type: `"mindmap"`)

~~~jsx
defaultShapeType: "topic"
~~~

- 在 Diagram 的 **PERT** 模式下 (type: `"pert"`)

~~~jsx
defaultShapeType: "task"
~~~

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultShapeType: "img-card"
});
~~~

**相关文章：** [设置形状的类型](shapes/default_shapes.md#setting-the-type-of-a-shape)
