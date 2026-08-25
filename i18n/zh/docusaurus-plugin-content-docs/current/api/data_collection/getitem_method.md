---
sidebar_label: getItem()
title: Data Collection 的 getItem 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 getItem 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# getItem()

### 描述 {#description}

@short: 根据 id 返回项目的对象

### 用法 {#usage}

~~~jsx
getItem(id: string | number): object;
~~~

### 参数 {#parameters}

- `id` - （必需）所选项目的 id

### 返回值 {#returns}

该方法返回项目的对象

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

const shape = diagram.data.getItem(123);
~~~

您可以像下面这样访问项目的原始属性：

~~~jsx
// 访问该形状的属性
const shape = diagram.data.getItem(123);
const text = shape.text;
~~~

**相关文章**：  [获取项目](guides/manipulating_items.md#getting-an-item)
