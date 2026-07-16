---
sidebar_label: add()
title: Selection 的 add 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 selection 的 add 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# add()

### 描述 {#description}

@short: 将指定项添加到选择列表中

### 用法 {#usage}

~~~jsx
add({
    id: string | number,
    join?: boolean,
    batch?: (string | number)[]
}): boolean;
~~~

### 参数 {#parameters}

该方法接受一个包含以下参数的对象作为参数：

- `id` - （必需）项目的 id
- `join` - （可选）将所选元素添加到选择列表的模式。如果该参数设置为 *false* 或未传递，先前添加到选择列表中的项目将被重置
- `batch` - （可选）要选择的项目列表（如果事先已知）

### 返回值 {#returns}

该方法返回：

- `true` - 表示该元素之前不在选择列表中，且已成功添加到其中
- `false` - 表示由于某种原因未能将该元素添加到选择列表中，例如该元素此前已被添加到选择列表中

### 示例 {#example}

~~~jsx {8,11-12,15-16}
// 创建 diagram 时必须设置 "select:true" 选项
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> 如果该项目已被选中，则返回 true
console.log(diagram.selection.getIds()); // -> ["1"]

// 将 id 为 "2" 的项目添加到已选中的项目中
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// 移除先前选中的项目，并添加 id 为 "3" 的项目
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

**更新日志：** v6.0 中更新

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)

**相关示例：** [Diagram. Selection. 项目选择](https://snippet.dhtmlx.com/jyoxn5h7)
