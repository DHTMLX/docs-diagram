---
sidebar_label: getItem()
title: Selection 的 getItem 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Selection 的 getItem 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getItem()

### 描述 {#description}

@short: 返回指定的所选项目的对象；若不带参数调用，则返回最后一个所选项目的对象

### 用法 {#usage}

~~~jsx
getItem({
    id: string | number
}): object;

//或

getItem(): object;
~~~

### 参数 {#parameters}

该方法接受一个包含以下参数的对象作为参数：

- `id` - （必需）相关项目的 ID

### 返回值 {#returns}

如果所选列表中存在指定项目，该方法将返回该项目的对象；如果不带参数调用，则返回最后一个所选项目的对象

### 示例 {#example}

~~~jsx {9-11,13-15,17-19}
// 创建 diagram 时必须启用 "select:true" 选项
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// 获取最后一个所选项目
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// 通过 id 获取所选项目
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// 尝试获取一个不在所选列表中的项目
const item = diagram.selection.getItem({ id: "4" });
// -> 返回 undefined，因为所选列表中没有具有指定 id 的项目
~~~

**更新日志：**v6.0 中更新

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)

**相关示例：**[Diagram. Selection. 项目选择](https://snippet.dhtmlx.com/jyoxn5h7)
