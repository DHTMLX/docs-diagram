---
sidebar_label: remove()
title: Selection 的 remove 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Selection 的 remove 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# remove()

### 描述 {#description}

@short: 移除指定项目，或在不带参数调用时移除所选列表中的所有项目

### 用法 {#usage}

~~~jsx
remove({
    id: string | number
}): boolean;

//或

remove(): boolean;
~~~

### 参数 {#parameters}

该方法可以接受一个包含以下参数的对象作为参数：

- `id` - （必需）应从所选列表中移除的项目的 ID

### 返回值 {#returns}

如果成功取消选择某个项目或清空列表，该方法返回 `true`

### 示例 {#example}

~~~jsx {9}
// 创建 diagram 时必须启用 "select:true" 选项
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> 如果项目已被取消选择，则返回 true
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

若不带参数调用，该方法将清空所选列表：

~~~jsx {9-10}
// 创建 diagram 时必须启用 "select:true" 选项
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 移除所选列表中的所有项目
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

**更新日志：**v6.0 中更新

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)

**相关示例：**[Diagram. Selection. 项目选择](https://snippet.dhtmlx.com/jyoxn5h7)
