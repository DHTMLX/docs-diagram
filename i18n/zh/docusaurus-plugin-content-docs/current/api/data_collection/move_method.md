---
sidebar_label: move()
title: Data Collection 的 move 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Data Collection 的 move 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# move()

### 描述 {#description}

@short: 将项目移动到指定位置

### 用法 {#usage}

~~~jsx
move(
    id: string | number | array,
    index: number,
    target?: object
): string | number | array;
~~~

### 参数 {#parameters}

- `id` - （必需）要移动的项目的 id
- `index` - （必需）要将项目移动到的索引
- `target` - （可选）目标 Data Collection 对象

### 返回值 {#returns}

该方法返回一个包含项目 id 的字符串，或一个包含多个项目 id 的字符串数组

### 示例 {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.move("4",5); // 将 id=4 的形状移动到索引为 5 的位置
~~~
