---
sidebar_label: find()
title: Data Collection 的 find() 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 data collection 的 find() 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# find()

### 描述 {#description}

@short: 查找与指定参数相匹配的数据项

### 用法 {#usage}

~~~jsx
find(rule: object): object;

// 或

find(rule: function): object;
~~~

### 参数 {#parameters}

- `rule` - （必需）搜索条件，可以指定为：
  - 一个对象，包含以下参数：
    - `by: string | function` - 搜索条件（数据项属性的键或搜索函数）
    - `match: string` - 数据项属性的值
  - 一个函数：`DataCallback(item: T, index?: number, array?: T[])`

### 返回值 {#returns}

该方法返回第一个与指定条件相匹配的数据项对象

### 示例 {#example}

~~~jsx {7,10-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

//按照属性键搜索图形
const shape = diagram.data.find({ by: "text", match: "Manager" });

//按照函数中指定的规则搜索图形
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){return true}
});
~~~

**相关文章：** [查找所需数据项](guides/manipulating_items.md#finding-the-necessary-item)

**相关示例：** [Diagram. 数据. 查找所需图形](https://snippet.dhtmlx.com/sete9z73)
