---
sidebar_label: includes()
title: Selection 的 includes 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Selection 的 includes 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# includes()

### 描述 {#description}

@short: 检查某个元素是否在所选列表中

### 用法 {#usage}

~~~jsx
includes({
    id: string | number
}): boolean;
~~~

### 参数 {#parameters}

该方法接受一个包含以下参数的对象作为参数：

- `id` - （必需）被检查项目的 ID

### 返回值 {#returns}

如果元素在所选列表中，该方法返回 `true`，否则返回 `false`

### 示例 {#example}

~~~jsx {9-10}
// 创建 diagram 时必须启用 "select:true" 选项
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // 返回 true
diagram.selection.includes({ id: "4" }) // 返回 false
~~~

**更新日志：**v6.0 中新增

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)

**相关示例：**[Diagram. Selection. 项目选择](https://snippet.dhtmlx.com/jyoxn5h7)
