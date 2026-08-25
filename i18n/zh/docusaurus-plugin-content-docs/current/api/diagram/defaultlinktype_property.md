---
sidebar_label: defaultLinkType
title: defaultLinkType 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 defaultLinkType 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# defaultLinkType

### 描述 {#description}

@short: 可选。连线的默认类型

如果连线对象不包含 `"type"` 属性，则应用该值

### 用法 {#usage}

~~~jsx
defaultLinkType?: "line" | "dash";
~~~

### 默认配置 {#default-config}

~~~jsx
defaultLinkType: "line"
~~~

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

**相关文章：** [设置形状之间的连接](/lines/#setting-connections-between-shapes)
