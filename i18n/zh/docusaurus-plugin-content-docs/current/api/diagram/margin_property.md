---
sidebar_label: margin
title: margin 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 margin 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# margin

### 描述 {#description}

@short: 可选。一个对象，包含用于定位图表中项目的边距设置

### 用法 {#usage}

~~~jsx
margin?: {
    itemX?: number,
    itemY?: number,
    x?: number,
    y?: number
};
~~~

### 参数 {#parameters}

`margin` 对象可以包含以下参数：

- `itemX` - （可选）两个图形之间的水平间距（仅适用于 [type: "org" | "mindmap"](api/diagram/type_property.md)）
- `itemY` - （可选）两个图形之间的垂直间距（仅适用于 [type: "org" | "mindmap"](api/diagram/type_property.md)）
- `x` - （可选）图表起始位置与第一个项目之间的水平间距
- `y` - （可选）图表起始位置与第一个项目之间的垂直间距

### 默认配置 {#default-config}

~~~jsx
margin: {
    x: 40, y: 40,
    itemX: 40, itemY: 40
}
~~~

### 示例 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    margin: {
        x: 20, y: 20,
        itemX: 50, itemY: 50
    }
});
~~~

**相关示例：**

- [Diagram。组织结构图模式。图形间距](https://snippet.dhtmlx.com/bwe9vm6i)
- [Diagram。默认模式。流程图自定义样式](https://snippet.dhtmlx.com/3wyut2mn)
