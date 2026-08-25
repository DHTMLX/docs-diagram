---
sidebar_label: showItem()
title: showItem 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 showItem 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# showItem()

### 描述 {#description}

@short: 调整滚动位置以使目标项可见

### 用法 {#usage}

~~~jsx
showItem(id: string | number): void;
~~~

### 参数 {#parameters}

- `id` -（必需）目标项的 **ID**

### 示例 {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.showItem(123);
~~~

**相关示例：**

- [Diagram. 形状搜索](https://snippet.dhtmlx.com/d7kvzq4r)
- [Diagram. 滚动内容](https://snippet.dhtmlx.com/f970hbym)
