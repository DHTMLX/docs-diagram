---
sidebar_label: clear()
title: Selection 的 clear 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 selection 的 clear 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# clear()

### 描述 {#description}

@short: 清空选择列表且不触发事件

### 用法 {#usage}

~~~jsx
clear(): void;
~~~

### 示例 {#example}

~~~jsx {8}
// 创建 diagram 时必须设置 "select:true" 选项
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// 加载数据
diagram.data.parse(data);

diagram.selection.clear();
// 不会触发 Selection 事件
~~~

**更新日志：** v6.0 中新增

**相关文章：**

- [diagram.config.select](api/diagram/select_property.md)
- [选择项目](guides/manipulating_items.md#selecting-items)

**相关示例：** [Diagram. Selection. 项目选择](https://snippet.dhtmlx.com/jyoxn5h7)
