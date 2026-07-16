---
sidebar_label: getFilters()
title: Data Collection 的 getFilters() 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 data collection 的 getFilters() 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# getFilters()

### 描述 {#description}

@short: 返回一个包含已应用筛选器的对象

### 用法 {#usage}

~~~jsx
getFilters({ permanent?: boolean }): object;
~~~

### 参数 {#parameters}

- `permanent` - （可选）默认值为 *false*。用于获取永久筛选器的列表

### 返回值 {#returns}

该方法返回一个包含已应用筛选器的对象，其中：
- `key` - 筛选器的 id
- `value` - 一个包含 [`rule` 和 `config` 属性](api/data_collection/filter_method.md#parameters) 的对象

### 示例 {#example}

~~~jsx {6-7}
const diagram = new dhx.Diagram("diagram_container", {
    // 配置设置
});
diagram.data.parse(data);

const filters = diagram.data.getFilters(); // 获取所有已应用的筛选器
console.log(filters);
~~~

**更新日志：** v6.0 中新增
