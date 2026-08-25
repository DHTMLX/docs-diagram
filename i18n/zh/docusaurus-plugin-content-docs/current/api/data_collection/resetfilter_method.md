---
sidebar_label: resetFilter()
title: Data Collection 的 resetFilter 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中探索 Data Collection 的 resetFilter 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# resetFilter()

### 描述 {#description}

@short: 重置活动筛选器

### 用法 {#usage}

~~~jsx
resetFilter({
    id?: string,
    permanent?: boolean
}): boolean;
~~~

### 参数 {#parameters}

- `config` - （可选）指定重置活动筛选器的参数。如果未指定 config 或其为空，则会重置除配置对象中包含 `permanent` 属性的筛选器之外的所有筛选器。可以包含以下属性：
    - `id` - （可选）要重置的筛选器的 id
    - `permanent` - （可选）设置为 *true* 可重置所有活动筛选器，包括配置中设置了 `permanent:true` 的筛选器

### 返回值 {#returns}

如果包括永久筛选器在内的所有筛选器均已重置，该方法返回 *true*；否则返回 *false*

### 示例 {#example}

~~~jsx {6-7,9-10,12-13}
const diagram = new dhx.Diagram("diagram_container", {
    // 配置项
});
diagram.data.parse(data);

// 重置所有筛选器，配置中包含 "permanent" 属性的筛选器除外
diagram.data.resetFilter();

// 重置所有筛选器，包括配置中包含 "permanent" 属性的筛选器
diagram.data.resetFilter({ permanent: true });

// 重置具有指定 id 的筛选器
diagram.data.resetFilter({ id: "filter_id" });
~~~

**更新日志：** v6.0 中新增
